"use client";

import { BASE_PATH } from '@/config/constants';
import { Navbar } from '@/components/layout';

export default function Hero() {
  return (
    <section className="relative w-full bg-black overflow-hidden" style={{ minHeight: "100svh" }}>

      <img
        src={`${BASE_PATH}/images/night_bg.webp`}
        alt="Night Sky Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="
        absolute left-0 w-full
        max-md:inset-0 max-md:h-full
        md:bottom-0
      ">
        
        <img
          src={`${BASE_PATH}/images/bg daftar.png`}
          alt="Hero City"
          className="
            w-full h-auto block
            max-md:absolute max-md:inset-0 max-md:w-full max-md:h-full max-md:object-cover max-md:object-bottom
            md:transform md:translate-y-40
          "
        />
        
        <div 
          className="absolute bottom-0 left-0 w-full"
          style={{ 
            height: "200px",
            background: "linear-gradient(180deg, transparent 0%, rgba(0,9,35,0.3) 30%, rgba(0,9,35,0.7) 60%, rgba(0,9,35,1) 100%)",
          }}
        />

        <div 
          className="absolute left-0 w-full pointer-events-none"
          style={{ 
            bottom: "-120px",
            height: "120px",
            background: "linear-gradient(180deg, rgba(0,9,35,1) 0%, rgba(0,9,35,0.8) 40%, rgba(0,9,35,0) 100%)",
            filter: "blur(20px)",
          }}
        />
      </div>

      <div
        className="
          relative z-10 flex flex-col items-center w-full px-4
          max-md:pt-[30vh] max-md:pb-10
        "
        style={{
          paddingTop: "clamp(180px, 28vh, 360px)",
          paddingBottom: "clamp(60px, 12vh, 160px)",
        }}
      >
        <div className="flex flex-col items-center w-full max-w-[760px] max-md:gap-5 md:gap-7">

          <h6
            className="w-full text-center text-white leading-none font-normal tracking-wide"
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: "clamp(20px, 3vw, 40px)",
            }}
          >
            NIC
          </h6>

          <h1
            className="w-full text-center text-white leading-none font-normal tracking-wide"
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: "clamp(38px, 7vw, 80px)",
            }}
          >
            Pendaftaran
          </h1>

          <p
            className="w-full max-w-[536px] text-center text-white font-normal leading-relaxed max-md:px-6 max-md:leading-snug"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontSize: "clamp(14px, 2vw, 24px)",
            }}
          >
            Mulai perjalananmu dan tunjukan inovasi <br className="md:hidden" /> terbaikmu di N I C
          </p>

          <div className="
            flex items-center justify-center mt-4
            max-md:flex-col max-md:w-full max-md:gap-4
            md:flex-row md:gap-7 md:mt-1
          ">
            
            <button
              onClick={() => {
                const formSection = document.getElementById('form-pendaftaran-section');
                if (formSection) {
                  formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="
                rounded-[50px] shadow-[0px_8px_15px_0px_rgba(0,0,0,0.10)]
                text-white font-semibold transition-opacity hover:opacity-90 cursor-pointer opacity-80
                max-md:w-full max-md:max-w-[280px]
              "
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontSize: "clamp(15px, 1.5vw, 18px)",
                padding: "clamp(12px, 1.5vh, 16px) clamp(24px, 3vw, 40px)",
                background: "linear-gradient(90deg, #5b72ff 0%, #b620e0 100%)",
              }}
            >
              Daftar Sekarang
            </button>

            <button
              onClick={() => {
                const syaratSection = document.getElementById('syarat-pendaftaran-section');
                if (syaratSection) {
                  syaratSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="
                rounded-[50px] shadow-[0px_8px_15px_0px_rgba(0,0,0,0.10)]
                text-white font-semibold transition-opacity hover:opacity-90 cursor-pointer opacity-80
                max-md:w-full max-md:max-w-[280px]
              "
              style={{ 
                fontFamily: "'Exo 2', sans-serif",
                fontSize: "clamp(15px, 1.5vw, 18px)",
                padding: "clamp(12px, 1.5vh, 16px) clamp(24px, 3vw, 40px)",
                border: "2px solid transparent",
                background: "linear-gradient(#171b30, #171b30) padding-box, linear-gradient(90deg, #5b72ff 0%, #b620e0 100%) border-box",
              }}
            >
              Syarat Pendaftaran
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}