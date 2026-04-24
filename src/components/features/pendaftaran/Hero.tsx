"use client";

import { BASE_PATH } from '@/config/constants';
import { Navbar } from '@/components/layout';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[832px] bg-black overflow-hidden max-md:!min-h-[100vh] max-md:!h-auto pb-10">

      <img
        src={`${BASE_PATH}/images/night_bg.jpg`}
        alt="Night Sky Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-0 w-full max-md:!top-0">
        
        <img
          src={`${BASE_PATH}/images/tokyo city (1) 1(1).svg`}
          alt="Hero City"
          className="w-full h-auto block transform translate-y-40 max-md:!transform-none max-md:!absolute max-md:!inset-0 max-md:!w-full max-md:!h-full max-md:!object-cover max-md:!object-bottom max-md:!scale-[1.1] max-md:!origin-bottom"
        />
        
        <div 
          className="absolute bottom-0 left-0 w-full"
          style={{ 
            height: "200px",
            background: "linear-gradient(180deg, transparent 0%, rgba(0,9,35,0.3) 30%, rgba(0,9,35,0.7) 60%, rgba(0,9,35,1) 100%)",
          }}
        />
        
        {/* Blur gradient untuk transisi ke section berikutnya */}
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

      <div className="relative z-10 flex flex-col items-center w-full px-4 max-md:!pt-[15vh]"
        style={{ paddingTop: "30vh" }}
      >
        <div className="flex flex-col items-center gap-7 w-full max-w-[760px] max-md:!gap-5">

          <h6
            className="w-full text-center text-white leading-none font-normal tracking-wide max-md:!text-[24px]"
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: "clamp(40px, 8vw, 20px)",
            }}
          >
            SEMANTIK
          </h6>

          <h1
            className="w-full text-center text-white leading-none font-normal tracking-wide max-md:!leading-tight max-md:!text-[38px] max-md:!px-2"
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: "clamp(56px, 8vw, 96px)",
            }}
          >
            Pendaftaran
          </h1>

          <p
            className="w-full max-w-[536px] text-center text-white text-2xl font-normal leading-relaxed max-md:!text-base max-md:!leading-snug"
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          >
            Mulai perjalananmu dan tunjukan inovasi terbaikmu di SEMANTIK
          </p>

          <div className="flex items-center gap-7 mt-1 flex-wrap justify-center max-md:!gap-4 max-md:!flex-col max-md:!w-full max-md:!mt-4">
            
            <button
              onClick={() => {
                const formSection = document.getElementById('form-pendaftaran-section');
                if (formSection) {
                  formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="px-10 py-4 rounded-[50px] shadow-[0px_8px_15px_0px_rgba(0,0,0,0.10)] text-white text-lg font-semibold transition-opacity hover:opacity-90 cursor-pointer max-md:!w-full max-md:!h-12 max-md:!py-0 max-md:!flex max-md:!items-center max-md:!justify-center max-md:!px-0 max-md:!max-w-[300px]"
              style={{
                width: "170px",
                height: "30px",
                fontFamily: "'Exo 2', sans-serif",
                background:
                  "linear-gradient(90deg, #5b72ff 0%, #b620e0 100%)",
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
              className="px-10 py-4 rounded-[50px] shadow-[0px_8px_15px_0px_rgba(0,0,0,0.10)] text-white text-lg font-semibold transition-opacity hover:opacity-90 cursor-pointer max-md:!w-full max-md:!h-12 max-md:!py-0 max-md:!flex max-md:!items-center max-md:!justify-center max-md:!px-0 max-md:!max-w-[300px]"
              style={{ 
                width: "170px",
                height: "30px",
                fontFamily: "'Exo 2', sans-serif",
                border: "2px solid transparent",
                background: "linear-gradient(#171b30, #171b30) padding-box, linear-gradient(90deg, #5b72ff 0%, #b620e0 100%) border-box"
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