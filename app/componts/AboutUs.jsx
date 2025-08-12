"use client";
import "../styles/style.scss";
export default function AboutUs() {
  const items = [
    {
      title: "رؤيتنا",
      description:
        "أن نكون الشركة الرائدة في الابتكار التقني على مستوى المنطقة والعالم.",
    },
    {
      title: "مهمتنا",
      description:
        "تقديم حلول تقنية متكاملة تساعد عملائنا على النمو والنجاح المستدام.",
    },
    {
      title: "مهمتنا",
      description:
        "تقديم حلول تقنية متكاملة تساعد عملائنا على النمو والنجاح المستدام.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-center flex items-center flex-col me-dir ">
      <h2 className="text-4xl font-bold mb-6 text-amber-600">من نحن</h2>
      <p className="text-lg text-gray-900 dark:text-gray-700 leading-relaxed max-w-3xl mx-auto md:mx-0">
        نحن فريق من المحترفين ملتزمون بتقديم أفضل الحلول التقنية لخدمة عملائنا.
        نعمل بشغف واحترافية لنساعدك على تحقيق أهدافك وتطوير أعمالك بأحدث
        التقنيات وأفضل الممارسات. خبرتنا الطويلة تتيح لنا توفير دعم متكامل وخدمة
        عالية الجودة تلبي احتياجاتك.
      </p>
      <div className="mt-10 flex justify-center md:justify-start gap-6 flex-wrap">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-amber-100 rounded-lg p-6 shadow-md w-60"
          >
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-900 dark:text-gray-700">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
