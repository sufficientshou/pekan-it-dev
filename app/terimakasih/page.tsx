import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TerimakasihPage() {
  return (
    <main className="min-h-screen bg-[#000923] relative">
      {/* Navbar kita panggil di sini */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[900px] overflow-hidden flex flex-col justify-center items-center">
        {/* Background Night - Kita pakai night_bg2.png yang sudah ada, atau silakan ganti */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/images/kota mksh (1) 1.svg" 
          alt="Night Background" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Dark overlay agar background tidak terlalu terang */}
        <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none" />
        
        {/* Spotlight Kiri (Lampu sorot dari bawah ke kiri atas) */}
        <div 
          className="absolute z-0 pointer-events-none"
          style={{
            bottom: "-10%",
            left: "0%",
            width: "200px",
            height: "100%",
            background: "linear-gradient(to top, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 80%)",
            clipPath: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)", /* Melebar di atas, menyempit di bawah */
            transform: "rotate(30deg)",
            transformOrigin: "bottom center",
            filter: "blur(40px)",
          }}
        />

        {/* Spotlight Kanan (Lampu sorot dari bawah ke kanan atas) */}
        <div 
          className="absolute z-0 pointer-events-none"
          style={{
            bottom: "-10%",
            right: "0%",
            width: "200px",
            height: "100%",
            background: "linear-gradient(to top, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 80%)",
            clipPath: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)", /* Melebar di atas, menyempit di bawah */
            transform: "rotate(-30deg)",
            transformOrigin: "bottom center",
            filter: "blur(40px)",
          }}
        />

        {/* Cityscape image (Kota Bawah) */}
        {/* Nanti pastikan /images/kota-mksh.png ada, kalau belum ada warnanya akan transparan dulu */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/images/kota-mksh.png" 
          alt="Cityscape" 
          className="absolute bottom-0 left-0 w-full object-cover z-10"
        />

        {/* Content Group (Teks & Tombol) */}
        <div className="relative z-20 flex flex-col items-center text-center mt-20 gap-8 px-4 max-w-[850px]">
          {/* Judul Utama */}
          <div className="flex flex-col items-center">
            <h1 
              className="text-white tracking-wide"
              style={{ 
                fontFamily: "'Zen Dots', sans-serif", 
                fontSize: "72px",
                lineHeight: "1.2",
                textShadow: "0px 4px 40px rgba(208, 0, 203, 0.65)" /* Glow Ungu/Pink */
              }}
            >
              Terima Kasih<br />Sudah Mendaftar
            </h1>
          </div>

          {/* Subtitle / Deskripsi */}
          <p 
            className="text-white text-xl max-w-[650px]"
            style={{ 
              fontFamily: "'Exo 2', sans-serif", 
              lineHeight: "1.6" 
            }}
          >
            Terima kasih telah mendaftar di SEMANTIK. Bergabunglah dengan grup
            WhatsApp untuk mendapatkan informasi dan pembaruan terbaru.
          </p>

          {/* Button Gabung WA */}
          <button 
            className="group relative flex items-center justify-center gap-3 px-8 py-4 mt-6 overflow-hidden rounded-[40px] transition-all hover:scale-105 active:scale-95 cursor-pointer"
            style={{
              background: "linear-gradient(166deg, rgb(110, 142, 251) 0%, rgba(208, 0, 203, 0.4) 100%)",
              boxShadow: "0px -4px 30px rgba(208, 0, 203, 0.5), inset 0px 4px 10px rgba(110, 142, 251, 0.4)",
              border: "1px solid rgba(255,255,255,0.1)"
            }}
          >
            {/* Glossy Overlay/Kilap Atas */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none rounded-[40px]" />
            
            <span 
              className="text-white font-bold relative z-10 whitespace-nowrap"
              style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "16px" }}
            >
              Gabung Ke Grub Whatsapp
            </span>

            {/* Icon / Vector-4 (Arrow) */}
            <span className="relative z-10 ml-2">
              <svg 
                className="w-5 h-5 text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </span>
          </button>
        </div>
      </section>

      {/* Footer Container - Kita gunakan h-[458px] karena di file Footer tinggi absolutnya 458px */}
      <div className="relative w-full h-[458px]">
        <Footer />
      </div>
    </main>
  );
}
