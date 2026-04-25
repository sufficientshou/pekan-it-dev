import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Link from "next/link"; // Ditambahkan agar tombol kembali bisa berfungsi
import { BASE_PATH } from "@/config/constants";

export default function PendaftaranDitutupPage() {
  return (
    <main className="min-h-screen bg-[#000923] relative">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[900px] overflow-hidden flex flex-col justify-center items-center max-md:!min-h-[100vh] max-md:!justify-start max-md:!pt-[25vh]">
        {/* Background Night Sky */}
        <img
          src={`${BASE_PATH}/images/night_bg.jpg`}
          alt="Night Sky Background"
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        />

        {/* Background Night */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={`${BASE_PATH}/images/close city (1).svg`}
          alt="Night Background" 
          className="absolute inset-0 w-full h-full object-cover z-0 max-md:!object-[center_bottom] max-md:!h-full"
        />
        {/* Dark overlay agar background tidak terlalu terang */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-[1] pointer-events-none" />
        
        {/* Spotlight Kiri (Sesuai dengan page terimakasih) */}
        <div 
          className="absolute z-0 pointer-events-none"
          style={{
            bottom: "-10%",
            left: "0%",
            width: "200px",
            height: "100%",
            background: "linear-gradient(to top, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 80%)",
            clipPath: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)",
            transform: "rotate(30deg)",
            transformOrigin: "bottom center",
            filter: "blur(40px)",
          }}
        />

        {/* Spotlight Kanan (Sesuai dengan page terimakasih) */}
        <div 
          className="absolute z-0 pointer-events-none"
          style={{
            bottom: "-10%",
            right: "0%",
            width: "200px",
            height: "100%",
            background: "linear-gradient(to top, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 80%)",
            clipPath: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)",
            transform: "rotate(-30deg)",
            transformOrigin: "bottom center",
            filter: "blur(40px)",
          }}
        />

        {/* Cityscape image -- Optional jika dirancang seperti itu */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={`${BASE_PATH}/images/kota-mksh.png`}
          alt="Cityscape" 
          className="absolute bottom-0 left-0 w-full object-cover z-10"
        />

        {/* Content Group (Teks & Tombol) */}
        <div className="relative z-20 flex flex-col items-center text-center mt-20 gap-8 px-4 max-w-[850px] max-md:!mt-0 max-md:!gap-5">
          {/* Judul Utama Pendaftaran Ditutup */}
          <div className="flex flex-col items-center">
            <h1 
              className="text-white tracking-wide max-md:!text-4xl max-md:!leading-tight max-md:!px-2"
              style={{ 
                fontFamily: "'Zen Dots', sans-serif", 
                fontSize: "clamp(32px, 8vw, 72px)",
                lineHeight: "1.2",
                textShadow: "0px 4px 40px rgba(208, 0, 203, 0.65)" 
              }}
            >
              Pendaftaran<br />Ditutup
            </h1>
          </div>

          {/* Subtitle / Deskripsi Baru */}
          <p 
            className="text-white text-xl max-w-[650px] max-md:!text-base max-md:!leading-snug"
            style={{ 
              fontFamily: "'Exo 2', sans-serif", 
              lineHeight: "1.6" 
            }}
          >
            Terima kasih atas antusiasme Anda terhadap SEMANTIK.
          </p>

          {/* Button Kembali */}
          <Link href="/" className="max-md:!w-full max-md:!flex max-md:!justify-center">
            <button 
              className="group relative flex items-center justify-center gap-2 px-8 py-4 mt-6 overflow-hidden rounded-[40px] transition-all hover:scale-105 active:scale-95 cursor-pointer max-md:!w-full max-md:!h-12 max-md:!py-0 max-md:!px-0 max-md:!max-w-[300px] max-md:!mt-4"
              style={{
                background: "linear-gradient(166deg, rgb(110, 142, 251) 0%, rgba(208, 0, 203, 0.4) 100%)",
                boxShadow: "0px -4px 30px rgba(208, 0, 203, 0.5), inset 0px 4px 10px rgba(110, 142, 251, 0.4)",
                border: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              {/* Glossy Overlay/Kilap Atas */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none rounded-[40px]" />
              
              {/* Icon Arrow Left (Panah Ke Kiri) */}
              <span className="relative z-10 mr-1">
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
              </span>

              <span 
                className="text-white font-bold relative z-10 whitespace-nowrap"
                style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "16px" }}
              >
                Kembali
              </span>
            </button>
          </Link>
        </div>
      </section>

      {/* Footer Container */}
      <div className="relative w-full h-[458px] max-md:!h-auto">
        <Footer />
      </div>
    </main>
  );
}
