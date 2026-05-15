import Image from "next/image";
import { BASE_PATH } from '@/config/constants';

function HighlightRow() {
  return (
    <>
      <div className="hidden md:flex items-center justify-center gap-0 w-full max-w-5xl mx-auto">
        <div
          className="bg-gray-300 rounded-sm flex-shrink-0"
          style={{ width: "clamp(180px, 22vw, 300px)", aspectRatio: "3/2" }}
        />

        <div className="relative flex-shrink-0" style={{ width: "clamp(120px, 15vw, 200px)", height: "clamp(120px, 15vw, 200px)" }}>
          <Image
            src={`${BASE_PATH}/images/glow.webp`}
            alt="glow"
            fill
            className="object-contain opacity-80 mix-blend-screen"
          />
        </div>

        <div className="relative z-30 flex-shrink-0 flex justify-center"
          style={{ width: "clamp(80px, 10vw, 120px)", height: "clamp(80px, 10vw, 120px)" }}
        >
          <Image
            src={`${BASE_PATH}/images/s.webp`}
            alt="logo"
            fill
            className="object-contain"
            style={{ filter: "drop-shadow(0 0 15px rgba(168,85,247,0.5))" }}
          />
        </div>

        <div className="relative flex-shrink-0" style={{ width: "clamp(120px, 15vw, 200px)", height: "clamp(120px, 15vw, 200px)" }}>
          <Image
            src={`${BASE_PATH}/images/glow.webp`}
            alt="glow"
            fill
            className="object-contain opacity-80 scale-x-[-1] mix-blend-screen"
          />
        </div>

        <div
          className="bg-gray-300 rounded-sm flex-shrink-0"
          style={{ width: "clamp(180px, 22vw, 300px)", aspectRatio: "3/2" }}
        />
      </div>

      <div className="md:hidden flex flex-col items-center gap-5 w-full px-4">
        <div className="flex gap-3 w-full justify-center">
          <div className="bg-gray-300 rounded-lg flex-1 max-w-[160px] aspect-video" />
          <div className="bg-gray-300 rounded-lg flex-1 max-w-[160px] aspect-video" />
        </div>
        <div className="relative w-16 h-16">
          <Image
            src={`${BASE_PATH}/images/s.webp`}
            alt="logo"
            fill
            className="object-contain"
            style={{ filter: "drop-shadow(0 0 15px rgba(168,85,247,0.5))" }}
          />
        </div>
        <div className="flex gap-3 w-full justify-center">
          <div className="bg-gray-300 rounded-lg flex-1 max-w-[160px] aspect-video" />
          <div className="bg-gray-300 rounded-lg flex-1 max-w-[160px] aspect-video" />
        </div>
      </div>
    </>
  );
}

export default function Highlights() {
  return (
    <section
      className="relative text-center text-white overflow-hidden"
      style={{
        background: "#000923",
        paddingTop: "clamp(32px, 6vh, 64px)",
        paddingBottom: "clamp(32px, 6vh, 64px)",
      }}
    >
      <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ width: "clamp(200px, 40vw, 600px)", height: "clamp(200px, 40vw, 600px)", opacity: 0.5 }}
      >
        <Image src={`${BASE_PATH}/images/Elip.webp`} alt="bg1" fill className="object-contain brightness-125 contrast-125" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ width: "clamp(200px, 40vw, 600px)", height: "clamp(200px, 40vw, 600px)", opacity: 0.5 }}
      >
        <Image src={`${BASE_PATH}/images/Elips.webp`} alt="bg2" fill className="object-contain brightness-125 contrast-125" />
      </div>

      <div className="flex flex-col items-center relative z-20 px-4"
        style={{ marginBottom: "clamp(16px, 3vh, 50px)" }}
      >
        <h2
          className="text-center font-bold leading-tight"
          style={{ fontFamily: "'Zen Dots', cursive", fontSize: "clamp(26px, 5vw, 64px)" }}
        >
          <span style={{ color: "#ffffff" }}>SEMANTIK </span>
          <span style={{
            background: "linear-gradient(90deg, #ff00ff 0%, #00ffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Highlights
          </span>
        </h2>
      </div>

      <p
        className="text-white relative z-10 mx-auto px-6"
        style={{ maxWidth: "640px", fontSize: "clamp(13px, 2vw, 20px)", marginBottom: "clamp(20px, 4vh, 40px)" }}
      >
        Sekilas tentang momen-momen menarik yang menangkap
        <br className="hidden md:block" />
        energi dan kreativitas para peserta SEMANTIK
      </p>
      <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8 px-4">
        <HighlightRow />

        <div className="flex justify-center w-full">
          <Image
            src={`${BASE_PATH}/images/Line 4.webp`}
            alt="divider line"
            width={800}
            height={2}
            className="opacity-70 w-[90%] max-w-[800px]"
          />
        </div>

        <HighlightRow />
      </div>
    </section>
  );
}