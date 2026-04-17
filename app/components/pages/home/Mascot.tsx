export default function Avatar() {
  const cardBase =
    "absolute rounded-[15px] border-2 border-[#d000cb] backdrop-blur-[2px] backdrop-brightness-100 backdrop-saturate-100";
  const cardShadow =
    "shadow-[0px_0px_100px_#d000cb,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]";

  return (
    <section
      className="relative w-full overflow-hidden max-md:!h-auto max-md:!pb-20"
      style={{ height: "1265px", background: "#000923" }}
    >
      <div className="max-md:!hidden">
      
      <div 
        className="absolute top-0 left-0 w-full pointer-events-none"
        style={{ 
          height: "100px",
          background: "linear-gradient(180deg, rgba(0,9,35,0.6) 0%, rgba(0,9,35,0.2) 50%, transparent 100%)",
          zIndex: 2,
        }}
      />

      <div
        className="absolute"
        style={{
          top: "202px", left: "747px", width: "527px", height: "444px",
          background: "linear-gradient(135deg, transparent 30%, rgba(208,0,203,0.55) 50%, transparent 70%)",
          filter: "blur(18px)",
          transform: "rotate(0deg)",
          pointerEvents: "none",
        }}
      />
      
      <div
        className="absolute"
        style={{
          top: "629px", left: "338px", width: "527px", height: "444px",
          background: "linear-gradient(135deg, transparent 30%, rgba(208,0,203,0.55) 50%, transparent 70%)",
          filter: "blur(18px)",
          pointerEvents: "none",
        }}
      />
      
      <div
        className="absolute"
        style={{
          top: "629px", left: "747px", width: "527px", height: "444px",
          background: "linear-gradient(225deg, transparent 30%, rgba(208,0,203,0.55) 50%, transparent 70%)",
          filter: "blur(18px)",
          pointerEvents: "none",
        }}
      />
      
      <div
        className="absolute"
        style={{
          top: "202px", left: "338px", width: "527px", height: "444px",
          background: "linear-gradient(225deg, transparent 30%, rgba(208,0,203,0.55) 50%, transparent 70%)",
          filter: "blur(18px)",
          pointerEvents: "none",
        }}
      />

      <div
        className="absolute rounded-full"
        style={{
          top: "450px", left: "590px", width: "400px", height: "400px",
          background: "rgba(208,0,203,0.25)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        className="absolute flex items-center justify-center"
        style={{ top: "30px", left: "calc(50% - 356px)", width: "713px", height: "64px" }}
      >
        <h2
          className="font-bold text-center whitespace-nowrap"
          style={{ fontFamily: "'Zen Dots', sans-serif", fontSize: "70px", lineHeight: 1 }}
        >
          <span className="text-white">Meet Our </span>
          <span
            style={{
              background: "linear-gradient(90deg, #ff00ff, #00ffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            } as React.CSSProperties}
          >
            Mascott
          </span>
        </h2>
      </div>

      <img
        src="/images/mascot.png"
        alt="Mascot"
        className="absolute"
        style={{ top: "457px", left: "648px", width: "332px", height: "328px", objectFit: "contain" }}
      />

      <div
        className={`${cardBase} ${cardShadow} flex items-center justify-center`}
        style={{
          top: "222px", left: "341px",
          width: "207px", height: "159px",
          background: "#000923",
          zIndex: 10,
        }}
      >
        <img src="/images/kalung.svg" alt="Kalung" className="w-[130px] h-[130px] object-contain" />
      </div>

      <div
        className={`${cardBase} ${cardShadow} flex items-center justify-center`}
        style={{
          top: "222px", left: "1062px",
          width: "207px", height: "159px",
          background: "#000923",
          zIndex: 10,
        }}
      >
        <img src="/images/gear.svg" alt="Gear" className="w-[130px] h-[130px] object-contain" />
      </div>

      <div
        className={`${cardBase} ${cardShadow} flex items-center justify-center`}
        style={{
          top: "894px", left: "1062px",
          width: "207px", height: "159px",
          background: "#000923",
          zIndex: 10,
        }}
      >
        <img src="/images/mata.svg" alt="Mata" className="w-[130px] h-[130px] object-contain" />
      </div>

      <div
        className={`${cardBase} ${cardShadow} flex items-center justify-center`}
        style={{
          top: "894px", left: "341px",
          width: "207px", height: "159px",
          background: "#000923",
          zIndex: 10,
        }}
      >
        <img src="/images/kabel.svg" alt="Kabel" className="w-[130px] h-[130px] object-contain" />
      </div>
      </div>

      <div className="hidden max-md:!flex flex-col w-full px-4 pt-[10vh] pb-10 gap-10 items-center z-20 relative">
        
        <div
          className="absolute rounded-full"
          style={{
            top: "30%", left: "50%", transform: "translate(-50%, -50%)", width: "250px", height: "250px",
            background: "rgba(208,0,203,0.3)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <h2
          className="text-center font-bold leading-tight"
          style={{ fontFamily: "'Zen Dots', sans-serif", fontSize: "40px", lineHeight: 1.2 }}
        >
          <span className="text-white">Meet Our </span>
          <br/>
          <span
            style={{
              background: "linear-gradient(90deg, #ff00ff, #00ffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            } as React.CSSProperties}
          >
            Mascott
          </span>
        </h2>

        <img
          src="/images/mascot.png"
          alt="Mascot"
          className="w-[280px] h-[280px] object-contain relative z-10 drop-shadow-[0_0_20px_rgba(208,0,203,0.5)]"
        />

        <div className="grid grid-cols-2 gap-4 w-full max-w-[400px]">
          <div className={`${cardBase} ${cardShadow} flex items-center justify-center !relative !top-auto !left-auto !w-full !h-[120px]`} style={{ background: "#000923" }}>
            <img src="/images/kalung.svg" alt="Kalung" className="w-[90px] h-[90px] object-contain" />
          </div>
          <div className={`${cardBase} ${cardShadow} flex items-center justify-center !relative !top-auto !left-auto !w-full !h-[120px]`} style={{ background: "#000923" }}>
            <img src="/images/gear.svg" alt="Gear" className="w-[90px] h-[90px] object-contain" />
          </div>
          <div className={`${cardBase} ${cardShadow} flex items-center justify-center !relative !top-auto !left-auto !w-full !h-[120px]`} style={{ background: "#000923" }}>
            <img src="/images/kabel.svg" alt="Kabel" className="w-[90px] h-[90px] object-contain" />
          </div>
          <div className={`${cardBase} ${cardShadow} flex items-center justify-center !relative !top-auto !left-auto !w-full !h-[120px]`} style={{ background: "#000923" }}>
            <img src="/images/mata.svg" alt="Mata" className="w-[90px] h-[90px] object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}