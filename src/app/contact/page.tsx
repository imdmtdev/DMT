'use client';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaTelegram, FaClock, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="pt-32 pb-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-blue/10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-purple/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Liên hệ DMT</span> – Nhận tư vấn miễn phí
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Để lại thông tin - Chúng tôi liên hệ trong <span className="font-bold text-primary-600">24h</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-2xl space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Họ và tên *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Nguyễn Văn A"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="email@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Số điện thoại *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="0374 866 008"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Mô tả dự án</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Mô tả chi tiết về dự án của bạn..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2 group"
              >
                <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                Gửi yêu cầu tư vấn
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 gradient-text">Thông tin liên hệ</h2>
              
              <div className="space-y-6">
                <a href="tel:0374866008" className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-all group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-blue rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FaPhone className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-gray-900">Hotline</div>
                    <div className="text-primary-600 font-medium">0374 866 008</div>
                  </div>
                </a>

                <a href="mailto:dangtriofficial@gmail.com" className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-all group">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-blue to-accent-purple rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FaEnvelope className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-gray-900">Email</div>
                    <div className="text-primary-600 font-medium break-all">dangtriofficial@gmail.com</div>
                  </div>
                </a>

                <a href="https://t.me/DagTri_Dev" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-all group">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-purple to-accent-pink rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FaTelegram className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-gray-900">Telegram</div>
                    <div className="text-primary-600 font-medium">@DagTri_Dev</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-pink to-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-gray-900">Địa chỉ</div>
                    <div className="text-gray-600">Bắc Ninh, Việt Nam</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <FaClock className="text-primary-500 text-2xl" />
                <h3 className="font-bold text-xl">Giờ làm việc</h3>
              </div>
              <div className="space-y-2 text-gray-700">
                <p className="flex justify-between">
                  <span>Thứ 2 - Thứ 6:</span>
                  <span className="font-semibold">9:00 - 18:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Thứ 7:</span>
                  <span className="font-semibold">9:00 - 12:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Chủ nhật:</span>
                  <span className="font-semibold text-red-500">Nghỉ</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
