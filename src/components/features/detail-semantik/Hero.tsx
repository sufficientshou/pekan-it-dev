"use client";

import { BASE_PATH } from '@/config/constants';
import { Navbar } from '@/components/layout';
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-black overflow-hidden" style={{ minHeight: "100svh" }}>

      {/* Background night sky */}
      <img
        src={`${BASE_PATH}/images/night_bg.webp`}
        alt="Night Sky Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* City illustration
          - Mobile  : full-cover absolute layer (inset-0), object-[center_bottom]
          - Desktop : anchored to bottom, natural height, slight upward translate */}
      <div className="
        absolute left-0 w-full
        max-md:inset-0 max-md:h-full
        md:bottom-0
      ">
        <img
          src={`${BASE_PATH}/images/semantik city.webp`}
          alt="Hero City"
          className="
            block
            max-md:w-full max-md:h-full max-md:object-cover max-md:object-[center_bottom]
            md:w-full md:h-auto md:translate-y-[clamp(20px,5vh,160px)]
          "
        />
        {/* Fade to background colour at the very bottom */}
        <div
          className="absolute bottom-0 left-0 w-full"
          style={{
            height: "200px",
            background:
              "linear-gradient(180deg, transparent 0%, rgba(0,9,35,0.3) 30%, rgba(0,9,35,0.7) 60%, rgba(0,9,35,1) 100%)",
          }}
        />
      </div>

      {/* ── Content ───────────────────────────────────────────────────── */}
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

          {/* Title */}
          <h1
            className="w-full text-center text-white leading-none font-normal tracking-wide"
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: "clamp(38px, 7vw, 96px)",
            }}
          >
            SEMANTIK
          </h1>

          {/* Subtitle */}
          <h6
            className="w-full text-center text-white leading-none font-normal tracking-wide"
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: "clamp(20px, 3vw, 40px)",
            }}
          >
            Informatics Competition
          </h6>

          {/* Description */}
          <p
            className="w-full max-w-[536px] text-center text-white font-normal leading-relaxed max-md:px-6 max-md:leading-snug"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontSize: "clamp(14px, 2vw, 24px)",
            }}
          >
            Form Skill Development to Digital Achievement
          </p>

          {/* CTA buttons
              - Mobile  : stacked, full-width (max-w-[280px] centred)
              - Desktop : side-by-side, auto width */}
          <div className="
            flex items-center justify-center mt-4
            max-md:flex-col max-md:w-full max-md:gap-4
            md:flex-row md:gap-7 md:mt-1
          ">
            {/* Primary */}
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
                  fontSize: "clamp(15px, 1.5vw, 18px)",
                  padding: "clamp(12px, 1.5vh, 16px) clamp(24px, 3vw, 40px)",
                  background: "linear-gradient(90deg, #5b72ff 0%, #b620e0 100%)",
                }}
              >
                Daftar Sekarang
              </button>
            </Link>

            {/* Secondary */}
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
                fontSize: "clamp(15px, 1.5vw, 18px)",
                padding: "clamp(12px, 1.5vh, 16px) clamp(24px, 3vw, 40px)",
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