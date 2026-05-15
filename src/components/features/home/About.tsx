import { BASE_PATH } from '@/config/constants';

// ========================================
// KONFIGURASI MANUAL FONT SIZE - ATUR DI SINI
// ========================================
const FONT_CONFIG = {
  // Desktop
  stepInto: 60,      // Font size "Step Into" dalam pixel
  digital: 60,       // Font size "Digital" dalam pixel
  innovation: 60,    // Font size "Innovation" dalam pixel
  lineHeight: 1.3,   // Jarak antar baris (1.0 = rapat, 1.5 = renggang, 2.0 = sangat renggang)
  
  // Mobile
  mobileFontSize: 38, // Font size untuk mobile dalam pixel
  mobileLogoSize: 900, // Ukuran logo di mobile dalam pixel
};
// ========================================

export default function About() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden max-md:!min-h-0 max-md:!h-auto max-md:!py-16" style={{ minHeight: "900px", maxWidth: "100vw" }}>

      <div 
        className="absolute top-0 left-0 w-full"
        style={{ 
          height: "150px",
          background: "linear-gradient(180deg, rgba(0,26,77,1) 0%, rgba(0,26,77,0.5) 50%, transparent 100%)",
          zIndex: 1,
        }}
      />

      <img loading="lazy"
        src={`${BASE_PATH}/images/night_bg2.webp`}
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

      <img loading="lazy"
        src={`${BASE_PATH}/images/Vector 21.webp`}
        alt="Vector"
        className="absolute w-[550px] h-[42px] max-md:!hidden"
        style={{ top: "640px", left: "max(0px, calc(50% - 640px + 103px))", maxWidth: "40vw" }}
      />

      <div
        className="absolute max-md:!relative max-md:!flex max-md:!flex-col max-md:!items-center max-md:!w-full max-md:!h-auto max-md:!mx-auto max-md:!px-4 max-md:!mt-[5vh]"
        style={{ top: "0", left: "50%", transform: "translateX(-50%)", width: "1280px", maxWidth: "100%", height: "832px" }}
      >

        <div className="absolute flex flex-col max-md:!relative max-md:!top-auto max-md:!left-auto max-md:!w-full max-md:!items-center max-md:!max-w-full" style={{ top: "240px", left: "105px", width: "600px", maxWidth: "calc(100% - 210px)" }}>
          <div className="max-md:!w-full max-md:!h-auto max-md:!text-center max-md:!mb-3 max-md:!max-w-full" style={{ width: "900px", maxWidth: "100%", height: "auto", minHeight: "180px", marginBottom: "15px" }}>
            <h2
              className="max-md:!leading-tight"
              style={{ 
                fontFamily: "'Zen Dots', sans-serif", 
                fontWeight: 400,
                letterSpacing: "0%",
                lineHeight: FONT_CONFIG.lineHeight,
              }}
            >
              <span className="text-white max-md:!text-[38px]" style={{ fontSize: `${FONT_CONFIG.stepInto}px` }}>Step Into </span>
              <span
                className="max-md:!text-[38px]"
                style={{
                  fontSize: `${FONT_CONFIG.digital}px`,
                  background: "linear-gradient(90deg, #ff00ff 0%, #6B4FBB 50%, #00ffff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                } as React.CSSProperties}
              >
                Digital
              </span>
              <br />
              <span
                className="max-md:!text-[38px]"
                style={{
                  fontSize: `${FONT_CONFIG.innovation}px`,
                  background: "linear-gradient(90deg, #ff00ff 0%, #6B4FBB 50%, #00ffff 100%)",
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
              fontSize: "clamp(16px, 1.8vw, 23px)",
              fontWeight: 400,
              width: "555px",
              maxWidth: "100%",
              lineHeight: "1.8",
            }}
          >
            Merupakan kegiatan yang mewadahi ide dan kreativitas bidang IT lewat
            kompetisi dan edukasi, dengan 3 rangkaian kegiatan. Dikelola oleh
            Divisi Edukasi, Himpunan Mahasiswa Informatika (HIMTIKA) UNSIKA.
          </p>
        </div>

        <div 
          className="absolute max-md:!relative max-md:!top-auto max-md:!left-auto max-md:!mt-8 max-md:!ml-60"
          style={{ 
            top: "240px", 
            right: "15px", 
            width: "500px",
            height: "500px",
          }}
        >
          <img loading="lazy"
            src={`${BASE_PATH}/images/LOGO.webp`}
            alt="Logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            className="max-md:!w-[300px] max-md:!h-[400px] max-md:!max-w-none"
          />
        </div>
      </div>
    </section>
  );
}