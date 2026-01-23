'use client';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaRocket, FaShieldAlt, FaHeadset } from 'react-icons/fa';

const reasons = [
  {
    icon: <FaCheckCircle />,
    title: '5+ năm kinh nghiệm',
    description: 'Triển khai dự án thực tế cho nhiều lĩnh vực',
    gradient: 'from-primary-500 to-accent-blue',
  },
  {
    icon: <FaRocket />,
    title: 'Quy trình rõ ràng',
    description: 'Minh bạch – đúng deadline – không phát sinh',
    gradient: 'from-accent-blue to-accent-purple',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Chuẩn SEO & Performance',
    description: 'Core Web Vitals ≥ 95, tốc độ tải nhanh',
    gradient: 'from-accent-purple to-accent-pink',
  },
  {
    icon: <FaHeadset />,
    title: 'Hỗ trợ dài hạn',
    description: 'Bảo hành – hỗ trợ kỹ thuật 24/7',
    gradient: 'from-accent-pink to-primary-500',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-blue/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Tại sao chọn DMT?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Chúng tôi không chỉ làm web "cho có"
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl card-hover group text-center"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${reason.gradient} text-white mb-6 text-4xl group-hover:scale-110 transition-transform`}>
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
