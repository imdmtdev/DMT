'use client';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Anh Nguyễn Hùng',
    position: 'Chủ nhà hàng Phở Ông Hùng',
    content: 'DMT đã giúp nhà hàng tôi có website đẹp và dễ sử dụng. Khách hàng giờ đặt bàn online rất nhiều, tăng 200% so với trước. Rất hài lòng!',
    rating: 5,
  },
  {
    name: 'Chị Hoàng Lan',
    position: 'Chủ Spa Hoàng Gia',
    content: 'Website mới giúp spa của tôi trông chuyên nghiệp hơn nhiều. Khách booking qua web tăng vọt, doanh thu cũng tăng theo. Cảm ơn DMT!',
    rating: 5,
  },
  {
    name: 'Anh Trần Minh',
    position: 'Giám đốc Nội Thất Minh Anh',
    content: 'Từ lúc có website mới, số lượng khách hỏi báo giá tăng gấp 3 lần. DMT làm việc rất tận tâm và chuyên nghiệp. Recommend!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Khách hàng nói gì về chúng tôi</h2>
          <p className="text-xl text-gray-600">Phản hồi thực tế từ khách hàng</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow-md"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.position}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
