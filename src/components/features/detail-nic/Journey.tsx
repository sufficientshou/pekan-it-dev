"use client";

import { useState } from "react";
import { BASE_PATH } from '@/config/constants';

const tabs = ["UI/UX Design", "Software Development"];

const timelineData: Record<string, Array<{ title: string; date: string; side: "left" | "right" }>> = {
  "UI/UX Design": [
    { title: "Pendaftaran", date: "18 April - 1 Mei 2026", side: "left" },
    { title: "Pengumpulan Karya", date: "3 Mei 2026", side: "right" },
    { title: "Technical Meeting", date: "7 Mei 2026", side: "left" },
    { title: "Presentasi & Pengumuman Pemenang", date: "9 Mei 2026", side: "right" },
  ],
  "Software Development": [
    { title: "Pendaftaran", date: "18 April - 1 Mei 2026", side: "left" },
    { title: "Pengumpulan Karya", date: "3 Mei 2026", side: "right" },
    { title: "Technical Meeting", date: "7 Mei 2026", side: "left" },
    { title: "Presentasi & Pengumuman Pemenang", date: "9 Mei 2026", side: "right" },
  ],
};

function CardInner({ title, date, fontSize = "16px", dateSize = "13px" }: {
  title: string; date: string; fontSize?: string; dateSize?: string;
}) {
  return (
    <>
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
        className="leading-snug mb-2"
        style={{
          fontFamily: "'Zen Dots', sans-serif",
          fontSize,
          fontWeight: 400,
          background: "linear-gradient(340deg, rgba(208,0,203,1) 0%, rgba(16,230,241,1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
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
          fontSize: dateSize,
          fontWeight: 400,
          textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
          lineHeight: 1.4,
        }}
      >
        {date}
      </span>
    </>
  );
}

function TimelineCardDesktop({
  title, date,
}: {
  title: string; date: string;
}) {
  return (
    <div
      className="relative flex flex-col justify-between w-full"
      style={{
        minHeight: "120px",
        padding: "20px",
        borderRadius: "16px",
        background:
          "linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), linear-gradient(105deg, rgba(255,255,255,0.01), rgba(255,255,255,0))",
        backdropFilter: "blur(6px)",
        boxShadow: "inset 0px 1px 2px rgba(255,255,255,0.1)",
        gap: "10px",
      }}
    >
      <CardInner title={title} date={date} fontSize="clamp(13px,1.2vw,16px)" dateSize="clamp(11px,1vw,13px)" />
    </div>
  );
}

function TimelineCardMobile({ title, date }: { title: string; date: string }) {
  return (
    <div
      className="relative flex flex-col justify-between w-full max-w-[340px]"
      style={{
        padding: "20px",
        borderRadius: "16px",
        background: "rgba(0,9,35,0.75)",
        backdropFilter: "blur(6px)",
        boxShadow: "inset 0px 1px 2px rgba(255,255,255,0.1)",
        gap: "10px",
      }}
    >
      <CardInner title={title} date={date} fontSize="clamp(14px,4vw,18px)" dateSize="clamp(11px,3vw,14px)" />
    </div>
  );
}

