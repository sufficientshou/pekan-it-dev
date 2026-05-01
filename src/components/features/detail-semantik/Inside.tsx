import { BASE_PATH } from '@/config/constants';

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
const competitions = [
  { id: "desain", title: "Design\nGrafis" },
  { id: "typing", title: "Typing\nCompetition" },
  { id: "cp", title: "Competitive\nProgramming" },
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

function CompetitionCard({ title }: { title: string }) {
  const lines = title.split("\n");

  return (
    <Link
      href="/pendaftaran"
      className="relative group cursor-pointer transition-transform duration-300 hover:-translate-y-1 w-full max-w-[280px] block"
      style={{ height: "250px" }}
    >
      <div
        className="absolute inset-0 rounded-2xl"
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
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "#2d1b4e",
          boxShadow: "0 0 20px rgba(255,0,255,0.2)",
        }}
      />

      <div className="absolute top-4 left-4 opacity-60">
        <Sparkle size={18} />
      </div>
      <div className="absolute top-6 right-6 opacity-50">
        <Sparkle size={14} />
      </div>
      <div className="absolute bottom-16 right-4 opacity-40">
        <Sparkle size={16} />
      </div>
      <div className="absolute bottom-20 left-6 opacity-30">
        <Sparkle size={12} />
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-6 pb-14">
        <h3
          className="text-white text-center font-bold leading-tight"
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
        className="absolute bottom-0 left-0 w-full flex items-center gap-3 px-4 py-3 rounded-b-2xl"
        style={{ background: "rgba(0,0,0,0.2)" }}
      >
        <button
          className="flex items-center gap-0 px-8 md:px-10 py-1.5 rounded-full text-white text-xs md:text-sm font-semibold shrink-0 cursor-pointer transition-opacity hover:opacity-80"
          style={{
            fontFamily: "'Exo 2', sans-serif",
            background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)",
          }}
        >
          <span style={{ paddingLeft: "4px" }}>Daftar</span> <ArrowUpRight size={14} />
        </button>

        <div
          className="flex-1 rounded-full h-2"
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
    <section id="inside" className="relative h-screen min-h-[2000px] flex items-center justify-center text-white px-4 md:px-8 lg:px-[500px] max-md:!h-auto max-md:!min-h-0 max-md:!flex-col max-md:!px-4 max-md:!py-16 max-md:!gap-0">

      <img loading="lazy"
        src={`${BASE_PATH}/images/segitiga.png`}
        alt="bg"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[1500px] max-w-none opacity-95 max-md:!w-[200%] max-md:!top-0"
      />

      <img loading="lazy"
        src={`${BASE_PATH}/images/Kiri.png`}
        className="absolute bottom-10 left-5 w-[160px] md:w-[260px] lg:w-[350px] opacity-90 top-140 max-md:!hidden"
      />

      <img loading="lazy"
        src={`${BASE_PATH}/images/Kanan.png`}
        className="absolute bottom-10 right-5 w-[160px] md:w-[260px] lg:w-[400px] opacity-90 top-140 max-md:!hidden"
      />

      <div className="relative z-10 text-center flex flex-col items-center gap-4 md:gap-6 bottom-160 max-md:!static max-md:!bottom-auto max-md:!gap-4 max-md:!mt-32 max-md:!mb-8">
        <img loading="lazy" src={`${BASE_PATH}/images/LOGO.png`} alt="Logo" className="w-12 md:w-16 lg:w-27 max-md:!w-14" />

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide px-4 max-md:!text-2xl">
          Inside SEMANTIK
        </h2>

        <p className="max-w-xl text-gray-200 leading-relaxed px-6 md:px-4 max-md:!text-sm max-md:!px-4" style={{ fontSize: "clamp(14px, 2.5vw, 20px)" }}>
          SEMANTIK 9.0 adalah wadah bagi mahasiswa informatika unsika untuk
          menunjukan bakat dan keahlian melalui ajang kompetisi hard skill dalam
          bidang informatika.
        </p>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 z-20 max-md:!relative max-md:!left-auto max-md:!translate-x-0 max-md:!mb-10">
        <img loading="lazy"
          src={`${BASE_PATH}/images/Crown.png`}
          alt="crown"
          width={400}
          height={400}
          className="w-[250px] md:w-[350px] lg:w-[400px] max-md:!w-[200px]"
        />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-[75%] w-full max-md:!hidden">
        <div className="hidden lg:block absolute left-[600px] -translate-x-[100%] bottom-[500px]">
          <img loading="lazy"
            src={`${BASE_PATH}/images/left.png`}
            alt="wing"
            className="w-[320px] h-auto drop-shadow-[0_0_40px_rgba(255,0,255,0.6)]"
          />
        </div>

        <div className="hidden lg:block absolute right-[600px] translate-x-[100%] bottom-[500px]">
          <img loading="lazy"
            src={`${BASE_PATH}/images/left.png`}
            alt="wing"
            className="w-[320px] h-auto scale-x-[-1] drop-shadow-[0_0_40px_rgba(255,0,255,0.6)]"
          />
        </div>

        <h2 className="font-bold text-center" style={{ marginTop: '-350px', fontSize: "clamp(32px, 6vw, 72px)" }}>
          Choose Your
        </h2>

        <h2 className="font-bold text-cyan-400 text-center drop-shadow-[0_0_20px_rgba(0,255,255,1)]" style={{ fontSize: "clamp(32px, 6vw, 72px)" }}>
          Challenge
        </h2>
        
        <p className="text-center text-gray-300 leading-relaxed mx-auto px-4" style={{ 
          marginTop: '30px', 
          marginBottom: '64px', 
          fontSize: "clamp(14px, 2.5vw, 20px)", 
          maxWidth: '480px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Jelajahi berbagai kompetisi dan temukan tantangan
          yang sesuai dengan keterampilan dan minat kamu
        </p>

        <div
          className="flex flex-col md:flex-row gap-6 justify-center items-center px-4 md:px-8"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          {competitions.map((comp) => (
            <CompetitionCard key={comp.id} title={comp.title} />
          ))}
        </div>
      </div>

      <div className="hidden max-md:!flex flex-col items-center w-full relative z-10 mt-4">
        <h2 className="font-bold text-center text-3xl">
          Choose Your
        </h2>

        <h2 className="font-bold text-cyan-400 text-center drop-shadow-[0_0_20px_rgba(0,255,255,1)] text-3xl">
          Challenge
        </h2>
        
        <p 
          className="text-center text-gray-300 leading-relaxed mx-auto px-6 text-sm mt-4 max-w-[320px]"
          style={{ marginBottom: "60px" }}
        >
          Jelajahi berbagai kompetisi dan temukan tantangan
          yang sesuai dengan keterampilan dan minat kamu
        </p>

        <div className="flex flex-col gap-5 items-center w-full px-6" style={{ marginTop: "20px" }}>
          {competitions.map((comp) => (
            <CompetitionCard key={comp.id} title={comp.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

