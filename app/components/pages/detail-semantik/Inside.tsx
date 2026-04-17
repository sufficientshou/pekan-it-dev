import { ArrowUpRight } from "lucide-react";

const competitions = [
  { id: "desain", title: "Design\nGrafis" },
  { id: "typing", title: "Typing\nCompetition" },
  { id: "cp", title: "Competitive\nProgramming" },
];

// Sparkle star SVG
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
    <div
      className="relative group cursor-pointer transition-transform duration-300 hover:-translate-y-1 w-full max-w-[280px]"
      style={{ height: "200px" }}
    >
      {/* Gradient border (cyan to magenta) */}
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

      {/* Card background (dark purple) */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "#2d1b4e",
          boxShadow: "0 0 20px rgba(255,0,255,0.2)",
        }}
      />

      {/* Sparkles inside card */}
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

      {/* Card title (Zen Dots font, centered) */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
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

      {/* Bottom bar: Daftar button + gradient bar */}
      <div
        className="absolute bottom-0 left-0 w-full flex items-center gap-3 px-4 py-3 rounded-b-2xl"
        style={{ background: "rgba(0,0,0,0.2)" }}
      >
        {/* Daftar button */}
        <button
          className="flex items-center gap-1 px-3 md:px-4 py-1.5 rounded-full text-white text-xs md:text-sm font-semibold shrink-0 cursor-pointer transition-opacity hover:opacity-80"
          style={{
            fontFamily: "'Exo 2', sans-serif",
            background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)",
          }}
        >
          Daftar <ArrowUpRight size={14} />
        </button>

        {/* Gradient pill bar (cyan to magenta) */}
        <div
          className="flex-1 rounded-full h-2"
          style={{
            background: "linear-gradient(90deg, #00ffff 0%, #ff00ff 100%)",
            opacity: 0.9,
          }}
        />
      </div>
    </div>
  );
}

export default function Inside() {
  return (
    <section className="relative h-screen min-h-[2000px] flex items-center justify-center text-white px-4 md:px-8 lg:px-[500px]">
      {/* BACKGROUND SEGITIGA */}
      <img
        src="/images/segitiga.png"
        alt="bg"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[1500px] max-w-none opacity-95"
      />

      {/* BINTANG KIRI */}
      <img
        src="/images/Kiri.png"
        className="absolute bottom-10 left-5 w-[160px] md:w-[260px] lg:w-[350px] opacity-90 top-140"
      />

      {/* BINTANG KANAN */}
      <img
        src="/images/Kanan.png"
        className="absolute bottom-10 right-5 w-[160px] md:w-[260px] lg:w-[400px] opacity-90 top-140"
      />

      {/* CONTENT */}
      <div className="relative z-10 text-center flex flex-col items-center gap-4 md:gap-6 bottom-160">
        {/* LOGO */}
        <img src="/images/LOGO.png" alt="Logo" className="w-12 md:w-16 lg:w-27" />

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide px-4">
          Inside SEMANTIK
        </h2>

        {/* DESC */}
        <p className="max-w-xl text-gray-200 leading-relaxed px-6 md:px-4" style={{ fontSize: "clamp(14px, 2.5vw, 20px)" }}>
          SEMANTIK 9.0 adalah wadah bagi mahasiswa informatika unsika untuk
          menunjukan bakat dan keahlian melalui ajang kompetisi hard skill dalam
          bidang informatika.
        </p>
      </div>

      {/* MAHKOTA */}
      <div className="absolute left-1/2 -translate-x-1/2 z-20">
        <img
          src="/images/Crown.png"
          alt="crown"
          width={400}
          height={400}
          className="w-[250px] md:w-[350px] lg:w-[400px]"
        />
      </div>

      {/* SAYAP + TITLE */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[75%] w-full">
        {/* SAYAP KIRI */}
        <div className="hidden lg:block absolute left-[150px] -translate-x-[100%] bottom-[700px]">
          <img
            src="/images/left.png"
            alt="wing"
            className="w-[320px] h-auto drop-shadow-[0_0_40px_rgba(255,0,255,0.6)]"
          />
        </div>

        {/* SAYAP KANAN */}
        <div className="hidden lg:block absolute right-[150px] translate-x-[100%] bottom-[700px]">
          <img
            src="/images/left.png"
            alt="wing"
            className="w-[320px] h-auto scale-x-[-1] drop-shadow-[0_0_40px_rgba(255,0,255,0.6)]"
          />
        </div>

        {/* TITLE */}
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

        {/* CARDS */}
        <div
          className="flex flex-col md:flex-row gap-6 justify-center items-center px-4 md:px-8"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          {competitions.map((comp) => (
            <CompetitionCard key={comp.id} title={comp.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
