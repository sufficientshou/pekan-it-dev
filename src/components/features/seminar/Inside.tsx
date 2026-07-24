import { BASE_PATH } from '@/config/constants';

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
            <div 
              className="absolute text-white animate-star-pulse pointer-events-none select-none"
              style={{
                left: "clamp(-140px, -28vw, -450px)",
                top: "15%",
                width: "clamp(22px, 3vw, 34px)",
                height: "clamp(22px, 3vw, 34px)",
                animationDelay: "0s"
              }}
            >
              <svg className="w-full h-full drop-shadow-[0_0_12px_rgba(236,72,153,0.95)] drop-shadow-[0_0_22px_rgba(192,132,252,0.8)]" viewBox="0 0 32 32" fill="none">
                <path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white" />
              </svg>
            </div>

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

            <div 
              className="absolute text-white animate-star-pulse pointer-events-none select-none"
              style={{
                right: "clamp(-130px, -26vw, -420px)",
                top: "18%",
                width: "clamp(18px, 2.5vw, 28px)",
                height: "clamp(18px, 2.5vw, 28px)",
                animationDelay: "1.2s"
              }}
            >
              <svg className="w-full h-full drop-shadow-[0_0_12px_rgba(236,72,153,0.95)] drop-shadow-[0_0_22px_rgba(192,132,252,0.8)]" viewBox="0 0 32 32" fill="none">
                <path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white" />
              </svg>
            </div>
          </h2>

          <div className="relative w-full max-w-xl flex justify-center">
            <div 
              className="absolute text-white animate-star-pulse pointer-events-none select-none"
              style={{
                left: "clamp(-220px, -45vw, -750px)",
                top: "45%",
                width: "clamp(14px, 1.8vw, 22px)",
                height: "clamp(14px, 1.8vw, 22px)",
                animationDelay: "2.1s"
              }}
            >
              <svg className="w-full h-full drop-shadow-[0_0_10px_rgba(236,72,153,0.9)] drop-shadow-[0_0_18px_rgba(192,132,252,0.7)]" viewBox="0 0 32 32" fill="none">
                <path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white" />
              </svg>
            </div>

            <p
              className="text-gray-200 leading-relaxed px-2 max-w-2xl pb-8 md:pb-12"
              style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "clamp(14px, 1.6vw, 18px)", paddingTop: "clamp(20px, 2vh, 40px)" }}
            >
              Seminar Nasional Pekan IT 2026 mengangkat tema <span className="font-bold italic">&quot;Human and AI Collaboration: From Automation to Enhanced Capabilities&quot;</span> yang akan dibawakan oleh narasumber inspiratif. Dapatkan wawasan terbaru mengenai kolaborasi manusia dan AI serta penerapannya di era digital.
            </p>

            <div 
              className="absolute text-white animate-star-pulse pointer-events-none select-none"
              style={{
                right: "clamp(-200px, -42vw, -700px)",
                top: "50%",
                width: "clamp(16px, 2vw, 24px)",
                height: "clamp(16px, 2vw, 24px)",
                animationDelay: "0.8s"
              }}
            >
              <svg className="w-full h-full drop-shadow-[0_0_10px_rgba(236,72,153,0.9)] drop-shadow-[0_0_18px_rgba(192,132,252,0.7)]" viewBox="0 0 32 32" fill="none">
                <path d="M16 0C16 0 17 13 32 16C17 19 16 32 16 32C16 32 15 19 0 16C15 13 16 0 16 0Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full pointer-events-none select-none relative z-[2]"
        style={{ marginTop: "clamp(120px, 18vw, 300px)" }}
      >
        <div 
          className="absolute left-[50%] bottom-0 -translate-x-1/2 flex justify-center items-end overflow-hidden" 
          style={{ 
            zIndex: 1, 
            width: "clamp(270px, 75vw, 850px)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 45%, black 40%, transparent 88%)",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 45%, black 40%, transparent 88%)"
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[35%] bg-[#9333ea] blur-[45px] md:blur-[65px] opacity-35 pointer-events-none rounded-full z-0" />
          <img 
            src={`${BASE_PATH}/images/ai.png`} 
            alt="AI Graphic" 
            className="w-full h-auto object-contain object-bottom block relative z-10 translate-y-12 md:translate-y-20"
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
              fill="#140222" 
            />
            <path
              d="M-36.26 5.35328C-36.7533 5.43466 -37.2467 5.51605 -37.74 5.59743C-32.6247 30.2574 -9.80233 44.5514 10.5346 56.2889C207.535 142.857 428.041 147.145 640.274 151C641.194 151 642.114 151 643.033 150.999C856.064 146.656 1077.9 143.332 1274.87 53.5473C1294.55 41.5853 1317.88 25.5799 1318.75 0.00103024C1318.25 0.000668934 1317.75 0.000307629 1317.25 -5.3676e-05C1316.35 24.3492 1293.5 40.1416 1273.88 51.8398C1077.53 139.887 855.729 142.699 643.03 146.999C642.111 147 641.193 147.001 640.274 147.001C428.364 143.188 207.924 139.439 11.4841 54.5571C-8.78466 43.0845 -31.2792 28.9172 -36.26 5.35328Z"
              fill="#47237B"
            />
          </svg>
          <div className="absolute top-[calc(100%-2px)] left-0 w-full h-[10px] bg-[#140222]"></div>
        </div>
      </div>
    </section>
  );
}
