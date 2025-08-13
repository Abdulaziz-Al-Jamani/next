"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import "../styles/style.scss";

const works = [
  {
    id: 1,
    title: "تصميم موقع شركة",
    category: "تصميم",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "تطبيق متجر إلكتروني",
    category: "برمجة",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "هوية بصرية",
    category: "تصميم",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "تطوير لوحة تحكم",
    category: "برمجة",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "حملة إعلانية",
    category: "تسويق",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "تصميم شعار",
    category: "تصميم",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "موقع تعليمي",
    category: "برمجة",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "تصوير منتجات",
    category: "تصوير",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    title: "حملة سوشيال ميديا",
    category: "تسويق",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    title: "موقع طبي",
    category: "برمجة",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    title: "تصميم واجهات",
    category: "تصميم",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    title: "تطوير API",
    category: "برمجة",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 13,
    title: "مونتاج فيديو",
    category: "تصوير",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 14,
    title: "تحسين SEO",
    category: "تسويق",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 15,
    title: "تصميم بروشور",
    category: "تصميم",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 16,
    title: "تطوير متجر",
    category: "برمجة",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 17,
    title: "جلسة تصوير",
    category: "تصوير",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 18,
    title: "إعلانات Google",
    category: "تسويق",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("الكل");

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const categories = ["الكل", ...new Set(works.map((work) => work.category))];
  const filteredWorks =
    filter === "الكل"
      ? works
      : works.filter((work) => work.category === filter);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* العنوان الرئيسي */}
      <div className="text-center mb-10" data-aos="fade-up">
        <h1 className="text-4xl font-bold mb-3">أعمالنا</h1>
        <p className="text-gray-600">
          مجموعة من أحدث مشاريعنا في التصميم، البرمجة، التسويق، والتصوير
        </p>
      </div>

      {/* التصنيفات */}
      <div
        className="flex justify-center gap-4 mb-8 flex-wrap"
        data-aos="fade-up"
      >
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              filter === cat
                ? "bg-amber-600 text-white"
                : "bg-gray-100 hover:bg-amber-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* الأعمال */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredWorks.map((work) => (
          <Link href={`/works/${work.id}`} key={work.id}>
            <div
              className="bg-white shadow rounded-lg overflow-hidden cursor-pointer"
              data-aos="zoom-in"
            >
              <img
                src={work.img}
                alt={work.title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform"
              />
              <div className="p-4 me-dir">
                <h3 className="text-lg font-bold">{work.title}</h3>
                <span className="text-sm text-gray-500">{work.category}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
