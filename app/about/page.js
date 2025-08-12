export default function PageAboutUs() {
  return (
    <div className="container mx-auto px-6 py-16 me-dir space-y-16">
      {/* العنوان الرئيسي */}
      <h1 className="text-4xl font-bold mb-6 text-center">من نحن</h1>

      {/* نبذة */}
      <section>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed text-justify">
          نحن فريق محترف متخصص في تقديم أفضل الحلول الرقمية والتقنية التي تساعد
          عملائنا على النجاح والتطور. نؤمن بأن الجودة والابتكار هما أساس عملنا،
          ونسعى دائمًا لتقديم خدمات تلبي تطلعات عملائنا وتحقق أهدافهم.
        </p>
      </section>

      {/* الرؤية والرسالة والقيم */}
      <section className="grid md:grid-cols-3 gap-8">
        {/* بطاقة الرؤية */}
        <div className="bg-yellow-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4 text-amber-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A2 2 0 0119 10v4a2 2 0 01-1.447 1.948L15 14M9 14l-4.553 2.276A2 2 0 015 14v-4a2 2 0 011.447-1.948L9 10m6 0V4m-6 10v6"
              />
            </svg>
            <h2 className="text-xl font-bold mr-3">رؤيتنا</h2>
          </div>
          <p className="text-gray-700 text-justify leading-relaxed">
            أن نكون الرائدين في مجال التكنولوجيا الرقمية وأن نساهم في بناء
            مستقبل أكثر تميزًا وابتكارًا لعملائنا.
          </p>
        </div>

        {/* بطاقة الرسالة */}
        <div className="bg-green-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4 text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h1l2-4h6l2 4h1M12 14v7M9 14h6m-3 0v-7"
              />
            </svg>
            <h2 className="text-xl font-bold mr-3">رسالتنا</h2>
          </div>
          <p className="text-gray-700 text-justify leading-relaxed">
            توفير حلول مبتكرة وفعالة تلبي احتياجات السوق المتغيرة وتساعد عملائنا
            على تحقيق النجاح المستدام.
          </p>
        </div>

        {/* بطاقة القيم */}
        <div className="bg-blue-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4 text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h2 className="text-xl font-bold mr-3">قيمنا</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
            <li>الاحترافية والجودة في كل ما نقدمه.</li>
            <li>الابتكار والتجديد المستمر.</li>
            <li>الشفافية والنزاهة في التعامل.</li>
            <li>التركيز على العميل ورضاه.</li>
          </ul>
        </div>
      </section>

      {/* فريق العمل */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">فريق العمل</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[
            {
              name: "أحمد السالمي",
              role: "مدير المشروع",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "أحمد السالمي",
              role: "مدير المشروع",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "محمد العلي",
              role: "مطور برمجيات",
              img: "https://randomuser.me/api/portraits/men/56.jpg",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* تاريخ الشركة */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">تاريخنا</h2>
        <ol className="border-l-4 border-amber-600 pl-6 space-y-6 text-gray-700">
          <li>
            <span className="font-semibold">2010:</span> تأسست الشركة برؤية
            تقديم حلول تقنية مبتكرة.
          </li>
          <li>
            <span className="font-semibold">2015:</span> توسع الفريق وبدأنا
            مشاريع ضخمة مع عملاء محليين وعالميين.
          </li>
          <li>
            <span className="font-semibold">2020:</span> إطلاق منصتنا الخاصة
            وتقديم خدمات متكاملة عبر الإنترنت.
          </li>
          <li>
            <span className="font-semibold">2025:</span> تعزيز الابتكار والعمل
            على مشاريع مستقبلية في الذكاء الاصطناعي.
          </li>
        </ol>
      </section>

      {/* فيديو تعريفي */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">فيديو تعريفي</h2>
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg max-w-3xl mx-auto">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="فيديو تعريفي"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}
