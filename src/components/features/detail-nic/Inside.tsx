import { BASE_PATH } from '@/config/constants';
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const competitions = [
  { id: "ui-ux", title: "UI/UX\nDesign" },
  { id: "software-development", title: "Software\nDevelopment" },
];

function Sparkle({ size = 20, opacity = 1 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ opacity }}>
      <path
        d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z"
        fill="white"
      />
    </svg>
  );
}

function StarCluster({ position }: { position: "left" | "right" }) {
  const isLeft = position === "left";
  return (
    <div
      className={`hidden md:block absolute pointer-events-none select-none ${
        isLeft ? "left-5 lg:left-12 xl:left-20" : "right-5 lg:right-12 xl:right-20"
      }`}
      style={{
        top: "clamp(20px, 4vw, 80px)",
        width: "200px",
        height: "200px",
      }}
    >
      <div 
        className="absolute inset-0 rounded-full bg-purple-600/30 blur-[50px] animate-pulse"
        style={{ animationDuration: "5s" }}
      />
      
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white animate-star-pulse"
        style={{ width: "65px", height: "65px" }}
      >
        <svg className="w-full h-full drop-shadow-[0_0_20px_rgba(255,255,255,0.95)]" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z"
            fill="white"
          />
        </svg>
      </div>

      <div 
        className="absolute text-white animate-star-pulse"
        style={{ 
          width: "32px", 
          height: "32px",
          top: "60%",
          left: isLeft ? "20%" : "68%",
          animationDelay: "1s"
        }}
      >
        <svg className="w-full h-full drop-shadow-[0_0_12px_rgba(255,255,255,0.85)]" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z"
            fill="white"
          />
        </svg>
      </div>

      <div 
        className="absolute text-white animate-star-pulse"
        style={{ 
          width: "20px", 
          height: "20px",
          top: "35%",
          left: isLeft ? "72%" : "20%",
          animationDelay: "2.5s"
        }}
      >
        <svg className="w-full h-full drop-shadow-[0_0_8px_rgba(255,255,255,0.75)]" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}

function CompetitionCard({ title }: { title: string }) {
  const lines = title.split("\n");

  return (
    <Link
      href="/pendaftaran-ditutup"
      className="relative group cursor-pointer transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.03] w-full max-w-[280px] block"
      style={{ height: "250px" }}
    >

      <div
        className="absolute inset-0 rounded-2xl transition-all duration-300 group-hover:scale-[1.01]"
        style={{
          padding: "3px",
          background: "linear-gradient(135deg, #00ffff 0%, #ff00ff 100%)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          borderRadius: "16px",
        }}
      />

      <div
        className="absolute inset-0 rounded-2xl transition-all duration-300 group-hover:!bg-[#341f5a] group-hover:!shadow-[0_15px_30px_rgba(255,0,255,0.4),0_0_30px_rgba(0,255,255,0.3)]"
        style={{
          background: "#2d1b4e",
          boxShadow: "0 0 20px rgba(255,0,255,0.2)",
        }}
      />

      <div className="absolute top-4 left-4 opacity-60 transition-all duration-500 group-hover:scale-125 group-hover:rotate-45 group-hover:opacity-100"><Sparkle size={18} /></div>
      <div className="absolute top-6 right-6 opacity-50 transition-all duration-500 group-hover:scale-125 group-hover:-rotate-45 group-hover:opacity-100"><Sparkle size={14} /></div>
      <div className="absolute bottom-16 right-4 opacity-40 transition-all duration-500 group-hover:scale-125 group-hover:rotate-90 group-hover:opacity-100"><Sparkle size={16} /></div>
      <div className="absolute bottom-20 left-6 opacity-30 transition-all duration-500 group-hover:scale-125 group-hover:-rotate-90 group-hover:opacity-100"><Sparkle size={12} /></div>
      <div className="absolute inset-0 flex items-center justify-center px-6 pb-14">
        <h3
          className="text-white text-center font-bold leading-tight transition-all duration-300 group-hover:!text-white group-hover:[text-shadow:0_0_12px_rgba(255,255,255,0.5),0_0_20px_rgba(208,0,203,0.3)]"
          style={{
            fontFamily: "'Zen Dots', cursive",
            fontSize: "clamp(18px, 2.2vw, 24px)",
          }}
        >
          {lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < lines.length - 1 && <br />}
            </span>
          ))}
        </h3>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full flex items-center gap-3 px-4 py-3 rounded-b-2xl transition-all duration-300 group-hover:bg-black/30"
        style={{ background: "rgba(0,0,0,0.2)" }}
      >
        <button
          className="relative flex items-center justify-center gap-1 rounded-full text-white text-sm font-semibold shrink-0 cursor-pointer transition-all hover:opacity-80 overflow-hidden group-hover:scale-105 group-hover:shadow-[0_0_12px_rgba(139,92,246,0.5)]"
          style={{
            width: "90px",
            height: "25px",
            fontFamily: "'Exo 2', sans-serif",
            background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)",
          }}
        >
          <span className="relative z-10">Daftar</span>
          <ArrowUpRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
        <div
          className="flex-1 rounded-full h-2 transition-all duration-300 group-hover:h-2.5 group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(0,255,255,0.8)]"
          style={{
            background: "linear-gradient(90deg, #00ffff 0%, #ff00ff 100%)",
            opacity: 0.9,
          }}
        />
      </div>
    </Link>
  );
}

