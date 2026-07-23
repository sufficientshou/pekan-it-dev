"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ExhibitionItem {
  id: string;
  author: string;
  title: string;
  description?: string;
  image?: string;
}

const EXHIBITION_DATA: ExhibitionItem[] = [
  {
    id: "sawit-1",
    author: "Segera Hadir",
    title: "Segera Hadir",
    description: "",
    image: "",
  },
  {
    id: "sawit-2",
    author: "Segera Hadir",
    title: "Segera Hadir",
    description: "",
    image: "",
  },
  {
    id: "sawit-3",
    author: "Segera Hadir",
    title: "Segera Hadir",
    description: "",
    image: "",
  },
  {
    id: "sawit-4",
    author: "Segera Hadir",
    title: "Segera Hadir",
    description: "",
    image: "",
  },
  {
    id: "sawit-5",
    author: "Segera Hadir",
    title: "Segera Hadir",
    description: "",
    image: "",
  },
  {
    id: "sawit-6",
    author: "Segera Hadir",
    title: "Segera Hadir",
    description: "",
    image: "",
  },
  {
    id: "sawit-7",
    author: "Segera Hadir",
    title: "Segera Hadir",
    description: "",
    image: "",
  },
];

function ExhibitionCard({ item }: { item: ExhibitionItem }) {
  return (
    <div
      className="relative flex flex-col group w-full max-w-[340px] min-h-[440px] rounded-[24px] overflow-hidden transition-all duration-300 hover:-translate-y-2 select-none"
      style={{
        background: "#1b233d",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
      }}
    >
      <div className="relative w-full px-6 pt-6 pb-0">
        <div className="relative rounded-[16px] overflow-hidden w-[92%] aspect-[290/170] left-[4%] sm:w-[290px] sm:h-[170px] sm:left-[22px] top-[20px]">
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-[#131b2e] flex items-center justify-center">
              <span
                className="text-white text-lg sm:text-xl font-bold tracking-wider text-center"
                style={{
                  fontFamily: "'Zen Dots', sans-serif",
                  opacity: 0.9,
                }}
              >
                Segera Hadir
              </span>
            </div>
          )}

          <div className="absolute top-0 left-0 bg-[#1b233d] px-3.5 py-1.5 rounded-br-[16px] flex items-center gap-1.5 z-20">
            <div
              className="absolute right-[-16px] top-0 w-[16px] h-[16px] bg-transparent pointer-events-none"
              style={{ boxShadow: "-8px -8px 0 8px #1b233d", borderTopLeftRadius: "16px" }}
            />
            <div
              className="absolute left-0 bottom-[-16px] w-[16px] h-[16px] bg-transparent pointer-events-none"
              style={{ boxShadow: "-8px -8px 0 8px #1b233d", borderTopLeftRadius: "16px" }}
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5 text-gray-300 relative z-10"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <span
              className="text-gray-300 text-[11px] font-medium relative z-10"
              style={{ paddingRight: "clamp(30px, 12vw, 70px)", paddingBottom: "3px" }}
            >
              {item.author}
            </span>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col flex-1 px-5 py-5 pt-4"
        style={{ paddingTop: "50px", paddingLeft: "20px", paddingRight: "20px" }}
      >
        <h3
          className="text-white font-bold mb-2.5"
          style={{
            fontFamily: "'Zen Dots', sans-serif",
            fontSize: "15px",
            letterSpacing: "0.7px",
          }}
        >
          {item.title}
        </h3>

        {item.description ? (
          <p
            className="text-gray-400 text-[13.5px] leading-relaxed mb-6 flex-1"
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          >
            {item.description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default function Exhibition() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(EXHIBITION_DATA.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? EXHIBITION_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === EXHIBITION_DATA.length - 1 ? 0 : prev + 1));
  };

  const visibleItems = [
    EXHIBITION_DATA[currentIndex % EXHIBITION_DATA.length],
    EXHIBITION_DATA[(currentIndex + 1) % EXHIBITION_DATA.length],
    EXHIBITION_DATA[(currentIndex + 2) % EXHIBITION_DATA.length],
  ];

  const activeDotIndex = currentIndex % totalPages;

  return (
    <section id="exhibition" className="relative w-full text-white bg-[#000923] pt-44 sm:pt-60 md:pt-80 pb-16 md:pb-24 overflow-hidden" style={{ marginTop: "160px" }}>
      <div
        className="relative z-10 flex flex-col items-center w-full mx-auto"
        style={{
          paddingLeft: "clamp(16px, 8vw, 120px)",
          paddingRight: "clamp(16px, 8vw, 120px)",
        }}
      >
        <div className="flex flex-col items-center text-center w-full max-w-6xl">
          <h2
            className="font-bold tracking-wide text-center"
            style={{ fontFamily: "'Zen Dots', sans-serif", fontSize: "clamp(32px, 5vw, 56px)" }}
          >
            Innovation{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #5b72ff 0%, #b620e0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Exhibition
            </span>
          </h2>

          <p
            className="text-gray-300 leading-relaxed text-center mt-4 max-w-xl px-4"
            style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "clamp(14px, 2vw, 18px)" }}
          >
            Jelajahi berbagai proyek inovatif hasil karya mahasiswa Informatika UNSIKA.
          </p>
        </div>

        <div className="w-full h-6 md:h-10" />

        <div className="relative flex items-center justify-center w-full max-w-6xl">
          <button
            onClick={handlePrev}
            aria-label="Previous Project"
            className="absolute -left-2 sm:left-0 md:-left-8 lg:-left-12 z-30 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #5b72ff 0%, #b620e0 100%)",
              boxShadow: "0 0 15px rgba(182, 32, 224, 0.4)",
            }}
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>

          <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8 w-full max-w-[1100px] justify-items-center">
            {visibleItems.map((item, idx) => (
              <ExhibitionCard key={`${item.id}-${idx}`} item={item} />
            ))}
          </div>

          <div className="flex md:hidden w-full justify-center">
            <ExhibitionCard item={EXHIBITION_DATA[currentIndex % EXHIBITION_DATA.length]} />
          </div>

          <button
            onClick={handleNext}
            aria-label="Next Project"
            className="absolute -right-2 sm:right-0 md:-right-8 lg:-right-12 z-30 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #5b72ff 0%, #b620e0 100%)",
              boxShadow: "0 0 15px rgba(182, 32, 224, 0.4)",
            }}
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>

        <div className="w-full h-10 md:h-16" />

        <div className="relative z-30 flex items-center justify-center gap-3">
          {EXHIBITION_DATA.map((_, index) => {
            const isActive = index === (currentIndex % EXHIBITION_DATA.length);
            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className="rounded-full transition-all duration-300 cursor-pointer border-0"
                style={{
                  width: isActive ? "32px" : "12px",
                  height: "12px",
                  backgroundColor: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.35)",
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
