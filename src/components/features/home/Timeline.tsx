import { BASE_PATH } from '@/config/constants';

export default function Timeline() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden max-md:!min-h-0 max-md:!h-auto max-md:!pb-20"
      style={{ background: "#000923", minHeight: "1100px" }}
    >
      <div className="max-md:!hidden">
      
      <div
        className="absolute"
        style={{
          top: "57px", left: "-39px", width: "266px", height: "9px",
          transform: "rotate(180deg)",
          filter: "blur(7px)",
          background: "linear-gradient(90deg, rgba(16,230,241,0.7) 0%, rgba(208,0,203,1) 100%)",
          border: "1px solid black",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "116px", left: "-61px", width: "210px", height: "9px",
          transform: "rotate(180deg)",
          filter: "blur(7px)",
          background: "linear-gradient(90deg, rgba(16,230,241,0.7) 0%, rgba(208,0,203,1) 100%)",
          border: "1px solid black",
        }}
      />
      
      <div
        className="absolute rounded-full"
        style={{
          top: "57px", left: "196px", width: "76px", height: "18px",
          transform: "rotate(180deg)",
          filter: "blur(11px)",
          background: "rgba(16,230,241,1)",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "112px", left: "0", width: "151px", height: "9px",
          transform: "rotate(180deg)",
          filter: "blur(4.5px)",
          background: "linear-gradient(90deg, rgba(16,230,241,0.3) 0%, rgba(208,0,203,0.15) 100%)",
          borderRadius: "15px 0 0 15px",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "108px", left: "97px", width: "60px", height: "18px",
          transform: "rotate(180deg)",
          filter: "blur(11px)",
          background: "rgba(16,230,241,1)",
          borderRadius: "30px 30px 0 0",
        }}
      />

      <div
        className="absolute"
        style={{
          top: "57px", right: "-39px", width: "266px", height: "9px",
          transform: "rotate(180deg)",
          filter: "blur(7px)",
          background: "linear-gradient(90deg, rgba(16,230,241,0.7) 0%, rgba(208,0,203,1) 100%)",
          border: "1px solid black",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "116px", right: "-61px", width: "210px", height: "9px",
          transform: "rotate(180deg)",
          filter: "blur(7px)",
          background: "linear-gradient(90deg, rgba(16,230,241,0.7) 0%, rgba(208,0,203,1) 100%)",
          border: "1px solid black",
        }}
      />
      
      <div
        className="absolute rounded-full"
        style={{
          top: "57px", right: "196px", width: "76px", height: "18px",
          transform: "rotate(180deg)",
          filter: "blur(11px)",
          background: "rgba(16,230,241,1)",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "112px", right: "0", width: "151px", height: "9px",
          transform: "rotate(180deg)",
          filter: "blur(4.5px)",
          background: "linear-gradient(90deg, rgba(16,230,241,0.3) 0%, rgba(208,0,203,0.15) 100%)",
          borderRadius: "15px 0 0 15px",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "108px", right: "97px", width: "60px", height: "18px",
          transform: "rotate(180deg)",
          filter: "blur(11px)",
          background: "rgba(16,230,241,1)",
          borderRadius: "30px 30px 0 0",
        }}
      />

      <div
        className="absolute flex justify-center"
        style={{ top: "39px", left: "calc(50% - 500px)", width: "1000px", height: "154px" }}
      >
        
        <h2
          className="text-center font-bold leading-tight"
          style={{ fontFamily: "'Zen Dots', sans-serif", fontSize: "72px" }}
        >
          <span className="text-white">Your </span>
          <span
            style={{
              background: "linear-gradient(90deg, #ff00ff, #00ffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            } as React.CSSProperties}
          >
            Roadmap
          </span>
          <span className="text-white"> For</span>
          <br />
          <span className="text-white">This Amazing Event</span>
        </h2>
      </div>

      <img loading="lazy"
        src={`${BASE_PATH}/images/timeline-rocket.png`}
        alt="Rocket Timeline"
        className="absolute"
        style={{ top: "189px", left: "480px", width: "590px", height: "900px", objectFit: "contain" }}
      />

      <div 
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ 
          height: "350px",
          background: "linear-gradient(0deg, rgba(0,9,35,1) 0%, rgba(0,9,35,0.95) 10%, rgba(0,9,35,0.8) 10%, rgba(0,9,35,0.5) 45%, transparent 100%)",
          zIndex: 10,
        }}
      />

      <TimelineCard
        top={395}
        left={300}
        title="Semantik Competition"
        date="April - Mei 2026"
      />

      <TimelineCard
        top={595}
        left={1000}
        title="National IT Competition"
        date="Juni - Juli 2026"
      />

      <TimelineCard
        top={754}
        left={300}
        title="Tech talks"
        date="Agustus 2026"
      />
      </div>

      <div className="hidden max-md:!flex flex-col w-full px-6 pt-4 pb-10 gap-10 items-center z-20 relative">
        <h2
          className="text-center font-bold leading-tight text-4xl"
          style={{ fontFamily: "'Zen Dots', sans-serif" }}
        >
          <span className="text-white">Your </span>
          <span
            style={{
              background: "linear-gradient(90deg, #ff00ff, #00ffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Roadmap
          </span>
          <span className="text-white"> For</span>
          <br />
          <span className="text-white">This Event</span>
        </h2>

        <div className="flex flex-col w-full max-w-[340px] items-center gap-8 relative mt-8">
          
          <div className="absolute top-2 bottom-6 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#10e6f1] via-[#d000cb] to-[#7B2FFE] z-0 opacity-90" />
          <div className="absolute top-2 bottom-6 left-1/2 -translate-x-1/2 w-[8px] bg-gradient-to-b from-[#10e6f1] via-[#d000cb] to-[#7B2FFE] z-0 opacity-40 blur-[4px]" />

          <div className="relative z-10 w-full flex flex-col items-center gap-4">
            <div className="w-5 h-5 rounded-full border-[3px] border-[#10e6f1] bg-[#000923] shadow-[0_0_15px_#10e6f1] flex-shrink-0" />
            <TimelineCardMobile title="Semantik Competition" date="April - Mei 2026" />
          </div>
          
          <div className="relative z-10 w-full flex flex-col items-center gap-4">
            <div className="w-5 h-5 rounded-full border-[3px] border-[#d000cb] bg-[#000923] shadow-[0_0_15px_#d000cb] flex-shrink-0" />
            <TimelineCardMobile title="National IT Competition" date="Juni - Juli 2026" />
          </div>
          
          <div className="relative z-10 w-full flex flex-col items-center gap-4 mb-4">
            <div className="w-5 h-5 rounded-full border-[3px] border-[#7B2FFE] bg-[#000923] shadow-[0_0_15px_#7B2FFE] flex-shrink-0" />
            <TimelineCardMobile title="Tech talks" date="Agustus 2026" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCardMobile({ title, date }: { title: string; date: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center w-full min-h-[90px] px-6 py-5 rounded-2xl relative"
      style={{
        background:
          "linear-gradient(0deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.65) 100%), linear-gradient(105deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)",
        backdropFilter: "blur(8px)",
        boxShadow: "0px 6px 30px rgba(208, 0, 203, 0.25)",
      }}
    >
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          padding: "2px",
          background: "linear-gradient(105deg, rgba(16,230,241,0.6) 0%, rgba(208,0,203,0.3) 100%)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <span
        className="leading-snug mb-2 break-words"
        style={{
          fontFamily: "'Zen Dots', sans-serif",
          fontSize: "14px",
          fontWeight: 400,
          background: "linear-gradient(340deg, rgba(208,0,203,1) 0%, rgba(16,230,241,1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {title}
      </span>
      <span
        className="text-gray-300"
        style={{
          fontFamily: "'Zen Dots', sans-serif",
          fontSize: "12px",
          fontWeight: 400,
        }}
      >
        {date}
      </span>
    </div>
  );
}

function TimelineCard({
  top,
  left,
  title,
  date,
}: {
  top: number;
  left: number;
  title: string;
  date: string;
}) {
  return (
    <div
      className="absolute flex flex-col justify-between"
      style={{
        top,
        left,
        width: "266px",
        height: "137px",
        padding: "30px 24px",
        borderRadius: "16px",
        background:
          "linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%), linear-gradient(105deg, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0) 100%)",
        backdropFilter: "blur(6px) brightness(100%)",
        boxShadow: "0px 0px 50px #d000cb, inset 0px 1px 2px rgba(255,255,255,0.1)",

        border: "2px solid transparent",
        backgroundClip: "padding-box",

      }}
    >
      
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          padding: "2px",
          background: "linear-gradient(105deg, rgba(16,230,241,0.8) 0%, rgba(208,0,203,0.4) 100%)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          borderRadius: "16px",
        }}
      />

      <span
        className="leading-normal"
        style={{
          fontFamily: "'Zen Dots', sans-serif",
          fontSize: "20px",
          fontWeight: 400,
          background: "linear-gradient(340deg, rgba(208,0,203,1) 0%, rgba(16,230,241,1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "none",
          filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))",
        }}
      >
        {title}
      </span>

      <span
        className="text-white"
        style={{
          fontFamily: "'Zen Dots', sans-serif",
          fontSize: "15px",
          fontWeight: 400,
          textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
        }}
      >
        {date}
      </span>
    </div>
  );
}