# Hướng dẫn Deploy Website DMT lên GitHub Pages

## 🚀 Bước 1: Cài đặt dependencies

```bash
npm install
```

## 🔨 Bước 2: Build project

```bash
npm run build
```

## 📤 Bước 3: Deploy lên GitHub Pages

### Cách 1: Tự động với GitHub Actions (Khuyến nghị)

1. Push code lên GitHub repository
2. Vào Settings → Pages
3. Source: chọn **GitHub Actions**
4. Mỗi lần push code lên branch `main`, website sẽ tự động deploy

### Cách 2: Deploy thủ công

```bash
npm run deploy
```

## 🌐 Bước 4: Cấu hình Custom Domain

### Cấu hình DNS

Thêm các bản ghi A records tại nhà cung cấp domain:

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

### Cấu hình trên GitHub

1. Vào repo → Settings → Pages
2. Custom domain: nhập `dmt.vn`
3. Chờ DNS verify (24-48h)
4. Bật **Enforce HTTPS**

## ✅ Checklist

- [x] File `CNAME` đã có trong `public/`
- [x] `next.config.js` đã config `output: 'export'`
- [x] `robots.txt` và `sitemap.xml` đã có
- [x] GitHub Actions workflow đã setup
- [x] 404 page đã custom

## 🔧 Lệnh hữu ích

```bash
# Chạy development server
npm run dev

# Build production
npm run build

# Deploy lên GitHub Pages
npm run deploy
```

## 📝 Lưu ý

- Website này được tối ưu cho static export
- Không sử dụng API routes hoặc SSR
- Images đã được config `unoptimized: true`
- Tất cả pages đều có trailing slash

## 🆘 Xử lý lỗi

**Lỗi: Images không hiển thị**
→ Đảm bảo `images.unoptimized: true` trong `next.config.js`

**Lỗi: 404 khi refresh**
→ GitHub Pages không hỗ trợ client-side routing, đã có custom 404 page

**Lỗi: CSS không load**
→ Check `basePath` trong `next.config.js`
