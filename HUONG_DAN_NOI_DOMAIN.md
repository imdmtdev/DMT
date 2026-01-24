# 🌐 HƯỚNG DẪN NỐI CUSTOM DOMAIN VỚI GITHUB PAGES

## 📋 Tổng quan

Khi nối custom domain (vd: `dmt.vn`), website sẽ:
- ✅ Không còn `/DMT/` trong URL
- ✅ Có domain chuyên nghiệp
- ✅ HTTPS miễn phí từ GitHub
- ✅ Tốc độ nhanh với CDN toàn cầu

---

## 🎯 BƯỚC 1: Chuẩn bị

### Bạn cần có:
1. **Domain đã mua** (vd: `dmt.vn`, `example.com`)
2. **Quyền truy cập DNS** của domain (tại nhà cung cấp domain)

### Nhà cung cấp domain phổ biến tại VN:
- **Pa.vn**: https://pa.vn
- **Tenten.vn**: https://tenten.vn
- **Mat Bao**: https://matbao.net
- **Nhân Hòa**: https://nhanhoa.com
- **Cloudflare**: https://cloudflare.com (rẻ nhất)

---

## 🔧 BƯỚC 2: Cấu hình DNS

### Lựa chọn A: Root Domain (dmt.vn)

Thêm **4 bản ghi A Records**:

```
Type: A
Name: @ (hoặc để trống)
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @ (hoặc để trống)
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @ (hoặc để trống)
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @ (hoặc để trống)
Value: 185.199.111.153
TTL: 3600
```

### Lựa chọn B: Subdomain (www.dmt.vn)

Thêm **1 bản ghi CNAME**:

```
Type: CNAME
Name: www
Value: dangminhtri123.github.io
TTL: 3600
```

### Khuyến nghị: Dùng cả 2

Để website hoạt động với cả `dmt.vn` và `www.dmt.vn`:

1. Thêm 4 bản ghi A (như trên)
2. Thêm 1 bản ghi CNAME cho www (như trên)

---

## 📝 BƯỚC 3: Cập nhật file CNAME

### 3.1. Sửa file `public/CNAME`

Mở file `public/CNAME` và thay đổi thành domain của bạn:

```
dmt.vn
```

**Lưu ý:** 
- Chỉ ghi 1 dòng duy nhất
- Không có `http://` hoặc `https://`
- Không có `/` ở cuối

### 3.2. Sửa `next.config.js`

Khi dùng custom domain, **XÓA basePath**:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',  // ← Đổi lại thành rỗng
  trailingSlash: true,
}

