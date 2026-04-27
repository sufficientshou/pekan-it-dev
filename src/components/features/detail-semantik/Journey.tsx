"use client";

import { useState } from "react";
import { BASE_PATH } from '@/config/constants';

const tabs = ["Desain Grafis", "Typing Competition", "Competitive Programming"];

const timelineData: Record<string, Array<{title: string, date: string, top: number, left: number}>> = {
  "Desain Grafis": [
    { title: "Pendaftaran", date: "18 April - 1 Mei 2026", top: 126, left: 300 },
    { title: "Pengumpulan Karya", date: "3 Mei 2026", top: 276, left: 1000 },
    { title: "Technical Meeting", date: "7 Mei 2026", top: 426, left: 300 },
    { title: "Presentasi & Pengumuman Pemenang", date: "9 Mei 2026", top: 576, left: 1000 },
  ],
  "Typing Competition": [
    { title: "Pendaftaran", date: "18 April - 1 Mei 2026", top: 126, left: 300 },
    { title: "Technical Meeting", date: "7 Mei 2026", top: 326, left: 1000 },
    { title: "Perlombaan & Pengumuman Pemenang", date: "9 Mei 2026", top: 485, left: 300 },
  ],
  "Competitive Programming": [
    { title: "Pendaftaran", date: "18 April - 1 Mei 2026", top: 126, left: 300 },
    { title: "Technical Meeting", date: "7 Mei 2026", top: 326, left: 1000 },
    { title: "Perlombaan & Pengumuman Pemenang", date: "9 Mei 2026", top: 485, left: 300 },
  ],
};

function TimelineCard({
  top,
  left,
  title,
  date,
}: {
  top: number;
  left: number;
  title: string;
  date: string;
}) {
  return (
    <div
      className="absolute flex flex-col justify-between"
      style={{
        top,
        left,
        width: "266px",
        minHeight: "137px",
        padding: "20px 20px",
        borderRadius: "16px",
        background:
          "linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%), linear-gradient(105deg, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0) 100%)",
        backdropFilter: "blur(6px) brightness(100%)",
        boxShadow: "inset 0px 1px 2px rgba(255,255,255,0.1)",
        border: "2px solid transparent",
        backgroundClip: "padding-box",
        gap: "10px",
      }}
    >
      {/* Gradient border overlay */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          padding: "2px",
          background: "linear-gradient(105deg, rgba(16,230,241,0.8) 0%, rgba(208,0,203,0.4) 100%)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          borderRadius: "16px",
        }}
      />

      <span
        className="leading-snug"
        style={{
          fontFamily: "'Zen Dots', sans-serif",
          fontSize: "16px",
          fontWeight: 400,
          background: "linear-gradient(340deg, rgba(208,0,203,1) 0%, rgba(16,230,241,1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "none",
          filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))",
          wordBreak: "break-word",
        }}
      >
        {title}
      </span>

      <span
        className="text-white"
        style={{
          fontFamily: "'Zen Dots', sans-serif",
          fontSize: "13px",
          fontWeight: 400,
          textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
          lineHeight: 1.4,
        }}
      >
        {date}
      </span>
    </div>
  );
}

function TimelineCardMobile({
  title,
  date,
}: {
  title: string;
  date: string;
}) {
  return (
    <div
      className="flex flex-col justify-between w-full max-w-[340px]"
      style={{
        padding: "24px 20px",
        borderRadius: "16px",
        background:
          "linear-gradient(0deg, rgba(0,9,35,1) 0%, rgba(0,9,35,1) 100%), linear-gradient(105deg, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0) 100%)",
        backdropFilter: "blur(6px) brightness(100%)",
        boxShadow: "inset 0px 1px 2px rgba(255,255,255,0.1)",
        border: "2px solid transparent",
        backgroundClip: "padding-box",
        position: "relative",
      }}
    >
      {/* Gradient border overlay */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          padding: "2px",
          background: "linear-gradient(105deg, rgba(16,230,241,0.8) 0%, rgba(208,0,203,0.4) 100%)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          borderRadius: "16px",
        }}
      />

      <span
        className="leading-normal mb-3"
        style={{
          fontFamily: "'Zen Dots', sans-serif",
          fontSize: "clamp(16px, 4vw, 20px)",
          fontWeight: 400,
          background: "linear-gradient(340deg, rgba(208,0,203,1) 0%, rgba(16,230,241,1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "none",
          filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))",
        }}
      >
        {title}
      </span>

      <span
        className="text-white"
        style={{
          fontFamily: "'Zen Dots', sans-serif",
          fontSize: "clamp(12px, 3vw, 15px)",
          fontWeight: 400,
          textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
        }}
      >
        {date}
      </span>
    </div>
  );
}

