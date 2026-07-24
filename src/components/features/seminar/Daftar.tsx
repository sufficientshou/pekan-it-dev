"use client";

import { BASE_PATH } from '@/config/constants';
import { MapPin, Clock } from "lucide-react";

export default function Daftar() {
  return (
    <section id="daftar" className="relative w-full text-white bg-[#140222] pt-16 pb-12 overflow-hidden">
      <div 
        className="absolute top-1/2 right-0 w-[400px] sm:w-[550px] h-[400px] sm:h-[550px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.28) 0%, rgba(109, 40, 217, 0.1) 55%, transparent 75%)",
          filter: "blur(75px)",
          transform: "translate(30%, -50%)"
        }}
      />

      <div 
        className="absolute bottom-16 left-0 w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.22) 0%, rgba(88, 28, 135, 0.08) 50%, transparent 70%)",
          filter: "blur(60px)",
          transform: "translate(-30%, -10%)"
        }}
      />

      <div
        className="relative z-10 flex flex-col items-center w-full mx-auto"
        style={{
          paddingLeft: "clamp(16px, 8vw, 120px)",
          paddingRight: "clamp(16px, 8vw, 120px)"
        }}
      >
        <div className="flex flex-col items-center w-full max-w-4xl gap-20 sm:gap-32" style={{ marginTop: "100px", marginBottom: "100px" }}>

          <div
            className="relative w-full rounded-[26px]"
            style={{
              padding: "3px",
              background: "linear-gradient(135deg, #00ffff 0%, #ff00ff 100%)",
            }}
          >
            <div 
              className="absolute top-[33%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[380px] h-[260px] sm:h-[380px] rounded-full pointer-events-none z-[-1]"
              style={{
                background: "radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(126, 34, 206, 0.15) 50%, transparent 70%)",
                filter: "blur(45px)",
              }}
            />
            <div
              className="relative rounded-[23px] overflow-hidden flex flex-col items-center justify-center text-center py-10 sm:py-12 px-6 sm:px-12 min-h-[320px] sm:min-h-[360px]"
              style={{
                backgroundColor: '#140222',
                backgroundImage: `url('${BASE_PATH}/images/bg%20card.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2.5 text-white">
                  <MapPin size={19} className="text-white flex-shrink-0" />
                  <span
                    className="font-medium tracking-wide"
                    style={{ fontFamily: "'Zen Dots', sans-serif", fontSize: "clamp(12px, 1.4vw, 17px)" }}
                  >
                    Aula Husni Hamid Karawang
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <h3
                    className="font-bold tracking-wider text-white drop-shadow-lg text-center"
                    style={{ fontFamily: "'Zen Dots', sans-serif", fontSize: "clamp(22px, 3.6vw, 42px)" }}
                  >
                    9 AGUSTUS
                  </h3>
                  <h3
                    className="font-bold tracking-wider text-white drop-shadow-lg text-center mt-1"
                    style={{ fontFamily: "'Zen Dots', sans-serif", fontSize: "clamp(22px, 3.6vw, 42px)" }}
                  >
                    2026
                  </h3>
                </div>

                <div className="flex items-center gap-2.5 text-white mt-1">
                  <Clock size={17} className="text-white flex-shrink-0" />
                  <span
                    className="font-medium tracking-wide"
                    style={{ fontFamily: "'Zen Dots', sans-serif", fontSize: "clamp(12px, 1.4vw, 17px)" }}
                  >
                    09.00 WIB
                  </span>
                </div>

                <a
                  href="https://maps.app.goo.gl/bEudB8UMYvg3aWMLA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="mt-4 rounded-[50px] shadow-[0px_8px_15px_0px_rgba(0,0,0,0.10)] text-white text-sm font-semibold transition-opacity hover:opacity-90 cursor-pointer opacity-90 flex items-center justify-center"
                    style={{
                      width: "175px",
                      height: "40px",
                      fontFamily: "'Exo 2', sans-serif",
                      background: "linear-gradient(90deg, #5b72ff 0%, #b620e0 100%)",
                    }}
                  >
                    Kunjungi Lokasi
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            className="relative w-full rounded-[26px]"
            style={{
              padding: "3px",
              background: "linear-gradient(135deg, #00ffff 0%, #ff00ff 100%)",
            }}
          >
            <div
              className="relative rounded-[23px] overflow-hidden flex flex-col md:flex-row items-center justify-center md:justify-between py-12 sm:py-10 px-6 sm:px-12 md:px-16 min-h-[420px] sm:min-h-[360px] gap-5 md:gap-8"
              style={{
                backgroundColor: '#140222',
                backgroundImage: `url('${BASE_PATH}/images/semcard.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="flex-shrink-0 flex items-center justify-center z-10 md:ml-16 lg:ml-24 relative top-2 md:top-0 md:translate-x-8 lg:translate-x-12">
                <img
                  src={`${BASE_PATH}/images/masem.png`}
                  alt="Mascot"
                  className="w-[140px] sm:w-[190px] md:w-[260px] lg:w-[290px] h-auto object-contain"
                />
              </div>

              <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-4 max-w-lg">
                <h3
                  className="font-bold tracking-wider text-white drop-shadow-lg leading-tight"
                  style={{ fontFamily: "'Zen Dots', sans-serif", fontSize: "clamp(20px, 3.2vw, 38px)" }}
                >
                  Ready to Join<br />Tech Talks?
                </h3>

                <p
                  className="text-gray-200 text-xs sm:text-base leading-relaxed px-2 sm:px-0"
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                >
                  Bergabunglah bersama peserta lainnya untuk mengeksplorasi kolaborasi manusia dan AI melalui seminar serta pameran karya inovatif.
                </p>

                <a
                  href="https://forms.gle/STJ8qgfobSDZirBj6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="mt-2 md:mt-4 rounded-[50px] shadow-[0px_8px_15px_0px_rgba(0,0,0,0.10)] text-white text-xs sm:text-sm font-semibold transition-opacity hover:opacity-90 cursor-pointer opacity-90 flex items-center justify-center"
                    style={{
                      width: "165px",
                      height: "38px",
                      fontFamily: "'Exo 2', sans-serif",
                      background: "linear-gradient(90deg, #5b72ff 0%, #b620e0 100%)",
                    }}
                  >
                    Daftar Sekarang
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
