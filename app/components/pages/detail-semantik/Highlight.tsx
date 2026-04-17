import Image from "next/image";

function HighlightRow() {
  // 🎛️ KONTROL UKURAN & POSISI - TINGGAL UBAH NILAI DI SINI
  const CARD_WIDTH = 300;           // Lebar kartu (px)
  const CARD_HEIGHT = 200;          // Tinggi kartu (px)
  const LOGO_SIZE = 120;            // Ukuran logo (px)
  
  // Geser ke kanan (+) atau kiri (-)
  const CARD1_SHIFT_X = 100;          // Kartu 1
  const CARD2_SHIFT_X = 160;          // Kartu 2
  const CARD3_SHIFT_X = 200;          // Kartu 3
  const CARD4_SHIFT_X =280;          // Kartu 4
  const LOGO_SHIFT_X = 230;           // Logo

  return (
    <div className="relative grid grid-cols-5 items-center gap-2 max-w-6xl mx-auto">
      
      {/* Kartu Kiri 1 */}
      <div 
        className="bg-gray-300 aspect-video rounded-sm w-full"
        style={{ 
          width: `${CARD_WIDTH}px`, 
          height: `${CARD_HEIGHT}px`,
          transform: `translateX(${CARD1_SHIFT_X}px)`,
        }}
      ></div>
      
      {/* Kartu Kiri 2 + Efek Sinar */}
      <div 
        className="relative"
        style={{ 
          width: `${CARD_WIDTH}px`, 
          height: `${CARD_HEIGHT}px`,
          transform: `translateX(${CARD2_SHIFT_X}px)`
        }}
      >
        {/* Glow menyembur ke arah logo */}
        <Image
          src="/images/glow.svg"
          alt="glow"
          width={1000}
          height={1000}
          className="absolute top-1/2 -right-12 -translate-y-1/2 opacity-80 z-20 mix-blend-screen"
          style={{ height: 'auto' }}
        />
      </div>

      {/* Logo Tengah */}
      <div 
        className="relative flex justify-center z-30"
        style={{ transform: `translateX(${LOGO_SHIFT_X}px)` }}
      >
        <Image
          src="/images/s.png"
          alt="logo"
          width={LOGO_SIZE}
          height={LOGO_SIZE}
          className="drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
        />
      </div>

      {/* Kartu Kanan 1 + Efek Sinar */}
      <div 
        className="relative"
        style={{ 
          width: `${CARD_WIDTH}px`, 
          height: `${CARD_HEIGHT}px`,
          transform: `translateX(${CARD3_SHIFT_X}px)`
        }}
      >
        {/* Glow menyembur ke arah logo dari kanan */}
        <Image
          src="/images/glow.svg"
          alt="glow"
          width={1000}
          height={1000}
          className="absolute top-1/2 -left-10 -translate-y-1/2 opacity-80 z-20 scale-x-[-1] mix-blend-screen"
          style={{ height: 'auto' }}
        />
      </div>

      {/* Kartu Kanan 2 */}
      <div 
        className="bg-gray-300 aspect-video rounded-sm w-full"
        style={{ 
          width: `${CARD_WIDTH}px`, 
          height: `${CARD_HEIGHT}px`,
          transform: `translateX(${CARD4_SHIFT_X}px)`
        }}
      ></div>
      
    </div>
  );
}

export default function Highlights() {
  return (
    <section className="relative py-32 text-center text-white overflow-hidden" style={{ minHeight: "1000px", background: "#000923" }}>
      
      {/* Background images */}
      <div className="absolute left-[-100px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-50">
        <Image
          src="/images/Elip.png"
          alt="bg1"
          fill
          className="object-contain brightness-125 contrast-125"
        />
      </div>

      <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-50">
        <Image
          src="/images/Elips.png"
          alt="bg2"
          fill
          className="object-contain brightness-125 contrast-125"
        />
      </div>

      {/* Title */}
      <div className="flex flex-col items-center mb-8 relative z-20">
        <h2
          className="text-center font-bold leading-tight"
          style={{marginBottom: 50, fontFamily: "'Zen Dots', cursive", fontSize: "clamp(40px, 5vw, 64px)" }}
        >
          <span style={{ color: "#ffffff" }}>SEMANTIK </span>
          <span 
            style={{ 
              background: "linear-gradient(90deg, #ff00ff 0%, #00ffff 100%)", 
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Highlights
          </span>
        </h2>
      </div>

      {/* Subtitle */}
      <p className="text-white mt-4 max-w-2xl relative z-10" style={{ marginLeft: "auto", marginRight: "auto", bottom: "20px", fontSize: "20px" }}>
        Sekilas tentang momen-momen menarik yang menangkap
        <br />
        energi dan kreativitas para peserta SEMANTIK
      </p>

      {/* Content Container */}
      <div className="mt-20 space-y-10 px-4 relative z-10">
        
        <HighlightRow />

        {/* Divider - Line 4 SVG */}
        <div className="flex justify-center">
          <Image
            src="/images/Line 4.svg"
            alt="divider line"
            width={800}
            height={2}
            className="opacity-70"
          />
        </div>

        <HighlightRow />

      </div>
    </section>
  );
}