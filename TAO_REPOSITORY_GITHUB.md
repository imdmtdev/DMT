# 🚀 HƯỚNG DẪN TẠO REPOSITORY GITHUB

## 📋 Bước 1: Tạo Repository trên GitHub

1. **Đăng nhập GitHub:**
   - Truy cập: https://github.com/login
   - Đăng nhập với tài khoản: `dangminhtri123`

2. **Tạo Repository mới:**
   - Click nút **"+"** (góc trên bên phải) → **"New repository"**
   - Hoặc truy cập trực tiếp: https://github.com/new

3. **Điền thông tin:**
   ```
   Repository name: DMT
   Description: Website công ty DMT - Thiết kế website chuyên nghiệp
   
   ✅ Chọn: Public (để dùng GitHub Pages miễn phí)
   ❌ KHÔNG tick: "Add a README file"
   ❌ KHÔNG tick: "Add .gitignore"
   ❌ KHÔNG tick: "Choose a license"
   ```

4. **Click nút "Create repository"**

---

## 💻 Bước 2: Push Code lên GitHub

Sau khi tạo xong repository, chạy các lệnh sau:

### Cách A: Dùng file .bat (Nhanh nhất)
Double-click file: **PUSH_TO_GITHUB.bat**

### Cách B: Chạy lệnh thủ công
Mở Terminal/CMD tại thư mục dự án và chạy:

```bash
git remote remove origin
git remote add origin https://github.com/dangminhtri123/DMT.git
git branch -M main
git push -u origin main
```

**Lưu ý:** Khi push lần đầu, GitHub sẽ yêu cầu đăng nhập:
- Username: `dangminhtri123`
- Password: Dùng **Personal Access Token** (không phải password thường)

---

## 🔐 Tạo Personal Access Token

Nếu chưa có token:

1. Truy cập: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Điền thông tin:
   ```
   Note: DMT Website Deploy
   Expiration: No expiration
   ✅ Tick vào: repo (tất cả các mục con)
   ```
4. Click **"Generate token"**
5. **Copy token ngay** (chỉ hiện 1 lần!)
6. Dùng token này làm password khi push

---

## ✅ Bước 3: Bật GitHub Pages

1. Vào repository: https://github.com/dangminhtri123/DMT
2. Click tab **"Settings"**
3. Click **"Pages"** (menu bên trái)
4. Source: Chọn **"GitHub Actions"**
5. Xong!

---

## 🌐 Bước 4: Kiểm tra Website

1. Click tab **"Actions"** để xem quá trình deploy
2. Chờ 2-3 phút
3. Website live tại: **https://dangminhtri123.github.io/DMT/**

---

## 🔄 Cập nhật sau này

Mỗi khi thay đổi code:
```bash
git add .
git commit -m "Mô tả thay đổi"
git push
```

Hoặc double-click: **UPDATE_WEBSITE.bat**

---

## 🆘 Xử lý lỗi

### Lỗi: "Authentication failed"
→ Dùng Personal Access Token thay vì password

### Lỗi: "Repository not found"
→ Kiểm tra đã tạo repository trên GitHub chưa

### Lỗi: "Permission denied"
→ Kiểm tra token có quyền `repo` chưa

---

**Chúc bạn thành công! 🎉**
