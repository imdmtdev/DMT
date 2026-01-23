@echo off
echo ========================================
echo   SYNC VA PUSH CODE
echo ========================================
echo.

echo [1/3] Pull code moi tu GitHub...
git pull origin main --rebase
echo.

echo [2/3] Xoa cac workflow file thua...
if exist .github\workflows\webpack.yml del .github\workflows\webpack.yml
if exist .github\workflows\nextjs.yml del .github\workflows\nextjs.yml
echo Done!
echo.

echo [3/3] Push code len GitHub...
git add .
git commit -m "Remove duplicate workflows" 2>nul
git push
echo.

echo ========================================
if %errorlevel% equ 0 (
    echo   THANH CONG!
    echo.
    echo Vao day de xem:
    echo https://github.com/dangminhtri123/DMT/actions
    echo.
    echo Cho workflow chay xong roi vao:
    echo https://dangminhtri123.github.io/DMT/
) else (
    echo   CO LOI!
)
echo ========================================
echo.
pause
