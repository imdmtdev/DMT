import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - DMT',
  description: 'Điều khoản sử dụng dịch vụ của DMT',
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">Cập nhật lần cuối: 24/01/2026</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Điều khoản chung</h2>
            <p className="text-gray-700 mb-4">
              Khi sử dụng dịch vụ của DMT, bạn đồng ý với các điều khoản này.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Dịch vụ</h2>
            <p className="text-gray-700 mb-4">
              DMT cung cấp dịch vụ thiết kế và phát triển website theo thỏa thuận.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Thanh toán</h2>
            <p className="text-gray-700 mb-4">
              Thanh toán được thực hiện theo tiến độ đã thỏa thuận trong hợp đồng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
