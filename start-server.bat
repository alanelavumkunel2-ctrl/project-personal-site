@echo off
title Alan John Portfolio Local Web Server
echo ========================================================
echo   Starting Alan John's Portfolio Website...
echo   Opening on http://localhost:3000
echo ========================================================
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
