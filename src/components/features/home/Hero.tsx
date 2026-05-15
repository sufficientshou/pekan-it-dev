"use client";

import { BASE_PATH } from '@/config/constants';
import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[832px] bg-black overflow-hidden max-md:!min-h-[100vh] max-md:!h-auto max-md:!pb-16" style={{ maxWidth: "100vw" }}>

      <img
        src={`${BASE_PATH}/images/night_bg.webp`}
        alt="Night Sky Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-0 w-full max-md:!top-0 max-md:!h-full">
        <img
          src={`${BASE_PATH}/images/hero city.webp`}
          alt="Hero City"
          className="w-full h-auto block transform -translate-y-5 max-md:!translate-y-0 max-md:!h-full max-md:!object-cover max-md:!object-[center_bottom]"
        />
        <div 
          className="absolute bottom-0 left-0 w-full"
          style={{ 
            height: "200px",
            background: "linear-gradient(180deg, transparent 0%, rgba(0,26,77,0.3) 30%, rgba(0,26,77,0.7) 60%, rgba(0,26,77,1) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full px-4 max-md:!pt-[15vh]"
        style={{ paddingTop: "18vh" }}
      >
        <div className="flex flex-col items-center gap-7 w-full max-w-[760px]">

          <h1
            className="w-full text-center text-white leading-none font-normal tracking-wide max-md:!text-5xl max-md:!leading-tight"
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: "clamp(56px, 8vw, 96px)",
            }}
          >
            PEKAN IT
          </h1>
          <p
            className="w-full max-w-[536px] text-center text-white text-2xl font-normal leading-relaxed max-md:!text-lg max-md:!px-2"
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          >
            Journey into Digital Innovation: Learning, Collaboration, and
            Competition
          </p>

          <div className="flex items-center gap-7 mt-1 flex-wrap justify-center max-md:!flex-col max-md:!gap-4 max-md:!w-full">
            <Link href="/pendaftaran-ditutup" className="max-md:!w-full max-md:!flex max-md:!justify-center">
              <button
                className="flex items-center justify-center px-10 py-4 rounded-[50px] shadow-[0px_8px_15px_0px_rgba(0,0,0,0.10)] text-white text-lg font-semibold transition-opacity hover:opacity-90 cursor-pointer max-md:!w-full max-md:!max-w-[280px] opacity-80"
                style={{
                  width: "170px",
                  height: "46px",
                  fontFamily: "'Exo 2', sans-serif",
                  background:
                    "linear-gradient(90deg, #5b72ff 0%, #b620e0 100%)",
                }}
              >
                Daftar Sekarang
              </button>
            </Link>

            <button
              onClick={() => document.getElementById("event")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center justify-center px-10 py-4 rounded-[50px] shadow-[0px_8px_15px_0px_rgba(0,0,0,0.10)] text-white text-lg font-semibold transition-opacity hover:opacity-90 cursor-pointer max-md:!w-full max-md:!max-w-[280px] opacity-80"
              style={{ 
                width: "170px",
                height: "46px",
                fontFamily: "'Exo 2', sans-serif",
                border: "2px solid transparent",
                background: "linear-gradient(#171b30, #171b30) padding-box, linear-gradient(90deg, #5b72ff 0%, #b620e0 100%) border-box"
              }}
            >
              Explore event
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}