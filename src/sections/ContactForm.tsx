'use client';
import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Sẵn sàng bắt đầu dự án?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl mb-8"
          >
            Để lại thông tin - Chúng tôi liên hệ trong 24h
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Họ và tên"
              className="w-full px-6 py-3 rounded-lg text-gray-900"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-6 py-3 rounded-lg text-gray-900"
            />
            <input
              type="tel"
              placeholder="Số điện thoại"
              className="w-full px-6 py-3 rounded-lg text-gray-900"
            />
            <textarea
              placeholder="Mô tả dự án của bạn"
              rows={4}
              className="w-full px-6 py-3 rounded-lg text-gray-900"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Gửi yêu cầu tư vấn
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
