import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    id: "semantik",
    title: "SEMANTIK",
    subtitle: "Internformatics Competition",
    detail: "3 Competitions",
    img: "/images/Subtract.png",
  },
  {
    id: "nic",
    title: "NIC",
    subtitle: "National IT Competition",
    detail: "2 Competitions",
    img: "/images/Subtract.png",
  },
  {
    id: "techtalks",
    title: "TECH TALKS",
    subtitle: "Seminar & Exhibition",
    detail: null,
    img: "/images/Subtract.png",
  },
];

export default function Events() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{ background: "#000923", minHeight: "1000px" }}
    >
      {/* Gradient overlay at top for smooth transition from About */}
      <div 
        className="absolute top-0 left-0 w-full pointer-events-none"
        style={{ 
          height: "80px",
          background: "linear-gradient(180deg, rgba(0,9,35,1) 0%, rgba(0,9,35,0.6) 15%, transparent 100%)",
          zIndex: 1,
        }}
      />

      {/* Magenta glow kanan atas - centered behind rocket */}
      <div
        className="absolute rounded-full"
        style={{
          top: "160px",
          left: "1180px",
          width: "250px",
          height: "250px",
          background: "rgba(208,0,203,0.8)",
          filter: "blur(150px)",
          zIndex: 0,
        }}
      />

      {/* Roket kanan atas */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/image 7.png"
        alt="Rocket"
        className="absolute object-cover"
        style={{ top: "160px", left: "1200px", width: "228px", height: "225px" }}
      />

      {/* Garis bawah judul */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/line2.svg"
        alt="Line"
        className="absolute object-cover"
        style={{ top: "274px", left: "64px", width: "302px", height: "3px" }}
      />

      {/* Konten utama */}
      <div
        className="absolute flex flex-col items-start"
        style={{
          top: "210px",
          left: "calc(50% - 680px)",
          width: "1129px",
          gap: "120px",
        }}
      >
        {/* Header */}
        <div className="flex flex-col items-start" style={{ width: "851px", gap: "50px" }}>
          {/* Judul — ganti dengan SVG aset jika tersedia */}
          {/* <img src="/images/choose-your-journey.svg" alt="Choose Your Journey in Pekan IT" style={{ width: "834px", height: "154px" }} /> */}
          <h2
            className="leading-tight"
            style={{ fontFamily: "'Zen Dots', sans-serif", fontSize: "65px", fontWeight: 400, width: "834px" }}
          >
            <span className="text-white">Choose Your</span><br/>
            <span className="text-white"> Journey in </span>
            <span style={{ color: "#d946ef" }}>Pekan </span>
            <span style={{ color: "#06b6d4" }}>IT</span>
          </h2>

          <p
            className="text-white text-2xl font-normal leading-normal"
            style={{ fontFamily: "'Exo 2', sans-serif", alignSelf: "stretch" }}
          >
            Jelajahi berbagai rangkaian kegiatan Pekan IT yang menghadirkan
            kompetisi, inovasi digital, serta kesempatan belajar dari para
            praktisi teknologi.
          </p>
        </div>

        {/* Cards */}
        <div className="flex items-center w-full" style={{ gap: "300px" }}>
          {cards.map((card) => (
            <div key={card.id} className="relative" style={{ width: "400px", height: "280px" }}>

              {/* Arrow button */}
              <div
                className="absolute flex items-center justify-center z-10"
                style={{
                  top: "20px",
                  right: "20px",
                  width: "50px",
                  height: "50px",
                  borderRadius: "25px",
                  background: "linear-gradient(166deg, rgba(110,142,251,1) 0%, rgba(208,0,203,0.4) 100%)",
                }}
              >
                <ArrowUpRight size={28} color="white" />
              </div>

              {/* Card content */}
              <div
                className="absolute top-0 left-0 flex flex-col justify-end items-start"
                style={{ width: "400px", height: "280px", padding: "32px" }}
              >
                {/* Background image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute top-0 left-0 object-cover"
                  style={{ width: "400px", height: "280px", borderRadius: "30px" }}
                />

                {/* Gradient overlay */}
                <div
                  className="absolute left-0 top-0"
                  style={{
                    width: "400px",
                    height: "280px",
                    borderRadius: "30px",
                    backdropFilter: "blur(25px) brightness(100%)",
                    background: "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.01) 60%)",
                  }}
                />

                {/* Text */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}