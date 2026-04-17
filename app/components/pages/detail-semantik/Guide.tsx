import Image from "next/image";

export default function Guide() {
  return (
    <section className="relative py-16 md:py-32 text-center overflow-hidden max-md:!py-10" style={{ minHeight: "800px" }}>
      
      {/* Background kiri */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-50 max-md:!w-[200px] max-md:!h-[200px] max-md:!left-[-50px]">
        <Image
          src="/images/1.png"
          alt="bg1"
          fill
          className="object-contain brightness-125 contrast-125"
        />
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-50 max-md:!w-[200px] max-md:!h-[200px] max-md:!right-[-50px]">
        <Image
          src="/images/2.png"
          alt="bg2"
          fill
          className="object-contain brightness-125 contrast-125"
        />
      </div>

      {/* Title */}
      <div className="flex flex-col items-center mb-8 relative z-20 px-4">
        <h2
          className="text-center font-bold leading-tight"
          style={{marginBottom: 50, fontFamily: "'Zen Dots', cursive", fontSize: "clamp(28px, 5vw, 64px)" }}
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

      {/* Subtitle */}
      <p className="text-white mt-4 max-w-xl relative z-10 px-6 md:px-4" style={{ fontSize: "clamp(13px, 2.5vw, 15px)", marginLeft: "auto", marginRight: "auto", paddingLeft: "10px", top: "-30px", lineHeight: "1.6" }}>
        Pastikan kamu memahami seluruh ketentuan, alur pendaftaran,
        <br className="hidden md:block" />
        dan detail perlombaan yang telah disusun.
      </p>

      {/* Guidebook Card */}
      <div className="relative mt-12 md:mt-16 flex justify-center z-10 px-4 max-md:!mt-10">

        {/* Clickable Guidebook Image — ukuran mengikuti foto */}
        <a
          href="/files/Guidebook.pdf"
          download="Guidebook-SEMANTIK.pdf"
          className="relative group cursor-pointer inline-block"
        >
          {/* Glow di belakang — mengikuti ukuran elemen <a> */}
          <div
            className="absolute inset-0 opacity-60 blur-2xl rounded-2xl -z-10"
            style={{ background: "#d000cb", transform: "scale(1.05)" }}
          />

          {/* Guidebook cover image — lebar & tinggi mengikuti foto asli */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/guidebook-cover.png"
            alt="Guidebook SEMANTIK"
            className="block rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-[1.03]"
            style={{
              maxWidth: "clamp(180px, 60vw, 350px)",
              width: "100%",
              height: "auto",
              boxShadow: "0 8px 40px rgba(208, 0, 203, 0.4)",
            }}
          />

          {/* Hover overlay with download icon */}
          <div
            className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "rgba(0, 9, 35, 0.7)", backdropFilter: "blur(4px)" }}
          >
            {/* Download icon */}
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

          {/* Badge PDF */}
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