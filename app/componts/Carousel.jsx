"use client";

import { useState, useEffect, useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const timeoutRef = useRef(null);

  // للتحكم بالسحب
  const startX = useRef(0);
  const endX = useRef(0);

  // التنقل التلقائي كل 5 ثواني
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prevIndex) => (prevIndex === length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [current]);

  // تحكم بالكيبورد (يسار/يمين)
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "ArrowLeft") prevSlide();
      else if (e.key === "ArrowRight") nextSlide();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // دوال السحب
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    const deltaX = startX.current - endX.current;
    if (deltaX > 50) {
      nextSlide();
    } else if (deltaX < -50) {
      prevSlide();
    }
  };

  return (
    <div
      className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg select-none my-8"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      tabIndex={0} // لجعل العنصر قابل لاستقبال focus للكيبورد
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide ${index + 1}`}
            className="w-full flex-shrink-0 object-cover h-64 md:h-96"
            loading="lazy"
            draggable={false}
          />
        ))}
      </div>

      {/* أزرار التنقل */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        aria-label="السابق"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        aria-label="التالي"
      >
        ›
      </button>

      {/* النقاط */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-amber-600" : "bg-gray-300"
            }`}
            aria-label={`الشريحة ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
