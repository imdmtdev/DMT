import type { Metadata } from 'next';
import Link from 'next/link';
import { FaChartLine, FaShoppingCart, FaBullseye } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Thiết kế Landing Page & Website bán hàng chuyển đổi cao - DMT',
  description: 'Dịch vụ thiết kế landing page tập trung chuyển đổi, tăng đơn hàng và tối ưu hành trình khách hàng từ DMT.',
};

export default function LandingPageService() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Landing Page & Website bán hàng</span> chuyển đổi cao
          </h1>
          
          <p className="text-xl text-gray-600 mb-12">
            Tập trung 100% vào chuyển đổi – tăng đơn hàng – tối ưu hành trình khách hàng
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass-effect p-6 rounded-2xl text-center">
              <FaBullseye className="text-5xl mx-auto mb-4 text-primary-500" />
              <h3 className="font-bold text-xl mb-2">Tập trung chuyển đổi</h3>
              <p className="text-gray-600">Mọi element đều hướng đến mục tiêu bán hàng</p>
            </div>
            <div className="glass-effect p-6 rounded-2xl text-center">
              <FaChartLine className="text-5xl mx-auto mb-4 text-accent-blue" />
              <h3 className="font-bold text-xl mb-2">Tăng doanh thu</h3>
              <p className="text-gray-600">Tối ưu để tăng tỷ lệ chuyển đổi lên 3-5 lần</p>
            </div>
            <div className="glass-effect p-6 rounded-2xl text-center">
              <FaShoppingCart className="text-5xl mx-auto mb-4 text-accent-purple" />
              <h3 className="font-bold text-xl mb-2">UX tối ưu</h3>
              <p className="text-gray-600">Hành trình mua hàng mượt mà, dễ dàng</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-accent-blue to-accent-purple text-white p-12 rounded-2xl text-center">
            <h3 className="text-3xl font-bold mb-4">Tăng doanh số ngay hôm nay</h3>
            <p className="text-xl mb-8 opacity-90">
              Nhận tư vấn miễn phí về landing page phù hợp
            </p>
            <Link
              href="/contact/"
              className="inline-block bg-white text-accent-blue px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
            >
              Tư vấn ngay →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
