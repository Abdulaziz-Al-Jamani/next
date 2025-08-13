"use client";
import { useParams } from "next/navigation";

const posts = [
  {
    id: 1,
    title: "تصميم موقع شركة",
    category: "تصميم",
    excerpt: "مشروع تصميم موقع احترافي لشركة خدمات متعددة.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    href: "/Posts/1",
  },
  {
    id: 2,
    title: "تطبيق متجر إلكتروني",
    category: "برمجة",
    excerpt: "تطوير تطبيق متجر إلكتروني كامل مع لوحة تحكم.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    href: "/Posts/2",
  },
  {
    id: 3,
    title: "هوية بصرية",
    category: "تصميم",
    excerpt: "تصميم هوية بصرية متكاملة لشركة ناشئة.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    href: "/Posts/3",
  },
  // أكمل باقي المشاريع...
];

export default function postDetails() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <p className="text-center mt-10">المشروع غير موجود</p>;

  return (
    <div className="container mx-auto px-4 py-10 me-dir">
      <img
        src={post.image}
        alt={post.title}
        className="w-full max-w-3xl mx-auto rounded-lg shadow"
      />
      <h1 className="text-3xl font-bold mt-6">{post.title}</h1>
      <p className="text-gray-500 mb-4">{post.category}</p>
      <p>{post.description}</p>
    </div>
  );
}
