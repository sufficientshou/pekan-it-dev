import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { BASE_PATH } from '@/config/constants';

// ========================================
// KONFIGURASI MANUAL CARD - ATUR DI SINI
// ========================================
const CARD_CONFIG = {
  // Ukuran Card
  width: 390,        // Lebar card dalam pixel
  height: 250,       // Tinggi card dalam pixel
  
  // Posisi & Spacing
  gap: 200,          // Jarak antar card dalam pixel
  paddingLeft: 60,    // Geser card ke kanan (nilai positif) atau kiri (nilai negatif) dalam pixel
  
  // Mask/Cut Corner (untuk efek folder)
  maskSize: 100,     // Ukuran potongan sudut (semakin besar = potongan lebih besar)
  maskRadius: 30,    // Radius rounded corner
  maskOffset: 70,    // Offset mask
};


const cards = [
  {
    id: "semantik",
    title: "SEMANTIK",
    subtitle: "Internformatics Competition",
    detail: "3 Competitions",
    img: `${BASE_PATH}/images/Subtract (1).webp`,
    link: "/detail-semantik",
  },
  {
    id: "nic",
    title: "NIC",
    subtitle: "National IT Competition",
    detail: "2 Competitions",
    img: `${BASE_PATH}/images/Subtract (2).webp`,
    link: "#",
  },
  {
    id: "techtalks",
    title: "TECH TALKS",
    subtitle: "Seminar & Exhibition",
    detail: null,
    img: `${BASE_PATH}/images/Subtract.webp`,
    link: "#",
  },
];

