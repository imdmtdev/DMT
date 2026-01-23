import type { Metadata } from 'next';
import Link from 'next/link';
import { FaPalette, FaUsers, FaMobileAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Dịch vụ UI/UX Design chuyên nghiệp - DMT',
  description: 'Thiết kế trải nghiệm người dùng chuyên sâu theo hành vi thực tế từ DMT.',
};

export default function UIUXService() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">UI/UX Design</span> chuyên nghiệp
          </h1>
          
          <p className="text-xl text-gray-600 mb-12">
            Thiết kế trải nghiệm người dùng chuyên sâu theo hành vi thực tế
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass-effect p-6 rounded-2xl text-center">
              <FaPalette className="text-5xl mx-auto mb-4 text-primary-500" />
              <h3 className="font-bold text-xl mb-2">Design System</h3>
              <p className="text-gray-600">Hệ thống thiết kế nhất quán, dễ mở rộng</p>
            </div>
            <div className="glass-effect p-6 rounded-2xl text-center">
              <FaUsers className="text-5xl mx-auto mb-4 text-accent-blue" />
              <h3 className="font-bold text-xl mb-2">User Research</h3>
              <p className="text-gray-600">Nghiên cứu hành vi người dùng thực tế</p>
            </div>
            <div className="glass-effect p-6 rounded-2xl text-center">
              <FaMobileAlt className="text-5xl mx-auto mb-4 text-accent-purple" />
              <h3 className="font-bold text-xl mb-2">Responsive</h3>
              <p className="text-gray-600">Tối ưu mọi thiết bị, mọi màn hình</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-accent-pink to-primary-500 text-white p-12 rounded-2xl text-center">
            <h3 className="text-3xl font-bold mb-4">Nâng cao trải nghiệm người dùng</h3>
            <p className="text-xl mb-8 opacity-90">
              Tư vấn miễn phí về UI/UX cho sản phẩm của bạn
            </p>
            <Link
              href="/contact/"
              className="inline-block bg-white text-accent-pink px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
            >
              Liên hệ ngay →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
