'use client';
import { motion } from 'framer-motion';
import { clients } from '@/data/clients';

export default function Clients() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Khách hàng tiêu biểu</span>
          </h2>
          <p className="text-xl text-gray-600">Đồng hành cùng các doanh nghiệp vừa và nhỏ trên toàn quốc</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-xl flex flex-col items-center justify-center hover:shadow-xl transition-all group"
            >
              <div className="w-full h-20 flex items-center justify-center mb-4">
                <div className="text-4xl font-bold text-gray-300 group-hover:text-primary-500 transition-colors">
                  {client.name.charAt(0)}
                </div>
              </div>
              <h3 className="font-bold text-gray-800 text-center mb-1">{client.name}</h3>
              <p className="text-sm text-gray-500 text-center">{client.industry}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Và hơn <span className="font-bold text-primary-600">50+ doanh nghiệp vừa và nhỏ</span> khác trên toàn quốc
          </p>
          <p className="text-sm text-gray-500 italic">
            Từ nhà hàng, spa, phòng gym đến cửa hàng thời trang, trung tâm giáo dục...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
