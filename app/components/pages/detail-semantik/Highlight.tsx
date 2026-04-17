import Image from "next/image";

function HighlightRow() {
  const CARD_WIDTH = 300;
  const CARD_HEIGHT = 200;
  const LOGO_SIZE = 120;
  
  const CARD1_SHIFT_X = 100;
  const CARD2_SHIFT_X = 160;
  const CARD3_SHIFT_X = 200;
  const CARD4_SHIFT_X = 280;
  const LOGO_SHIFT_X = 230;

  return (
    <>
      <div className="relative grid-cols-5 items-center gap-2 max-w-6xl mx-auto hidden md:grid">
        <div 
          className="bg-gray-300 aspect-video rounded-sm w-full"
          style={{ 
            width: `${CARD_WIDTH}px`, 
            height: `${CARD_HEIGHT}px`,
            transform: `translateX(${CARD1_SHIFT_X}px)`,
          }}
        ></div>
        
        <div 
          className="relative"
          style={{ 
            width: `${CARD_WIDTH}px`, 
            height: `${CARD_HEIGHT}px`,
            transform: `translateX(${CARD2_SHIFT_X}px)`
          }}
        >
          <Image
            src="/images/glow.svg"
            alt="glow"
            width={1000}
            height={1000}
            className="absolute top-1/2 -right-12 -translate-y-1/2 opacity-80 z-20 mix-blend-screen"
            style={{ height: 'auto' }}
          />
        </div>

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

        <div 
          className="relative"
          style={{ 
            width: `${CARD_WIDTH}px`, 
            height: `${CARD_HEIGHT}px`,
            transform: `translateX(${CARD3_SHIFT_X}px)`
          }}
        >
          <Image
            src="/images/glow.svg"
            alt="glow"
            width={1000}
            height={1000}
            className="absolute top-1/2 -left-10 -translate-y-1/2 opacity-80 z-20 scale-x-[-1] mix-blend-screen"
            style={{ height: 'auto' }}
          />
        </div>

        <div 
          className="bg-gray-300 aspect-video rounded-sm w-full"
          style={{ 
            width: `${CARD_WIDTH}px`, 
            height: `${CARD_HEIGHT}px`,
            transform: `translateX(${CARD4_SHIFT_X}px)`
          }}
        ></div>
      </div>

      <div className="md:hidden flex flex-col items-center gap-6 px-4">
        <div className="flex gap-4 w-full justify-center">
          <div className="bg-gray-300 rounded-lg flex-1 max-w-[160px] aspect-video"></div>
          <div className="bg-gray-300 rounded-lg flex-1 max-w-[160px] aspect-video"></div>
        </div>
        <div className="relative flex justify-center">
          <Image
            src="/images/s.png"
            alt="logo"
            width={80}
            height={80}
            className="drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
          />
        </div>
        <div className="flex gap-4 w-full justify-center">
          <div className="bg-gray-300 rounded-lg flex-1 max-w-[160px] aspect-video"></div>
          <div className="bg-gray-300 rounded-lg flex-1 max-w-[160px] aspect-video"></div>
        </div>
      </div>
    </>
  );
}

export default function Highlights() {
  return (
    <section className="relative py-16 text-center text-white overflow-hidden min-h-[650px] max-md:!min-h-0 max-md:!py-12 max-md:!pt-0 max-md:!-mt-16" style={{ background: "#000923" }}>
      
      <div className="absolute left-[-100px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-50 max-md:!w-[300px] max-md:!h-[300px] max-md:!left-[-80px]">
        <Image
          src="/images/Elip.png"
          alt="bg1"
          fill
          className="object-contain brightness-125 contrast-125"
        />
      </div>

      <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-50 max-md:!w-[300px] max-md:!h-[300px] max-md:!right-[-80px]">
        <Image
          src="/images/Elips.png"
          alt="bg2"
          fill
          className="object-contain brightness-125 contrast-125"
        />
      </div>

      <div className="flex flex-col items-center mb-8 relative z-20">
        <h2
          className="text-center font-bold leading-tight max-md:!text-3xl"
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

      <p className="text-white mt-4 max-w-2xl relative z-10 max-md:!text-sm max-md:!px-6" style={{ marginLeft: "auto", marginRight: "auto", bottom: "20px", fontSize: "20px" }}>
        Sekilas tentang momen-momen menarik yang menangkap
        <br className="max-md:!hidden" />
        energi dan kreativitas para peserta SEMANTIK
      </p>

      <div className="mt-10 space-y-8 px-4 relative z-10 max-md:!mt-10 max-md:!space-y-6">
        
        <HighlightRow />

        <div className="flex justify-center">
          <Image
            src="/images/Line 4.svg"
            alt="divider line"
            width={800}
            height={2}
            className="opacity-70 max-md:!w-[90%]"
          />
        </div>

        <HighlightRow />

      </div>
    </section>
  );
}