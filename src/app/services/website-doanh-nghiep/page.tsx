import type { Metadata } from 'next';
import Link from 'next/link';
import { FaCheck, FaRocket } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Dịch vụ thiết kế website doanh nghiệp chuyên nghiệp tại DMT',
  description: 'Website là bộ mặt thương hiệu trên môi trường số. DMT cung cấp dịch vụ thiết kế website doanh nghiệp chuẩn SEO – tốc độ cao – dễ quản lý – dễ mở rộng.',
};

export default function WebsiteDoanhNghiepPage() {
  const problems = [
    'Website cũ lỗi thời, load chậm',
    'Không lên top Google',
    'Không ra khách hàng',
    'Khó quản lý & bảo trì',
  ];

  const solutions = [
    'Giao diện hiện đại, đúng brand',
    'Chuẩn SEO từ cấu trúc',
    'Tối ưu UX & chuyển đổi',
    'Code sạch, dễ nâng cấp',
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Dịch vụ thiết kế website doanh nghiệp</span> chuyên nghiệp tại DMT
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Website là bộ mặt thương hiệu trên môi trường số. DMT cung cấp dịch vụ thiết kế website doanh nghiệp chuẩn SEO – tốc độ cao – dễ quản lý – dễ mở rộng.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass-effect p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 text-red-600">❌ Chúng tôi giải quyết vấn đề gì?</h2>
              <ul className="space-y-3">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-gray-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-effect p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 text-green-600">✓ Giải pháp từ DMT</h2>
              <ul className="space-y-3">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheck className="text-green-500 mt-1" />
                    <span className="text-gray-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-500 to-accent-blue text-white p-12 rounded-2xl text-center">
            <FaRocket className="text-5xl mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Sẵn sàng bắt đầu?</h3>
            <p className="text-xl mb-8 opacity-90">
              Nhận tư vấn website phù hợp với doanh nghiệp bạn
            </p>
            <Link
              href="/contact/"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
            >
              Liên hệ ngay →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
