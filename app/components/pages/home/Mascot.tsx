export default function Avatar() {
  const cardBase =
    "absolute rounded-[15px] border-2 border-[#d000cb] backdrop-blur-[2px] backdrop-brightness-100 backdrop-saturate-100";
  const cardShadow =
    "shadow-[0px_0px_100px_#d000cb,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]";

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "1265px", background: "#000923" }}
    >
      {/* Gradient overlay at top for smooth transition from Timeline - minimal to not cover content */}
      <div 
        className="absolute top-0 left-0 w-full pointer-events-none"
        style={{ 
          height: "100px",
          background: "linear-gradient(180deg, rgba(0,9,35,0.6) 0%, rgba(0,9,35,0.2) 50%, transparent 100%)",
          zIndex: 2,
        }}
      />

      {/* ── Polygon glow rays (X shape) ── */}
      {/* Top-right ray */}
      <div
        className="absolute"
        style={{
          top: "202px", left: "747px", width: "527px", height: "444px",
          background: "linear-gradient(135deg, transparent 30%, rgba(208,0,203,0.55) 50%, transparent 70%)",
          filter: "blur(18px)",
          transform: "rotate(0deg)",
          pointerEvents: "none",
        }}
      />
      {/* Bottom-left ray */}
      <div
        className="absolute"
        style={{
          top: "629px", left: "338px", width: "527px", height: "444px",
          background: "linear-gradient(135deg, transparent 30%, rgba(208,0,203,0.55) 50%, transparent 70%)",
          filter: "blur(18px)",
          pointerEvents: "none",
        }}
      />
      {/* Bottom-right ray */}
      <div
        className="absolute"
        style={{
          top: "629px", left: "747px", width: "527px", height: "444px",
          background: "linear-gradient(225deg, transparent 30%, rgba(208,0,203,0.55) 50%, transparent 70%)",
          filter: "blur(18px)",
          pointerEvents: "none",
        }}
      />
      {/* Top-left ray */}
      <div
        className="absolute"
        style={{
          top: "202px", left: "338px", width: "527px", height: "444px",
          background: "linear-gradient(225deg, transparent 30%, rgba(208,0,203,0.55) 50%, transparent 70%)",
          filter: "blur(18px)",
          pointerEvents: "none",
        }}
      />

      {/* Center magenta glow */}
      <div
        className="absolute rounded-full"
        style={{
          top: "450px", left: "590px", width: "400px", height: "400px",
          background: "rgba(208,0,203,0.25)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* ── Judul ── */}
      {/* Ganti dengan SVG dari Figma jika tersedia:
        <img src="/images/meet-our-mascott.svg" alt="Meet Our Mascott" style={{ position:"absolute", top:"54px", left:"calc(50% - 356px)", width:"713px", height:"64px" }} />
      */}
      <div
        className="absolute flex items-center justify-center"
        style={{ top: "54px", left: "calc(50% - 356px)", width: "713px", height: "64px" }}
      >
        <h2
          className="font-bold text-center whitespace-nowrap"
          style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "52px", lineHeight: 1 }}
        >
          <span className="text-white">Meet Our </span>
          <span style={{ color: "#d000cb" }}>Mascott</span>
        </h2>
      </div>

      {/* ── Maskot (gambar tengah) ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/mascot.png"
        alt="Mascot"
        className="absolute"
        style={{ top: "457px", left: "648px", width: "332px", height: "328px", objectFit: "contain" }}
      />

      {/* ── 4 Cards ── */}

      {/* Top-left — magenta solid */}
      <div
        className={`${cardBase} ${cardShadow}`}
        style={{
          top: "252px", left: "311px",
          width: "207px", height: "159px",
          background: "#d000cb",
        }}
      />

      {/* Top-right — magenta solid */}
      <div
        className={`${cardBase} ${cardShadow}`}
        style={{
          top: "252px", left: "1062px",
          width: "207px", height: "159px",
          background: "#d000cb",
        }}
      />

      {/* Bottom-right — magenta solid */}
      <div
        className={`${cardBase} ${cardShadow}`}
        style={{
          top: "894px", left: "1062px",
          width: "207px", height: "159px",
          background: "#d000cb",
        }}
      />

      {/* Bottom-left — magenta transparent */}
      <div
        className={`${cardBase} ${cardShadow}`}
        style={{
          top: "894px", left: "311px",
          width: "207px", height: "159px",
          background: "rgba(208,0,203,0.2)",
        }}
      />
    </section>
  );
}