module.exports = nextConfig
```

### 3.3. Sửa lại các đường dẫn icon

Trong các file sau, đổi `/DMT/icon.jpg` → `/icon.jpg`:

**File: `src/app/layout.tsx`**
```typescript
icons: {
  icon: '/icon.jpg',
  apple: '/icon.jpg',
},
// ...
images: ['/icon.jpg'],
```

**File: `src/components/Header.tsx`**
```typescript
<img src="/icon.jpg" alt="DMT Logo" />
```

**File: `src/components/Footer.tsx`**
```typescript
<img src="/icon.jpg" alt="DMT Logo" />
```

---

## 🚀 BƯỚC 4: Push code lên GitHub

```bash
git add .
git commit -m "Add custom domain configuration"
git push
```

Hoặc double-click: **UPDATE_WEBSITE.bat**

---

## ⚙️ BƯỚC 5: Cấu hình trên GitHub

### 5.1. Vào trang Pages
```
https://github.com/dangminhtri123/DMT/settings/pages
```

### 5.2. Thêm Custom Domain

1. Tìm phần **"Custom domain"**
2. Nhập domain của bạn: `dmt.vn`
3. Click **"Save"**

### 5.3. Chờ DNS Check

GitHub sẽ kiểm tra DNS records:
- ⏳ Đang kiểm tra: "DNS check in progress"
- ✅ Thành công: "DNS check successful"
- ❌ Thất bại: Kiểm tra lại DNS records

**Lưu ý:** Quá trình này có thể mất từ vài phút đến 24-48 giờ

### 5.4. Bật HTTPS

Sau khi DNS check thành công:
1. Tick vào ✅ **"Enforce HTTPS"**
2. Xong!

---

## 🔍 BƯỚC 6: Kiểm tra

### 6.1. Kiểm tra DNS đã cập nhật chưa

Dùng tool online:
- https://dnschecker.org
- Nhập domain của bạn
- Kiểm tra xem đã trỏ đúng IP chưa

### 6.2. Truy cập website

```
https://dmt.vn
```

Nếu chưa hoạt động:
- Chờ thêm vài giờ (DNS propagation)
- Xóa cache trình duyệt (Ctrl + Shift + Delete)
- Thử trình duyệt ẩn danh

---

## 📊 Ví dụ cấu hình DNS

### Tại Pa.vn / Tenten.vn / Mat Bao:

```
┌─────────────────────────────────────────────────────┐
│ Loại    │ Tên    │ Giá trị              │ TTL      │
├─────────────────────────────────────────────────────┤
│ A       │ @      │ 185.199.108.153      │ 3600     │
│ A       │ @      │ 185.199.109.153      │ 3600     │
│ A       │ @      │ 185.199.110.153      │ 3600     │
│ A       │ @      │ 185.199.111.153      │ 3600     │
│ CNAME   │ www    │ dangminhtri123.github.io │ 3600 │
└─────────────────────────────────────────────────────┘
```

### Tại Cloudflare:

```
┌─────────────────────────────────────────────────────┐
│ Type    │ Name   │ Content              │ Proxy    │
├─────────────────────────────────────────────────────┤
│ A       │ @      │ 185.199.108.153      │ DNS only │
│ A       │ @      │ 185.199.109.153      │ DNS only │
│ A       │ @      │ 185.199.110.153      │ DNS only │
│ A       │ @      │ 185.199.111.153      │ DNS only │
│ CNAME   │ www    │ dangminhtri123.github.io │ DNS only │
└─────────────────────────────────────────────────────┘
```

**Lưu ý:** Tại Cloudflare, chọn **"DNS only"** (không bật proxy)

---

## 🆘 Xử lý lỗi

### ❌ Lỗi: "Domain is improperly configured"

**Nguyên nhân:** DNS records chưa đúng

**Giải pháp:**
1. Kiểm tra lại 4 IP addresses
2. Đảm bảo Name là `@` hoặc để trống
3. Chờ DNS propagation (24-48h)

### ❌ Lỗi: "CNAME already in use"

**Nguyên nhân:** Domain đã được dùng cho repo khác

**Giải pháp:**
1. Xóa CNAME khỏi repo cũ
2. Hoặc dùng subdomain khác

### ❌ Website hiển thị nhưng không có CSS/JS

**Nguyên nhân:** Chưa đổi basePath về rỗng

**Giải pháp:**
1. Sửa `next.config.js`: `basePath: ''`
2. Sửa lại đường dẫn icon về `/icon.jpg`
3. Build và push lại

### ❌ Lỗi: "DNS check failed"

**Nguyên nhân:** DNS chưa cập nhật

**Giải pháp:**
1. Chờ thêm vài giờ
2. Kiểm tra DNS tại https://dnschecker.org
3. Xóa và thêm lại Custom domain trên GitHub

---

## 📱 Redirect www → non-www (hoặc ngược lại)

### Tại Cloudflare:

Tạo Page Rule để redirect:

```
www.dmt.vn/* → https://dmt.vn/$1
```

Hoặc ngược lại:

```
dmt.vn/* → https://www.dmt.vn/$1
```

### Tại nhà cung cấp khác:

Thường không hỗ trợ redirect, chỉ cần cấu hình cả 2 (A records + CNAME) là đủ.

---

## ✅ Checklist

Trước khi bắt đầu:
- □ Đã mua domain
- □ Có quyền truy cập DNS

Cấu hình DNS:
- □ Đã thêm 4 bản ghi A
- □ Đã thêm 1 bản ghi CNAME (nếu dùng www)

Cấu hình code:
- □ Đã sửa file `public/CNAME`
- □ Đã đổi `basePath: ''` trong `next.config.js`
- □ Đã sửa đường dẫn icon về `/icon.jpg`
- □ Đã push code lên GitHub

Cấu hình GitHub:
- □ Đã thêm Custom domain
- □ DNS check successful
- □ Đã bật Enforce HTTPS

Kiểm tra:
- □ Website truy cập được qua domain
- □ HTTPS hoạt động (ổ khóa xanh)
- □ CSS/JS load đúng
- □ Tất cả trang hoạt động

---

## 🎉 Hoàn thành!

Website của bạn giờ đã có:
- ✅ Custom domain chuyên nghiệp
- ✅ HTTPS miễn phí
- ✅ Tốc độ nhanh với CDN
- ✅ Tự động deploy khi push code

---

## 💡 Tips

1. **Chọn domain ngắn gọn**: Dễ nhớ, dễ gõ
2. **Dùng .vn cho thị trường VN**: Tăng độ tin cậy
3. **Bật Cloudflare**: Tăng tốc độ và bảo mật (tùy chọn)
4. **Backup DNS records**: Chụp ảnh hoặc ghi lại

---

## 📞 Cần hỗ trợ?

- GitHub Pages Custom Domain: https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site
- DNS Checker: https://dnschecker.org
- Email: dangtriofficial@gmail.com

**Chúc bạn thành công! 🚀**
