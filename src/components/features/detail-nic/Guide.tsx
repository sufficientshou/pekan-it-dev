import Image from "next/image";
import { BASE_PATH } from '@/config/constants';

export default function Guide() {
  return (
    <section className="relative pb-16 md:pb-32 text-center overflow-hidden max-md:!pb-0" style={{ marginTop: "0px" }}>
      {/* Top Header Graphics */}
      <div className="relative w-full aspect-[1280/151] pointer-events-none z-[10]">
        
        {/* Upward Curve with Solid Mask */}
        <svg
          className="absolute inset-0 z-[2]"
          width="100%"
          height="100%"
          viewBox="0 0 1280 151"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: "block", transform: "scaleY(-1)" }}
        >
          {/* Solid Fill Below Curve (When scaleY(-1) is applied, y=0 becomes the bottom visually) */}
          <path 
            d="M-36.26 5.35328C-36.7533 5.43466 -37.2467 5.51605 -37.74 5.59743C-32.6247 30.2574 -9.80233 44.5514 10.5346 56.2889C207.535 142.857 428.041 147.145 640.274 151C641.194 151 642.114 151 643.033 150.999C856.064 146.656 1077.9 143.332 1274.87 53.5473C1294.55 41.5853 1317.88 25.5799 1318.75 0.00103024 L1320 0 L-40 0 Z" 
            fill="#000923" 
          />
          {/* Curve Line */}
          <path
            d="M-36.26 5.35328C-36.7533 5.43466 -37.2467 5.51605 -37.74 5.59743C-32.6247 30.2574 -9.80233 44.5514 10.5346 56.2889C207.535 142.857 428.041 147.145 640.274 151C641.194 151 642.114 151 643.033 150.999C856.064 146.656 1077.9 143.332 1274.87 53.5473C1294.55 41.5853 1317.88 25.5799 1318.75 0.00103024C1318.25 0.000668934 1317.75 0.000307629 1317.25 -5.3676e-05C1316.35 24.3492 1293.5 40.1416 1273.88 51.8398C1077.53 139.887 855.729 142.699 643.03 146.999C642.111 147 641.193 147.001 640.274 147.001C428.364 143.188 207.924 139.439 11.4841 54.5571C-8.78466 43.0845 -31.2792 28.9172 -36.26 5.35328Z"
            fill="#47237B"
          />
        </svg>
      </div>
      <div className="absolute left-0 top-[60%] -translate-y-1/2 w-[400px] h-[400px] opacity-50 max-md:!w-[200px] max-md:!h-[200px] max-md:!left-[-50px] max-md:!-translate-y-[45%]">
        <Image
          src={`${BASE_PATH}/images/1.webp`}
          alt="bg1"
          fill
          className="object-contain brightness-125 contrast-125"
        />
      </div>

      <div className="absolute right-0 top-[60%] -translate-y-1/2 w-[400px] h-[400px] opacity-50 max-md:!w-[200px] max-md:!h-[200px] max-md:!right-[-50px] max-md:!-translate-y-[45%]">
        <Image
          src={`${BASE_PATH}/images/2.webp`}
          alt="bg2"
          fill
          className="object-contain brightness-125 contrast-125"
        />
      </div>

      <div className="flex flex-col items-center mb-8 relative z-20 px-4 pt-[130px] max-md:!pt-[35px]">
        <h2
          className="text-center font-bold leading-tight"
          style={{marginBottom: 50, fontFamily: "'Zen Dots', cursive", fontSize: "clamp(20px, 4vw, 54px)" }}
        >
          <span style={{ color: "#ffffff" }}>Your </span>
          <span 
            style={{ 
              background: "linear-gradient(90deg, #ff00ff 0%, #00ffff 100%)", 
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Guide{" "}
          </span>
          <span style={{ color: "#ffffff" }}>Before</span>
          <br />
          <span style={{ color: "#ffffff" }}>The Journey</span>
        </h2>
      </div>

      <p className="text-white mt-4 max-w-xl relative z-10 px-6 md:px-4" style={{ fontSize: "clamp(13px, 2.5vw, 15px)", marginLeft: "auto", marginRight: "auto", paddingLeft: "10px", top: "-30px", lineHeight: "1.6" }}>
        Pastikan kamu memahami seluruh ketentuan, alur pendaftaran,
        <br className="hidden md:block" />
        dan detail perlombaan yang telah disusun.
      </p>

      <div className="relative mt-12 md:mt-16 flex justify-center z-10 px-4 max-md:!mt-10">

        <a
          href={`${BASE_PATH}/files/Guidebook.pdf`}
          download="Guidebook-NIC.pdf"
          className="relative group cursor-pointer inline-block"
        >

          <img loading="lazy"
            src={`${BASE_PATH}/images/guidebook-cover.webp`}
            alt="Guidebook NIC"
            className="block rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-[1.03]"
            style={{
              maxWidth: "clamp(140px, 50vw, 350px)",
              width: "100%",
              height: "auto",
              boxShadow: "0 8px 40px rgba(208, 0, 203, 0.4)",
            }}
          />

          <div
            className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "rgba(0, 9, 35, 0.7)", backdropFilter: "blur(4px)" }}
          >
            <svg
              className="w-12 h-12 text-white drop-shadow-lg animate-bounce"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span
              className="text-white font-semibold text-sm tracking-wide"
              style={{ fontFamily: "'Exo 2', sans-serif" }}
            >
              Download Guidebook
            </span>
          </div>

          <div
            className="absolute top-3 right-3 px-2 py-1 rounded-full font-bold text-white"
            style={{
              background: "linear-gradient(90deg, #ff00ff, #00ffff)",
              fontFamily: "'Exo 2', sans-serif",
              fontSize: "10px",
            }}
          >
            PDF
          </div>
        </a>
      </div>
    </section>
  );
}
