'use client';
import Link from 'next/link';
import { FaPhone, FaTelegram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function CTAFixed() {
  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-3">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <Link
          href="/contact/"
          className="flex items-center gap-2 bg-gradient-to-r from-primary-500 to-accent-blue text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 group"
        >
          <FaPhone className="group-hover:rotate-12 transition-transform" />
          <span className="font-semibold hidden sm:inline">Tư vấn ngay</span>
        </Link>
      </motion.div>
      
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
      >
        <a
          href="https://t.me/DagTri_Dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent-blue to-accent-purple text-white rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110"
          title="Chat qua Telegram"
        >
          <FaTelegram size={20} />
        </a>
      </motion.div>
    </div>
  );
}
