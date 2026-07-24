"use client";

import { BASE_PATH } from '@/config/constants';
import { GraduationCap, Briefcase } from "lucide-react";

interface SpeakerProps {
  image?: string;
  role?: string;
  name?: string;
  description?: string;
  education?: string;
  experience?: string;
}

export default function Speaker({
  image = `${BASE_PATH}/images/anounce.png`,
  role = "AI & Innovation Expert",
  name = "To Be Announced",
  description = "Pemateri spesial akan segera diumumkan. Nantikan wawasan inspiratif seputar kolaborasi manusia dan AI, inovasi, serta masa depan teknologi.",
  education = "S1 Informatika UNSIKA, 2020 - 2024",
  experience = "Manajer KOPDES, 2026 - Sekarang",
}: SpeakerProps) {
  return (
    <section id="speaker" className="relative w-full text-white bg-[#140222] pb-28 md:pb-36 overflow-hidden" style={{ paddingTop: "clamp(70px, 9vh, 130px)" }}>
      <div 
        className="absolute top-8 -left-28 sm:-left-36 w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.45) 0%, rgba(88, 28, 135, 0.15) 50%, transparent 70%)",
          filter: "blur(55px)",
        }}
      />

      <div 
        className="absolute bottom-8 -right-28 sm:-right-36 w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(109, 40, 217, 0.12) 50%, transparent 70%)",
          filter: "blur(55px)",
        }}
      />

      <div 
        className="relative z-10 flex flex-col items-center w-full mx-auto"
        style={{ 
          paddingLeft: "clamp(16px, 8vw, 120px)", 
          paddingRight: "clamp(16px, 8vw, 120px)" 
        }}
      >
        <div className="flex flex-col items-center text-center w-full max-w-6xl">
          <h2
            className="font-bold tracking-wide text-center"
            style={{ fontFamily: "'Zen Dots', sans-serif", fontSize: "clamp(34px, 5.5vw, 58px)" }}
          >
            Featured{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #60a5fa 0%, #8b5cf6 50%, #b620e0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Speaker
            </span>
          </h2>

          <div 
            className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 lg:gap-24 w-full"
            style={{ marginTop: "clamp(45px, 7vh, 90px)" }}
          >
            <div className="relative flex justify-center items-end flex-shrink-0 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] translate-x-3 md:translate-x-8">
              <img
                src={image}
                alt={name}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] h-auto object-contain object-bottom z-10"
                style={{ maxHeight: "95%" }}
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                }}
              />
            </div>

            <div className="flex flex-col text-left items-start w-full md:flex-1 max-w-2xl md:translate-x-6">
              <span
                className="text-[#60a5fa] font-medium tracking-wide mb-3 text-left block"
                style={{ fontFamily: "'Zen Dots', sans-serif", fontSize: "clamp(14px, 1.8vw, 20px)" }}
              >
                {role}
              </span>

              <h3
                className="text-white font-bold leading-tight text-left"
                style={{ 
                  fontFamily: "'Zen Dots', sans-serif", 
                  fontSize: "clamp(24px, 3.5vw, 42px)",
                  marginBottom: "clamp(20px, 3vw, 36px)"
                }}
              >
                {name}
              </h3>

              <p 
                className="text-gray-300 leading-relaxed text-left max-w-xl"
                style={{ 
                  fontSize: "clamp(13px, 1.5vw, 16px)"
                }}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
