"use client";

import { useState } from "react";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "كيفية تطوير مهارات البرمجة",
    excerpt:
      "تعرف على أفضل الطرق لتطوير مهاراتك البرمجية وتعلم تقنيات جديدة باستمرار.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    href: "/posts/1", // رابط التدوينة
  },
  {
    id: 2,
    title: "أهمية التصميم المتجاوب",
    excerpt:
      "لماذا يجب أن تهتم بتصميم موقعك ليكون متجاوبًا مع جميع الأجهزة وكيف تبدأ.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    href: "/posts/2",
  },
  {
    id: 3,
    title: "أدوات تحسين الإنتاجية",
    excerpt:
      "أفضل الأدوات التي تساعدك على زيادة إنتاجيتك وتنظيم وقتك بشكل فعال.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    href: "/posts/3",
  },
  {
    id: 4,
    title: "نصائح لأمان الويب",
    excerpt:
      "حافظ على موقعك آمناً من الهجمات السيبرانية باتباع هذه النصائح الهامة.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    href: "/posts/4",
  },
];

export default function LatestPostsSlider() {
  const [current, setCurrent] = useState(0);
  const length = posts.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold mb-10 text-center text-amber-600">
        أحدث التدوينات
      </h2>
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {posts.map(({ id, title, excerpt, image, href }) => (
            <Link
              key={id}
              href={href}
              className="min-w-full bg-amber-100 p-6 flex flex-col md:flex-row gap-6 me-dir no-underline hover:underline"
            >
              <img
                src={image}
                alt={title}
                className="w-full md:w-1/3 rounded-lg object-cover h-48 md:h-auto"
                loading="lazy"
              />
              <div className="md:w-2/3 flex flex-col justify-center text-gray-900">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="duration-200">{excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* أزرار التنقل */}
        <button
          onClick={prevSlide}
          aria-label="السابق"
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-amber-600 text-white p-2 rounded-full hover:bg-amber-800 transition"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          aria-label="التالي"
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-amber-600 text-white p-2 rounded-full hover:bg-amber-800 transition"
        >
          ›
        </button>
      </div>
    </section>
  );
}
