"use client";

import { useState } from "react";
import Image from "next/image";
import { BASE_PATH } from '@/config/constants';
import { X } from "lucide-react";

const highlightImages = [
  "sm1.webp",
  "sm2.webp",
  "sm3.webp",
  "sm4.webp",
  "sm5.webp",
  "sm6.webp",
];

export default function Highlight() {
  const displayedImages = highlightImages.slice(0, 4);
  const remainingCount = highlightImages.length - 4;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="highlight"
      className="relative text-white overflow-hidden flex flex-col items-center w-full"
      style={{
        background: "#140222",
        paddingTop: "clamp(100px, 10vw, 160px)",
        paddingBottom: "clamp(60px, 8vh, 100px)",
      }}
    >
      <div 
        className="absolute top-1/2 left-0 w-[400px] sm:w-[550px] h-[400px] sm:h-[550px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.28) 0%, rgba(88, 28, 135, 0.12) 55%, transparent 75%)",
          filter: "blur(75px)",
          transform: "translate(-35%, -50%)"
        }}
      />

      <div 
        className="absolute top-1/2 right-0 w-[400px] sm:w-[550px] h-[400px] sm:h-[550px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(109, 40, 217, 0.1) 55%, transparent 75%)",
          filter: "blur(75px)",
          transform: "translate(35%, -50%)"
        }}
      />

      <div className="flex flex-col items-center text-center relative z-20 px-4 w-full"
        style={{ marginBottom: "clamp(30px, 6vh, 60px)" }}
      >
        <h2
          className="font-bold leading-tight"
          style={{ fontFamily: "'Zen Dots', cursive", fontSize: "clamp(30px, 4vw, 50px)", marginBottom: "clamp(12px, 2vh, 24px)" }}
        >
          <span style={{ color: "#ffffff" }}>Event </span>
          <span style={{
            background: "linear-gradient(90deg, #60a5fa 0%, #8b5cf6 50%, #b620e0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Highlights
          </span>
        </h2>
        <p
          className="text-gray-300 relative z-10 mx-auto px-6 text-center"
          style={{ maxWidth: "700px", fontSize: "clamp(13px, 1.5vw, 17px)" }}
        >
          Sekilas momen inspiratif dari penyelenggaraan Tech Talks
          <br className="hidden md:block" />
          dan pameran inovasi mahasiswa.
        </p>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-[90%] sm:w-[85%] max-w-[800px]">
        <div className="flex flex-col gap-3 md:gap-6 w-full">
          <div className="flex gap-3 md:gap-6 w-full h-[110px] sm:h-[160px] md:h-[280px]">
            <div 
              className="bg-gray-300 rounded-xl md:rounded-2xl flex-[3] relative overflow-hidden group cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setIsModalOpen(true)}
            >
              {displayedImages[0] && (
                <Image src={`${BASE_PATH}/images/${displayedImages[0]}`} alt="Highlight 1" fill className="object-cover" />
              )}
            </div>
            <div 
              className="bg-gray-300 rounded-xl md:rounded-2xl flex-[2] relative overflow-hidden group cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setIsModalOpen(true)}
            >
              {displayedImages[1] && (
                <Image src={`${BASE_PATH}/images/${displayedImages[1]}`} alt="Highlight 2" fill className="object-cover" />
              )}
            </div>
          </div>
          <div className="flex gap-3 md:gap-6 w-full h-[110px] sm:h-[160px] md:h-[280px]">
            <div 
              className="bg-gray-300 rounded-xl md:rounded-2xl flex-[2] relative overflow-hidden group cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setIsModalOpen(true)}
            >
              {displayedImages[2] && (
                <Image src={`${BASE_PATH}/images/${displayedImages[2]}`} alt="Highlight 3" fill className="object-cover" />
              )}
            </div>
            <div 
              className="bg-gray-300 rounded-xl md:rounded-2xl flex-[3] relative overflow-hidden group cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              {displayedImages[3] && (
                <Image src={`${BASE_PATH}/images/${displayedImages[3]}`} alt="Highlight 4" fill className="object-cover" />
              )}
              {remainingCount > 0 && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center hover:bg-black/50 transition-colors">
                  <span className="text-white text-3xl md:text-5xl font-semibold">
                    +{remainingCount}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex flex-col justify-center items-center backdrop-blur-sm">
          <button 
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-gray-300 z-50 p-2 bg-white/10 rounded-full transition-colors hover:bg-white/20"
          >
            <X size={28} />
          </button>
          
          <div 
            className="w-full overflow-x-auto px-6 py-8 flex gap-4 md:gap-8 items-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
          >
            <div className="w-[10vw] flex-shrink-0" /> 
            {highlightImages.map((img, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 w-[75vw] md:w-[600px] aspect-[4/3] relative rounded-xl overflow-hidden shadow-2xl"
                style={{ scrollSnapAlign: "center" }}
              >
                <Image src={`${BASE_PATH}/images/${img}`} alt={`Gallery ${idx + 1}`} fill className="object-cover" />
              </div>
            ))}
            <div className="w-[10vw] flex-shrink-0" /> 
          </div>
        </div>
      )}
    </section>
  );
}
