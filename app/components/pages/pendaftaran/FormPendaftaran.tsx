"use client";

import { useState } from "react";

const tabs = ["Desain Grafis", "Typing Competition", "Competitive Programming"];

const lombas: Record<
  string,
  {
    title: string;
    titleAccent: string;
    description: string;
    cp: { name: string; wa: string };
  }
> = {
  "Desain Grafis": {
    title: "Grafis",
    titleAccent: "Desain",
    description:
      "Perlombaan ini menantang peserta untuk membuat poster kreatif dengan memanfaatkan elemen visual seperti gambar, warna, dan tipografi. Melalui tema \"Peran AI sebagai Pendukung Kreativitas Manusia\", peserta diajak mengeksplorasi ide dan kreativitas dalam desain visual.",
    cp: { name: "M. Rafisyah", wa: "082125622387" },
  },
  "Typing Competition": {
    title: "Competition",
    titleAccent: "Typing",
    description:
      "Uji kecepatan dan akurasi mengetikmu! Peserta akan berkompetisi menyelesaikan teks dalam waktu tercepat dengan kesalahan seminimal mungkin.",
    cp: { name: "Julian Manasye Nasyok", wa: "081236294806" },
  },
  "Competitive Programming": {
    title: "Programming",
    titleAccent: "Competitive",
    description:
      "Tantang kemampuan algoritmamu! Selesaikan berbagai soal pemrograman dengan logika dan efisiensi terbaik dalam waktu yang ditentukan.",
    cp: { name: "Fajar Abdilah", wa: "085714556256" },
  },
};

