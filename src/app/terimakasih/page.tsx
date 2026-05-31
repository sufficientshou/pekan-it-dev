"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { BASE_PATH } from "@/config/constants";
import Link from "next/link";

export default function TerimakasihPage() {
  const [waLink, setWaLink] = useState("https://chat.whatsapp.com/semantikumum");

  useEffect(() => {
    // Kamus link Grup WA per kategori lomba
    const lombaLinks: Record<string, string> = {
      "Competitive Programming": "https://chat.whatsapp.com/IXADaCLImpX6VopbygLhvQ?mode=gi_t",
      "Desain Grafis": "https://chat.whatsapp.com/DHEmpVd59VDKLY676eMr83?mode=gi_t",
      "Typing Competition": "https://chat.whatsapp.com/DPMZfGj2zp096GzZXKwBt2?mode=gi_t"
    };

    // Baca catatan rahasia dari sessionStorage
    const selected = sessionStorage.getItem("selectedLomba");
    
    // Jika ada catatan dan sesuai dengan kunci kamus, set link WA-nya!
    if (selected && lombaLinks[selected]) {
      setWaLink(lombaLinks[selected]);
    }
  }, []);
  return (
    <main className="min-h-screen bg-[#000923] relative">
      <Navbar />
      <section className="relative w-full min-h-[900px] overflow-hidden flex flex-col justify-center items-center max-md:!min-h-[100vh] max-md:!justify-start max-md:!pt-[25vh]">
        <img
        src={`${BASE_PATH}/images/night_bg.webp`}
        alt="Night Sky Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

        <img 
          src={`${BASE_PATH}/images/kota mksh (1) 1 (1).webp`}
          alt="Cityscape" 
          className="absolute bottom-0 left-0 w-full object-cover z-10"
        />

        <div className="relative z-20 flex flex-col items-center w-full max-w-[760px] text-center mt-20 px-4 max-md:!mt-0 max-md:gap-5 md:gap-7">

          <h1
            className="w-full text-center text-white leading-none font-normal tracking-wide whitespace-nowrap"
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: "clamp(28px, 6vw, 80px)",
            }}
          >
            Terima Kasih
          </h1>

          <h6
            className="w-full text-center text-white leading-none font-normal tracking-wide"
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: "clamp(20px, 3vw, 35px)",
            }}
          >
            Sudah Mendaftar
          </h6>

          <p
            className="w-full max-w-[536px] text-center text-white font-normal leading-relaxed max-md:px-6 max-md:leading-snug"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontSize: "clamp(12px, 1.5vw, 19px)",
            }}
          >
            Terima kasih telah mendaftar di SEMANTIK. Bergabunglah dengan grup WhatsApp untuk mendapatkan informasi dan pembaruan terbaru.
          </p>

          <div className="
            flex items-center justify-center mt-4
            max-md:flex-col max-md:w-full max-md:gap-4
            md:flex-row md:gap-7 md:mt-1
          ">

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
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
                Gabung Ke Grub Whatsapp
              </button>
            </a>

          </div>

        </div>
      </section>

      <div className="relative w-full h-[458px] max-md:!h-auto">
        <Footer />
      </div>
    </main>
  );
}
