import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - DMT',
  description: 'Chính sách bảo mật thông tin của DMT',
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">Cập nhật lần cuối: 24/01/2026</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Thu thập thông tin</h2>
            <p className="text-gray-700 mb-4">
              Chúng tôi thu thập thông tin khi bạn liên hệ với chúng tôi qua form hoặc email.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Sử dụng thông tin</h2>
            <p className="text-gray-700 mb-4">
              Thông tin được sử dụng để liên hệ tư vấn và cung cấp dịch vụ.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Bảo mật</h2>
            <p className="text-gray-700 mb-4">
              Chúng tôi cam kết bảo mật thông tin khách hàng và không chia sẻ cho bên thứ ba.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
