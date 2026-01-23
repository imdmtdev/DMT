import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bảng giá thiết kế website - DMT',
  description: 'Bảng giá dịch vụ thiết kế website chuyên nghiệp từ DMT. Các gói Basic, Pro, Enterprise phù hợp với mọi quy mô doanh nghiệp.',
};

const packages = [
  {
    name: 'Basic',
    price: 'Từ 15 triệu',
    features: [
      'Website 5-7 trang',
      'Responsive mobile',
      'Tối ưu SEO cơ bản',
      'Bảo hành 6 tháng',
      'Hỗ trợ kỹ thuật',
    ],
  },
  {
    name: 'Pro',
    price: 'Từ 30 triệu',
    features: [
      'Website không giới hạn trang',
      'Tối ưu SEO nâng cao',
      'Tích hợp CMS',
      'Bảo hành 12 tháng',
      'Hỗ trợ ưu tiên',
      'Analytics & Tracking',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Liên hệ',
    features: [
      'Giải pháp tùy chỉnh',
      'Web App / SaaS',
      'API Integration',
      'Bảo hành 24 tháng',
      'Dedicated support',
      'Training & Documentation',
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Bảng giá dịch vụ</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DMT không bán website giá rẻ. Chúng tôi cung cấp giải pháp phù hợp với mục tiêu kinh doanh của từng doanh nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-8 ${
                pkg.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                  Phổ biến nhất
                </div>
              )}
              <h2 className="text-3xl font-bold mb-4">{pkg.name}</h2>
              <div className="text-4xl font-bold text-primary mb-6">{pkg.price}</div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact/"
                className="block text-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
              >
                Tư vấn gói này
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Không chắc gói nào phù hợp? Chúng tôi sẽ tư vấn miễn phí
          </p>
          <Link
            href="/contact/"
            className="inline-block bg-white border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            Nhận tư vấn miễn phí
          </Link>
        </div>
      </div>
    </div>
  );
}
