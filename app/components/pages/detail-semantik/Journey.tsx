"use client";

import { useState } from "react";

const tabs = ["Desain Grafis", "Typing Competition", "Competitive Programming"];

// Data timeline untuk setiap lomba
const timelineData: Record<string, Array<{title: string, date: string, top: number, left: number}>> = {
  "Desain Grafis": [
    { title: "Pendaftaran", date: "1 - 15 Maret 2026", top: 126, left: 300 },
    { title: "Perlombaan", date: "16 - 25 Maret 2026", top: 276, left: 1000 },
    { title: "Technical Meeting", date: "26 Maret 2026", top: 426, left: 300 },
    { title: "Presentasi & Pengumuman Pemenang", date: "30 Maret 2026", top: 576, left: 1000 },
  ],
  "Typing Competition": [
    { title: "Pendaftaran", date: "5 - 20 Maret 2026", top: 126, left: 300 },
    { title: "Technical Meeting", date: "22 Maret 2026", top: 326, left: 1000 },
    { title: "Perlombaan & Pengumuman Pemenang", date: "25 Maret 2026", top: 485, left: 300 },
  ],
  "Competitive Programming": [
    { title: "Pendaftaran", date: "10 - 25 Maret 2026", top: 126, left: 300 },
    { title: "Technical Meeting", date: "27 Maret 2026", top: 326, left: 1000 },
    { title: "Perlombaan & Pengumuman Pemenang", date: "29 Maret 2026", top: 485, left: 300 },
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
        height: "137px",
        padding: "30px 24px",
        borderRadius: "16px",
        background:
          "linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%), linear-gradient(105deg, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0) 100%)",
        backdropFilter: "blur(6px) brightness(100%)",
        boxShadow: "0px 0px 50px #d000cb, inset 0px 1px 2px rgba(255,255,255,0.1)",
        border: "2px solid transparent",
        backgroundClip: "padding-box",
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
        className="leading-normal"
        style={{
          fontFamily: "'Zen Dots', sans-serif",
          fontSize: "20px",
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
          fontSize: "15px",
          fontWeight: 400,
          textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
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
          "linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%), linear-gradient(105deg, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0) 100%)",
        backdropFilter: "blur(6px) brightness(100%)",
        boxShadow: "0px 0px 50px #d000cb, inset 0px 1px 2px rgba(255,255,255,0.1)",
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
      className="relative w-full overflow-hidden"
      style={{ background: "#000923", minHeight: "1400px", padding: "60px 0 80px" }}
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

      {/* Tab selector */}
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-20 mb-8 md:mb-12 flex-wrap px-4 relative z-20">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="w-full md:w-[300px] h-[40px] px-4 md:px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 cursor-pointer text-center relative z-30"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontSize: "clamp(12px, 2vw, 14px)",
              background:
                activeTab === tab
                  ? "rgba(10, 15, 35, 1)"
                  : "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: activeTab === tab ? "0 0 60px 10px rgba(180, 0, 203, 0.45)" : "none",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Perlombaan Title */}
      <div className="flex flex-col items-center mb-16 relative z-20 px-4" style={{ marginTop: "40px" }}>
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
          src="/images/timeline-rocket.png"
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
      <div className="md:hidden relative z-10 flex flex-col items-center gap-6 px-4 pb-12">
        {timelineData[activeTab]?.map((card, index) => (
          <TimelineCardMobile
            key={index}
            title={card.title}
            date={card.date}
          />
        ))}
      </div>
    </section>
  );
}