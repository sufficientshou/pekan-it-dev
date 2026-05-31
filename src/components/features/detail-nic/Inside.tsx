import { BASE_PATH } from '@/config/constants';
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const competitions = [
  { 
    id: "ui-ux", 
    title: "UI/UX Design",
    description: "Kompetisi desain antarmuka dan pengalaman pengguna aplikasi/website yang menguji kemampuan peserta menciptakan solusi digital yang intuitif dan menarik.",
    team: "2-3 Orang",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: "software-development", 
    title: "Software Development",
    description: "Kompetisi pengembangan aplikasi/website yang menguji kemampuan peserta menciptakan solusi digital kreatif dan fungsional melalui teknologi.",
    team: "3-5 Orang",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
  },
];

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

function StarryBackgroundBelowCurve() {
  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]"
      style={{ 
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 150px, black calc(100% - 150px), transparent 100%)",
        maskImage: "linear-gradient(to bottom, transparent 0%, black 150px, black calc(100% - 150px), transparent 100%)"
      }}
    >
      <div 
        className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px] rounded-full blur-[60px] md:blur-[90px] opacity-40 pointer-events-none"
        style={{ background: "#a855f7", top: "0%", left: "-5%" }}
      />
      
      <div 
        className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px] rounded-full blur-[60px] md:blur-[90px] opacity-30 pointer-events-none"
        style={{ background: "#a855f7", bottom: "0%", right: "-5%" }}
      />

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

      {/* Additional Dots */}
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

      {/* Blurred Dots */}
      <div className="absolute w-2 h-2 bg-white rounded-full opacity-80 blur-[2px] top-[20%] left-[5%]" />
      <div className="absolute w-3 h-3 bg-white rounded-full opacity-60 blur-[2px] top-[40%] left-[95%]" />
      <div className="absolute w-2 h-2 bg-white rounded-full opacity-70 blur-[2px] top-[60%] left-[8%]" />
      <div className="absolute w-3 h-3 bg-white rounded-full opacity-80 blur-[2px] top-[80%] left-[85%]" />
      <div className="absolute w-2.5 h-2.5 bg-white rounded-full opacity-90 blur-[1px] top-[30%] left-[50%]" />
      <div className="absolute w-2 h-2 bg-white rounded-full opacity-60 blur-[1.5px] top-[15%] left-[45%]" />
      <div className="absolute w-3 h-3 bg-white rounded-full opacity-75 blur-[2.5px] top-[55%] left-[75%]" />
      <div className="absolute w-2.5 h-2.5 bg-white rounded-full opacity-85 blur-[1px] top-[88%] left-[25%]" />

      {/* 4-Pointed Stars - Original */}
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
      
      {/* 4-Pointed Stars - Additional */}
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

