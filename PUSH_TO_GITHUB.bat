@echo off
echo ========================================
echo   PUSH CODE LEN GITHUB
echo ========================================
echo.
echo Dang setup remote va push code...
echo.

git remote remove origin 2>nul
git remote add origin https://github.com/dangminhtri123/DMT.git
git branch -M main
git push -u origin main

echo.
echo ========================================
if %errorlevel% equ 0 (
    echo   THANH CONG!
    echo.
    echo Website cua ban da len GitHub:
    echo https://github.com/dangminhtri123/DMT
    echo.
    echo Buoc tiep theo:
    echo 1. Vao: https://github.com/dangminhtri123/DMT
    echo 2. Click Settings -^> Pages
    echo 3. Source: chon "GitHub Actions"
    echo 4. Cho 2-3 phut
    echo 5. Website live tai: https://dangminhtri123.github.io/DMT/
) else (
    echo   CO LOI XAY RA!
    echo.
    echo Neu gap loi dang nhap:
    echo - Username: dangminhtri123
    echo - Password: Dung Personal Access Token
    echo.
    echo Tao token tai: https://github.com/settings/tokens
)
echo ========================================
echo.
pause
