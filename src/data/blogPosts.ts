export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'thiet-ke-website-chuan-seo-2026',
    title: 'Thiết kế website chuẩn SEO 2026: Hướng dẫn toàn diện',
    excerpt: 'Khám phá các yếu tố quan trọng để thiết kế website thân thiện với công cụ tìm kiếm trong năm 2026.',
    content: '',
    category: 'SEO',
    date: '24/01/2026',
    author: 'DMT Team',
    readTime: '8 phút đọc',
    image: '/images/blog/seo-2026.jpg',
    tags: ['SEO', 'Web Design', 'Google'],
  },
  {
    slug: 'website-doanh-nghiep-can-gi',
    title: 'Website doanh nghiệp cần những gì để thành công?',
    excerpt: 'Các yếu tố quan trọng để xây dựng website doanh nghiệp chuyên nghiệp và hiệu quả.',
    content: '',
    category: 'Thiết kế',
    date: '20/01/2026',
    author: 'Nguyễn Văn A',
    readTime: '6 phút đọc',
    image: '/images/blog/corporate-website.jpg',
    tags: ['Corporate', 'Web Design', 'Business'],
  },
  {
    slug: 'core-web-vitals-la-gi',
    title: 'Core Web Vitals là gì? Tại sao quan trọng với SEO?',
    excerpt: 'Tìm hiểu về Core Web Vitals và cách tối ưu để cải thiện thứ hạng Google.',
    content: '',
    category: 'Performance',
    date: '18/01/2026',
    author: 'Trần Thị B',
    readTime: '7 phút đọc',
    image: '/images/blog/core-web-vitals.jpg',
    tags: ['Performance', 'SEO', 'Google'],
  },
  {
    slug: 'ui-ux-design-trends-2026',
    title: 'Top 10 xu hướng UI/UX Design năm 2026',
    excerpt: 'Những xu hướng thiết kế giao diện và trải nghiệm người dùng đang thống trị năm 2026.',
    content: '',
    category: 'UI/UX',
    date: '15/01/2026',
    author: 'Lê Văn C',
    readTime: '10 phút đọc',
    image: '/images/blog/ui-ux-trends.jpg',
    tags: ['UI/UX', 'Design', 'Trends'],
  },
  {
    slug: 'landing-page-chuyen-doi-cao',
    title: 'Bí quyết thiết kế Landing Page chuyển đổi cao',
    excerpt: 'Hướng dẫn chi tiết cách tạo landing page có tỷ lệ chuyển đổi cao từ 5-10%.',
    content: '',
    category: 'Marketing',
    date: '12/01/2026',
    author: 'DMT Team',
    readTime: '9 phút đọc',
    image: '/images/blog/landing-page.jpg',
    tags: ['Landing Page', 'Conversion', 'Marketing'],
  },
  {
    slug: 'nextjs-vs-react-chon-gi',
    title: 'Next.js vs React: Nên chọn framework nào cho dự án?',
    excerpt: 'So sánh chi tiết giữa Next.js và React để chọn công nghệ phù hợp.',
    content: '',
    category: 'Công nghệ',
    date: '10/01/2026',
    author: 'Nguyễn Văn D',
    readTime: '12 phút đọc',
    image: '/images/blog/nextjs-react.jpg',
    tags: ['Next.js', 'React', 'JavaScript'],
  },
];
