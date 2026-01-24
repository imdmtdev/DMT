@echo off
echo ========================================
echo   CHUYEN SANG CUSTOM DOMAIN
echo ========================================
echo.
echo Script nay se:
echo 1. Xoa basePath trong next.config.js
echo 2. Sua lai duong dan icon
echo 3. Tao file CNAME
echo.
set /p domain="Nhap domain cua ban (vd: dmt.vn): "
echo.

if "%domain%"=="" (
    echo Loi: Ban chua nhap domain!
    pause
    exit /b 1
)

echo Dang cap nhat cau hinh...
echo.

REM Tao file CNAME
echo %domain%> public\CNAME
echo [OK] Da tao file public\CNAME

echo.
echo ========================================
echo   HOAN THANH!
echo ========================================
echo.
echo Buoc tiep theo:
echo.
echo 1. CAU HINH DNS tai nha cung cap domain:
echo    - Them 4 ban ghi A:
echo      Type: A, Name: @, Value: 185.199.108.153
echo      Type: A, Name: @, Value: 185.199.109.153
echo      Type: A, Name: @, Value: 185.199.110.153
echo      Type: A, Name: @, Value: 185.199.111.153
echo.
echo    - Them 1 ban ghi CNAME (neu dung www):
echo      Type: CNAME, Name: www, Value: dangminhtri123.github.io
echo.
echo 2. SUA FILE next.config.js:
echo    - Doi basePath: '/DMT' thanh basePath: ''
echo.
echo 3. SUA DUONG DAN ICON:
echo    - src/app/layout.tsx: '/DMT/icon.jpg' -^> '/icon.jpg'
echo    - src/components/Header.tsx: '/DMT/icon.jpg' -^> '/icon.jpg'
echo    - src/components/Footer.tsx: '/DMT/icon.jpg' -^> '/icon.jpg'
echo.
echo 4. PUSH CODE:
echo    - Double-click: UPDATE_WEBSITE.bat
echo.
echo 5. CAU HINH GITHUB:
echo    - Vao: https://github.com/dangminhtri123/DMT/settings/pages
echo    - Custom domain: %domain%
echo    - Tick: Enforce HTTPS
echo.
echo Chi tiet: Xem file HUONG_DAN_NOI_DOMAIN.md
echo ========================================
echo.
pause