function CompetitionCard({ 
  title, 
  description, 
  team, 
  image 
}: { 
  title: string; 
  description: string; 
  team: string; 
  image: string; 
}) {
  return (
    <Link
      href="/pendaftaran"
      className="relative flex flex-col group w-full max-w-[340px] min-h-[440px] rounded-[24px] overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer block"
      style={{
        background: "#1b233d",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
      }}
    >
      <div className="relative w-full px-6 pt-6 pb-0">
        <div className="relative w-[290px] h-[170px] rounded-[16px] overflow-hidden" style={{left: "22px", top: "20px"}}>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          <div className="absolute top-0 left-0 bg-[#1b233d] px-3.5 py-1.5 rounded-br-[16px] flex items-center gap-1.5 z-10">
            <div className="absolute right-[-16px] top-0 w-[16px] h-[16px] bg-transparent pointer-events-none" style={{boxShadow: "-8px -8px 0 8px #1b233d", borderTopLeftRadius: "16px"}}></div>
            <div className="absolute left-0 bottom-[-16px] w-[16px] h-[16px] bg-transparent pointer-events-none" style={{boxShadow: "-8px -8px 0 8px #1b233d", borderTopLeftRadius: "16px"}}></div>
            
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-gray-300 relative z-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <span className="text-gray-300 text-[11px] font-medium relative z-10" style={{paddingRight: "70px", paddingBottom: "3px"}}>{team}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 px-5 py-5 pt-4" style={{paddingTop: "50px", paddingLeft: "20px", paddingRight: "20px"}}>
        <h3
          className="text-white font-bold mb-2.5"
          style={{
            fontFamily: "'Zen Dots', sans-serif",
            fontSize: "15px",
            letterSpacing: "0.7px",
          }}
        >
          {title}
        </h3>
        
        <p className="text-gray-400 text-[13.5px] leading-relaxed mb-6 flex-1">
          {description}
        </p>    
        
        <div className="w-full mt-auto block" style={{ marginBottom: "15px" }}>
          <div
            className="w-full h-[52px] flex items-center justify-center gap-2 rounded-full text-white text-[16px] font-semibold transition-all duration-300 hover:opacity-90 active:scale-95 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]"
            style={{
              background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)",
            }}
          >
            <span>Daftar</span>
            <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Inside() {
  return (
    <section
      id="inside"
      className="relative w-full text-white"
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

      <div className="relative z-10 flex flex-col items-center w-full"
        style={{ paddingTop: "clamp(40px, 8vw, 160px)", paddingLeft: "clamp(0px, 8vw, 120px)", paddingRight: "clamp(0px, 8vw, 120px)" }}
      >
        <StarCluster position="left" />
        <StarCluster position="right" />
        <div className="flex flex-col items-center gap-4 md:gap-6 text-center w-full" style={{ paddingTop: "clamp(15px, 4vh, 70px)" }}>
          <h2
            className="font-bold tracking-wide max-w-xl relative"
            style={{fontFamily: "'Zen Dots', sans-serif", fontSize: "clamp(30px, 5vw, 50px)" }}
          >
            Inside{" "}
            <span style={{ color: "#47237B" }} className="relative inline-block">
              N{" "}
              <span className="relative inline-block">
                <svg
                  className="absolute"
                  style={{ top: "-18px", left: "50%", transform: "translateX(-50%)", width: "14px", height: "14px" }}
                  viewBox="0 0 32 32" fill="none"
                >
                  <path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white"/>
                </svg>
                I
              </span>
              {" "}C
            </span>
          </h2>

          <div className="relative w-full max-w-xl flex justify-center">
            <p
              className="text-gray-200 leading-relaxed px-2 max-w-xl pb-8 md:pb-12"
              style={{fontFamily: "'Zen Dots', sans-serif", fontSize: "clamp(13px, 2vw, 18px)", paddingTop: "clamp(20px, 2vh, 40px)" }}
            >
              N I C adalah wadah bagi mahasiswa informatika unsika untuk
              menunjukan bakat dan keahlian melalui ajang kompetisi hard skill dalam
              bidang informatika.
            </p>
          </div>
        </div>
      </div>

      <div
        className="w-full pointer-events-none select-none relative z-[2]"
        style={{ marginTop: "clamp(120px, 18vw, 300px)" }}
      >
        <div className="absolute left-[50%] bottom-[0%] -translate-x-1/2" style={{ zIndex: 1, width: "clamp(300px, 90vw, 1000px)" }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] bg-[#9333ea] blur-[80px] md:blur-[120px] opacity-50 pointer-events-none rounded-full z-0" />
          <img 
            src={`${BASE_PATH}/images/gdg.png`} 
            alt="GDG Logo" 
            className="w-full h-auto object-contain block relative z-10"
          />
        </div>

        <div className="relative" style={{ zIndex: 2 }}>
          <svg
            width="100%"
            viewBox="0 0 1280 151"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ display: "block" }}
          >
            <path 
              d="M-36.26 5.35328C-36.7533 5.43466 -37.2467 5.51605 -37.74 5.59743C-32.6247 30.2574 -9.80233 44.5514 10.5346 56.2889C207.535 142.857 428.041 147.145 640.274 151C641.194 151 642.114 151 643.033 150.999C856.064 146.656 1077.9 143.332 1274.87 53.5473C1294.55 41.5853 1317.88 25.5799 1318.75 0.00103024 L1320 151 L-40 151 Z" 
              fill="#000923" 
            />
            <path
              d="M-36.26 5.35328C-36.7533 5.43466 -37.2467 5.51605 -37.74 5.59743C-32.6247 30.2574 -9.80233 44.5514 10.5346 56.2889C207.535 142.857 428.041 147.145 640.274 151C641.194 151 642.114 151 643.033 150.999C856.064 146.656 1077.9 143.332 1274.87 53.5473C1294.55 41.5853 1317.88 25.5799 1318.75 0.00103024C1318.25 0.000668934 1317.75 0.000307629 1317.25 -5.3676e-05C1316.35 24.3492 1293.5 40.1416 1273.88 51.8398C1077.53 139.887 855.729 142.699 643.03 146.999C642.111 147 641.193 147.001 640.274 147.001C428.364 143.188 207.924 139.439 11.4841 54.5571C-8.78466 43.0845 -31.2792 28.9172 -36.26 5.35328Z"
              fill="#47237B"
            />
          </svg>
          <div className="absolute top-[calc(100%-2px)] left-0 w-full h-[10px] bg-[#000923]"></div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full bg-[#000923]"
        style={{ paddingBottom: "clamp(48px, 8vh, 120px)", paddingLeft: "clamp(0px, 8vw, 120px)", paddingRight: "clamp(0px, 8vw, 120px)" }}
      >
        <StarryBackgroundBelowCurve />
        <div
          className="flex flex-col items-center text-center w-full max-w-[900px] px-4"
          style={{ marginTop: "clamp(40px, 6vh, 80px)" }}
        >
          <div 
            className="flex flex-col justify-center items-center w-full font-bold tracking-wide text-center" 
            style={{ 
              fontFamily: "'Zen Dots', sans-serif", 
              fontSize: "clamp(32px, 5vw, 54px)",
              marginTop: "clamp(2px, 4vh, 90px)",
              lineHeight: "1.2"
            }}
          >
            <div className="text-white select-none">
              Choose Your
            </div>
            <div 
              className="select-none"
              style={{
                background: "linear-gradient(90deg, #b200ff 0%, #00d4ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Challange
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
          className="flex flex-col md:flex-row gap-5 md:gap-8 justify-center items-stretch w-full px-4"
          style={{
            marginTop: "clamp(40px, 15vh, 200px)",
            maxWidth: "1200px",
          }}
        >
          {competitions.map((comp) => (
            <CompetitionCard 
              key={comp.id} 
              title={comp.title} 
              description={comp.description}
              team={comp.team}
              image={comp.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
