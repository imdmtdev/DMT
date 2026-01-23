import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dự án tiêu biểu DMT đã triển khai',
  description: 'Khám phá các dự án website thành công mà DMT đã thực hiện cho khách hàng trong nhiều lĩnh vực khác nhau.',
};

const projects = [
  {
    title: 'Website Nhà Hàng Phở Ông Hùng',
    category: 'Nhà hàng & Ẩm thực',
    description: 'Website giới thiệu nhà hàng với tính năng đặt bàn online, menu điện tử',
    result: '+210% lượt đặt bàn online, +150% traffic',
    tech: 'Next.js, TailwindCSS, Node.js',
  },
  {
    title: 'Website Spa Hoàng Gia',
    category: 'Spa & Beauty',
    description: 'Website spa cao cấp với hệ thống booking dịch vụ tự động',
    result: '+180% booking qua website, +2.5x doanh thu',
    tech: 'React, Node.js, PostgreSQL',
  },
  {
    title: 'Website Nội Thất Minh Anh',
    category: 'Nội thất',
    description: 'Website showroom nội thất với gallery sản phẩm và báo giá online',
    result: '+3.5x tỷ lệ chuyển đổi, +200% yêu cầu báo giá',
    tech: 'Next.js, TypeScript, Strapi CMS',
  },
  {
    title: 'Website Gym Fitness Pro',
    category: 'Thể thao & Sức khỏe',
    description: 'Website phòng gym với đăng ký gói tập online và lịch tập',
    result: '+120% đăng ký thành viên mới',
    tech: 'Next.js, TailwindCSS, Firebase',
  },
  {
    title: 'Website Cafe The Morning',
    category: 'Cafe & Bakery',
    description: 'Website cafe với menu online và đặt hàng trước',
    result: '+90% đơn hàng online, +160% traffic',
    tech: 'React, Node.js, MongoDB',
  },
  {
    title: 'Website Fashion House VN',
    category: 'Thời trang',
    description: 'Website shop thời trang với catalog sản phẩm và giỏ hàng',
    result: '+250% doanh thu online',
    tech: 'Next.js, Shopify API, TailwindCSS',
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Dự án tiêu biểu</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những câu chuyện thành công cùng khách hàng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold">
                {project.title}
              </div>
              <div className="p-6">
                <div className="text-sm text-primary font-semibold mb-2">{project.category}</div>
                <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="font-semibold text-green-600 mb-2">Kết quả:</div>
                  <p className="text-gray-700">{project.result}</p>
                </div>
                <div>
                  <div className="font-semibold mb-2">Công nghệ:</div>
                  <p className="text-gray-600 text-sm">{project.tech}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
