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
  image = `${BASE_PATH}/images/pemateri.png`,
  role = "Vibe Coding Specialist",
  name = "Raika Maulana Dwi Putra, M.Bg.",
  description = "NIC adalah wadah bagi pelajar, mahasiswa dan seluruh masyarakat indonesia untuk bersaing dan menunjukan bakat dan keahlian mereka melalui ajang kompetisi",
  education = "S1 Informatika UNSIKA, 2020 - 2024",
  experience = "Manajer KOPDES, 2026 - Sekarang",
}: SpeakerProps) {
  return (
    <section id="speaker" className="relative w-full text-white bg-[#000923] min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      <div 
        className="relative z-10 flex flex-col items-center w-full mx-auto"
        style={{ 
          paddingLeft: "clamp(16px, 8vw, 120px)", 
          paddingRight: "clamp(16px, 8vw, 120px)" 
        }}
      >
        <div className="flex flex-col items-center text-center w-full max-w-6xl">
          <h2
            className="font-bold tracking-wide text-center mb-16 md:mb-24"
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

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 lg:gap-24 w-full">
            <div className="relative flex justify-center items-end flex-shrink-0 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px]">
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

            <div className="flex flex-col text-left items-start w-full md:flex-1 max-w-2xl md:translate-x-6 md:translate-y-6">
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
                  marginBottom: "clamp(30px, 4.5vw, 60px)"
                }}
              >
                {name}
              </h3>

              <p 
                className="text-gray-300 leading-relaxed text-left max-w-xl"
                style={{ 
                  fontSize: "clamp(13px, 1.5vw, 16px)",
                  marginBottom: "clamp(28px, 4vw, 48px)" 
                }}
              >
                {description}
              </p>

              <div 
                className="flex flex-col gap-4 text-gray-200 font-medium text-left w-full"
                style={{ fontSize: "clamp(13px, 1.5vw, 16px)" }}
              >
                <div className="flex items-center gap-4">
                  <GraduationCap size={22} className="text-[#8b5cf6] flex-shrink-0" />
                  <span className="text-left leading-normal">{education}</span>
                </div>

                <div className="flex items-center gap-4">
                  <Briefcase size={22} className="text-[#8b5cf6] flex-shrink-0" />
                  <span className="text-left leading-normal">{experience}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