export default function AboutLombaSemantik() {
  const [activeTab, setActiveTab] = useState("Desain Grafis");
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    nama: "",
    telepon: "",
    npm: "",
    angkatan: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const lomba = lombas[activeTab];

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch('/api/pendaftaran', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          lomba: activeTab,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage("✅ Pendaftaran berhasil! Data telah tersimpan.");

        setForm({
          nama: "",
          telepon: "",
          npm: "",
          angkatan: "",
        });
        setStep(1);
      } else {
        setSubmitMessage(`❌ Error: ${result.error}`);
      }
    } catch (error) {
      setSubmitMessage("❌ Gagal mengirim data. Coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden max-md:!px-4"
      style={{ background: "#000923", minHeight: "832px", padding: "60px 0 80px" }}
    >
      
      <div className="flex flex-col items-center mb-8 max-md:!mb-4">
        <h2
          className="text-center font-bold leading-tight max-md:!mb-6"
          style={{marginBottom: 50, fontFamily: "'Zen Dots', cursive", fontSize: "clamp(40px, 5vw, 64px)" }}
        >
          <span 
            style={{ 
              background: "linear-gradient(90deg, #ff00ff 0%, #00ffff 100%)", 
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Start{" "}
          </span>
          <span className="text-white">Your</span>
          <br />
          <span className="text-white">Journey Now</span>
        </h2>

      </div>

      <div className="flex justify-center gap-20 mb-12 flex-wrap px-4 max-md:!justify-start max-md:!flex-nowrap max-md:!overflow-x-auto max-md:!snap-x max-md:!snap-mandatory max-md:!gap-3 max-md:!pb-6 max-md:[scrollbar-width:none] max-md:![&::-webkit-scrollbar]:hidden">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => { setActiveTab(tab); setStep(1); }}
            className="w-[300px] h-[40px] px-6 py-3 rounded-full text-white font-semibold text-sm transition-all duration-300 cursor-pointer text-center max-md:!w-auto max-md:!whitespace-nowrap max-md:!shrink-0 max-md:!snap-center max-md:!h-auto max-md:!min-h-[48px] max-md:!px-8 max-md:!shadow-none"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              background:
                activeTab === tab
                  ? "rgba(10, 15, 35, 1)" // Warna solid gelap tanpa gradasi
                  : "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.15)", // Border tetap sama untuk yang aktif maupun tidak
              boxShadow: activeTab === tab ? "0 0 60px 10px rgba(180, 0, 203, 0.45)" : "none", // Blur ungu besar di belakang tombol yang aktif
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div
        className="mx-auto flex flex-col md:flex-row justify-between gap-10 px-6 md:px-12 items-start w-full max-md:!px-0"
        style={{ maxWidth: "1200px" }}
      >
        
        <div 
          className="flex flex-col gap-6 max-md:!transform-none max-md:!pt-0 max-md:!flex-auto max-md:!w-full max-md:!text-center max-md:!items-center" 
          style={{ 

            flex: "0 0 630px",

            transform: "translateX(90px)",

            paddingTop: "90px"
          }}
        >
          
          <h3
            className="font-bold leading-tight max-md:!text-[36px]"
            style={{ fontFamily: "'Zen Dots', cursive", fontSize: "80px" }}
          >
            <span 
              style={{ 
                background: "linear-gradient(90deg, #ff00ff 0%, #00ffff 100%)", 
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {lomba.titleAccent}{" "}
            </span>
            <span className="text-white">{lomba.title}</span>
          </h3>

          <p
            className="text-white leading-relaxed text-justify max-md:!text-center max-md:!text-base"
            style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "20px", opacity: 0.85 }}
          >
            {lomba.description}
          </p>

          <div style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "14px" }} className="max-md:!text-sm max-md:!text-center">
            <span className="text-white font-semibold">Contact Person: </span>
            <span className="text-white">{lomba.cp.name}</span>
            <br />
            <span className="text-white opacity-80">Whatsapp : {lomba.cp.wa}</span>
          </div>

          <button
            className="px-6 py-3 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90 cursor-pointer max-md:!w-full max-md:!max-w-[300px] max-md:!h-12 max-md:!py-0 max-md:!flex max-md:!items-center max-md:!justify-center"
            style={{

              width: "170px", // Ganti ke "200px" atau ukuran lain jika ingin lebar spesifik
              height: "45px",       // Ganti ke "50px" atau ukuran lain jika ingin lebih tinggi
              fontFamily: "'Exo 2', sans-serif",
              background:
                "linear-gradient(90deg, #6e8efb 0%, rgba(208,0,203,0.7) 100%)",
              boxShadow: "0 4px 20px rgba(110,142,251,0.4)",
            }}
          >
            Hubungi Sekarang
          </button>
        </div>

        <div
          className="rounded-2xl flex flex-col w-full md:w-auto relative max-md:!transform-none max-md:!mt-10 max-md:!mx-auto max-md:!mb-10 max-md:!w-[95%] max-md:!min-h-[560px] max-md:!pb-8"
          style={{
            width: "100%",
            maxWidth: "450px", // 🟩 Atur lebar form di sini (contoh: 480px)
            minHeight: "600px", // 🟩 Atur tinggi form di sini (contoh: 560px)

            transform: "translateX(270px)", 

            marginTop: "80px", 
            
            marginLeft: "auto", // Membantu mendorong form penuh ke sisi kanan
            background: "rgba(0,9,35,0.85)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 0 40px rgba(16,230,241,0.15), 0 0 80px rgba(208,0,203,0.1)",
          }}
        >
          
          <div 
            style={{
              position: "absolute", inset: 0, pointerEvents: "none", zIndex: 10,
              borderRadius: "inherit", padding: "2px",
              background: "linear-gradient(180deg, #00ffff 0%, #ff00ff 100%)",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              maskComposite: "exclude",
            }}
          />
          
          <div
            className="px-8 py-5 text-center max-md:!px-4 max-md:!py-4"
            style={{ borderBottom: "1px solid rgba(16,230,241,0.2)" }}
          >
            <h4
              className="font-bold text-xl max-md:!text-lg max-md:!py-1"
              style={{ paddingBottom: 10, paddingTop: 10, fontFamily: "'Zen Dots', cursive" }}
            >
              <span className="text-white">Daftar </span>
              <span 
                style={{ 
                  background: "linear-gradient(90deg, #ff00ff 0%, #00ffff 100%)", 
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {lomba.titleAccent}
              </span>
              <br />
              <span 
                style={{ 
                  background: "linear-gradient(90deg, #ff00ff 0%, #00ffff 100%)", 
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {lomba.title}
              </span>
            </h4>
          </div>

          <div className="px-8 py-6 max-md:!px-5">
            <div className="flex justify-between items-center mb-6 max-md:!mb-4">
              <span
                className="text-white font-semibold flex-1 max-md:!ml-0"
                style={{ marginLeft: 10, fontFamily: "'Exo 2', sans-serif", fontSize: "14px" }}
              >
                Informasi Peserta
              </span>
              <span
                className="text-white opacity-60 text-sm max-md:!mr-0 max-md:!text-xs"
                style={{ marginRight: 20, fontFamily: "'Exo 2', sans-serif" }}
              >
                Step {step}/2
              </span>
            </div>

            {step === 1 ? (
              <div className="flex flex-col gap-6 max-md:!gap-4">
                {(
                  [
                    { key: "nama", label: "Nama Lengkap" },
                    { key: "telepon", label: "No. Telepon" },
                    { key: "npm", label: "NPM" },
                    { key: "angkatan", label: "Angkatan" },
                  ] as { key: keyof typeof form; label: string }[]
                ).map(({ key, label }) => (
                  <div key={key} className="flex flex-col gap-3 max-md:!gap-1">
                    <label
                      className="text-white text-sm opacity-80 max-md:!ml-0"
                      style={{marginLeft:10 , fontFamily: "'Exo 2', sans-serif" }}
                    >
                      {label}
                    </label>
                    <input
                      type="text"
                      placeholder="Value"
                      value={form[key]}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, [key]: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-lg text-black text-sm outline-none transition-all max-md:!w-full max-md:!ml-0 max-md:!h-12 max-md:!text-base"
                      style={{

                        marginLeft: 10,
                        width: "95%", // Ganti nilainya untuk mengatur lebar secara manual
                        height: "40px", // Ganti nilainya untuk mengatur tinggi secara manual

                        background: "rgba(255, 255, 255, 1)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        fontFamily: "'Exo 2', sans-serif",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "rgba(16,230,241,0.6)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(255,255,255,0.15)")
                      }
                    />
                  </div>
                ))}

                <button
                  onClick={() => setStep(2)}
                  className="w-full py-3 rounded-lg text-white font-semibold mt-2 transition-opacity hover:opacity-90 cursor-pointer max-md:!ml-0 max-md:!mt-8 max-md:!w-full max-md:!h-12 max-md:!py-0 max-md:!flex max-md:!items-center max-md:!justify-center"
                  style={{
                    marginTop: 70,  
                    marginLeft: 10,
                    width: "95%", // Ganti nilainya untuk mengatur lebar secara manual
                    height: "40px",
                    fontFamily: "'Exo 2', sans-serif",
                    background:
                      "linear-gradient(90deg, #6e8efb 0%, #d000cb 100%)",
                    boxShadow: "0 4px 20px rgba(208,0,203,0.4)",
                  }}
                >
                  Next
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <p
                  className="text-white opacity-70 text-sm max-md:!ml-0"
                  style={{ marginLeft: 10, fontFamily: "'Exo 2', sans-serif" }}
                >
                  Upload berkas yang diperlukan
                </p>

                <label
                  className="flex flex-col items-center justify-center gap-3 rounded-lg py-10 cursor-pointer transition-colors max-md:!mt-2 max-md:!ml-0 max-md:!w-full max-md:!h-[140px]"
                  style={{
                    marginTop: 10,  
                    marginLeft: 10,
                    width: "95%", // Ganti nilainya untuk mengatur lebar secara manual
                    height: "150px",
                    border: "2px dashed rgba(16,230,241,0.4)",
                    background: "rgba(16,230,241,0.04)",
                  }}
                >
                  <input type="file" className="hidden" />
                  <span className="text-4xl">📁</span>
                  <span
                    className="text-white opacity-60 text-sm"
                    style={{ fontFamily: "'Exo 2', sans-serif" }}
                  >
                    Klik untuk upload file
                  </span>
                </label>

                <div className="flex gap-3 mt-2 max-md:!mt-4 max-md:!w-full max-md:!gap-2">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 rounded-lg text-white font-semibold transition-opacity hover:opacity-80 cursor-pointer max-md:!h-12 max-md:!py-0 max-md:!flex max-md:!items-center max-md:!justify-center"
                    style={{
                      fontFamily: "'Exo 2', sans-serif",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex-1 py-3 rounded-lg text-white font-semibold transition-opacity hover:opacity-90 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed max-md:!h-12 max-md:!py-0 max-md:!flex max-md:!items-center max-md:!justify-center"
                    style={{
                      fontFamily: "'Exo 2', sans-serif",
                      background: isSubmitting 
                        ? "rgba(128,128,128,0.5)"
                        : "linear-gradient(90deg, #6e8efb 0%, #d000cb 100%)",
                      boxShadow: isSubmitting 
                        ? "none"
                        : "0 4px 20px rgba(208,0,203,0.4)",
                    }}
                  >
                    {isSubmitting ? "Mengirim..." : "Submit ✈"}
                  </button>
                </div>

                {submitMessage && (
                  <div 
                    className="mt-4 p-3 rounded-lg text-sm text-center max-md:!ml-0 max-md:!w-full"
                    style={{
                      marginLeft: 10,
                      width: "95%",
                      background: submitMessage.includes("✅") 
                        ? "rgba(0,255,0,0.1)" 
                        : "rgba(255,0,0,0.1)",
                      border: `1px solid ${submitMessage.includes("✅") 
                        ? "rgba(0,255,0,0.3)" 
                        : "rgba(255,0,0,0.3)"}`,
                      color: submitMessage.includes("✅") ? "#00ff00" : "#ff6b6b",
                      fontFamily: "'Exo 2', sans-serif",
                    }}
                  >
                    {submitMessage}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}