"use client";

import { useState } from "react";

const lombas: Record<
  string,
  {
    title: string;
    titleAccent: string;
  }
> = {
  "Desain Grafis": {
    title: "Grafis",
    titleAccent: "Desain",
  },
  "Typing Competition": {
    title: "Competition",
    titleAccent: "Typing",
  },
  "Competitive Programming": {
    title: "Programming",
    titleAccent: "Competitive",
  },
};

interface FormCardProps {
  lomba?: string;
  onSubmitSuccess?: () => void;
}

export default function FormCard({ lomba = "Desain Grafis", onSubmitSuccess }: FormCardProps) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    nama: "",
    telepon: "",
    npm: "",
    angkatan: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const lombaData = lombas[lomba];

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
          lomba: lomba,
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
        onSubmitSuccess?.();
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
    <div
      className="rounded-2xl flex flex-col w-full relative"
      style={{
        width: "100%",
        maxWidth: "450px",
        minHeight: "600px",
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
        className="px-8 py-5 text-center"
        style={{ borderBottom: "1px solid rgba(16,230,241,0.2)" }}
      >
        <h4
          className="font-bold text-xl"
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
            {lombaData.titleAccent}
          </span>
          <br />
          <span 
            style={{ 
              background: "linear-gradient(90deg, #ff00ff 0%, #00ffff 100%)", 
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {lombaData.title}
          </span>
        </h4>
      </div>

      <div className="px-8 py-6">
        <div className="flex justify-between items-center mb-6">
          <span
            className="text-white font-semibold"
            style={{ marginLeft: 10, fontFamily: "'Exo 2', sans-serif", fontSize: "14px" }}
          >
            Informasi Peserta
          </span>
          <span
            className="text-white opacity-60 text-sm"
            style={{ marginRight: 20, fontFamily: "'Exo 2', sans-serif" }}
          >
            Step {step}/2
          </span>
        </div>

        {step === 1 ? (
          <div className="flex flex-col gap-6">
            {(
              [
                { key: "nama", label: "Nama Lengkap" },
                { key: "telepon", label: "No. Telepon" },
                { key: "npm", label: "NPM" },
                { key: "angkatan", label: "Angkatan" },
              ] as { key: keyof typeof form; label: string }[]
            ).map(({ key, label }) => (
              <div key={key} className="flex flex-col gap-3">
                <label
                  className="text-white text-sm opacity-80"
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
                  className="w-full px-4 py-3 rounded-lg text-black text-sm outline-none transition-all"
                  style={{
                    marginLeft: 10,
                    width: "95%",
                    height: "40px",
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
              className="w-full py-3 rounded-lg text-white font-semibold mt-2 transition-opacity hover:opacity-90 cursor-pointer"
              style={{
                marginTop: 70,  
                marginLeft: 10,
                width: "95%",
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
              className="text-white opacity-70 text-sm"
              style={{ marginLeft: 10, fontFamily: "'Exo 2', sans-serif" }}
            >
              Upload berkas yang diperlukan
            </p>

            <label
              className="flex flex-col items-center justify-center gap-3 rounded-lg py-10 cursor-pointer transition-colors"
              style={{
                marginTop: 10,  
                marginLeft: 10,
                width: "95%",
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

            <div className="flex gap-3 mt-2">
              <button
                onClick={() => setStep(1)}
                className="flex-1 py-3 rounded-lg text-white font-semibold transition-opacity hover:opacity-80 cursor-pointer"
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
                className="flex-1 py-3 rounded-lg text-white font-semibold transition-opacity hover:opacity-90 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
                className="mt-4 p-3 rounded-lg text-sm text-center"
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
  );
}