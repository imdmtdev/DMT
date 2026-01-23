'use client';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

function AnimatedCounter({ value, label, suffix = '', prefix = '' }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + Math.floor(latest) + suffix;
      }
    });
  }, [springValue, prefix, suffix]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div ref={ref} className="text-5xl md:text-6xl font-bold gradient-text mb-2">
        0
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </motion.div>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <AnimatedCounter value={5} label="Năm kinh nghiệm" suffix="+" />
          <AnimatedCounter value={100} label="Dự án hoàn thành" suffix="+" />
          <AnimatedCounter value={50} label="Khách hàng" suffix="+" />
          <AnimatedCounter value={98} label="Hài lòng" suffix="%" />
        </div>
      </div>
    </section>
  );
}
