'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaAward, FaUsers } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-blue/10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-purple/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-accent-pink/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="inline-block px-4 py-2 bg-primary-50 border border-primary-200 rounded-lg">
              <span className="text-primary-600 font-semibold text-sm">
                Chuyên gia thiết kế website hàng đầu
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
          >
            <span className="gradient-text">DMT</span> – Tạo ra giá trị{' '}
            <span className="relative">
              <span className="gradient-text">kinh doanh</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                <path d="M1 9C50 3 100 1 150 3C200 5 250 7 299 9" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#26469F" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            {' '}thực sự
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Chúng tôi không chỉ thiết kế website đẹp – DMT xây dựng nền tảng số giúp doanh nghiệp{' '}
            <span className="font-semibold text-primary-600">tăng trưởng bền vững</span>, tối ưu SEO, tốc độ và chuyển đổi khách hàng.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link href="/contact/" className="btn-primary group">
              Nhận tư vấn miễn phí 1-1
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link href="/projects/" className="btn-secondary group">
              Xem dự án đã triển khai
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-500 text-sm mb-4">Được tin tưởng bởi các doanh nghiệp trên toàn quốc</p>
            <div className="flex flex-wrap justify-center gap-6 items-center opacity-40">
              {['Phở Ông Hùng', 'Spa Hoàng Gia', 'Nội Thất Minh Anh', 'Gym Fitness Pro', 'Cafe The Morning'].map((company) => (
                <div key={company} className="text-lg font-semibold text-gray-400">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