export default function Journey() {
  const [activeTab, setActiveTab] = useState("UI/UX Design");
  const cards = timelineData[activeTab] ?? [];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "#000923",
        paddingTop: "clamp(48px, 8vh, 100px)",
        paddingBottom: "clamp(48px, 8vh, 80px)",
        marginTop: "clamp(-80px, -10vw, -200px)",
      }}
    >
      <style>{`
        @keyframes planet-float {
          0%, 100% {
            transform: var(--planet-base-transform) translateY(0px) rotate(0deg);
          }
          50% {
            transform: var(--planet-base-transform) translateY(-15px) rotate(3deg);
          }
        }
        @keyframes planet-float-mobile {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px) rotate(0deg);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-15px) rotate(3deg);
          }
        }
        @keyframes line-glow {
          0%, 100% {
            opacity: 0.55;
            filter: brightness(1);
            transform: var(--line-base-transform) scale(1.0);
          }
          50% {
            opacity: 0.8;
            filter: brightness(1.2) drop-shadow(0 0 10px rgba(255, 0, 255, 0.3));
            transform: var(--line-base-transform) scale(1.02);
          }
        }
        .animate-planet {
          width: clamp(120px, 28vw, 180px);
          --planet-base-transform: translate(25%, 25%);
          animation: planet-float 10s ease-in-out infinite;
        }
        .animate-planet-mobile {
          animation: planet-float-mobile 10s ease-in-out infinite;
          transform-origin: center center;
        }
        .animate-line {
          display: none;
          --line-base-transform: scale(1);
          animation: line-glow 8s ease-in-out infinite;
          transform-origin: center center;
        }

        @media (min-width: 768px) {
          .animate-planet {
            width: clamp(280px, 28vw, 420px);
            --planet-base-transform: translate(16%, 10%);
          }
          .animate-line {
            display: block;
            --line-base-transform: scale(1);
          }
        }
      `}</style>

      {/* Background Decorative Elements */}
      <img
        src={`${BASE_PATH}/images/garis.png`}
        alt="Decorative Line"
        className="absolute top-0 left-0 w-full h-full object-cover object-center pointer-events-none z-0 animate-line"
      />
      <img
        src={`${BASE_PATH}/images/planet.png`}
        alt="Decorative Planet"
        className="hidden md:block absolute bottom-0 right-0 pointer-events-none z-0 animate-planet"
        style={{
          height: "auto",
          opacity: 0.9,
        }}
      />

      <div className="flex flex-col items-center relative z-20 px-4"
        style={{ marginBottom: "clamp(24px, 4vh, 50px)", paddingTop: "clamp(5px, 10vw, 220px)" }}
      >
        <h2
          className="text-center font-bold leading-tight"
          style={{ fontFamily: "'Zen Dots', cursive", fontSize: "clamp(24px, 5vw, 64px)" }}
        >
          <span style={{
            background: "linear-gradient(90deg, #ff00ff 0%, #00ffff 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Start{" "}
          </span>
          <span style={{ color: "#ffffff" }}>Your</span>
          <br />
          <span style={{ color: "#ffffff" }}>Journey Now</span>
        </h2>
      </div>

      <div className="flex flex-row justify-center gap-2 md:gap-8 lg:gap-16 flex-wrap px-4 relative z-20"
        style={{ marginBottom: "clamp(20px, 3vh, 40px)", paddingTop: "clamp(20px, 2vw, 40px)" }}
      >
        {tabs.map((tab) => (
          <div key={tab} className="relative flex-1 min-w-0 max-w-[300px]">
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
              className="relative w-full text-white font-semibold transition-all duration-300 cursor-pointer text-center rounded-full"
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontSize: "clamp(10px, 1.5vw, 14px)",
                padding: "clamp(8px, 1.2vh, 12px) clamp(8px, 1.5vw, 24px)",
                background: activeTab === tab ? "rgba(10,15,35,1)" : "rgba(255,255,255,0.05)",
                boxShadow: activeTab === tab ? "0 0 60px 10px rgba(180,0,203,0.45)" : "none",
                zIndex: 2,
              }}
            >
              {tab}
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center relative z-20 px-4"
        style={{ marginBottom: "clamp(16px, 3vh, 40px)", marginTop: "clamp(16px, 2vh, 30px)", paddingTop: "clamp(20px, 2vw, 40px)" }}
      >
        <h3
          className="text-center font-bold leading-tight"
          style={{ fontFamily: "'Zen Dots', cursive", fontSize: "clamp(18px, 3vw, 48px)" }}
        >
          <span style={{ color: "#ffffff" }}>Perlombaan</span>
          <br />
          <span style={{
            background: "linear-gradient(90deg, #ff00ff 0%, #00ffff 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            {activeTab}
          </span>
        </h3>
      </div>

      <div className="hidden md:flex relative z-10 w-full justify-center">
        <div
          className="relative w-full"
          style={{ maxWidth: "1200px", padding: "50px clamp(16px, 3%, 40px) 40px" }}
        >

          <img
            loading="lazy"
            src={`${BASE_PATH}/images/timeline-rocket.webp`}
            alt="Rocket Timeline"
            className="block mx-auto"
            style={{
              width: "clamp(340px, 49%, 590px)",
              height: "auto",
              objectFit: "contain",
              position: "relative",
              zIndex: 1,
              transform: "translateX(300px)", 
            }}
          />

          <div className="relative w-full" style={{ zIndex: 5, marginTop: "clamp(-800px, -65%, -500px)", marginBottom: "clamp(100px, 15%, 400px)" }}>
          {cards.map((card, i) => {
            const isLeft = card.side === "left";
            return (
              <div
                key={i}
                className="flex items-start"
                style={{
                  marginBottom: "clamp(20px, 3%, 50px)",
                  gap: "clamp(20px, 5%, 80px)",
                }}
              >
                {/* Left column */}
                <div className="flex-1 flex justify-end" style={{ minWidth: 0 }}>
                  {isLeft ? (
                    <div style={{ width: "clamp(200px, 80%, 280px)" }}>
                      <TimelineCardDesktop title={card.title} date={card.date} />
                    </div>
                  ) : (
                    <div style={{ width: "clamp(200px, 80%, 280px)" }} />
                  )}
                </div>

                {/* Center spacer (rocket area) */}
                <div style={{ width: "clamp(200px, 35%, 440px)", flexShrink: 0 }} />

                {/* Right column */}
                <div className="flex-1 flex justify-start" style={{ minWidth: 0 }}>
                  {!isLeft ? (
                    <div style={{ width: "clamp(200px, 80%, 280px)" }}>
                      <TimelineCardDesktop title={card.title} date={card.date} />
                    </div>
                  ) : (
                    <div style={{ width: "clamp(200px, 80%, 280px)" }} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        </div>

        {/* Bottom fade - moved here to be full width */}
        <div
          className="absolute bottom-0 left-0 w-full pointer-events-none z-10"
          style={{
            height: "200px",
            background:
              "linear-gradient(0deg, rgba(0,9,35,1) 0%, rgba(0,9,35,0.8) 30%, transparent 100%)",
          }}
        />
      </div>

      <div className="md:hidden relative z-10 flex flex-col items-center px-4 pb-8 w-full">
        {/* Background Decorative Planet for Mobile - moved to outer w-full container to prevent clipping */}
        <img
          src={`${BASE_PATH}/images/planet.png`}
          alt="Decorative Planet Mobile"
          className="absolute pointer-events-none z-0 animate-planet-mobile"
          style={{
            width: "clamp(300px, 85vw, 420px)",
            height: "auto",
            opacity: 0.45,
            top: "50%",
            left: "45%",
          }}
        />

        <div className="relative flex flex-col w-full max-w-[340px] items-center gap-8">
          <div className="absolute top-3 bottom-3 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#10e6f1] via-[#d000cb] to-[#7B2FFE] opacity-90 z-0" />
          <div className="absolute top-3 bottom-3 left-1/2 -translate-x-1/2 w-[8px] bg-gradient-to-b from-[#10e6f1] via-[#d000cb] to-[#7B2FFE] opacity-30 blur-[4px] z-0" />

          {cards.map((card, i) => {
            const colors = ["#10e6f1", "#d000cb", "#7B2FFE"];
            const ringColor = colors[i % colors.length];
            return (
              <div key={i} className="relative z-10 w-full flex flex-col items-center gap-3">
                <div
                  className="w-5 h-5 rounded-full border-[3px] bg-[#000923] flex-shrink-0"
                  style={{ borderColor: ringColor, boxShadow: `0 0 12px ${ringColor}` }}
                />
                <TimelineCardMobile title={card.title} date={card.date} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
