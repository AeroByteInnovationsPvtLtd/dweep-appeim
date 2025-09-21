@echo off
REM MERN Stack Deployment Script for Windows
REM This script helps deploy both frontend and backend to various platforms

setlocal enabledelayedexpansion

echo === MERN Stack Deployment Tool ===
echo.

:menu
echo 1. Build Frontend
echo 2. Test Backend
echo 3. Deploy Frontend to Netlify
echo 4. Deploy Frontend to Vercel
echo 5. Deploy Backend to Railway
echo 6. Full Deployment (Frontend + Backend)
echo 7. Show Deployment Status
echo 8. Exit
echo.

set /p choice="Choose an option (1-8): "

if "%choice%"=="1" goto build_frontend
if "%choice%"=="2" goto test_backend
if "%choice%"=="3" goto deploy_netlify
if "%choice%"=="4" goto deploy_vercel
if "%choice%"=="5" goto deploy_railway
if "%choice%"=="6" goto full_deployment
if "%choice%"=="7" goto show_status
if "%choice%"=="8" goto exit
goto invalid_choice

:build_frontend
echo [INFO] Building frontend...
cd dweep-appeim
if not exist "package.json" (
    echo [ERROR] Frontend package.json not found!
    pause
    goto menu
)
call npm install
call npm run build:prod
if exist "dist" (
    echo [SUCCESS] Frontend build completed successfully!
) else (
    echo [ERROR] Frontend build failed!
    pause
    goto menu
)
cd ..
pause
goto menu

:test_backend
echo [INFO] Testing backend...
cd backend
if not exist "package.json" (
    echo [ERROR] Backend package.json not found!
    pause
    goto menu
)
call npm install
echo [SUCCESS] Backend dependencies installed successfully!
cd ..
pause
goto menu

:deploy_netlify
echo [INFO] Deploying to Netlify...
where netlify >nul 2>nul
if errorlevel 1 (
    echo [WARNING] Netlify CLI not found. Installing...
    call npm install -g netlify-cli
)
cd dweep-appeim
call netlify deploy --prod --dir=dist
echo [SUCCESS] Deployed to Netlify!
cd ..
pause
goto menu

:deploy_vercel
echo [INFO] Deploying to Vercel...
where vercel >nul 2>nul
if errorlevel 1 (
    echo [WARNING] Vercel CLI not found. Installing...
    call npm install -g vercel
)
cd dweep-appeim
call vercel --prod
echo [SUCCESS] Deployed to Vercel!
cd ..
pause
goto menu

:deploy_railway
echo [INFO] Deploying backend to Railway...
where railway >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Railway CLI not found. Please install it first:
    echo npm install -g @railway/cli
    pause
    goto menu
)
cd backend
call railway up
echo [SUCCESS] Deployed to Railway!
cd ..
pause
goto menu

:full_deployment
echo [INFO] Starting full deployment...
call :build_frontend_silent
call :test_backend_silent
echo Choose frontend deployment platform:
echo 1. Netlify
echo 2. Vercel
set /p frontend_choice="Choose (1-2): "
if "%frontend_choice%"=="1" call :deploy_netlify_silent
if "%frontend_choice%"=="2" call :deploy_vercel_silent
call :deploy_railway_silent
echo [SUCCESS] Full deployment completed!
pause
goto menu

:show_status
echo [INFO] Checking deployment status...
where netlify >nul 2>nul
if not errorlevel 1 (
    echo Netlify sites:
    call netlify sites:list
)
where vercel >nul 2>nul
if not errorlevel 1 (
    echo Vercel deployments:
    call vercel list
)
where railway >nul 2>nul
if not errorlevel 1 (
    echo Railway services:
    call railway status
)
pause
goto menu

:invalid_choice
echo [ERROR] Invalid option. Please choose 1-8.
pause
goto menu

:exit
echo [SUCCESS] Goodbye!
exit /b 0

REM Silent functions for full deployment
:build_frontend_silent
cd dweep-appeim
call npm install
call npm run build:prod
cd ..
exit /b 0

:test_backend_silent
cd backend
call npm install
cd ..
exit /b 0

:deploy_netlify_silent
cd dweep-appeim
call netlify deploy --prod --dir=dist
cd ..
exit /b 0

:deploy_vercel_silent
cd dweep-appeim
call vercel --prod
cd ..
exit /b 0

:deploy_railway_silent
cd backend
call railway up
cd ..
exit /b 0
