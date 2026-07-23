"use client";

import { BASE_PATH } from '@/config/constants';
import { MapPin, Clock } from "lucide-react";

export default function Daftar() {
  return (
    <section id="daftar" className="relative w-full text-white bg-[#000923] pt-16 pb-12 overflow-hidden">
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
              className="relative rounded-[23px] overflow-hidden flex flex-col items-center justify-center text-center py-10 sm:py-12 px-6 sm:px-12 min-h-[320px] sm:min-h-[360px]"
              style={{
                backgroundColor: '#000923',
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
                    Aula Syeikh Kuro UNSIKA
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
              className="relative rounded-[23px] overflow-hidden flex flex-col items-center justify-center text-center py-10 sm:py-12 px-6 sm:px-12 min-h-[320px] sm:min-h-[360px]"
              style={{
                backgroundColor: '#000923',
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
                    Aula Syeikh Kuro UNSIKA
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
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
