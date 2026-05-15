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
      href="/pendaftaran-ditutup"
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

      <div className="absolute top-4 left-4 opacity-60"><Sparkle size={18} /></div>
      <div className="absolute top-6 right-6 opacity-50"><Sparkle size={14} /></div>
      <div className="absolute bottom-16 right-4 opacity-40"><Sparkle size={16} /></div>
      <div className="absolute bottom-20 left-6 opacity-30"><Sparkle size={12} /></div>
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
          className="relative flex items-center justify-center gap-1 rounded-full text-white text-sm font-semibold shrink-0 cursor-pointer transition-all hover:opacity-80 overflow-hidden"
          style={{
            width: "90px",
            height: "25px",
            fontFamily: "'Exo 2', sans-serif",
            background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)",
          }}
        >
          <span className="relative z-10">Daftar</span>
          <ArrowUpRight size={16} className="relative z-10" />
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
    <section
      id="inside"
      className="relative w-full overflow-hidden text-white"
      style={{ background: "transparent" }}
    >
      <img
        loading="lazy"
        src={`${BASE_PATH}/images/segitiga.webp`}
        alt="bg"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[1500px] max-w-none opacity-95 max-md:w-[200%] pointer-events-none"
      />
      <img
        loading="lazy"
        src={`${BASE_PATH}/images/Kiri.webp`}
        className="hidden md:block absolute bottom-10 left-5 w-[160px] lg:w-[260px] xl:w-[350px] opacity-90 pointer-events-none"
        style={{ top: "clamp(600px, 70vh, 800px)", right: "clamp(600px, 70vw, 800px)" }}
      />
      <img
        loading="lazy"
        src={`${BASE_PATH}/images/Kanan.webp`}
        className="hidden md:block absolute bottom-10 right-5 w-[160px] lg:w-[260px] xl:w-[400px] opacity-90 pointer-events-none"
        style={{ top: "clamp(600px, 70vh, 800px)" }}
      />

      <img
        loading="lazy"
        src={`${BASE_PATH}/images/left.webp`}
        alt="wing"
        className="hidden xl:block absolute pointer-events-none"
        style={{
          width: "clamp(300px, 30vw, 420px)",
          left: "clamp(20px, 8vw, 200px)",
          top: "clamp(1020px, 118vh, 1000px)",
          filter: "drop-shadow(0 0 40px rgba(255,0,255,0.6))",
        }}
      />
      <img
        loading="lazy"
        src={`${BASE_PATH}/images/left.webp`}
        alt="wing"
        className="hidden xl:block absolute pointer-events-none scale-x-[-1]"
        style={{
          width: "clamp(300px, 30vw, 420px)",
          right: "clamp(20px, 8vw, 200px)",
          top: "clamp(1020px, 118vh, 1000px)",
          filter: "drop-shadow(0 0 40px rgba(255,0,255,0.6))",
        }}
      />

      <div className="relative z-10 flex flex-col items-center w-full px-4 md:px-8"
        style={{ paddingTop: "clamp(30px, 12vw, 400px)", paddingBottom: "clamp(48px, 8vh, 120px)", paddingLeft: "clamp(0px, 8vw, 120px)", paddingRight: "clamp(0px, 8vw, 120px)" }}
      >

        <div className="flex flex-col items-center gap-4 md:gap-6 text-center max-w-xl" style={{ paddingTop: "clamp(5px, 10vw, 220px)" }}>
          <img
            loading="lazy"
            src={`${BASE_PATH}/images/LOGO.webp`}
            alt="Logo"
            className="w-12 md:w-16 lg:w-24"
          />
          <h2
            className="font-bold tracking-wide"
            style={{ fontSize: "clamp(22px, 5vw, 48px)" }}
          >
            Inside SEMANTIK
          </h2>
          <p
            className="text-gray-200 leading-relaxed px-2"
            style={{ fontSize: "clamp(13px, 2vw, 18px)" }}
          >
            SEMANTIK 9.0 adalah wadah bagi mahasiswa informatika unsika untuk
            menunjukan bakat dan keahlian melalui ajang kompetisi hard skill dalam
            bidang informatika.
          </p>
        </div>

        <div 
          className="flex justify-center"
          style={{ marginTop: "clamp(20px, 8vw, 220px)" }}
        >
          <img
            loading="lazy"
            src={`${BASE_PATH}/images/Crown.webp`}
            alt="crown"
            className="w-[180px] md:w-[280px] lg:w-[360px]"
          />
        </div>

        <div
          className="flex flex-col items-center text-center mt-8 md:mt-12"
          style={{ gap: "clamp(4px, 1vh, 12px)" }}
        >
          <h2
            className="font-bold"
            style={{ fontSize: "clamp(28px, 6vw, 72px)", marginTop: "clamp(2px, 4vh, 90px)" }}
          >
            Choose Your
          </h2>
          <h2
            className="font-bold text-cyan-400"
            style={{
              fontSize: "clamp(28px, 6vw, 72px)",
              filter: "drop-shadow(0 0 20px rgba(0,255,255,1))",
            }}
          >
            Challenge
          </h2>
          <p
            className="text-gray-300 leading-relaxed max-w-[480px] px-4"
            style={{
              fontSize: "clamp(15px, 2vw, 20px)",
              marginTop: "clamp(12px, 2vh, 12px)",
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