export default function Journey() {
  const [activeTab, setActiveTab] = useState("Desain Grafis");

  return (
    <section
      className="relative w-full overflow-hidden max-md:!min-h-0 max-md:!h-auto max-md:!mt-0 max-md:!pt-12"
      style={{ background: "#000923", minHeight: "1400px", padding: "100px 0 80px", marginTop: "-200px" }}
    >
      <div className="flex flex-col items-center mb-8 relative z-20 px-4">
        <h2
          className="text-center font-bold leading-tight"
          style={{marginBottom: 50, fontFamily: "'Zen Dots', cursive", fontSize: "clamp(28px, 5vw, 64px)" }}
        >
          <span 
            style={{ 
              background: "linear-gradient(90deg, #ff00ff 0%, #00ffff 100%)", 
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Start{" "}
          </span>
          <span style={{ color: "#ffffff" }}>Your</span>
          <br />
          <span style={{ color: "#ffffff" }}>Journey Now</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-20 mb-8 md:mb-12 flex-wrap px-4 relative z-20 max-md:!flex-row max-md:!justify-start max-md:!flex-nowrap max-md:!overflow-x-auto max-md:!snap-x max-md:!snap-mandatory max-md:!gap-3 max-md:!pb-4 max-md:[scrollbar-width:none] max-md:![&::-webkit-scrollbar]:hidden max-md:!px-4">
        {tabs.map((tab) => (
          <div key={tab} className="relative w-full md:w-[300px] max-md:!w-auto max-md:!shrink-0 max-md:!snap-center">
            {/* Border gradient wrapper - always visible */}
            <div 
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: "linear-gradient(90deg, #00ffff 0%, #ff00ff 100%)",
                padding: "2px",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                zIndex: 10,
                opacity: 0.4,
              }}
            />
            <button
              onClick={() => setActiveTab(tab)}
              className={`relative w-full h-[40px] px-4 md:px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 cursor-pointer text-center max-md:!whitespace-nowrap max-md:!h-auto max-md:!min-h-[44px] max-md:!px-6 ${activeTab === tab ? "md:shadow-[0_0_60px_10px_rgba(180,0,203,0.45)]" : ""}`}
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontSize: "clamp(12px, 2vw, 14px)",
                background:
                  activeTab === tab
                    ? "rgba(10, 15, 35, 1)"
                    : "rgba(255,255,255,0.05)",
                zIndex: 2,
              }}
            >
              {tab}
            </button>
          </div>
        ))}
      </div>

      {/* Perlombaan Title */}
      <div className="flex flex-col items-center mb-16 relative z-20 px-4" style={{ marginTop: "40px", padding: "30px" }}>
        <h3
          className="text-center font-bold leading-tight"
          style={{marginBottom: 30, fontFamily: "'Zen Dots', cursive", fontSize: "clamp(20px, 3.5vw, 48px)" }}
        >
          <span style={{ color: "#ffffff" }}>Perlombaan</span>
          <br />
          <span 
            style={{ 
              background: "linear-gradient(90deg, #ff00ff 0%, #00ffff 100%)", 
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {activeTab}
          </span>
        </h3>
      </div>

      {/* Timeline Content - Desktop */}
      <div className="hidden md:block relative z-10">
        {/* Rocket Timeline */}
        <img
          src={`${BASE_PATH}/images/timeline-rocket.png`}
          alt="Rocket Timeline"
          className="absolute z-5"
          style={{ 
            top: "-80px", 
            left: "50%", 
            transform: "translateX(-50%)",
            width: "590px", 
            height: "900px", 
            objectFit: "contain" 
          }}
        />

        {/* Gradient overlay at bottom */}
        <div 
          className="absolute bottom-0 left-0 w-full pointer-events-none z-10"
          style={{ 
            height: "350px",
            background: "linear-gradient(0deg, rgba(0,9,35,1) 0%, rgba(0,9,35,0.95) 10%, rgba(0,9,35,0.8) 10%, rgba(0,9,35,0.5) 45%, transparent 100%)",
          }}
        />

        {/* Timeline Cards berdasarkan tab aktif */}
        {timelineData[activeTab]?.map((card, index) => (
          <TimelineCard
            key={index}
            top={card.top}
            left={card.left}
            title={card.title}
            date={card.date}
          />
        ))}
      </div>

      {/* Timeline Content - Mobile */}
      <div className="md:hidden relative z-10 flex flex-col items-center gap-6 px-4 pb-12 w-full">
        <div className="flex flex-col w-full max-w-[340px] items-center gap-8 relative">
          
          <div className="absolute top-2 bottom-6 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#10e6f1] via-[#d000cb] to-[#7B2FFE] z-0 opacity-90" />
          <div className="absolute top-2 bottom-6 left-1/2 -translate-x-1/2 w-[8px] bg-gradient-to-b from-[#10e6f1] via-[#d000cb] to-[#7B2FFE] z-0 opacity-40 blur-[4px]" />

          {timelineData[activeTab]?.map((card, index) => {
             const colors = ["#10e6f1", "#d000cb", "#7B2FFE"];
             const ringColor = colors[index % colors.length];
             return (
               <div key={index} className="relative z-10 w-full flex flex-col items-center gap-4">
                 <div 
                   className="w-5 h-5 rounded-full border-[3px] bg-[#000923] flex-shrink-0" 
                   style={{ borderColor: ringColor, boxShadow: `0 0 15px ${ringColor}` }}
                 />
                 <TimelineCardMobile
                   title={card.title}
                   date={card.date}
                 />
               </div>
             );
          })}
        </div>
      </div>
    </section>
  );
}