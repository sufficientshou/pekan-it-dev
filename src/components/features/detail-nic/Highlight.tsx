import { BASE_PATH } from '@/config/constants';

export default function Highlights() {
  return (
    <section
      className="relative text-white overflow-hidden flex flex-col items-center w-full"
      style={{
        background: "#000923",
        paddingTop: "clamp(130px, 12vw, 220px)",
        paddingBottom: "clamp(80px, 10vh, 120px)",
      }}
    >
      <div className="hidden md:block absolute left-0 -translate-y-1/2 pointer-events-none"
        style={{ top: "60%", width: "clamp(200px, 40vw, 600px)", height: "clamp(200px, 40vw, 600px)", opacity: 0.5 }}
      >
        <div className="w-full h-full bg-[#7c3aed] rounded-full blur-[120px] -translate-x-1/2"></div>
      </div>
      <div className="hidden md:block absolute right-0 -translate-y-1/2 pointer-events-none"
        style={{ top: "60%", width: "clamp(200px, 40vw, 600px)", height: "clamp(200px, 40vw, 600px)", opacity: 0.5 }}
      >
        <div className="w-full h-full bg-[#7c3aed] rounded-full blur-[120px] translate-x-1/2"></div>
      </div>

      <div className="flex flex-col items-center text-center relative z-20 px-4 w-full"
        style={{ marginBottom: "clamp(30px, 6vh, 60px)" }}
      >
        <h2
          className="font-bold leading-tight"
          style={{ fontFamily: "'Zen Dots', cursive", fontSize: "clamp(30px, 4vw, 50px)", marginBottom: "clamp(12px, 2vh, 24px)" }}
        >
          <span style={{ color: "#ffffff" }}>N I C </span>
          <span style={{
            color: "#00ffff",
            filter: "drop-shadow(0 0 15px rgba(0,255,255,0.6))"
          }}>
            Highlights
          </span>
        </h2>
        <p
          className="text-gray-300 relative z-10 mx-auto px-6 text-center"
          style={{ maxWidth: "700px", fontSize: "clamp(14px, 2vw, 22px)" }}
        >
          Sekilas tentang momen-momen menarik yang menangkap
          <br className="hidden md:block" />
          energi dan kreativitas para peserta N-I-C
        </p>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[800px] px-4 md:px-12">
        <div className="flex flex-col gap-4 md:gap-6 w-full">
          <div className="flex gap-4 md:gap-6 w-full h-[160px] sm:h-[220px] md:h-[280px]">
            <div className="bg-gray-300 rounded-xl md:rounded-2xl flex-[3] relative overflow-hidden"></div>
            <div className="bg-gray-300 rounded-xl md:rounded-2xl flex-[2] relative overflow-hidden"></div>
          </div>
          <div className="flex gap-4 md:gap-6 w-full h-[160px] sm:h-[220px] md:h-[280px]">
            <div className="bg-gray-300 rounded-xl md:rounded-2xl flex-[2] relative overflow-hidden"></div>
            <div className="bg-gray-300 rounded-xl md:rounded-2xl flex-[3] relative overflow-hidden"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
