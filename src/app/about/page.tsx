'use client';
import type { Metadata } from 'next';
import { motion } from 'framer-motion';
import { FaAward, FaHeart, FaLightbulb, FaHandshake } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-blue/10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Về <span className="gradient-text">DMT</span> – Đối tác công nghệ đáng tin cậy
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              DMT (Digital Marketing & Technology) được thành lập với mục tiêu giúp doanh nghiệp chuyển đổi số bài bản, không chỉ bằng thiết kế đẹp mà bằng giải pháp công nghệ thực tế.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold mb-4 gradient-text">🎯 Tầm nhìn</h2>
              <p className="text-gray-700 leading-relaxed">
                Trở thành đối tác công nghệ hàng đầu cho doanh nghiệp Việt Nam trong kỷ nguyên số.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold mb-4 gradient-text">🚀 Sứ mệnh</h2>
              <p className="text-gray-700 leading-relaxed">
                Xây dựng nền tảng số giúp doanh nghiệp tăng trưởng bền vững thông qua công nghệ và thiết kế.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">💎 Giá trị cốt lõi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <FaAward />, title: 'Chất lượng', desc: 'Cam kết mang đến sản phẩm tốt nhất', gradient: 'from-primary-500 to-accent-blue' },
                { icon: <FaHandshake />, title: 'Uy tín', desc: 'Minh bạch và đúng cam kết', gradient: 'from-accent-blue to-accent-purple' },
                { icon: <FaLightbulb />, title: 'Đổi mới', desc: 'Luôn cập nhật công nghệ mới', gradient: 'from-accent-purple to-accent-pink' },
                { icon: <FaHeart />, title: 'Tận tâm', desc: 'Đồng hành cùng khách hàng', gradient: 'from-accent-pink to-primary-500' },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect p-6 rounded-2xl card-hover group"
                >
                  <div className={`text-4xl mb-4 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-500 via-accent-blue to-accent-purple text-white p-12 rounded-2xl text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Con số ấn tượng</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '5+', label: 'Năm kinh nghiệm' },
                { number: '100+', label: 'Dự án' },
                { number: '50+', label: 'Khách hàng' },
                { number: '98%', label: 'Hài lòng' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                >
                  <div className="text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
