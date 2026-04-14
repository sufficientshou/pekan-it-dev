import Navbar from "../../layout/Navbar";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[832px] bg-black overflow-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Layer 1: Night sky background — stretch full width & height */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/night_bg.jpg"
        alt="Night Sky Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Layer 2: Hero City — full width edge to edge, anchored to bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero_city.png"
          alt="Hero City"
          className="w-full h-auto block"
        />
        {/* Bottom fade - extended gradient for smooth transition */}
        <div 
          className="absolute bottom-0 left-0 w-full"
          style={{ 
            height: "200px",
            background: "linear-gradient(180deg, transparent 0%, rgba(0,26,77,0.3) 30%, rgba(0,26,77,0.7) 60%, rgba(0,26,77,1) 100%)",
          }}
        />
      </div>

      {/* Layer 3: Content — posisi dari atas sekitar 18-22% layar */}
      <div className="relative z-10 flex flex-col items-center w-full px-4"
        style={{ paddingTop: "18vh" }}
      >
        <div className="flex flex-col items-center gap-7 w-full max-w-[760px]">

          {/* Title */}
          <h1
            className="w-full text-center text-white leading-none font-normal tracking-wide"
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: "clamp(56px, 8vw, 96px)",
            }}
          >
            PEKAN IT
          </h1>

          {/* Subtitle */}
          <p
            className="w-full max-w-[536px] text-center text-white text-2xl font-normal leading-relaxed"
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          >
            Journey into Digital Innovation: Learning, Collaboration, and
            Competition
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-7 mt-1 flex-wrap justify-center">
            {/* Primary Button */}
            <button
              className="px-6 py-4 rounded-[50px] shadow-[0px_8px_15px_0px_rgba(0,0,0,0.10)] text-white text-lg font-semibold transition-opacity hover:opacity-90 cursor-pointer"
              style={{
                fontFamily: "'Exo 2', sans-serif",
                background:
                  "linear-gradient(75deg, #818cf8 0%, rgba(192,38,211,0.4) 100%)",
              }}
            >
              Daftar Sekarang
            </button>

            {/* Secondary Button */}
            <button
              className="px-6 py-4 bg-slate-800 rounded-[999px] shadow-[0px_8px_15px_0px_rgba(0,0,0,0.10)] outline outline-2 outline-offset-[-2px] outline-indigo-400 text-white text-xl font-semibold transition-colors hover:bg-slate-700 cursor-pointer"
              style={{ fontFamily: "'Exo 2', sans-serif" }}
            >
              Explore event
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}