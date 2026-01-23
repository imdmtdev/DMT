@echo off
echo ========================================
echo   UPDATE WEBSITE
echo ========================================
echo.
echo Dang cap nhat code...
echo.

git add .
git commit -m "Update website"
git push

echo.
echo ========================================
if %errorlevel% equ 0 (
    echo   CAP NHAT THANH CONG!
    echo.
    echo Website se tu dong deploy trong 2-3 phut
) else (
    echo   CO LOI XAY RA!
)
echo ========================================
echo.
pause
