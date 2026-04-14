export default function About() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden" style={{ minHeight: "1100px" }}>

      {/* Gradient overlay at top for smooth transition from Hero */}
      <div 
        className="absolute top-0 left-0 w-full"
        style={{ 
          height: "150px",
          background: "linear-gradient(180deg, rgba(0,26,77,1) 0%, rgba(0,26,77,0.5) 50%, transparent 100%)",
          zIndex: 1,
        }}
      />

      {/* Layer 1: Night BG */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/night_bg2.png"
        alt="Night Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay at bottom for smooth transition to Events */}
      <div 
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ 
          height: "350px",
          background: "linear-gradient(0deg, rgba(0,9,35,1) 0%, rgba(0,9,35,0.95) 20%, rgba(0,9,35,0.7) 50%, rgba(0,26,77,0.2) 80%, transparent 100%)",
          zIndex: 10,
        }}
      />

      {/* Layer 2: Rectangle dekorasi bawah */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      

      {/* Layer 3: Vector garis bawah teks */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/Vector 21.png"
        alt="Vector"
        className="absolute w-[550px] h-[42px]"
        style={{ top: "700px", left: "103px" }}
      />

      {/* Layer 4: Konten utama */}
      <div
        className="absolute"
        style={{ top: "0", left: "0", width: "1280px", height: "832px" }}
      >
        {/* Kiri: Judul + Deskripsi - lebih lebar */}
        <div className="absolute flex flex-col" style={{ top: "300px", left: "105px", width: "600px" }}>

          {/* Judul — Step Into Digital Innovation */}
          <div style={{ width: "900px", height: "180px", marginBottom: "15px" }}>
            <h2
              className="leading-[100%]"
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
                  background: "linear-gradient(90deg, #60a5fa 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Digital
              </span>
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #d946ef 0%, #ec4899 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Innovation
              </span>
            </h2>
          </div>

          {/* Deskripsi */}
          <p
            className="text-white text-justify leading-normal"
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

        {/* Kanan: Logo - besar dan berdempetan */}
        <div 
          className="absolute w-[500px] h-[500px]"
          style={{ top: "300px", left: "1000px" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/LOGO.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}