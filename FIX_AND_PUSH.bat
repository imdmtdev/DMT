@echo off
echo ========================================
echo   FIX VA PUSH CODE
echo ========================================
echo.

REM Xoa remote cu
echo [1/4] Xoa remote cu...
git remote remove origin
echo Done!
echo.

REM Them remote moi dung
echo [2/4] Them remote moi...
git remote add origin https://github.com/dangminhtri123/DMT.git
echo Done!
echo.

REM Kiem tra
echo [3/4] Kiem tra remote...
git remote -v
echo.

REM Push code
echo [4/4] Push code len GitHub...
echo.
git push -u origin main

echo.
echo ========================================
if %errorlevel% equ 0 (
    echo   THANH CONG!
    echo.
    echo Code da len GitHub:
    echo https://github.com/dangminhtri123/DMT
    echo.
    echo BUOC TIEP THEO:
    echo 1. Vao: https://github.com/dangminhtri123/DMT
    echo 2. Click Settings -^> Pages
    echo 3. Source: chon "GitHub Actions"
    echo 4. Website se live tai: https://dangminhtri123.github.io/DMT/
) else (
    echo   CO LOI!
    echo.
    echo Neu yeu cau dang nhap:
    echo - Username: dangminhtri123
    echo - Password: Personal Access Token
    echo.
    echo Tao token: https://github.com/settings/tokens
    echo - Chon: repo
    echo - Copy token va paste vao
)
echo ========================================
echo.
pause
