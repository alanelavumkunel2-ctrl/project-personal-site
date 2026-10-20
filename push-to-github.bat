@echo off
setlocal
title Push Portfolio to GitHub

echo ====================================================================
echo        Pushing Alan John's Portfolio to GitHub
echo        Repository: alanelavumkunel2-ctrl/project-personal-site
echo ====================================================================
echo.

set "PATH=C:\Program Files\Git\cmd;C:\Program Files\Git\ucrt64\bin;%PATH%"

cd /d "%~dp0"

echo [1/3] Checking Git Status...
git status -s

echo.
echo [2/3] Verifying Remote URL...
git remote -v

echo.
echo [3/3] Pushing main branch to GitHub...
echo If this is your first time connecting, your web browser will open
echo to let you sign in to GitHub and authorize the connection.
echo.

git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ====================================================================
    echo   SUCCESS! Your website code is now live on GitHub:
    echo   https://github.com/alanelavumkunel2-ctrl/project-personal-site
    echo ====================================================================
) else (
    echo.
    echo ====================================================================
    echo   Push did not complete. If you need a Personal Access Token,
    echo   or need assistance, please refer to the instructions in the chat.
    echo ====================================================================
)

echo.
pause
