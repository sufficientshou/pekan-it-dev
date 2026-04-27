"use client";

import { BASE_PATH } from '@/config/constants';
import { Navbar } from '@/components/layout';
import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[832px] bg-black overflow-hidden max-md:!min-h-[100vh] max-md:!h-auto pb-10">

      <img
        src={`${BASE_PATH}/images/night_bg.jpg`}
        alt="Night Sky Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-0 w-full max-md:!top-0 max-md:!h-full">
        <img
          src={`${BASE_PATH}/images/semantik city.svg`}
          alt="Hero City"
          className="w-full h-auto block transform translate-y-40 max-md:!translate-y-0 max-md:!h-full max-md:!object-cover max-md:!object-[center_bottom]"
        />
        <div 
          className="absolute bottom-0 left-0 w-full"
          style={{ 
            height: "200px",
            background: "linear-gradient(180deg, transparent 0%, rgba(0,9,35,0.3) 30%, rgba(0,9,35,0.7) 60%, rgba(0,9,35,1) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full px-4 max-md:!pt-[20vh]"
        style={{ paddingTop: "30vh" }}
      >
        <div className="flex flex-col items-center gap-4 md:gap-7 w-full max-w-[760px] max-md:!gap-5">

          <h1
            className="w-full text-center text-white leading-none font-normal tracking-wide max-md:!text-5xl max-md:!text-[38px]"
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: "clamp(32px, 8vw, 96px)",
            }}
          >
            SEMANTIK
          </h1>
           <h6
            className="w-full text-center text-white leading-none font-normal tracking-wide max-md:!text-lg max-md:!text-[24px]"
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: "clamp(14px, 4vw, 40px)",
            }}
          >
            Informatics Competition
          </h6>

          <p
            className="w-full max-w-[536px] text-center text-white font-normal leading-relaxed px-2 md:px-0 max-md:!text-base max-md:!px-6 max-md:!leading-snug"
            style={{ 
              fontFamily: "'Exo 2', sans-serif",
              fontSize: "clamp(14px, 3vw, 24px)"
            }}
          >
            Form Skill Developmentto Digital Achievment
          </p>

          <div className="flex items-center gap-3 md:gap-7 mt-1 flex-wrap justify-center max-md:!gap-4 max-md:!flex-col max-md:!w-full max-md:!mt-4">
            <Link href="/pendaftaran" className="max-md:!w-full max-md:!flex max-md:!justify-center">
              <button
                className="px-6 md:px-10 py-4 rounded-[50px] shadow-[0px_8px_15px_0px_rgba(0,0,0,0.10)] text-white text-lg font-semibold transition-opacity hover:opacity-90 cursor-pointer max-md:!w-full max-md:!max-w-[280px] opacity-80"
                style={{
                  width: "170px",
                  height: "56px",
                  fontFamily: "'Exo 2', sans-serif",
                  background:
                    "linear-gradient(90deg, #5b72ff 0%, #b620e0 100%)",
                }}
              >
                Daftar Sekarang
              </button>
            </Link>

            <button
              onClick={() => document.getElementById("inside")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 md:px-10 py-4 rounded-[50px] shadow-[0px_8px_15px_0px_rgba(0,0,0,0.10)] text-white text-lg font-semibold transition-opacity hover:opacity-90 cursor-pointer max-md:!w-full max-md:!max-w-[280px] opacity-80"
              style={{ 
                width: "170px",
                height: "56px",
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