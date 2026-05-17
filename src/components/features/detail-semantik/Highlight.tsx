import Image from "next/image";
import { BASE_PATH } from '@/config/constants';

function HighlightRow({ images }: { images: string[] }) {
  return (
    <>
      <div className="hidden md:flex items-center justify-center gap-4 w-full max-w-5xl mx-auto">
        <div
          className="bg-gray-300 rounded-sm flex-shrink-0 relative overflow-hidden"
          style={{ width: "clamp(180px, 22vw, 300px)", aspectRatio: "3/2" }}
        >
          <img src={`${BASE_PATH}/images/${images[0]}`} alt="Highlight 1" className="w-full h-full object-cover" />
        </div>

        <div
          className="bg-gray-300 rounded-sm flex-shrink-0 relative overflow-hidden"
          style={{ width: "clamp(180px, 22vw, 300px)", aspectRatio: "3/2" }}
        >
          <img src={`${BASE_PATH}/images/${images[1]}`} alt="Highlight 2" className="w-full h-full object-cover" />
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

        <div
          className="bg-gray-300 rounded-sm flex-shrink-0 relative overflow-hidden"
          style={{ width: "clamp(180px, 22vw, 300px)", aspectRatio: "3/2" }}
        >
          <img src={`${BASE_PATH}/images/${images[2]}`} alt="Highlight 3" className="w-full h-full object-cover" />
        </div>

        <div
          className="bg-gray-300 rounded-sm flex-shrink-0 relative overflow-hidden"
          style={{ width: "clamp(180px, 22vw, 300px)", aspectRatio: "3/2" }}
        >
          <img src={`${BASE_PATH}/images/${images[3]}`} alt="Highlight 4" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="md:hidden flex flex-col items-center gap-5 w-full px-4">
        <div className="flex gap-3 w-full justify-center">
          <div className="bg-gray-300 rounded-lg flex-1 max-w-[160px] aspect-video relative overflow-hidden">
            <img src={`${BASE_PATH}/images/${images[0]}`} alt="Highlight 1" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-300 rounded-lg flex-1 max-w-[160px] aspect-video relative overflow-hidden">
            <img src={`${BASE_PATH}/images/${images[1]}`} alt="Highlight 2" className="w-full h-full object-cover" />
          </div>
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
          <div className="bg-gray-300 rounded-lg flex-1 max-w-[160px] aspect-video relative overflow-hidden">
            <img src={`${BASE_PATH}/images/${images[2]}`} alt="Highlight 3" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-300 rounded-lg flex-1 max-w-[160px] aspect-video relative overflow-hidden">
            <img src={`${BASE_PATH}/images/${images[3]}`} alt="Highlight 4" className="w-full h-full object-cover" />
          </div>
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
        paddingTop: "clamp(130px, 12vw, 220px)",
        paddingBottom: "clamp(80px, 10vh, 120px)",
      }}
    >
      <div className="hidden md:block absolute left-0 -translate-y-1/2 pointer-events-none"
        style={{ top: "60%", width: "clamp(200px, 40vw, 600px)", height: "clamp(200px, 40vw, 600px)", opacity: 0.5 }}
      >
        <Image src={`${BASE_PATH}/images/Elip.webp`} alt="bg1" fill className="object-contain object-left brightness-125 contrast-125" />
      </div>
      <div className="hidden md:block absolute right-0 -translate-y-1/2 pointer-events-none"
        style={{ top: "60%", width: "clamp(200px, 40vw, 600px)", height: "clamp(200px, 40vw, 600px)", opacity: 0.5 }}
      >
        <Image src={`${BASE_PATH}/images/Elips.webp`} alt="bg2" fill className="object-contain object-right brightness-125 contrast-125" />
      </div>

      <div className="flex flex-col items-center text-center relative z-20 px-4"
        style={{ marginBottom: "clamp(20px, 4vh, 40px)" }}
      >
        <h2
          className="font-bold leading-tight"
          style={{ fontFamily: "'Zen Dots', cursive", fontSize: "clamp(26px, 5vw, 64px)", marginBottom: "clamp(12px, 2vh, 24px)" }}
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
        <p
          className="text-white relative z-10 mx-auto px-6 text-center"
          style={{ maxWidth: "640px", fontSize: "clamp(13px, 2vw, 20px)" }}
        >
          Sekilas tentang momen-momen menarik yang menangkap
          <br className="hidden md:block" />
          energi dan kreativitas para peserta SEMANTIK
        </p>
      </div>
      <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8 px-4">
        <HighlightRow images={["dok1.webp", "dok2.webp", "dok3.webp", "dok4.webp"]} />

        <div className="flex justify-center w-full">
          <Image
            src={`${BASE_PATH}/images/Line 4.webp`}
            alt="divider line"
            width={800}
            height={2}
            className="opacity-70 w-[90%] max-w-[800px]"
          />
        </div>

        <HighlightRow images={["dok5.webp", "dok1.webp", "dok2.webp", "dok3.webp"]} />
      </div>
    </section>
  );
}