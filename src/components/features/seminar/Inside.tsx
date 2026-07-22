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
        <svg className="w-full h-full drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]" viewBox="0 0 32 32" fill="none">
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
  const starPositions = [
    { top: "5%", left: "8%", size: "14px", delay: "0s", duration: "4s" },
    { top: "12%", left: "85%", size: "22px", delay: "1.2s", duration: "5s" },
    { top: "25%", left: "15%", size: "18px", delay: "2.5s", duration: "4.5s" },
    { top: "18%", left: "92%", size: "12px", delay: "0.7s", duration: "3.5s" },
    { top: "35%", left: "5%", size: "24px", delay: "1.8s", duration: "6s" },
    { top: "42%", left: "88%", size: "16px", delay: "3.1s", duration: "4s" },
    { top: "55%", left: "12%", size: "20px", delay: "0.4s", duration: "5.5s" },
    { top: "62%", left: "94%", size: "14px", delay: "2.1s", duration: "3.8s" },
    { top: "75%", left: "7%", size: "16px", delay: "1.5s", duration: "4.2s" },
    { top: "82%", left: "90%", size: "22px", delay: "2.8s", duration: "5.2s" },
    { top: "90%", left: "18%", size: "12px", delay: "0.9s", duration: "3.6s" },
    { top: "95%", left: "84%", size: "18px", delay: "1.7s", duration: "4.8s" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {starPositions.map((star, i) => (
        <div
          key={i}
          className="absolute text-white animate-star-pulse"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        >
          <svg className="w-full h-full drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]" viewBox="0 0 32 32" fill="none">
            <path
              d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z"
              fill="white"
            />
          </svg>
        </div>
      ))}
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
      href="/pendaftaran-ditutup"
      className="relative flex flex-col group w-full max-w-[340px] min-h-[440px] rounded-[24px] overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer block"
      style={{
        background: "#1b233d",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
      }}
    >
      <div className="relative w-full px-6 pt-6 pb-0">
        <div 
          className="relative rounded-[16px] overflow-hidden w-[92%] aspect-[290/170] left-[4%] sm:w-[290px] sm:h-[170px] sm:left-[22px] top-[20px]"
        >
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
            <span className="text-gray-300 text-[11px] font-medium relative z-10" style={{paddingRight: "clamp(30px, 12vw, 70px)", paddingBottom: "3px"}}>{team}</span>
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
      `}} />

      <div className="relative z-10 flex flex-col items-center w-full"
        style={{ paddingTop: "clamp(40px, 8vw, 160px)", paddingLeft: "clamp(0px, 8vw, 120px)", paddingRight: "clamp(0px, 8vw, 120px)" }}
      >
        <div className="flex flex-col items-center gap-4 md:gap-6 text-center w-full" style={{ paddingTop: "clamp(15px, 4vh, 70px)" }}>
          <h2
            className="font-bold tracking-wide max-w-2xl relative"
            style={{fontFamily: "'Zen Dots', sans-serif", fontSize: "clamp(34px, 5.5vw, 58px)" }}
          >
            Inside{" "}
            <span 
              style={{ 
                background: "linear-gradient(90deg, #60a5fa 0%, #8b5cf6 50%, #b620e0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }} 
              className="relative inline-block"
            >
              Tech Talks
            </span>
          </h2>

          <div className="relative w-full max-w-xl flex justify-center">
            <p
              className="text-gray-200 leading-relaxed px-2 max-w-xl pb-8 md:pb-12"
              style={{fontFamily: "'Zen Dots', sans-serif", fontSize: "clamp(12px, 1.5vw, 15px)", paddingTop: "clamp(20px, 2vh, 40px)" }}
            >
              Seminar &amp; Exhibition adalah wadah bagi pelajar, mahasiswa dan seluruh masyarakat indonesia untuk bersaing dan menunjukan bakat dan keahlian mereka.
            </p>
          </div>
        </div>
      </div>

      <div
        className="w-full pointer-events-none select-none relative z-[2]"
        style={{ marginTop: "clamp(120px, 18vw, 300px)" }}
      >
        <div className="absolute left-[50%] bottom-[-75px] -translate-x-1/2 flex justify-center items-end" style={{ zIndex: 1, width: "clamp(270px, 75vw, 850px)" }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] bg-[#9333ea] blur-[80px] md:blur-[120px] opacity-50 pointer-events-none rounded-full z-0" />
          <img 
            src={`${BASE_PATH}/images/ai.png`} 
            alt="AI Graphic" 
            className="w-full h-auto object-contain object-bottom block relative z-10 translate-y-4"
            style={{ maxHeight: "clamp(200px, 34vw, 440px)" }}
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
              fontSize: "clamp(26px, 4vw, 42px)",
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
              fontSize: "clamp(12px, 1.6vw, 17px)",
              marginTop: "clamp(40px, 6vh, 60px)",
            }}
          >
            Jelajahi berbagai event seminar dan temukan topik
            yang sesuai dengan minat kamu
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
