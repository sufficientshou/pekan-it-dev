import { BASE_PATH } from '@/config/constants';

export default function Highlight() {
  return (
    <section
      id="highlight"
      className="relative text-white overflow-hidden flex flex-col items-center w-full"
      style={{
        background: "#140222",
        paddingTop: "clamp(100px, 10vw, 160px)",
        paddingBottom: "clamp(60px, 8vh, 100px)",
      }}
    >
      <div 
        className="absolute top-1/2 left-0 w-[400px] sm:w-[550px] h-[400px] sm:h-[550px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.28) 0%, rgba(88, 28, 135, 0.12) 55%, transparent 75%)",
          filter: "blur(75px)",
          transform: "translate(-35%, -50%)"
        }}
      />

      <div 
        className="absolute top-1/2 right-0 w-[400px] sm:w-[550px] h-[400px] sm:h-[550px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(109, 40, 217, 0.1) 55%, transparent 75%)",
          filter: "blur(75px)",
          transform: "translate(35%, -50%)"
        }}
      />

      <div className="flex flex-col items-center text-center relative z-20 px-4 w-full"
        style={{ marginBottom: "clamp(30px, 6vh, 60px)" }}
      >
        <h2
          className="font-bold leading-tight"
          style={{ fontFamily: "'Zen Dots', cursive", fontSize: "clamp(30px, 4vw, 50px)", marginBottom: "clamp(12px, 2vh, 24px)" }}
        >
          <span style={{ color: "#ffffff" }}>Event </span>
          <span style={{
            background: "linear-gradient(90deg, #60a5fa 0%, #8b5cf6 50%, #b620e0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Highlights
          </span>
        </h2>
        <p
          className="text-gray-300 relative z-10 mx-auto px-6 text-center"
          style={{ maxWidth: "700px", fontSize: "clamp(13px, 1.5vw, 17px)" }}
        >
          Sekilas momen inspiratif dari penyelenggaraan Tech Talks
          <br className="hidden md:block" />
          dan pameran inovasi mahasiswa.
        </p>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-[90%] sm:w-[85%] max-w-[800px]">
        <div className="flex flex-col gap-3 md:gap-6 w-full">
          <div className="flex gap-3 md:gap-6 w-full h-[110px] sm:h-[160px] md:h-[280px]">
            <div className="bg-gray-300 rounded-xl md:rounded-2xl flex-[3] relative overflow-hidden"></div>
            <div className="bg-gray-300 rounded-xl md:rounded-2xl flex-[2] relative overflow-hidden"></div>
          </div>
          <div className="flex gap-3 md:gap-6 w-full h-[110px] sm:h-[160px] md:h-[280px]">
            <div className="bg-gray-300 rounded-xl md:rounded-2xl flex-[2] relative overflow-hidden"></div>
            <div className="bg-gray-300 rounded-xl md:rounded-2xl flex-[3] relative overflow-hidden"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
