'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'Thời gian làm một website là bao lâu?',
    answer: 'Tùy vào quy mô dự án, thời gian trung bình từ 4-8 tuần cho website doanh nghiệp chuẩn.',
  },
  {
    question: 'Chi phí thiết kế website là bao nhiêu?',
    answer: 'Chi phí phụ thuộc vào yêu cầu cụ thể. Chúng tôi có các gói từ Basic đến Enterprise. Liên hệ để được tư vấn chi tiết.',
  },
  {
    question: 'DMT có hỗ trợ bảo hành không?',
    answer: 'Có, chúng tôi cung cấp bảo hành 12 tháng và hỗ trợ kỹ thuật dài hạn.',
  },
  {
    question: 'Website có thân thiện với SEO không?',
    answer: 'Tất cả website của DMT đều được tối ưu SEO từ cấu trúc code, tốc độ tải, và nội dung.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Câu hỏi thường gặp</h2>
          <p className="text-xl text-gray-600">Giải đáp thắc mắc của bạn</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white p-6 rounded-lg shadow-md flex justify-between items-center hover:shadow-lg transition-shadow"
              >
                <span className="font-semibold text-left">{faq.question}</span>
                <FaChevronDown
                  className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white px-6 pb-6 rounded-b-lg">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
