'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaLaptopCode, FaShoppingCart, FaMobileAlt, FaPaintBrush, FaArrowRight } from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode size={40} />,
    title: 'Thiết kế website doanh nghiệp',
    description: 'Website chuẩn thương hiệu, tối ưu SEO, tốc độ cao, dễ mở rộng.',
    gradient: 'from-primary-500 to-accent-blue',
    link: '/services/website-doanh-nghiep/',
  },
  {
    icon: <FaShoppingCart size={40} />,
    title: 'Website bán hàng & landing page',
    description: 'Tập trung chuyển đổi – tăng đơn – tối ưu hành trình khách hàng.',
    gradient: 'from-accent-blue to-accent-purple',
    link: '/services/landing-page/',
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: 'Web App / SaaS',
    description: 'Giải pháp công nghệ cho startup & doanh nghiệp số.',
    gradient: 'from-accent-purple to-accent-pink',
    link: '/services/web-app/',
  },
  {
    icon: <FaPaintBrush size={40} />,
    title: 'UI/UX Design',
    description: 'Thiết kế trải nghiệm người dùng chuyên sâu theo hành vi thực tế.',
    gradient: 'from-accent-pink to-primary-500',
    link: '/services/ui-ux/',
  },
];

export default function Services() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Dịch vụ nổi bật</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Giải pháp toàn diện cho doanh nghiệp của bạn
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={service.link} className="block h-full">
                <div className="glass-effect p-8 rounded-2xl h-full card-hover relative overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                      Tìm hiểu thêm
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
