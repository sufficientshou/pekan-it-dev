"use client";

import { useState } from "react";
import { BASE_PATH } from '@/config/constants';

const tabs = ["UI/UX Design", "Software Development"];

type TimelineItem = { title: string; date: string; side: "left" | "right" };

const timelineData: Record<string, TimelineItem[]> = {
  "UI/UX Design": [
    { title: "Pendaftaran Lomba", date: "2 - 30 Juni 2026", side: "left" },
    { title: "Pengumpulan Karya", date: "2 - 30 Juni 2026", side: "right" },
    { title: "Penilaian Karya", date: "9 - 11 Juli 2026", side: "left" },
    { title: "Pengumuman Finalis", date: "12 Juli 2026", side: "right" },
    { title: "Technical Meeting", date: "15 Juli 2026", side: "left" },
    { title: "Presentasi Finalis", date: "18 Juli 2026", side: "right" },
    { title: "Pengumuman Pemenang", date: "20 Juli 2026", side: "left" },
    { title: "Pembagian Hadiah", date: "8 Agustus 2026", side: "right" },
  ],
  "Software Development": [
    { title: "Pendaftaran Lomba", date: "2 - 30 Juni 2026", side: "left" },
    { title: "Pengumpulan Proposal", date: "2 - 30 Juni 2026", side: "right" },
    { title: "Penilaian Proposal", date: "9 - 11 Juli 2026", side: "left" },
    { title: "Pengumuman Finalis", date: "12 Juli 2026", side: "right" },
    { title: "Technical Meeting", date: "15 Juli 2026", side: "left" },
    { title: "Presentasi Finalis", date: "18 Juli 2026", side: "right" },
    { title: "Pengumuman Pemenang", date: "20 Juli 2026", side: "left" },
    { title: "Pembagian Hadiah", date: "8 Agustus 2026", side: "right" },
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
          filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))",
          wordBreak: "break-word",
        }}
      >
        <span
          style={{
            background: "linear-gradient(340deg, rgba(208,0,203,1) 0%, rgba(16,230,241,1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title.split(' ')[0]}
        </span>
        {title.split(' ').slice(1).length > 0 && (
          <span style={{ color: "#ffffff" }}>
            {" "}{title.split(' ').slice(1).join(' ')}
          </span>
        )}
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
        minHeight: "90px",
        padding: "16px",
        borderRadius: "16px",
        background:
          "linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), linear-gradient(105deg, rgba(255,255,255,0.01), rgba(255,255,255,0))",
        backdropFilter: "blur(6px)",
        boxShadow: "inset 0px 1px 2px rgba(255,255,255,0.1)",
        gap: "6px",
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
      <StarryBackgroundJourney />
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
          style={{ fontFamily: "'Zen Dots', cursive", fontSize: "clamp(30px, 4vw, 54px)" }}
        >
          <span style={{ color: "#ffffff" }}>Your Competition</span>
          <br />
          <span style={{
            background: "linear-gradient(90deg, #c084fc 0%, #7c3aed 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Journey
          </span>
        </h2>
      </div>

      <div className="flex flex-row justify-center gap-2 md:gap-8 lg:gap-16 flex-wrap px-4 relative z-20"
        style={{ marginBottom: "clamp(20px, 3vh, 40px)", paddingTop: "clamp(20px, 2vw, 40px)" }}
      >
        {tabs.map((tab) => (
          <div key={tab} className="relative flex-1 min-w-0 max-w-[300px]">

            <button
              onClick={() => setActiveTab(tab)}
              className="relative w-full text-white font-semibold transition-all duration-300 cursor-pointer text-center rounded-full"
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontSize: "clamp(10px, 1.5vw, 14px)",
                padding: "clamp(8px, 1.2vh, 12px) clamp(8px, 1.5vw, 24px)",
                background: activeTab === tab ? "rgba(10,15,35,1)" : "rgba(0,9,35,0.5)",
                backdropFilter: activeTab === tab ? "none" : "blur(8px)",
                border: activeTab === tab ? "1.5px solid rgba(255,255,255,0.35)" : "1.5px solid rgba(255,255,255,0.15)",
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
        style={{ marginBottom: "clamp(16px, 3vh, 40px)", marginTop: "clamp(16px, 2vh, 30px)", paddingTop: "clamp(30px, 3vw, 50px)" }}
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
                  marginBottom: "clamp(-30px, -4vw, -10px)",
                  gap: "clamp(10px, 2%, 40px)",
                }}
              >
                <div className="flex-1 flex justify-end" style={{ minWidth: 0 }}>
                  {isLeft ? (
                    <div style={{ width: "clamp(200px, 80%, 280px)" }}>
                      <TimelineCardDesktop title={card.title} date={card.date} />
                    </div>
                  ) : (
                    <div style={{ width: "clamp(200px, 80%, 280px)" }} />
                  )}
                </div>

                <div style={{ width: "clamp(150px, 25%, 320px)", flexShrink: 0 }} />

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

      </div>

      <div className="md:hidden relative z-10 flex flex-col items-center px-4 pb-8 w-full">
        <img
          src={`${BASE_PATH}/images/planet (2).png`}
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

      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none z-[100] max-md:hidden"
        style={{
          height: "200px",
          background:
            "linear-gradient(0deg, rgba(0,9,35,1) 0%, rgba(0,9,35,0.8) 30%, transparent 100%)",
        }}
      />
    </section>
  );
}

function StarryBackgroundJourney() {
  return (
    <div 
      className="absolute inset-0 pointer-events-none z-[1]"
      style={{ 
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 150px, black calc(100% - 150px), transparent 100%)",
        maskImage: "linear-gradient(to bottom, transparent 0%, black 150px, black calc(100% - 150px), transparent 100%)"
      }}
    >
      <div className="absolute w-1 h-1 bg-white rounded-full opacity-60 top-[10%] left-[20%] shadow-[0_0_4px_white]" />
      <div className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-80 top-[15%] left-[80%] shadow-[0_0_6px_white]" />
      <div className="absolute w-[3px] h-[3px] bg-white rounded-full opacity-40 top-[25%] left-[40%]" />
      <div className="absolute w-1 h-1 bg-white rounded-full opacity-50 top-[35%] left-[10%] shadow-[0_0_4px_white]" />
      <div className="absolute w-[5px] h-[5px] bg-white rounded-full opacity-70 top-[45%] left-[85%] shadow-[0_0_8px_white]" />
      <div className="absolute w-[3px] h-[3px] bg-white rounded-full opacity-30 top-[55%] left-[30%]" />
      <div className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-80 top-[65%] left-[70%] shadow-[0_0_5px_white]" />
      <div className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-60 top-[75%] left-[15%]" />
      <div className="absolute w-1 h-1 bg-white rounded-full opacity-50 top-[85%] left-[90%] shadow-[0_0_3px_white]" />
      <div className="absolute w-[3px] h-[3px] bg-white rounded-full opacity-40 top-[90%] left-[40%]" />
      <div className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-70 top-[95%] left-[60%] shadow-[0_0_6px_white]" />
      <div className="absolute w-1 h-1 bg-white rounded-full opacity-60 top-[5%] left-[60%] shadow-[0_0_4px_white]" />
      <div className="absolute w-[5px] h-[5px] bg-white rounded-full opacity-80 top-[80%] left-[5%] shadow-[0_0_8px_white]" />
      
      <div className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-50 top-[18%] left-[32%]" />
      <div className="absolute w-1 h-1 bg-white rounded-full opacity-70 top-[28%] left-[65%] shadow-[0_0_3px_white]" />
      <div className="absolute w-[3px] h-[3px] bg-white rounded-full opacity-40 top-[48%] left-[15%]" />
      <div className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-60 top-[62%] left-[45%]" />
      <div className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-50 top-[82%] left-[35%] shadow-[0_0_5px_white]" />
      <div className="absolute w-[3px] h-[3px] bg-white rounded-full opacity-80 top-[12%] left-[92%]" />
      <div className="absolute w-[4px] h-[4px] bg-white rounded-full opacity-60 top-[38%] left-[78%] shadow-[0_0_4px_white]" />
      <div className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-40 top-[52%] left-[88%]" />
      <div className="absolute w-1 h-1 bg-white rounded-full opacity-70 top-[72%] left-[55%] shadow-[0_0_3px_white]" />
      <div className="absolute w-[3px] h-[3px] bg-white rounded-full opacity-50 top-[92%] left-[82%]" />

      <div className="absolute w-2 h-2 bg-white rounded-full opacity-80 blur-[2px] top-[20%] left-[5%]" />
      <div className="absolute w-3 h-3 bg-white rounded-full opacity-60 blur-[2px] top-[40%] left-[95%]" />
      <div className="absolute w-2 h-2 bg-white rounded-full opacity-70 blur-[2px] top-[60%] left-[8%]" />
      <div className="absolute w-3 h-3 bg-white rounded-full opacity-80 blur-[2px] top-[80%] left-[85%]" />
      <div className="absolute w-2.5 h-2.5 bg-white rounded-full opacity-90 blur-[1px] top-[30%] left-[50%]" />
      <div className="absolute w-2 h-2 bg-white rounded-full opacity-60 blur-[1.5px] top-[15%] left-[45%]" />
      <div className="absolute w-3 h-3 bg-white rounded-full opacity-75 blur-[2.5px] top-[55%] left-[75%]" />
      <div className="absolute w-2.5 h-2.5 bg-white rounded-full opacity-85 blur-[1px] top-[88%] left-[25%]" />

      <div className="absolute w-[20px] h-[20px] top-[15%] right-[15%] animate-pulse text-white">
        <svg className="w-full h-full drop-shadow-[0_0_12px_rgba(255,255,255,0.85)]" viewBox="0 0 32 32" fill="none">
          <path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white"/>
        </svg>
      </div>
      <div className="absolute w-[28px] h-[28px] top-[35%] right-[5%] animate-pulse text-white" style={{ animationDelay: '1s' }}>
        <svg className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]" viewBox="0 0 32 32" fill="none">
          <path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white"/>
        </svg>
      </div>
      <div className="absolute w-[24px] h-[24px] top-[55%] left-[8%] animate-pulse text-white" style={{ animationDelay: '0.5s' }}>
        <svg className="w-full h-full drop-shadow-[0_0_12px_rgba(255,255,255,0.85)]" viewBox="0 0 32 32" fill="none">
          <path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white"/>
        </svg>
      </div>
      <div className="absolute w-[16px] h-[16px] top-[80%] left-[20%] animate-pulse text-white" style={{ animationDelay: '1.5s' }}>
        <svg className="w-full h-full drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]" viewBox="0 0 32 32" fill="none">
          <path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white"/>
        </svg>
      </div>
      <div className="absolute w-[20px] h-[20px] top-[85%] right-[25%] animate-pulse text-white" style={{ animationDelay: '2s' }}>
        <svg className="w-full h-full drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" viewBox="0 0 32 32" fill="none">
          <path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white"/>
        </svg>
      </div>
      <div className="absolute w-[14px] h-[14px] top-[25%] left-[25%] animate-pulse text-white" style={{ animationDelay: '0.8s' }}>
        <svg className="w-full h-full drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]" viewBox="0 0 32 32" fill="none">
          <path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white"/>
        </svg>
      </div>
      
      <div className="absolute w-[12px] h-[12px] top-[8%] left-[70%] animate-pulse text-white" style={{ animationDelay: '1.2s' }}>
        <svg className="w-full h-full drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]" viewBox="0 0 32 32" fill="none">
          <path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white"/>
        </svg>
      </div>
      <div className="absolute w-[22px] h-[22px] top-[45%] left-[35%] animate-pulse text-white" style={{ animationDelay: '2.5s' }}>
        <svg className="w-full h-full drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]" viewBox="0 0 32 32" fill="none">
          <path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white"/>
        </svg>
      </div>
      <div className="absolute w-[18px] h-[18px] top-[65%] right-[40%] animate-pulse text-white" style={{ animationDelay: '0.3s' }}>
        <svg className="w-full h-full drop-shadow-[0_0_10px_rgba(255,255,255,0.75)]" viewBox="0 0 32 32" fill="none">
          <path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white"/>
        </svg>
      </div>
      <div className="absolute w-[15px] h-[15px] top-[22%] right-[35%] animate-pulse text-white" style={{ animationDelay: '1.8s' }}>
        <svg className="w-full h-full drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]" viewBox="0 0 32 32" fill="none">
          <path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white"/>
        </svg>
      </div>
      <div className="absolute w-[26px] h-[26px] top-[75%] left-[60%] animate-pulse text-white" style={{ animationDelay: '0.9s' }}>
        <svg className="w-full h-full drop-shadow-[0_0_14px_rgba(255,255,255,0.85)]" viewBox="0 0 32 32" fill="none">
          <path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
}