export default function Inside() {
  return (
    <section
      id="inside"
      className="relative w-full overflow-hidden text-white"
      style={{ background: "transparent" }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes flow-left {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        @keyframes flow-right {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        @keyframes energy-breath-left {
          0%, 100% {
            transform: scale(1) translateY(0);
          }
          50% {
            transform: scale(1.02, 0.98) translateY(-6px);
          }
        }
        @keyframes energy-breath-right {
          0%, 100% {
            transform: scale(1) translateY(0);
          }
          50% {
            transform: scale(1.02, 0.98) translateY(6px);
          }
        }
        @keyframes crown-float {
          0%, 100% {
            transform: translateY(0) scale(1);
            filter: drop-shadow(0 0 25px rgba(168,85,247,0.65));
          }
          50% {
            transform: translateY(-8px) scale(1.04);
            filter: drop-shadow(0 0 38px rgba(236,72,153,0.85));
          }
        }
        .animate-energy-left {
          animation: energy-breath-left 8s ease-in-out infinite;
          transform-origin: right center;
        }
        .animate-energy-right {
          animation: energy-breath-right 8s ease-in-out infinite;
          transform-origin: left center;
        }
        .animate-crown-float {
          animation: crown-float 6s ease-in-out infinite;
        }
        @keyframes beam-flow-left {
          0%, 100% {
            transform: scaleX(0.95) scaleY(0.96);
            opacity: 0.75;
            filter: drop-shadow(0 0 15px rgba(208, 0, 203, 0.55)) brightness(0.95);
          }
          50% {
            transform: scaleX(1.05) scaleY(1.04);
            opacity: 1;
            filter: drop-shadow(0 0 35px rgba(236, 72, 153, 0.95)) brightness(1.3);
          }
        }
        @keyframes beam-flow-right {
          0%, 100% {
            transform: scaleX(0.95) scaleY(0.96);
            opacity: 0.75;
            filter: drop-shadow(0 0 15px rgba(208, 0, 203, 0.55)) brightness(0.95);
          }
          50% {
            transform: scaleX(1.05) scaleY(1.04);
            opacity: 1;
            filter: drop-shadow(0 0 35px rgba(236, 72, 153, 0.95)) brightness(1.3);
          }
        }
        .animate-beam-left {
          animation: beam-flow-left 4s ease-in-out infinite;
          transform-origin: right center;
        }
        .animate-beam-right {
          animation: beam-flow-right 4s ease-in-out infinite;
          transform-origin: left center;
        }
        .energy-mask-left {
          -webkit-mask-image: url('${BASE_PATH}/images/blur%20kiri.png');
          mask-image: url('${BASE_PATH}/images/blur%20kiri.png');
          -webkit-mask-size: 100% 100%;
          mask-size: 100% 100%;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-position: center;
          mask-position: center;
        }
        .energy-mask-right {
          -webkit-mask-image: url('${BASE_PATH}/images/blur%20kanan.png');
          mask-image: url('${BASE_PATH}/images/blur%20kanan.png');
          -webkit-mask-size: 100% 100%;
          mask-size: 100% 100%;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-position: center;
          mask-position: center;
        }
      `}} />
      
      <StarCluster position="left" />
      <StarCluster position="right" />

      

      <div className="relative z-10 flex flex-col items-center w-full px-4 md:px-8"
        style={{ paddingTop: "clamp(130px, 16vw, 680px)", paddingBottom: "clamp(48px, 8vh, 120px)", paddingLeft: "clamp(0px, 8vw, 120px)", paddingRight: "clamp(0px, 8vw, 120px)" }}
      >

        <div className="flex flex-col items-center gap-4 md:gap-6 text-center w-full" style={{ paddingTop: "clamp(25px, 8vh, 120px)" }}>
          <h2
            className="font-bold tracking-wide max-w-xl relative"
            style={{fontFamily: "'Zen Dots', sans-serif", fontSize: "clamp(22px, 5vw, 48px)", top: "-90px" }}
          >
            Inside N I C
            <div 
              className="absolute -top-3 left-[56%] md:-top-5 lg:-top-6 -translate-x-1/2 text-cyan-400 animate-pulse pointer-events-none"
              style={{ width: "16px", height: "16px", filter: "drop-shadow(0 0 8px rgba(16, 230, 241, 0.9))" }}
            >
              <svg className="w-full h-full animate-spin" style={{ animationDuration: "12s" }} viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z"
                  fill="#10E6F1"
                />
              </svg>
            </div>
          </h2>
          
          <div className="flex items-center justify-center w-full relative">
            <div 
              className="absolute right-[41%] w-[60vw] h-[120px] md:h-[180px] lg:h-[240px] pointer-events-none animate-beam-left"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
              }}
            >
              <img
                loading="lazy"
                src={`${BASE_PATH}/images/pol kiri.png`}
                alt=""
                className="w-full h-full object-cover object-right opacity-100"
                style={{
                  filter: "drop-shadow(0 0 25px rgba(208, 0, 203, 0.8)) brightness(1.2)",
                  maskImage: 'linear-gradient(to right, transparent 0%, black 15%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%)'
                }}
              />
            </div>

            <div 
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 relative z-10 shrink-0 flex items-center justify-center animate-star-pulse"
              style={{ animationDelay: "0.5s" }}
            >
              <svg className="w-full h-full drop-shadow-[0_0_25px_rgba(255,255,255,1)]" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z"
                  fill="white"
                />
              </svg>
            </div>

            <div 
              className="absolute left-[41%] w-[60vw] h-[120px] md:h-[180px] lg:h-[240px] pointer-events-none animate-beam-right"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
              }}
            >
              <img
                loading="lazy"
                src={`${BASE_PATH}/images/pol kanan.png`}
                alt=""
                className="w-full h-full object-cover object-left opacity-100"
                style={{
                  filter: "drop-shadow(0 0 25px rgba(208, 0, 203, 0.8)) brightness(1.2)",
                  maskImage: 'linear-gradient(to left, transparent 0%, black 15%)',
                  WebkitMaskImage: 'linear-gradient(to left, transparent 0%, black 15%)'
                }}
              />
            </div>
          </div>

          <div className="relative w-full max-w-xl flex justify-center">
            <div 
              className="absolute hidden md:block bottom-[-200px] w-[240px] h-[180px] pointer-events-none select-none"
              style={{
                left: "calc(-50vw + 50% + clamp(32px, 6vw, 100px))"
              }}
            >
              <div className="absolute left-[15%] top-[40%] animate-pulse" style={{ width: "36px", height: "36px", animationDelay: "0.2s", filter: "drop-shadow(0 0 14px rgba(255,255,255,0.95))" }}>
                <svg className="w-full h-full" viewBox="0 0 32 32" fill="none"><path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white" /></svg>
              </div>
              <div className="absolute left-[50%] top-[10%] animate-pulse" style={{ width: "26px", height: "26px", animationDelay: "1.2s", filter: "drop-shadow(0 0 11px rgba(255,255,255,0.85))" }}>
                <svg className="w-full h-full" viewBox="0 0 32 32" fill="none"><path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white" /></svg>
              </div>
              <div className="absolute left-[35%] top-[70%] animate-pulse" style={{ width: "20px", height: "20px", animationDelay: "2.1s", filter: "drop-shadow(0 0 8px rgba(255,255,255,0.75))" }}>
                <svg className="w-full h-full" viewBox="0 0 32 32" fill="none"><path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white" /></svg>
              </div>
              <div className="absolute left-[80%] top-[30%] animate-pulse" style={{ width: "28px", height: "28px", animationDelay: "0.7s", filter: "drop-shadow(0 0 12px rgba(255,255,255,0.85))" }}>
                <svg className="w-full h-full" viewBox="0 0 32 32" fill="none"><path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white" /></svg>
              </div>
              <div className="absolute left-[65%] top-[80%] animate-pulse" style={{ width: "32px", height: "32px", animationDelay: "1.7s", filter: "drop-shadow(0 0 13px rgba(255,255,255,0.95))" }}>
                <svg className="w-full h-full" viewBox="0 0 32 32" fill="none"><path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white" /></svg>
              </div>
            </div>

            <div 
              className="absolute hidden md:block bottom-[-200px] w-[240px] h-[180px] pointer-events-none select-none"
              style={{
                right: "calc(-50vw + 50% + clamp(32px, 6vw, 100px))"
              }}
            >
              <div className="absolute right-[15%] top-[40%] animate-pulse" style={{ width: "36px", height: "36px", animationDelay: "0.5s", filter: "drop-shadow(0 0 14px rgba(255,255,255,0.95))" }}>
                <svg className="w-full h-full" viewBox="0 0 32 32" fill="none"><path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white" /></svg>
              </div>
              <div className="absolute right-[50%] top-[10%] animate-pulse" style={{ width: "26px", height: "26px", animationDelay: "1.5s", filter: "drop-shadow(0 0 11px rgba(255,255,255,0.85))" }}>
                <svg className="w-full h-full" viewBox="0 0 32 32" fill="none"><path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white" /></svg>
              </div>
              <div className="absolute right-[35%] top-[70%] animate-pulse" style={{ width: "20px", height: "20px", animationDelay: "2.4s", filter: "drop-shadow(0 0 8px rgba(255,255,255,0.75))" }}>
                <svg className="w-full h-full" viewBox="0 0 32 32" fill="none"><path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white" /></svg>
              </div>
              <div className="absolute right-[80%] top-[30%] animate-pulse" style={{ width: "28px", height: "28px", animationDelay: "0.9s", filter: "drop-shadow(0 0 12px rgba(255,255,255,0.85))" }}>
                <svg className="w-full h-full" viewBox="0 0 32 32" fill="none"><path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white" /></svg>
              </div>
              <div className="absolute right-[65%] top-[80%] animate-pulse" style={{ width: "32px", height: "32px", animationDelay: "1.9s", filter: "drop-shadow(0 0 13px rgba(255,255,255,0.95))" }}>
                <svg className="w-full h-full" viewBox="0 0 32 32" fill="none"><path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white" /></svg>
              </div>
            </div>

            <p
              className="text-gray-200 leading-relaxed px-2 max-w-xl"
              style={{fontFamily: "'Zen Dots', sans-serif", fontSize: "clamp(13px, 2vw, 18px)", paddingTop: "clamp(30px, 4vh, 90px)" }}
            >
              N I C adalah wadah bagi mahasiswa informatika unsika untuk
              menunjukan bakat dan keahlian melalui ajang kompetisi hard skill dalam
              bidang informatika.
            </p>
          </div>
        </div>

        <div 
          className="flex justify-center items-center w-full relative"
          style={{ marginTop: "clamp(280px, 22vw, 480px)" }}
        >
          <div className="absolute right-[45%] mr-[40px] md:mr-[70px] lg:mr-[90px] w-[55vw] pointer-events-none select-none animate-energy-left">
            <div className="relative w-full h-[550px]">
              <img
                loading="lazy"
                src={`${BASE_PATH}/images/blur kiri.png`}
                alt=""
                className="w-full h-[550px] opacity-95 object-fill"
                style={{
                  filter: "drop-shadow(0 0 35px rgba(236, 72, 153, 0.7)) brightness(1.2)"
                }}
              />
              <div 
                className="absolute top-0 left-0 w-full h-[550px] energy-mask-left"
                style={{
                  background: 'linear-gradient(to left, transparent 0%, rgba(255,255,255,0) 25%, rgba(255, 230, 255, 0.8) 50%, rgba(255,255,255,0) 75%, transparent 100%)',
                  backgroundSize: '200% 100%',
                  mixBlendMode: 'color-dodge',
                  animation: 'flow-left 5s linear infinite'
                }}
              />
            </div>
          </div>

          <div className="relative z-10 shrink-0 w-[100px] md:w-[160px] lg:w-[200px] flex justify-center items-center">
            <img
              loading="lazy"
              src={`${BASE_PATH}/images/mahkota.png`}
              alt="crown"
              className="w-full h-auto animate-crown-float"
            />
          </div>

          <div className="absolute left-[50%] ml-[40px] md:ml-[70px] lg:ml-[90px] w-[55vw] pointer-events-none select-none animate-energy-right">
            <div className="relative w-full h-[550px]">
              <img
                loading="lazy"
                src={`${BASE_PATH}/images/blur kanan.png`}
                alt=""
                className="w-full h-[550px] opacity-95 object-fill"
                style={{
                  filter: "drop-shadow(0 0 35px rgba(236, 72, 153, 0.7)) brightness(1.2)"
                }}
              />
              <div 
                className="absolute top-0 left-0 w-full h-[550px] energy-mask-right"
                style={{
                  background: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0) 25%, rgba(255, 230, 255, 0.8) 50%, rgba(255,255,255,0) 75%, transparent 100%)',
                  backgroundSize: '200% 100%',
                  mixBlendMode: 'color-dodge',
                  animation: 'flow-right 5s linear infinite'
                }}
              />
            </div>
          </div>
        </div>

        <div
          className="flex flex-col items-center text-center w-full max-w-[900px] px-4"
          style={{ marginTop: "clamp(112px, 15vh, 128px)" }}
        >
          <div 
            className="flex flex-row justify-center items-center gap-4 md:gap-8 lg:gap-12 w-full font-bold tracking-wide text-center" 
            style={{ 
              fontFamily: "'Zen Dots', sans-serif", 
              fontSize: "clamp(24px, 5.5vw, 64px)",
              marginTop: "clamp(2px, 4vh, 90px)" 
            }}
          >

            <div className="border-b-[3px] md:border-b-[4px] border-white pb-1 md:pb-2 flex select-none shrink-0">
              <span className="text-white">Choo</span>
              <span style={{ color: "#ff00ff" }}>se</span>
            </div>

            <div className="border-b-[3px] md:border-b-[4px] border-white pb-1 md:pb-2 flex select-none shrink-0">
              <span style={{ color: "#ff00ff" }}>Y</span>
              <span style={{ color: "#00ffff" }}>our</span>
            </div>

            <div className="border-b-[3px] md:border-b-[4px] border-white pb-1 md:pb-2 flex select-none shrink-0">
              <span style={{ color: "#00ffff" }}>C</span>
              <span className="text-white">hallenge</span>
            </div>
          </div>

          <p
            className="text-gray-300 leading-relaxed max-w-[480px] px-4"
            style={{
              fontSize: "clamp(15px, 2vw, 20px)",
              marginTop: "clamp(40px, 6vh, 60px)",
            }}
          >
            Jelajahi berbagai kompetisi dan temukan tantangan
            yang sesuai dengan keterampilan dan minat kamu
          </p>
        </div>

        <div
          className="flex flex-col md:flex-row gap-5 md:gap-6 justify-center items-center w-full"
          style={{
            marginTop: "clamp(40px, 15vh, 200px)",
            maxWidth: "1200px",
          }}
        >
          {competitions.map((comp) => (
            <CompetitionCard key={comp.id} title={comp.title} />
          ))}
        </div>

      </div>
    </section>
  );
}
