import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaYoutube, FaPhone, FaEnvelope, FaTelegram, FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                <img 
                  src="/DMT/icon.jpg" 
                  alt="DMT Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold gradient-text">DMT</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Digital Marketing & Technology - Đối tác công nghệ đáng tin cậy cho doanh nghiệp
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/10 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <FaFacebook size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-accent-blue rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <FaLinkedin size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-red-500 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 relative inline-block">
              Dịch vụ
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-blue rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              <li><Link href="/services/website-doanh-nghiep/" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">→ Website doanh nghiệp</Link></li>
              <li><Link href="/services/landing-page/" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">→ Landing Page</Link></li>
              <li><Link href="/services/web-app/" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">→ Web App / SaaS</Link></li>
              <li><Link href="/services/ui-ux/" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">→ UI/UX Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 relative inline-block">
              Công ty
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-blue rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              <li><Link href="/about/" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">→ Giới thiệu</Link></li>
              <li><Link href="/projects/" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">→ Dự án</Link></li>
              <li><Link href="/blog/" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">→ Blog</Link></li>
              <li><Link href="/contact/" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">→ Liên hệ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 relative inline-block">
              Liên hệ
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-blue rounded-full"></div>
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:0374866008" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <FaPhone size={16} />
                  </div>
                  <span>0374 866 008</span>
                </a>
              </li>
              <li>
                <a href="mailto:dangtriofficial@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent-blue transition-colors">
                    <FaEnvelope size={16} />
                  </div>
                  <span className="text-sm">dangtriofficial@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://t.me/DagTri_Dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent-blue transition-colors">
                    <FaTelegram size={16} />
                  </div>
                  <span>@DagTri_Dev</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              © 2026 DMT. Made with <FaHeart className="text-red-500 animate-pulse" /> in Vietnam
            </p>
            <div className="flex gap-6">
              <Link href="/privacy/" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms/" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
