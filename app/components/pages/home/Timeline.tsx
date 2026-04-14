export default function Timeline() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{ background: "#000923", minHeight: "1100px" }}
    >
      {/* ── Glow bars kiri atas ── */}
      <div
        className="absolute"
        style={{
          top: "57px", left: "-39px", width: "266px", height: "9px",
          transform: "rotate(180deg)",
          filter: "blur(7px)",
          background: "linear-gradient(90deg, rgba(16,230,241,0.7) 0%, rgba(208,0,203,1) 100%)",
          border: "1px solid black",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "116px", left: "-61px", width: "210px", height: "9px",
          transform: "rotate(180deg)",
          filter: "blur(7px)",
          background: "linear-gradient(90deg, rgba(16,230,241,0.7) 0%, rgba(208,0,203,1) 100%)",
          border: "1px solid black",
        }}
      />
      {/* Cyan dot kiri */}
      <div
        className="absolute rounded-full"
        style={{
          top: "57px", left: "196px", width: "76px", height: "18px",
          transform: "rotate(180deg)",
          filter: "blur(11px)",
          background: "rgba(16,230,241,1)",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "112px", left: "0", width: "151px", height: "9px",
          transform: "rotate(180deg)",
          filter: "blur(4.5px)",
          background: "linear-gradient(90deg, rgba(16,230,241,0.3) 0%, rgba(208,0,203,0.15) 100%)",
          borderRadius: "15px 0 0 15px",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "108px", left: "97px", width: "60px", height: "18px",
          transform: "rotate(180deg)",
          filter: "blur(11px)",
          background: "rgba(16,230,241,1)",
          borderRadius: "30px 30px 0 0",
        }}
      />

      {/* ── Glow bars kanan atas ── */}
      <div
        className="absolute"
        style={{
          top: "57px", right: "-39px", width: "266px", height: "9px",
          transform: "rotate(180deg)",
          filter: "blur(7px)",
          background: "linear-gradient(90deg, rgba(16,230,241,0.7) 0%, rgba(208,0,203,1) 100%)",
          border: "1px solid black",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "116px", right: "-61px", width: "210px", height: "9px",
          transform: "rotate(180deg)",
          filter: "blur(7px)",
          background: "linear-gradient(90deg, rgba(16,230,241,0.7) 0%, rgba(208,0,203,1) 100%)",
          border: "1px solid black",
        }}
      />
      {/* Cyan dot kanan */}
      <div
        className="absolute rounded-full"
        style={{
          top: "57px", right: "196px", width: "76px", height: "18px",
          transform: "rotate(180deg)",
          filter: "blur(11px)",
          background: "rgba(16,230,241,1)",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "112px", right: "0", width: "151px", height: "9px",
          transform: "rotate(180deg)",
          filter: "blur(4.5px)",
          background: "linear-gradient(90deg, rgba(16,230,241,0.3) 0%, rgba(208,0,203,0.15) 100%)",
          borderRadius: "15px 0 0 15px",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "108px", right: "97px", width: "60px", height: "18px",
          transform: "rotate(180deg)",
          filter: "blur(11px)",
          background: "rgba(16,230,241,1)",
          borderRadius: "30px 30px 0 0",
        }}
      />

      {/* ── Judul ── */}
      <div
        className="absolute flex justify-center"
        style={{ top: "39px", left: "calc(50% - 500px)", width: "1000px", height: "154px" }}
      >
        {/* Ganti dengan SVG dari Figma jika tersedia:
          <img src="/images/your-roadmap-for-this-amazing-event.svg" alt="Your Roadmap" style={{ width: "842px", height: "154px" }} />
        */}
        <h2
          className="text-center font-bold leading-tight"
          style={{ fontFamily: "'Zen Dots', sans-serif", fontSize: "72px" }}
        >
          <span className="text-white">Your </span>
          <span style={{ color: "#CC00CC" }}>Roadmap</span>
          <span className="text-white"> For</span>
          <br />
          <span className="text-white">This Amazing Event</span>
        </h2>
      </div>

      {/* ── Roket / gambar tengah ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/timeline-rocket.png"
        alt="Rocket Timeline"
        className="absolute"
        style={{ top: "189px", left: "480px", width: "590px", height: "900px", objectFit: "contain" }}
      />

      {/* Gradient overlay at bottom for smooth transition to Mascot - covers rocket bottom */}
      <div 
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ 
          height: "350px",
          background: "linear-gradient(0deg, rgba(0,9,35,1) 0%, rgba(0,9,35,0.95) 15%, rgba(0,9,35,0.8) 40%, rgba(0,9,35,0.5) 70%, transparent 100%)",
          zIndex: 10,
        }}
      />

      {/* ── Card: Semantik Competition (kiri atas) ── */}
      <TimelineCard
        top={395}
        left={300}
        title="Semantik Competition"
        date="April - Mei 2026"
      />

      {/* ── Card: National IT Competition (kanan tengah) ── */}
      <TimelineCard
        top={595}
        left={1000}
        title="National IT Competition"
        date="Juni - Juli 2026"
      />

      {/* ── Card: Tech talks (kiri bawah) ── */}
      <TimelineCard
        top={754}
        left={300}
        title="Tech talks"
        date="Agustus 2026"
      />
    </section>
  );
}

function TimelineCard({
  top,
  left,
  title,
  date,
}: {
  top: number;
  left: number;
  title: string;
  date: string;
}) {
  return (
    <div
      className="absolute flex flex-col justify-between"
      style={{
        top,
        left,
        width: "266px",
        height: "137px",
        padding: "30px 24px",
        borderRadius: "16px",
        background:
          "linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%), linear-gradient(105deg, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0) 100%)",
        backdropFilter: "blur(6px) brightness(100%)",
        boxShadow: "0px 0px 50px #d000cb, inset 0px 1px 2px rgba(255,255,255,0.1)",
        // gradient border via outline trick
        border: "2px solid transparent",
        backgroundClip: "padding-box",
        // overlay border via pseudo — gunakan wrapper di bawah
      }}
    >
      {/* Gradient border overlay */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          padding: "2px",
          background: "linear-gradient(105deg, rgba(16,230,241,0.8) 0%, rgba(208,0,203,0.4) 100%)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          borderRadius: "16px",
        }}
      />

      <span
        className="leading-normal"
        style={{
          fontFamily: "'Zen Dots', sans-serif",
          fontSize: "20px",
          fontWeight: 400,
          background: "linear-gradient(340deg, rgba(208,0,203,1) 0%, rgba(16,230,241,1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "none",
          filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))",
        }}
      >
        {title}
      </span>

      <span
        className="text-white"
        style={{
          fontFamily: "'Zen Dots', sans-serif",
          fontSize: "15px",
          fontWeight: 400,
          textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
        }}
      >
        {date}
      </span>
    </div>
  );
}