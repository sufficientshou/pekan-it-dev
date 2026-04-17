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

// Wing SVG (left side, mirror for right)
function Wing({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 280 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "260px",
        height: "200px",
        transform: flip ? "scaleX(-1)" : undefined,
      }}
    >
      <defs>
        <linearGradient id={flip ? "wingGradR" : "wingGradL"} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10e6f1" />
          <stop offset="60%" stopColor="#d000cb" />
          <stop offset="100%" stopColor="#7b2ff7" />
        </linearGradient>
      </defs>
      {/* Feathers — layered arcs */}
      {[
        "M 240 30 Q 180 80 100 160 Q 60 130 20 180 Q 80 100 160 50 Z",
        "M 220 50 Q 160 100 90 170 Q 55 145 15 200 Q 70 120 150 70 Z",
        "M 200 70 Q 140 115 80 175 Q 48 152 12 205 Q 62 135 140 90 Z",
        "M 180 90 Q 120 130 70 180 Q 40 158 8 208 Q 55 148 130 108 Z",
        "M 260 20 Q 200 65 120 155 Q 75 120 30 165 Q 95 90 175 35 Z",
      ].map((d, i) => (
        <path
          key={i}
          d={d}
          stroke={`url(#${flip ? "wingGradR" : "wingGradL"})`}
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          opacity={0.7 + i * 0.06}
        />
      ))}
    </svg>
  );
}

// Crown SVG
function Crown() {
  return (
    <div className="relative flex flex-col items-center">
      {/* Glow circle behind crown */}
      <div
        className="absolute rounded-full"
        style={{
          width: "120px",
          height: "120px",
          top: "-20px",
          background: "radial-gradient(circle, rgba(208,0,203,0.5) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      <svg width="80" height="65" viewBox="0 0 80 65" fill="none">
        <defs>
          <linearGradient id="crownGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10e6f1" />
            <stop offset="100%" stopColor="#d000cb" />
          </linearGradient>
        </defs>
        {/* Crown shape */}
        <path
          d="M5 55 L10 20 L25 40 L40 5 L55 40 L70 20 L75 55 Z"
          stroke="url(#crownGrad)"
          strokeWidth="3"
          strokeLinejoin="round"
          fill="rgba(208,0,203,0.15)"
        />
        {/* Gems on crown tips */}
        <circle cx="40" cy="5" r="4" fill="#10e6f1" />
        <circle cx="10" cy="20" r="3" fill="#d000cb" />
        <circle cx="70" cy="20" r="3" fill="#d000cb" />
        {/* Base line */}
        <line x1="5" y1="55" x2="75" y2="55" stroke="url(#crownGrad)" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function Pendaftaran() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0d001a 0%, #1a0030 40%, #0d001a 100%)",
        minHeight: "720px",
        paddingBottom: "80px",
      }}
    >
      {/* Top cyan border */}
      <div
        className="absolute top-0 left-0 w-full h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(16,230,241,0.9) 30%, rgba(110,142,251,1) 50%, rgba(16,230,241,0.9) 70%, transparent 100%)",
        }}
      />

      {/* Magenta radial glow center-top */}
      <div
        className="absolute"
        style={{
          top: "-60px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "400px",
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(208,0,203,0.45) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Wings */}
      <div className="absolute" style={{ top: "30px", left: "-20px", opacity: 0.9 }}>
        <Wing flip={false} />
      </div>
      <div className="absolute" style={{ top: "30px", right: "-20px", opacity: 0.9 }}>
        <Wing flip={true} />
      </div>

      {/* Crown + Sparkle top center */}
      <div className="flex flex-col items-center pt-6 relative z-10">
        <div className="relative">
          {/* sparkle top of crown */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Sparkle size={16} />
          </div>
          <Crown />
        </div>

        {/* Headline */}
        <h2
          className="text-center font-bold leading-tight mt-4"
          style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "clamp(36px, 4.5vw, 56px)" }}
        >
          <span className="text-white">Choose Your</span>
          <br />
          <span style={{ color: "#10e6f1" }}>Challenge</span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-white text-center mt-4 max-w-[480px]"
          style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "15px", opacity: 0.85, lineHeight: 1.6 }}
        >
          Jelajahi berbagai kompetisi dan temukan tantangan yang sesuai dengan
          keterampilan dan minat kamu
        </p>

        {/* Cards grid */}
        <div
          className="mt-10 flex gap-6 flex-wrap justify-center px-8"
          style={{ maxWidth: "1100px" }}
        >
          {competitions.map((comp) => (
            <CompetitionCard key={comp.id} title={comp.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CompetitionCard({ title }: { title: string }) {
  const lines = title.split("\n");

  return (
    <div
      className="relative group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
      style={{ width: "300px", height: "220px" }}
    >
      {/* Gradient border glow */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          padding: "2px",
          background: "linear-gradient(135deg, #10e6f1 0%, #d000cb 100%)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          borderRadius: "16px",
        }}
      />

      {/* Card bg */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(80,0,120,0.95) 0%, rgba(50,0,90,0.95) 100%)",
          boxShadow:
            "0 0 30px rgba(208,0,203,0.3), 0 0 60px rgba(16,230,241,0.1), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      />

      {/* Sparkles inside card */}
      <div className="absolute top-4 left-4 opacity-60">
        <Sparkle size={18} />
      </div>
      <div className="absolute top-8 left-10 opacity-40">
        <Sparkle size={12} />
      </div>
      <div className="absolute bottom-12 right-4 opacity-50">
        <Sparkle size={16} />
      </div>

      {/* Card title */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <h3
          className="text-white text-center font-bold leading-snug"
          style={{
            fontFamily: "'Exo 2', sans-serif",
            fontSize: "clamp(22px, 2.5vw, 28px)",
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
        style={{ background: "rgba(0,0,0,0.3)" }}
      >
        {/* Daftar button */}
        <button
          className="flex items-center gap-1 px-4 py-1.5 rounded-full text-white text-sm font-semibold shrink-0 cursor-pointer transition-opacity hover:opacity-80"
          style={{
            fontFamily: "'Exo 2', sans-serif",
            border: "1.5px solid rgba(16,230,241,0.7)",
            background: "transparent",
            fontSize: "13px",
          }}
        >
          Daftar <ArrowUpRight size={14} />
        </button>

        {/* Gradient pill bar */}
        <div
          className="flex-1 rounded-full h-2"
          style={{
            background:
              "linear-gradient(90deg, rgba(16,230,241,1) 0%, rgba(208,0,203,1) 100%)",
            opacity: 0.85,
          }}
        />
      </div>
    </div>
  );
}