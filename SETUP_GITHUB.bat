@echo off
echo ========================================
echo   SETUP GITHUB - DMT WEBSITE
echo ========================================
echo.

REM Cau hinh Git
echo [1/6] Cau hinh Git...
git config --global user.name "dangminhtri123"
git config --global user.email "dangtriofficial@gmail.com"
echo Done!
echo.

REM Khoi tao Git
echo [2/6] Khoi tao Git repository...
git init
echo Done!
echo.

REM Add files
echo [3/6] Them tat ca files...
git add .
echo Done!
echo.

REM Commit
echo [4/6] Commit code...
git commit -m "Initial commit - DMT Website"
echo Done!
echo.

REM Doi ten branch
echo [5/6] Doi ten branch thanh main...
git branch -M main
echo Done!
echo.

REM Remove old remote if exists
echo [6/7] Xoa remote cu (neu co)...
git remote remove origin 2>nul
echo Done!
echo.

REM Add remote
echo [7/7] Ket noi voi GitHub...
git remote add origin https://github.com/dangminhtri123/DMT.git
echo Done!
echo.

echo ========================================
echo   SETUP HOAN TAT!
echo ========================================
echo.
echo Bay gio chay lenh sau de push code:
echo.
echo   git push -u origin main
echo.
echo Hoac double-click file: PUSH_TO_GITHUB.bat
echo.
pause