export default function Events() {
  return (
    <section
      id="event"
      className="relative w-full min-h-screen overflow-hidden max-md:!min-h-0 max-md:!h-auto max-md:!pb-10"
      style={{ background: "#000923", minHeight: "1000px" }}
    >
      <div 
        className="absolute top-0 left-0 w-full pointer-events-none"
        style={{ 
          height: "80px",
          background: "linear-gradient(180deg, rgba(0,9,35,1) 0%, rgba(0,9,35,0.6) 15%, transparent 100%)",
          zIndex: 1,
        }}
      />

      <div
        className="absolute rounded-full"
        style={{
          top: "100px",
          left: "930px",
          width: "250px",
          height: "250px",
          background: "rgba(208,0,203,0.8)",
          filter: "blur(150px)",
          zIndex: 0,
        }}
      />

      <img loading="lazy"
        src={`${BASE_PATH}/images/image 7.webp`}
        alt="Rocket"
        className="absolute object-cover max-md:!hidden"
        style={{ top: "110px", left: "940px", width: "228px", height: "225px" }}
      />

      <img loading="lazy"
        src={`${BASE_PATH}/images/line2.webp`}
        alt="Line"
        className="absolute object-cover max-md:!hidden"
        style={{ top: "214px", left: "64px", width: "302px", height: "3px" }}
      />

      <div
        className="absolute flex flex-col items-start max-md:!relative max-md:!top-auto max-md:!left-auto max-md:!w-full max-md:!px-0 max-md:!gap-12 max-md:!pt-[5vh] max-md:!items-center"
        style={{
          top: "150px",
          left: "calc(50% - 680px)",
          width: "1129px",
          gap: "120px",
        }}
      >

        <div className="flex flex-col items-start max-md:!w-full max-md:!px-4 max-md:!gap-6 max-md:!items-center" style={{ width: "851px", gap: "50px" }}>
          <h2
            className="leading-tight max-md:!text-4xl max-md:!text-center max-md:!w-full max-md:!ml-0"
            style={{ fontFamily: "'Zen Dots', sans-serif", fontSize: "55px", fontWeight: 400, width: "834px", marginLeft: 120 }}
          >
            <span className="text-white">Choose Your</span><br/>
            <span className="text-white"> Journey in </span>
            <span
              style={{
                background: "linear-gradient(90deg, #ff00ff, #00ffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              } as React.CSSProperties}
            >
              Pekan IT
            </span>
          </h2>

          <p
            className="text-white text-2xl font-normal leading-normal max-md:!text-center max-md:!text-lg max-md:!ml-0"
            style={{ fontFamily: "'Exo 2', sans-serif", alignSelf: "stretch",fontSize: "20px", marginLeft: 125 }}
          >
            Jelajahi berbagai rangkaian kegiatan Pekan IT yang menghadirkan
            kompetisi, inovasi digital, serta kesempatan belajar dari para
            praktisi teknologi.
          </p>
        </div>

        <div className="flex items-center w-full max-md:!flex-nowrap max-md:!overflow-x-auto hide-scrollbar max-md:!snap-x max-md:!snap-mandatory max-md:!gap-6 max-md:!px-4 max-md:-mx-4 max-md:!w-screen max-md:!pl-0" style={{ gap: `${CARD_CONFIG.gap}px`, paddingLeft: `${CARD_CONFIG.paddingLeft}px` }}>
          {cards.map((card) => (
            <div key={card.id} className="relative max-md:!scale-[0.79] max-md:!origin-center max-md:!flex-shrink-0 max-md:!snap-center" style={{ width: `${CARD_CONFIG.width}px`, height: `${CARD_CONFIG.height}px` }}>

              {/* Desktop Arrow Button */}
              <Link href={card.link}>
                <button
                  className="absolute flex items-center justify-center z-10 cursor-pointer hover:scale-110 hover:brightness-110 transition-all duration-300 max-md:!hidden"
                  style={{
                    top: "5px",
                    right: "-170px",
                    width: "50px",
                    height: "50px",
                    borderRadius: "25px",
                    background: "linear-gradient(166deg, rgba(110,142,251,1) 0%, rgba(208,0,203,0.4) 100%)",
                  }}
                >
                  <ArrowUpRight size={28} color="white" />
                </button>
              </Link>

              {/* Mobile Arrow Button */}
              <Link href={card.link}>
                <button
                  className="absolute hidden max-md:!flex items-center justify-center z-10 cursor-pointer active:scale-95 transition-all duration-300"
                  style={{
                    top: "2px",
                    right: "-5px",
                    width: "50px",
                    height: "50px",
                    borderRadius: "25px",
                    background: "linear-gradient(166deg, rgba(110,142,251,1) 0%, rgba(208,0,203,0.4) 100%)",
                  }}
                >
                  <ArrowUpRight size={28} color="white" />
                </button>
              </Link>

              {/* Clickable Card */}
              <Link href={card.link} className="block w-full h-full">
                <div
                  className="absolute top-0 left-0 flex flex-col justify-end items-start cursor-pointer hover:brightness-110 transition-all duration-300"
                  style={{ width: `${CARD_CONFIG.width}px`, height: `${CARD_CONFIG.height}px`, padding: "32px" }}
                >

                <div
                  className="absolute left-0 top-0 w-full h-full"
                  style={{
                    WebkitMask:
                      `conic-gradient(at calc(100% - ${CARD_CONFIG.maskSize}px) ${CARD_CONFIG.maskSize}px, transparent 25%, black 0), ` +
                      `radial-gradient(${CARD_CONFIG.maskRadius}px, transparent 98%, black 100%) 100% 0 / calc(100% - ${CARD_CONFIG.maskOffset}px) calc(100% - ${CARD_CONFIG.maskOffset}px) no-repeat`,
                    mask:
                      `conic-gradient(at calc(100% - ${CARD_CONFIG.maskSize}px) ${CARD_CONFIG.maskSize}px, transparent 25%, black 0), ` +
                      `radial-gradient(${CARD_CONFIG.maskRadius}px, transparent 98%, black 100%) 100% 0 / calc(100% - ${CARD_CONFIG.maskOffset}px) calc(100% - ${CARD_CONFIG.maskOffset}px) no-repeat`,
                  }}
                >

                  <img loading="lazy"
                    src={card.img}
                    alt={card.title}
                    className="absolute top-0 left-0 object-cover"
                    style={{ width: `${CARD_CONFIG.width}px`, height: `${CARD_CONFIG.height}px`, borderRadius: "30px" }}
                  />

                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: `${CARD_CONFIG.width}px`,
                      height: `${CARD_CONFIG.height}px`,
                      borderRadius: "30px",
                      background: "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.01) 60%)",
                    }}
                  />
                </div>

                <div
                  className="relative flex flex-col items-start z-10"
                  style={{ width: "300px", gap: "6px", boxShadow: "0px 4px 4px #00000040" }}
                >
                  <span
                    className="text-white font-normal"
                    style={{ fontFamily: "'Zen Dots', sans-serif", fontSize: "28px" }}
                  >
                    {card.title}
                  </span>
                  <span
                    className="text-white font-medium"
                    style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "16px" }}
                  >
                    {card.subtitle}
                  </span>
                  {card.detail && (
                    <span
                      className="text-white font-normal"
                      style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "14px" }}
                    >
                      {card.detail}
                    </span>
                  )}
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}