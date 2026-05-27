"use client";

import { useState } from "react";
import Image from "next/image";
import { BASE_PATH } from '@/config/constants';
import { ArrowLeft, ArrowRight } from "lucide-react";

const highlightImages = [
  "dok1.webp",
  "dok2.webp",
  "dok3.webp",
  "dok4.webp",
  "dok5.webp"
];

export default function Highlights() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % highlightImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + highlightImages.length) % highlightImages.length);
  };

  const currentImages = [
    highlightImages[currentIndex],
    highlightImages[(currentIndex + 1) % highlightImages.length],
    highlightImages[(currentIndex + 2) % highlightImages.length],
  ];

  return (
    <section
      className="relative text-white overflow-hidden flex flex-col items-center w-full"
      style={{
        background: "#000923",
        paddingTop: "clamp(130px, 12vw, 220px)",
        paddingBottom: "clamp(80px, 10vh, 120px)",
      }}
    >
      <div className="hidden md:block absolute left-0 -translate-y-1/2 pointer-events-none"
        style={{ top: "60%", width: "clamp(200px, 40vw, 600px)", height: "clamp(200px, 40vw, 600px)", opacity: 0.5 }}
      >
        <div className="w-full h-full bg-[#7c3aed] rounded-full blur-[120px] -translate-x-1/2"></div>
      </div>
      <div className="hidden md:block absolute right-0 -translate-y-1/2 pointer-events-none"
        style={{ top: "60%", width: "clamp(200px, 40vw, 600px)", height: "clamp(200px, 40vw, 600px)", opacity: 0.5 }}
      >
        <div className="w-full h-full bg-[#7c3aed] rounded-full blur-[120px] translate-x-1/2"></div>
      </div>

      <div className="flex flex-col items-center text-center relative z-20 px-4 w-full"
        style={{ marginBottom: "clamp(30px, 6vh, 60px)" }}
      >
        <h2
          className="font-bold leading-tight"
          style={{ fontFamily: "'Zen Dots', cursive", fontSize: "clamp(20px, 4vw, 54px)", marginBottom: "clamp(12px, 2vh, 24px)" }}
        >
          <span style={{ color: "#ffffff" }}>N I C </span>
          <span style={{
            color: "#00ffff",
            filter: "drop-shadow(0 0 15px rgba(0,255,255,0.6))"
          }}>
            Highlights
          </span>
        </h2>
        <p
          className="text-gray-300 relative z-10 mx-auto px-6 text-center"
          style={{ maxWidth: "700px", fontSize: "clamp(14px, 2vw, 22px)" }}
        >
          Sekilas tentang momen-momen menarik yang menangkap
          <br className="hidden md:block" />
          energi dan kreativitas para peserta N-I-C
        </p>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[1000px] px-4 md:px-12">
        <div className="flex items-center justify-center w-full gap-4 md:gap-12">
          
          <button 
            onClick={handlePrev}
            className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 border-[3px] border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 md:w-8 md:h-8 text-white stroke-[3px]" />
          </button>

          <div className="flex flex-col md:flex-row gap-3 md:gap-6 w-full max-w-[800px]">
            <div className="flex flex-col gap-3 md:gap-6 flex-1">
              <div className="bg-gray-300 rounded-xl w-full aspect-[4/3] relative overflow-hidden"></div>
              <div className="bg-gray-300 rounded-xl w-full aspect-[4/3] relative overflow-hidden"></div>
            </div>

            <div className="bg-gray-300 rounded-xl flex-1 relative overflow-hidden"></div>
          </div>

          <button 
            onClick={handleNext}
            className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 border-[3px] border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ArrowRight className="w-5 h-5 md:w-8 md:h-8 text-white stroke-[3px]" />
          </button>

        </div>
      </div>
    </section>
  );
}
