import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export const metadata: Metadata = {
  title: 'Blog - Kiến thức thiết kế website & SEO | DMT',
  description: 'Chia sẻ kiến thức về thiết kế website, SEO, UI/UX và chuyển đổi số từ đội ngũ chuyên gia DMT.',
};

export default function BlogPage() {
  const categories = ['Tất cả', 'SEO', 'Thiết kế', 'Performance', 'UI/UX', 'Marketing', 'Công nghệ'];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Blog & Kiến thức</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chia sẻ kiến thức về thiết kế website, SEO và chuyển đổi số
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-6 py-2 rounded-full border-2 border-primary-200 text-gray-700 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="glass-effect rounded-2xl overflow-hidden card-hover group">
              <div className="h-48 bg-gradient-to-br from-primary-500 to-accent-blue flex items-center justify-center">
                <span className="text-white text-6xl font-bold opacity-20">{post.category.charAt(0)}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}/`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span>{post.author}</span> • <span>{post.date}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="text-primary-600 font-semibold hover:underline"
                  >
                    Đọc tiếp →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
