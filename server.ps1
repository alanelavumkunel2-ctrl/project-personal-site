<#
.SYNOPSIS
  Zero-dependency Local Web Server for Alan John's Portfolio
.DESCRIPTION
  Runs an HTTP server using .NET's built-in HttpListener on port 3000.
  Works out of the box on Windows with no Node.js or Python required.
.USAGE
  powershell -ExecutionPolicy Bypass -File .\server.ps1
#>

param(
  [int]$Port = 3000,
  [switch]$NoBrowser
)

$baseDir = $PSScriptRoot
if (-not $baseDir) {
  $baseDir = Get-Location
}

$prefix = "http://localhost:$Port/"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Prefixes.Add("http://127.0.0.1:$Port/")

try {
  $listener.Start()
} catch {
  Write-Host "[!] Could not start on port $Port. Trying port $($Port + 1)..." -ForegroundColor Yellow
  $Port = $Port + 1
  $prefix = "http://localhost:$Port/"
  $listener = New-Object System.Net.HttpListener
  $listener.Prefixes.Add("http://localhost:$Port/")
  $listener.Prefixes.Add("http://127.0.0.1:$Port/")
  $listener.Start()
}

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  Alan John - Personal Portfolio Website Server" -ForegroundColor Green
Write-Host "  Listening on: $prefix" -ForegroundColor White
Write-Host "  Root folder:  $baseDir" -ForegroundColor Gray
Write-Host "  Press Ctrl+C in this terminal to stop the server." -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Cyan

# Open default browser
if (-not $NoBrowser) {
  Start-Process $prefix
}

$mimeTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".htm"  = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "application/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".svg"  = "image/svg+xml"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".gif"  = "image/gif"
  ".ico"  = "image/x-icon"
  ".woff" = "font/woff"
  ".woff2"= "font/woff2"
  ".ttf"  = "font/ttf"
}

try {
  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $urlPath = $request.Url.LocalPath.TrimStart('/')
    if ([string]::IsNullOrWhiteSpace($urlPath)) {
      $urlPath = "index.html"
    }

    $urlPath = $urlPath.Replace('/', [System.IO.Path]::DirectorySeparatorChar)
    $filePath = [System.IO.Path]::Combine($baseDir, $urlPath)

    # If browser requests asset from under /projects/ (e.g. /projects/styles.css), map back to root
    if ($urlPath -match "^projects\\(?<rel>.+\.(css|js|svg|png|jpg|jpeg|gif|ico|woff|woff2|ttf))$") {
      $filePath = [System.IO.Path]::Combine($baseDir, $Matches.rel)
    }
    # SPA routing fallback: if route is a clean project URL like /projects/slug, serve index.html
    elseif (-not [System.IO.File]::Exists($filePath) -and ($urlPath -like "projects*")) {
      $filePath = [System.IO.Path]::Combine($baseDir, "index.html")
    }

    if ([System.IO.File]::Exists($filePath)) {
      $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
      $contentType = $mimeTypes[$ext]
      if (-not $contentType) {
        $contentType = "application/octet-stream"
      }

      try {
        $buffer = [System.IO.File]::ReadAllBytes($filePath)
        $response.ContentType = $contentType
        $response.ContentLength64 = $buffer.Length
        $response.StatusCode = 200
        $response.AddHeader("Cache-Control", "no-cache, no-store, must-revalidate")
        $response.OutputStream.Write($buffer, 0, $buffer.Length)
        Write-Host "200: $($request.Url.LocalPath) ($contentType)" -ForegroundColor Gray
      } catch {
        $response.StatusCode = 500
        Write-Host "500 Error serving: $filePath" -ForegroundColor Red
      }
    } else {
      $response.StatusCode = 404
      $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $urlPath")
      $response.ContentType = "text/plain; charset=utf-8"
      $response.ContentLength64 = $msg.Length
      $response.OutputStream.Write($msg, 0, $msg.Length)
      Write-Host "404 Not Found: $($request.Url.LocalPath)" -ForegroundColor DarkYellow
    }

    $response.OutputStream.Close()
  }
} finally {
  $listener.Stop()
  $listener.Close()
  Write-Host "`nServer stopped." -ForegroundColor Yellow
}
