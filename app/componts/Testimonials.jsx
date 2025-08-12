// components/Testimonials.jsx
"use client";
export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "أحمد العتيبي",
      role: "رئيس قسم التسويق",
      message:
        "خدمة ممتازة وفريق عمل محترف ساعدنا في تطوير أعمالنا بشكل ملحوظ.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "عبدالعزيز محمد",
      role: "مدير المشاريع",
      message: "التزام ودقة في العمل، تجربة تعاون مميزة وأنصح بهم بشدة.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "محمد الحربي",
      role: "مطور ويب",
      message: "التقنيات المستخدمة كانت حديثة والدعم مستمر، حققنا نتائج رائعة.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16  rounded-lg ">
      <h2 className="text-4xl font-bold mb-10 text-center text-amber-600">
        ماذا قالوا عنا
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map(({ id, name, role, message, avatar }) => (
          <div
            key={id}
            className=" dark:bg-amber-100 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            <img
              src={avatar}
              alt={`${name} صورة`}
              className="w-24 h-24 rounded-full mb-4 object-cover"
              loading="lazy"
            />
            <p className="text-gray-900 mb-4 italic">"{message}"</p>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-amber-600">{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
