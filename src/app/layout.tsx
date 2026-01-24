import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAFixed from "@/components/CTAFixed";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "DMT – Công ty thiết kế website chuyên nghiệp, chuẩn SEO & chuyển đổi",
  description: "DMT là công ty thiết kế website cao cấp tại Việt Nam – chuyên website doanh nghiệp, landing page, web app, UI/UX, SEO. Cam kết hiệu quả & uy tín.",
  keywords: "công ty thiết kế website, thiết kế website chuyên nghiệp, thiết kế website chuẩn seo, làm website doanh nghiệp, agency thiết kế website",
  icons: {
    icon: '/DMT/icon.jpg',
    apple: '/DMT/icon.jpg',
  },
  openGraph: {
    title: "DMT – Công ty thiết kế website chuyên nghiệp",
    description: "DMT là công ty thiết kế website cao cấp tại Việt Nam – chuyên website doanh nghiệp, landing page, web app, UI/UX, SEO.",
    type: "website",
    locale: "vi_VN",
    siteName: "DMT",
    images: ['/DMT/icon.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <CTAFixed />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
