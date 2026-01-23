# 🚀 Hướng dẫn Deploy Website DMT lên GitHub Pages

## 📋 Bước 1: Chuẩn bị

### 1.1. Cài đặt Git (nếu chưa có)
```bash
# Kiểm tra Git đã cài chưa
git --version

# Nếu chưa có, tải tại: https://git-scm.com/download/win
```

### 1.2. Tạo tài khoản GitHub
- Truy cập: https://github.com
- Đăng ký tài khoản miễn phí

## 📦 Bước 2: Tạo Repository trên GitHub

1. Đăng nhập GitHub
2. Click nút **"New"** hoặc **"+"** → **"New repository"**
3. Điền thông tin:
   - **Repository name**: `dmt-website` (hoặc tên bạn muốn)
   - **Description**: Website công ty DMT
   - Chọn **Public**
   - **KHÔNG** tick "Add a README file"
4. Click **"Create repository"**

## 💻 Bước 3: Upload Code lên GitHub

### 3.1. Mở Terminal/CMD tại thư mục dự án
```bash
cd C:\xampp\htdocs\DMT
```

### 3.2. Khởi tạo Git và push code
```bash
# Khởi tạo Git
git init

# Thêm tất cả files
git add .

# Commit
git commit -m "Initial commit - DMT Website"

# Thêm remote (thay YOUR_USERNAME bằng username GitHub của bạn)
git remote add origin https://github.com/YOUR_USERNAME/dmt-website.git

# Đổi branch sang main
git branch -M main

# Push code lên GitHub
git push -u origin main
```

**Lưu ý:** Thay `YOUR_USERNAME` bằng username GitHub thực của bạn!

## ⚙️ Bước 4: Cấu hình GitHub Pages

### 4.1. Bật GitHub Pages với GitHub Actions

1. Vào repository trên GitHub
2. Click tab **"Settings"**
3. Trong menu bên trái, click **"Pages"**
4. Tại **"Source"**, chọn **"GitHub Actions"**
5. Xong! GitHub sẽ tự động deploy

### 4.2. Chờ deploy hoàn tất

1. Click tab **"Actions"** trên repository
2. Xem quá trình build (màu vàng = đang chạy, xanh = thành công)
3. Sau khi xong, website sẽ có tại: `https://YOUR_USERNAME.github.io/dmt-website/`

## 🌐 Bước 5: Nối Custom Domain

### 5.1. Cập nhật file CNAME

Mở file `public/CNAME` và thay đổi:
```
yourdomain.com
```
Hoặc nếu dùng subdomain:
```
www.yourdomain.com
```

Sau đó push lại:
```bash
git add public/CNAME
git commit -m "Update domain"
git push
```

### 5.2. Cấu hình DNS tại nhà cung cấp domain

#### Nếu dùng ROOT DOMAIN (vd: dmt.vn)

Thêm 4 bản ghi **A Records**:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

#### Nếu dùng SUBDOMAIN (vd: www.dmt.vn)

Thêm 1 bản ghi **CNAME**:

```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

### 5.3. Cấu hình trên GitHub

1. Vào **Settings** → **Pages**
2. Tại **"Custom domain"**, nhập domain của bạn: `dmt.vn`
3. Click **"Save"**
4. Chờ DNS check (có thể mất 24-48 giờ)
5. Sau khi verify xong, tick **"Enforce HTTPS"**

## 🎯 Bước 6: Kiểm tra

1. Truy cập domain của bạn: `https://dmt.vn`
2. Kiểm tra:
   - ✅ Website hiển thị đúng
   - ✅ HTTPS hoạt động (ổ khóa xanh)
   - ✅ Tất cả trang hoạt động
   - ✅ Logo hiển thị

## 🔄 Cập nhật Website sau này

Mỗi khi thay đổi code:

```bash
# Thêm files đã thay đổi
git add .

# Commit với message mô tả
git commit -m "Update: thêm tính năng XYZ"

# Push lên GitHub
git push

# GitHub Actions sẽ tự động deploy lại!
```

## 🆘 Xử lý lỗi thường gặp

### Lỗi 1: "Permission denied"
```bash
# Cấu hình Git credential
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Lỗi 2: Website không hiển thị CSS/JS
- Kiểm tra `next.config.js` có `output: 'export'`
- Kiểm tra `basePath` đúng chưa

### Lỗi 3: Domain không verify
- Chờ DNS propagation (24-48h)
- Kiểm tra DNS records đã đúng chưa
- Dùng tool check: https://dnschecker.org

### Lỗi 4: 404 khi refresh page
- GitHub Pages không hỗ trợ client-side routing
- Đã có custom 404 page trong project

## 📱 Các nhà cung cấp domain phổ biến

### Tại Việt Nam:
- **Pa.vn**: https://pa.vn
- **Tenten.vn**: https://tenten.vn
- **Mat Bao**: https://matbao.net
- **Nhân Hòa**: https://nhanhoa.com

### Quốc tế:
- **Namecheap**: https://namecheap.com
- **GoDaddy**: https://godaddy.com
- **Cloudflare**: https://cloudflare.com (có domain + DNS miễn phí)

## 🎉 Hoàn thành!

Website của bạn giờ đã:
- ✅ Deploy trên GitHub Pages (miễn phí)
- ✅ Có HTTPS tự động
- ✅ Tự động deploy khi push code
- ✅ Có custom domain chuyên nghiệp
- ✅ Tốc độ nhanh với CDN toàn cầu

## 💡 Tips

1. **Backup code**: Luôn push code lên GitHub
2. **Test local trước**: `npm run build` để test
3. **Check Actions**: Xem log nếu deploy lỗi
4. **DNS cache**: Xóa cache browser nếu domain chưa cập nhật

## 📞 Cần hỗ trợ?

- GitHub Pages Docs: https://docs.github.com/pages
- Next.js Static Export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- DNS Help: https://dnschecker.org

---

**Chúc bạn deploy thành công! 🚀**
