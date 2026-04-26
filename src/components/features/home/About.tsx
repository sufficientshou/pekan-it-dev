import { BASE_PATH } from '@/config/constants';

export default function About() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden max-md:!min-h-0 max-md:!h-auto max-md:!py-16" style={{ minHeight: "900px" }}>

      <div 
        className="absolute top-0 left-0 w-full"
        style={{ 
          height: "150px",
          background: "linear-gradient(180deg, rgba(0,26,77,1) 0%, rgba(0,26,77,0.5) 50%, transparent 100%)",
          zIndex: 1,
        }}
      />

      <img
        src={`${BASE_PATH}/images/night_bg2.png`}
        alt="Night Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div 
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ 
          height: "350px",
          background: "linear-gradient(0deg, rgba(0,9,35,1) 0%, rgba(0,9,35,0.95) 20%, rgba(0,9,35,0.7) 50%, rgba(0,26,77,0.2) 80%, transparent 100%)",
          zIndex: 10,
        }}
      />

      <img
        src={`${BASE_PATH}/images/Vector 21.png`}
        alt="Vector"
        className="absolute w-[550px] h-[42px] max-md:!hidden"
        style={{ top: "640px", left: "103px" }}
      />

      <div
        className="absolute max-md:!relative max-md:!flex max-md:!flex-col max-md:!items-center max-md:!w-full max-md:!h-auto max-md:!mx-auto max-md:!px-4 max-md:!mt-[5vh]"
        style={{ top: "0", left: "0", width: "1280px", height: "832px" }}
      >

        <div className="absolute flex flex-col max-md:!relative max-md:!top-auto max-md:!left-auto max-md:!w-full max-md:!items-center" style={{ top: "240px", left: "105px", width: "600px" }}>
          <div className="max-md:!w-full max-md:!h-auto max-md:!text-center max-md:!mb-6" style={{ width: "900px", height: "180px", marginBottom: "15px" }}>
            <h2
              className="leading-[100%] max-md:!text-4xl max-md:!leading-tight"
              style={{ 
                fontFamily: "'Zen Dots', sans-serif", 
                fontSize: "72px", 
                fontWeight: 400,
                letterSpacing: "0%",
              }}
            >
              <span className="text-white">Step Into </span>
              <span
                style={{
                  background: "linear-gradient(90deg, #ff00ff, #00ffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                } as React.CSSProperties}
              >
                Digital
              </span>
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #ff00ff, #00ffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                } as React.CSSProperties}
              >
                Innovation
              </span>
            </h2>
          </div>

          <p
            className="text-white text-justify leading-normal max-md:!w-full max-md:!text-base max-md:!text-center max-md:!px-2"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontSize: "23px",
              fontWeight: 400,
              width: "555px",
              lineHeight: "1.8",
            }}
          >
            Merupakan kegiatan yang mewadahi ide dan kreativitas bidang IT lewat
            kompetisi dan edukasi, dengan 3 rangkaian kegiatan. Dikelola oleh
            Divisi Edukasi, Himpunan Mahasiswa Informatika (HIMTIKA) UNSIKA.
          </p>
        </div>

        <div 
          className="absolute w-[500px] h-[500px] max-md:!relative max-md:!top-auto max-md:!left-auto max-md:!w-[280px] max-md:!h-[280px] max-md:!mt-[10vh]"
          style={{ top: "240px", left: "1000px" }}
        >
          <img
            src={`${BASE_PATH}/images/LOGO.png`}
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}