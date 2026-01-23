'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    title: 'Website Nhà Hàng Phở Ông Hùng',
    category: 'Nhà hàng & Ẩm thực',
    result: '+210% lượt đặt bàn online',
    image: '/images/project1.jpg',
  },
  {
    title: 'Website Spa Hoàng Gia',
    category: 'Spa & Beauty',
    result: '+180% booking qua website',
    image: '/images/project2.jpg',
  },
  {
    title: 'Website Nội Thất Minh Anh',
    category: 'Nội thất',
    result: '+3.5x tỷ lệ chuyển đổi',
    image: '/images/project3.jpg',
  },
];

export default function CaseStudy() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Dự án tiêu biểu</h2>
          <p className="text-xl text-gray-600">Những câu chuyện thành công cùng khách hàng</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-64 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold">
                {project.title}
              </div>
              <div className="p-6">
                <div className="text-sm text-primary font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.result}</p>
                <Link href="/projects/" className="text-primary font-semibold hover:underline">
                  Xem chi tiết →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects/"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
          >
            Xem tất cả dự án
          </Link>
        </div>
      </div>
    </section>
  );
}
