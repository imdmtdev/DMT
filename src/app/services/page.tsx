import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dịch vụ thiết kế website chuyên nghiệp - DMT',
  description: 'DMT cung cấp dịch vụ thiết kế website doanh nghiệp, landing page, web app, UI/UX design chuẩn SEO và tối ưu chuyển đổi.',
};

const services = [
  {
    slug: 'website-doanh-nghiep',
    title: 'Thiết kế website doanh nghiệp',
    description: 'Website chuẩn thương hiệu, tối ưu SEO, tốc độ cao, dễ mở rộng.',
  },
  {
    slug: 'landing-page',
    title: 'Website bán hàng & Landing Page',
    description: 'Tập trung chuyển đổi – tăng đơn – tối ưu hành trình khách hàng.',
  },
  {
    slug: 'web-app',
    title: 'Web App / SaaS',
    description: 'Giải pháp công nghệ cho startup & doanh nghiệp số.',
  },
  {
    slug: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Thiết kế trải nghiệm người dùng chuyên sâu theo hành vi thực tế.',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Dịch vụ của chúng tôi</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Giải pháp toàn diện từ thiết kế đến phát triển website chuyên nghiệp
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}/`}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <h2 className="text-2xl font-bold mb-4 text-primary">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <span className="text-primary font-semibold">Tìm hiểu thêm →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
