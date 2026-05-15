"use client";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Link from "next/link";
import { BASE_PATH } from "@/config/constants";

export default function PendaftaranDitutupPage() {
  return (
    <main className="min-h-screen bg-[#000923] relative">
      <Navbar />
      
      {/* Hero Section - Sama dengan Detail Semantik */}
      <section className="relative w-full h-screen min-h-[832px] bg-black overflow-hidden max-md:!min-h-[100vh] max-md:!h-auto pb-10">

        <img
          src={`${BASE_PATH}/images/night_bg.webp`}
          alt="Night Sky Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay blur untuk membuat background tidak terlalu terang - opacity dikurangi agar night bg tetap terlihat */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] z-[1] pointer-events-none" />

        <div className="absolute bottom-0 left-0 w-full max-md:!top-0 max-md:!h-full z-[2]">
          <img
            src={`${BASE_PATH}/images/close city (1).webp`}
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
          style={{ paddingTop: "calc(25vh - 50px)" }}
        >
          <div className="flex flex-col items-center gap-5 md:gap-6 w-full max-w-[760px] max-md:!gap-4">

            <h1
              className="w-full text-center text-white leading-none font-normal tracking-wide max-md:!text-5xl max-md:!text-[38px]"
              style={{
                fontFamily: "'Zen Dots', sans-serif",
                fontSize: "clamp(48px, 8vw, 96px)",
                lineHeight: "1.1",
              }}
            >
              Pendaftaran
            </h1>
            <h6
              className="w-full text-center text-white leading-none font-normal tracking-wide max-md:!text-lg max-md:!text-[24px] -mt-2"
              style={{
                fontFamily: "'Zen Dots', sans-serif",
                fontSize: "clamp(32px, 6vw, 64px)",
                lineHeight: "1.1",
              }}
            >
              Ditutup
            </h6>

            <p
              className="w-full max-w-[600px] text-center text-white font-normal leading-relaxed px-2 md:px-0 max-md:!text-base max-md:!px-6 max-md:!leading-snug mt-4"
              style={{ 
                fontFamily: "'Exo 2', sans-serif",
                fontSize: "clamp(16px, 2.5vw, 22px)"
              }}
            >
              Terima kasih atas antusiasme Anda terhadap SEMANTIK.
            </p>

            <div className="flex items-center gap-3 md:gap-7 mt-6 flex-wrap justify-center max-md:!gap-4 max-md:!flex-col max-md:!w-full max-md:!mt-4">
              <Link href="/" className="max-md:!w-full max-md:!flex max-md:!justify-center">
                <button
                  className="group relative flex items-center justify-center gap-2 px-6 md:px-10 py-4 rounded-[50px] text-white text-lg font-semibold transition-opacity hover:opacity-90 cursor-pointer max-md:!w-full max-md:!max-w-[280px] opacity-80"
                  style={{
                    width: "170px",
                    height: "56px",
                    fontFamily: "'Exo 2', sans-serif",
                    border: "3px solid transparent",
                    background: "linear-gradient(90deg, #5b72ff 0%, #b620e0 100%) padding-box, linear-gradient(180deg, #D000CB 0%, #10E6F1 100%) border-box",
                    boxShadow: "0px 8px 15px 0px rgba(0,0,0,0.10)",
                  }}
                >
                  {/* Icon Arrow Left (Panah Ke Kiri) */}
                  {/* <span className="relative z-10">
                    <svg 
                      className="w-5 h-5 text-white transform group-hover:-translate-x-1 transition-transform" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                  </span> */}

                  <span 
                    className="text-white font-semibold relative z-10 whitespace-nowrap"
                    style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "18px" }}
                  >
                    Kembali
                  </span>
                </button>
              </Link>
            </div>

          </div>
        </div>

      </section>

      {/* Footer Container */}
      <div className="relative w-full h-[458px] max-md:!h-auto">
        <Footer />
      </div>
    </main>
  );
}
