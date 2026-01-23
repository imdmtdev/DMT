# ⚡ Quick Deploy - Hướng dẫn nhanh

## 🚀 Deploy trong 5 phút

### Bước 1: Push lên GitHub
```bash
cd C:\xampp\htdocs\DMT

git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/dmt-website.git
git branch -M main
git push -u origin main
```

### Bước 2: Bật GitHub Pages
1. Vào repo → **Settings** → **Pages**
2. Source: chọn **GitHub Actions**
3. Xong!

### Bước 3: Nối Domain
1. Sửa `public/CNAME` thành domain của bạn
2. Push lại: `git push`
3. Thêm DNS records tại nhà cung cấp domain:

**Root domain (dmt.vn):**
```
A @ 185.199.108.153
A @ 185.199.109.153
A @ 185.199.110.153
A @ 185.199.111.153
```

**Subdomain (www.dmt.vn):**
```
CNAME www YOUR_USERNAME.github.io
```

4. Vào **Settings** → **Pages** → nhập domain → Save
5. Chờ 24-48h để DNS cập nhật

## ✅ Xong!

Website live tại: `https://yourdomain.com`

---

## 🔄 Update sau này

```bash
git add .
git commit -m "Update content"
git push
```

Tự động deploy trong 2-3 phút!
