import type { Metadata } from 'next';
import Link from 'next/link';
import { FaCode, FaCloud, FaLock } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Phát triển Web App & SaaS chuyên nghiệp - DMT',
  description: 'Giải pháp công nghệ Web App và SaaS cho startup & doanh nghiệp số từ DMT.',
};

export default function WebAppService() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Web App / SaaS</span> cho doanh nghiệp số
          </h1>
          
          <p className="text-xl text-gray-600 mb-12">
            Giải pháp công nghệ cho startup & doanh nghiệp số
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass-effect p-6 rounded-2xl text-center">
              <FaCode className="text-5xl mx-auto mb-4 text-primary-500" />
              <h3 className="font-bold text-xl mb-2">Code chất lượng</h3>
              <p className="text-gray-600">Clean code, scalable, maintainable</p>
            </div>
            <div className="glass-effect p-6 rounded-2xl text-center">
              <FaCloud className="text-5xl mx-auto mb-4 text-accent-blue" />
              <h3 className="font-bold text-xl mb-2">Cloud-ready</h3>
              <p className="text-gray-600">Deploy lên AWS, Azure, GCP dễ dàng</p>
            </div>
            <div className="glass-effect p-6 rounded-2xl text-center">
              <FaLock className="text-5xl mx-auto mb-4 text-accent-purple" />
              <h3 className="font-bold text-xl mb-2">Bảo mật cao</h3>
              <p className="text-gray-600">Authentication, Authorization đầy đủ</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-accent-purple to-accent-pink text-white p-12 rounded-2xl text-center">
            <h3 className="text-3xl font-bold mb-4">Xây dựng sản phẩm số của bạn</h3>
            <p className="text-xl mb-8 opacity-90">
              Tư vấn miễn phí về giải pháp công nghệ
            </p>
            <Link
              href="/contact/"
              className="inline-block bg-white text-accent-purple px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
            >
              Bắt đầu ngay →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
