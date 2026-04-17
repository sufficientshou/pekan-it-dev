import Image from "next/image";

export default function Guide() {
  return (
    <section className="relative py-16 md:py-32 text-center overflow-hidden" style={{ minHeight: "800px" }}>
      
      {/* Background kiri */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-50">
        <Image
          src="/images/1.png"
          alt="bg1"
          fill
          className="object-contain brightness-125 contrast-125"
        />
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-50">
        <Image
          src="/images/2.png"
          alt="bg2"
          fill
          className="object-contain brightness-125 contrast-125"
        />
      </div>

      {/* Title */}
      <div className="flex flex-col items-center mb-8 relative z-20 px-4">
        <h2
          className="text-center font-bold leading-tight"
          style={{marginBottom: 50, fontFamily: "'Zen Dots', cursive", fontSize: "clamp(28px, 5vw, 64px)" }}
        >
          <span style={{ color: "#ffffff" }}>Your </span>
          <span 
            style={{ 
              background: "linear-gradient(90deg, #ff00ff 0%, #00ffff 100%)", 
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Guide{" "}
          </span>
          <span style={{ color: "#ffffff" }}>Before</span>
          <br />
          <span style={{ color: "#ffffff" }}>The Journey</span>
        </h2>
      </div>

      {/* Subtitle */}
      <p className="text-white mt-4 max-w-xl relative z-10 px-6 md:px-4" style={{ fontSize: "clamp(13px, 2.5vw, 15px)", marginLeft: "auto", marginRight: "auto", paddingLeft: "10px", top: "-30px", lineHeight: "1.6" }}>
        Pastikan kamu memahami seluruh ketentuan, alur pendaftaran,
        <br className="hidden md:block" />
        dan detail perlombaan yang telah disusun.
      </p>

      {/* Card */}
      <div className="relative mt-12 md:mt-16 flex justify-center z-10 px-4">
        <div className="absolute opacity-60 blur-2xl rounded-2xl" style={{ width: "clamp(280px, 80vw, 380px)", height: "clamp(250px, 70vw, 330px)", background: "#d000cb" }}></div>
        <div className="relative bg-white rounded-2xl shadow-lg" style={{ width: "clamp(260px, 75vw, 350px)", height: "clamp(230px, 65vw, 300px)" }}></div>
      </div>

    </section>
  );
}