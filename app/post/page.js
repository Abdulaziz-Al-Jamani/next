"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import "../styles/style.scss";

const posts = [
  {
    id: 1,
    title: "تصميم موقع شركة",
    category: "تصميم",
    excerpt: "مشروع تصميم موقع احترافي لشركة خدمات متعددة.",
    image: "https://picsum.photos/600/400?random=1",
    href: "/Posts/1",
  },
  {
    id: 2,
    title: "تطبيق متجر إلكتروني",
    category: "برمجة",
    excerpt: "تطوير تطبيق متجر إلكتروني كامل مع لوحة تحكم.",
    image: "https://picsum.photos/600/400?random=2",
    href: "/Posts/2",
  },
  {
    id: 3,
    title: "هوية بصرية",
    category: "تصميم",
    excerpt: "تصميم هوية بصرية متكاملة لشركة ناشئة.",
    image: "https://picsum.photos/600/400?random=3",
    href: "/Posts/3",
  },
  // أكمل باقي المشاريع...
];

export default function PortfolioList() {
  const [filter, setFilter] = useState("الكل");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const categories = ["الكل", ...new Set(posts.map((work) => work.category))];
  const filteredPosts =
    filter === "الكل"
      ? posts
      : posts.filter((work) => work.category === filter);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* العنوان */}
      <div className="text-center mb-10" data-aos="fade-up">
        <h1 className="text-4xl font-bold mb-3">أعمالنا</h1>
        <p className="text-gray-600">
          مجموعة من أحدث مشاريعنا في التصميم، البرمجة، التسويق، والتصوير
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* الفلاتر */}
        <div className="md:w-1/4">
          {/* في الشاشات الصغيرة: زر dropdown */}
          {/* للشاشات الصغيرة */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full px-4 py-2 bg-amber-600 text-white rounded-lg"
            >
              {filter} ▼
            </button>
            {showDropdown && (
              <div className="mt-2 border rounded-lg shadow bg-white max-h-[80vh] overflow-y-auto">
                {categories.map((cat, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setFilter(cat);
                      setDropdownOpen(false);
                    }}
                    className={`block w-full text-right px-4 py-2 ${
                      filter === cat ? "bg-amber-100" : "hover:bg-gray-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* في الشاشات الكبيرة: قائمة جانبية */}
          <div className="hidden md:flex flex-col gap-3" data-aos="fade-up">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg border text-right transition ${
                  filter === cat
                    ? "bg-amber-600 text-white"
                    : "bg-gray-100 hover:bg-amber-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* عرض البوستات */}
        <div className="md:w-3/4 space-y-6">
          {filteredPosts.map(
            ({ id, title, excerpt, image, href, category }) => (
              <Link
                key={id}
                href={href}
                className="bg-amber-100 p-6 flex flex-col md:flex-row gap-6 me-dir no-underline hover:underline rounded-lg shadow-lg"
                data-aos="fade-up"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full md:w-1/3 rounded-lg object-cover h-48 md:h-auto"
                  loading="lazy"
                />
                <div className="md:w-2/3 flex flex-col justify-center text-gray-900">
                  <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{category}</p>
                  <p className="duration-200">{excerpt}</p>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}
