import Navbar from "../../layout/Navbar";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] bg-black overflow-hidden">

      {/* Navbar */}
      {/* <Navbar /> */}

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
          src="/images/semantik city.svg"
          alt="Hero City"
          className="w-full h-auto block transform translate-y-40"
        />
        {/* Bottom fade - extended gradient for smooth transition */}
        <div 
          className="absolute bottom-0 left-0 w-full"
          style={{ 
            height: "200px",
            background: "linear-gradient(180deg, transparent 0%, rgba(0,9,35,0.3) 30%, rgba(0,9,35,0.7) 60%, rgba(0,9,35,1) 100%)",
          }}
        />
      </div>

      {/* Layer 3: Content — posisi dari atas sekitar 18-22% layar */}
      <div className="relative z-10 flex flex-col items-center w-full px-4"
        style={{ paddingTop: "30vh" }}
      >
        <div className="flex flex-col items-center gap-4 md:gap-7 w-full max-w-[760px]">

          {/* Title */}
          <h1
            className="w-full text-center text-white leading-none font-normal tracking-wide"
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: "clamp(32px, 8vw, 96px)",
            }}
          >
            SEMANTIK
          </h1>
           <h6
            className="w-full text-center text-white leading-none font-normal tracking-wide"
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: "clamp(14px, 4vw, 40px)",
            }}
          >
            Informatics Competition
          </h6>

          {/* Subtitle */}
          <p
            className="w-full max-w-[536px] text-center text-white font-normal leading-relaxed px-2 md:px-0"
            style={{ 
              fontFamily: "'Exo 2', sans-serif",
              fontSize: "clamp(14px, 3vw, 24px)"
            }}
          >
            Form Skill Developmentto Digital Achievment
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-3 md:gap-7 mt-1 flex-wrap justify-center">
            {/* Primary Button */}
            <button
              className="px-6 md:px-10 py-4 rounded-[50px] shadow-[0px_8px_15px_0px_rgba(0,0,0,0.10)] text-white font-semibold transition-opacity hover:opacity-90 cursor-pointer"
              style={{
                width: "clamp(140px, 40vw, 170px)",
                height: "30px",
                fontSize: "clamp(12px, 2.5vw, 18px)",
                fontFamily: "'Exo 2', sans-serif",
                background:
                  "linear-gradient(90deg, #5b72ff 0%, #b620e0 100%)",
              }}
            >
              Daftar Sekarang
            </button>

            {/* Secondary Button */}
            <button
              className="px-6 md:px-10 py-4 rounded-[50px] shadow-[0px_8px_15px_0px_rgba(0,0,0,0.10)] text-white font-semibold transition-opacity hover:opacity-90 cursor-pointer"
              style={{ 
                width: "clamp(140px, 40vw, 170px)",
                height: "30px",
                fontSize: "clamp(12px, 2.5vw, 18px)",
                fontFamily: "'Exo 2', sans-serif",
                border: "2px solid transparent",
                background: "linear-gradient(#171b30, #171b30) padding-box, linear-gradient(90deg, #5b72ff 0%, #b620e0 100%) border-box"
              }}
            >
              Learn More
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}