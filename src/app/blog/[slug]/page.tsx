import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Bài viết không tồn tại',
    };
  }

  return {
    title: `${post.title} | DMT Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
          >
            ← Quay lại Blog
          </Link>

          <article className="glass-effect rounded-2xl overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-primary-500 via-accent-blue to-accent-purple flex items-center justify-center">
              <h1 className="text-5xl font-bold text-white text-center px-8">{post.title}</h1>
            </div>

            <div className="p-12">
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
                <span className="bg-primary-100 text-primary-600 px-4 py-2 rounded-full font-semibold">
                  {post.category}
                </span>
                <span className="text-gray-600">{post.author}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">{post.date}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">{post.readTime}</span>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  {post.excerpt}
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Giới thiệu</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Trong thời đại số hóa, việc có một website chuyên nghiệp không chỉ là lựa chọn mà là điều tất yếu cho mọi doanh nghiệp. 
                  Bài viết này sẽ giúp bạn hiểu rõ hơn về chủ đề quan trọng này.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Tại sao điều này quan trọng?</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Website là bộ mặt trực tuyến của doanh nghiệp bạn. Một website được thiết kế tốt có thể:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li>Tăng độ tin cậy và uy tín thương hiệu</li>
                  <li>Cải thiện trải nghiệm người dùng</li>
                  <li>Tăng tỷ lệ chuyển đổi khách hàng</li>
                  <li>Tối ưu hóa chi phí marketing</li>
                  <li>Mở rộng thị trường tiềm năng</li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6">Các bước thực hiện</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Để đạt được kết quả tốt nhất, bạn cần tuân theo quy trình chuyên nghiệp:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
                  <li>Phân tích mục tiêu và đối tượng khách hàng</li>
                  <li>Lập kế hoạch và thiết kế wireframe</li>
                  <li>Phát triển và tối ưu hóa</li>
                  <li>Kiểm tra và triển khai</li>
                  <li>Theo dõi và cải tiến liên tục</li>
                </ol>

                <h2 className="text-3xl font-bold mt-12 mb-6">Kết luận</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Việc đầu tư vào một website chất lượng là quyết định đúng đắn cho sự phát triển bền vững của doanh nghiệp. 
                  Hãy liên hệ với DMT để được tư vấn chi tiết về giải pháp phù hợp nhất cho bạn.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary-100 hover:text-primary-600 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-r from-primary-500 to-accent-blue text-white p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4">Cần tư vấn thêm?</h3>
                <p className="mb-6 opacity-90">
                  Liên hệ với chúng tôi để được tư vấn miễn phí về dự án của bạn
                </p>
                <Link
                  href="/contact/"
                  className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-bold hover:scale-105 transition-transform"
                >
                  Liên hệ ngay
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
