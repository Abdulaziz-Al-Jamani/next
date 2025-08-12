"use client";
import { useParams } from "next/navigation";

const works = [
  {
    id: 1,
    title: "تصميم موقع شركة",
    category: "تصميم",
    img: "https://picsum.photos/300/200?random=",
  },
  {
    id: 2,
    title: "تطبيق متجر إلكتروني",
    category: "برمجة",
    img: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 3,
    title: "هوية بصرية",
    category: "تصميم",
    img: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 4,
    title: "تطوير لوحة تحكم",
    category: "برمجة",
    img: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 5,
    title: "حملة إعلانية",
    category: "تسويق",
    img: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 6,
    title: "تصميم شعار",
    category: "تصميم",
    img: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 7,
    title: "موقع تعليمي",
    category: "برمجة",
    img: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 8,
    title: "تصوير منتجات",
    category: "تصوير",
    img: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 9,
    title: "حملة سوشيال ميديا",
    category: "تسويق",
    img: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 10,
    title: "موقع طبي",
    category: "برمجة",
    img: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 11,
    title: "تصميم واجهات",
    category: "تصميم",
    img: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 12,
    title: "تطوير API",
    category: "برمجة",
    img: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 13,
    title: "مونتاج فيديو",
    category: "تصوير",
    img: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 14,
    title: "تحسين SEO",
    category: "تسويق",
    img: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 15,
    title: "تصميم بروشور",
    category: "تصميم",
    img: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 16,
    title: "تطوير متجر",
    category: "برمجة",
    img: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 17,
    title: "جلسة تصوير",
    category: "تصوير",
    img: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 18,
    title: "إعلانات Google",
    category: "تسويق",
    img: "https://picsum.photos/300/200?random=3",
  },
];

export default function WorkDetails() {
  const { id } = useParams();
  const work = works.find((w) => w.id === Number(id));

  if (!work) return <p className="text-center mt-10">المشروع غير موجود</p>;

  return (
    <div className="container mx-auto px-4 py-10 me-dir">
      <img
        src={work.img}
        alt={work.title}
        className="w-full max-w-3xl mx-auto rounded-lg shadow"
      />
      <h1 className="text-3xl font-bold mt-6">{work.title}</h1>
      <p className="text-gray-500 mb-4">{work.category}</p>
      <p>{work.description}</p>
    </div>
  );
}
