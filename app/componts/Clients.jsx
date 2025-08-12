// components/Clients.jsx
"use client";
// components/ClientsMarquee.jsx
// components/ClientsMarquee.jsx
export default function ClientsMarquee() {
  const clients = [
    {
      id: 1,
      name: "شركة أرامكو",
      logo: "https://i.ibb.co/6y78GwN/aramco-logo.png",
      website: "https://www.aramco.com",
    },
    {
      id: 2,
      name: "سابك",
      logo: "https://i.ibb.co/6FtCpHk/sabic-logo.png",
      website: "https://www.sabic.com",
    },
    {
      id: 3,
      name: "STC",
      logo: "https://i.ibb.co/VtpTmwF/stc-logo.png",
      website: "https://www.stc.com.sa",
    },
    {
      id: 4,
      name: "زين",
      logo: "https://i.ibb.co/g97D92p/zain-logo.png",
      website: "https://www.zain.com",
    },
  ];

  // نكرر العملاء 3 مرات لضمان الاستمرارية بدون فراغ
  const repeatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="overflow-hidden py-8 ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-amber-600">
          عملاؤنا
        </h2>
        <div className="relative">
          <div
            className="flex animate-marquee whitespace-nowrap"
            style={{ gap: "3rem" }}
          >
            {repeatedClients.map(({ id, name, logo, website }, index) => (
              <a
                key={id + "-" + index}
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                title={name}
              >
                <img
                  src={logo}
                  alt={name}
                  className="h-16 object-contain"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(-33.3333%);
          }
          100% {
            transform: translateX(33.3333%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
