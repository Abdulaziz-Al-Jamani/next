// components/OurWorks.jsx
"use client";

export default function OurWorks() {
  const projects = [
    {
      id: 1,
      title: "مشروع بناء موقع إلكتروني",
      description: "تصميم وبرمجة موقع حديث وسهل الاستخدام.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "تطوير تطبيق جوال",
      description: "تطبيق أندرويد وiOS بأداء عالي وواجهة جذابة.",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "حملة تسويقية رقمية",
      description: "استراتيجيات تسويق متكاملة لزيادة المبيعات.",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold mb-10 text-center text-amber-600">
        أعمالنا
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map(({ id, title, description, image }) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
