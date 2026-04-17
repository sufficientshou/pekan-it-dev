import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    id: "semantik",
    title: "SEMANTIK",
    subtitle: "Internformatics Competition",
    detail: "3 Competitions",
    img: "/images/Subtract (1).png",
  },
  {
    id: "nic",
    title: "NIC",
    subtitle: "National IT Competition",
    detail: "2 Competitions",
    img: "/images/Subtract (2).png",
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
          top: "160px",
          left: "1180px",
          width: "250px",
          height: "250px",
          background: "rgba(208,0,203,0.8)",
          filter: "blur(150px)",
          zIndex: 0,
        }}
      />

      <img
        src="/images/image 7.png"
        alt="Rocket"
        className="absolute object-cover max-md:!hidden"
        style={{ top: "160px", left: "1200px", width: "228px", height: "225px" }}
      />

      <img
        src="/images/line2.svg"
        alt="Line"
        className="absolute object-cover max-md:!hidden"
        style={{ top: "274px", left: "64px", width: "302px", height: "3px" }}
      />

      <div
        className="absolute flex flex-col items-start max-md:!relative max-md:!top-auto max-md:!left-auto max-md:!w-full max-md:!px-0 max-md:!gap-12 max-md:!pt-[15vh] max-md:!items-center"
        style={{
          top: "210px",
          left: "calc(50% - 680px)",
          width: "1129px",
          gap: "120px",
        }}
      >

        <div className="flex flex-col items-start max-md:!w-full max-md:!px-4 max-md:!gap-6 max-md:!items-center" style={{ width: "851px", gap: "50px" }}>
          <h2
            className="leading-tight max-md:!text-4xl max-md:!text-center max-md:!w-full"
            style={{ fontFamily: "'Zen Dots', sans-serif", fontSize: "65px", fontWeight: 400, width: "834px" }}
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
            className="text-white text-2xl font-normal leading-normal max-md:!text-center max-md:!text-lg"
            style={{ fontFamily: "'Exo 2', sans-serif", alignSelf: "stretch" }}
          >
            Jelajahi berbagai rangkaian kegiatan Pekan IT yang menghadirkan
            kompetisi, inovasi digital, serta kesempatan belajar dari para
            praktisi teknologi.
          </p>
        </div>

        <div className="flex items-center w-full max-md:!flex-nowrap max-md:!overflow-x-auto max-md:[&::-webkit-scrollbar]:!hidden max-md:!snap-x max-md:!snap-mandatory max-md:!gap-4 max-md:!px-4 max-md:-mx-4 max-md:!w-screen" style={{ gap: "300px" }}>
          {cards.map((card) => (
            <div key={card.id} className="relative max-md:!scale-[0.75] max-md:!origin-[0_0] max-md:!-mr-[100px] max-md:!flex-shrink-0 max-md:!snap-center" style={{ width: "400px", height: "280px" }}>

              <button
                className="absolute flex items-center justify-center z-10 cursor-pointer hover:scale-110 hover:brightness-110 transition-all duration-300 max-md:!hidden"
                style={{
                  top: "10px",
                  right: "-243px",
                  width: "50px",
                  height: "50px",
                  borderRadius: "25px",
                  background: "linear-gradient(166deg, rgba(110,142,251,1) 0%, rgba(208,0,203,0.4) 100%)",
                }}
              >
                <ArrowUpRight size={28} color="white" />
              </button>

              <div
                className="absolute top-0 left-0 flex flex-col justify-end items-start"
                style={{ width: "400px", height: "280px", padding: "32px" }}
              >

                <div
                  className="absolute left-0 top-0 w-full h-full"
                  style={{
                    WebkitMask:
                      "conic-gradient(at calc(100% - 100px) 100px, transparent 25%, black 0), " +
                      "radial-gradient(30px, transparent 98%, black 100%) 100% 0 / calc(100% - 70px) calc(100% - 70px) no-repeat",
                    mask:
                      "conic-gradient(at calc(100% - 100px) 100px, transparent 25%, black 0), " +
                      "radial-gradient(30px, transparent 98%, black 100%) 100% 0 / calc(100% - 70px) calc(100% - 70px) no-repeat",
                  }}
                >

                  <img
                    src={card.img}
                    alt={card.title}
                    className="absolute top-0 left-0 object-cover"
                    style={{ width: "400px", height: "280px", borderRadius: "30px" }}
                  />

                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "400px",
                      height: "280px",
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}