"use client";

import { BASE_PATH } from '@/config/constants';
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-black overflow-hidden" style={{ minHeight: "100svh" }}>

      <img
        src={`${BASE_PATH}/images/night_bg.webp`}
        alt="Night Sky Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <img
        src={`${BASE_PATH}/images/bg seminar.png`}
        alt="Seminar Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30 pointer-events-none z-[1]" />

      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none z-[2]"
        style={{
          height: "120px",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(0,9,35,0.4) 40%, rgba(0,9,35,0.85) 75%, #000923 100%)",
        }}
      />

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

          <h1
            className="w-full text-center text-white leading-none font-normal tracking-wide whitespace-nowrap"
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: "clamp(24px, 5.5vw, 80px)",
            }}
          >
            TECH TALKS
          </h1>

          <h6
            className="w-full text-center text-white leading-none font-normal tracking-wide"
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: "clamp(16px, 2.5vw, 32px)",
            }}
          >
            Seminar &amp; Exhibition
          </h6>

          <p
            className="w-full max-w-[536px] text-center text-white font-normal leading-relaxed max-md:px-6 max-md:leading-snug"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontSize: "clamp(12px, 1.6vw, 19px)",
            }}
          >
            Competitive Path to Digital Innovation in a Dynamic Technological Era
          </p>

          <div className="
            flex items-center justify-center mt-4
            max-md:flex-col max-md:w-full max-md:gap-4
            md:flex-row md:gap-7 md:mt-1
          ">

            <Link
              href="/pendaftaran-ditutup"
              className="max-md:w-full max-md:flex max-md:justify-center"
            >
              <button
                className="
                  rounded-[50px] shadow-[0px_8px_15px_0px_rgba(0,0,0,0.10)]
                  text-white font-semibold transition-opacity hover:opacity-90 cursor-pointer opacity-80
                  max-md:w-full max-md:max-w-[280px]
                "
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  fontSize: "clamp(13px, 1.2vw, 16px)",
                  padding: "clamp(10px, 1.2vh, 14px) clamp(20px, 2.5vw, 32px)",
                  background: "linear-gradient(90deg, #5b72ff 0%, #b620e0 100%)",
                }}
              >
                Daftar Sekarang
              </button>
            </Link>

            <button
              onClick={() =>
                document.getElementById("inside")?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                rounded-[50px] shadow-[0px_8px_15px_0px_rgba(0,0,0,0.10)]
                text-white font-semibold transition-opacity hover:opacity-90 cursor-pointer opacity-80
                max-md:w-full max-md:max-w-[280px]
              "
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontSize: "clamp(13px, 1.2vw, 16px)",
                padding: "clamp(10px, 1.2vh, 14px) clamp(20px, 2.5vw, 32px)",
                border: "2px solid transparent",
                background:
                  "linear-gradient(#171b30, #171b30) padding-box, linear-gradient(90deg, #5b72ff 0%, #b620e0 100%) border-box",
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
