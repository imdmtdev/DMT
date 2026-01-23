'use client';
import { motion } from 'framer-motion';

const steps = [
  { number: '01', title: 'Tư vấn & Phân tích', description: 'Tìm hiểu mục tiêu kinh doanh và đối tượng khách hàng' },
  { number: '02', title: 'Thiết kế & Duyệt mẫu', description: 'Tạo mockup và prototype theo brand identity' },
  { number: '03', title: 'Phát triển', description: 'Code chuẩn, tối ưu performance và SEO' },
  { number: '04', title: 'Test & Launch', description: 'Kiểm tra kỹ lưỡng và triển khai lên production' },
  { number: '05', title: 'Bảo hành & Hỗ trợ', description: 'Hỗ trợ dài hạn và cập nhật liên tục' },
];

export default function Process() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Quy trình làm việc</h2>
          <p className="text-xl text-gray-600">Minh bạch - Chuyên nghiệp - Đúng deadline</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 mb-8 last:mb-0"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
