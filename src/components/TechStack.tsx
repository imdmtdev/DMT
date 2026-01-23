'use client';
import { motion } from 'framer-motion';
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiPostgresql, SiFigma, SiVercel } from 'react-icons/si';

const technologies = [
  { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-black' },
  { name: 'React', icon: <SiReact />, color: 'text-blue-500' },
  { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
  { name: 'TailwindCSS', icon: <SiTailwindcss />, color: 'text-cyan-500' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-green-600' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-700' },
  { name: 'Figma', icon: <SiFigma />, color: 'text-purple-600' },
  { name: 'Vercel', icon: <SiVercel />, color: 'text-black' },
];

export default function TechStack() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Công nghệ chúng tôi sử dụng</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Luôn cập nhật và sử dụng các công nghệ hiện đại nhất
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-xl flex flex-col items-center justify-center card-hover group"
            >
              <div className={`text-5xl mb-3 ${tech.color} group-hover:scale-110 transition-transform`}>
                {tech.icon}
              </div>
              <span className="text-sm font-semibold text-gray-700 text-center">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
