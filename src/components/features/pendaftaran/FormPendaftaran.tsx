"use client";

import { BASE_PATH } from '@/config/constants';
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

const tabs = ["UI/UX Design", "Software Development"];

const lombas: Record<
  string,
  {
    title: string;
    titleAccent: string;
    description: string;
    cp: { name: string; wa: string };
  }
> = {
  "UI/UX Design": {
    title: "Design",
    titleAccent: "UI/UX",
    description:
      "Perlombaan ini menantang peserta untuk merancang antarmuka pengguna yang intuitif dan menarik. Peserta diajak mengeksplorasi kreativitas dalam desain interaksi dan pengalaman pengguna yang optimal.",
    cp: { name: "Muhammad Rafisyah Rizkiyawan", wa: "082125622387" },
  },
  "Software Development": {
    title: "Development",
    titleAccent: "Software",
    description:
      "Tantang kemampuanmu dalam membangun aplikasi perangkat lunak! Peserta akan mengembangkan solusi digital inovatif dengan teknologi terkini.",
    cp: { name: "Fajar Abdilah", wa: "085714556256" },
  },
};

export default function AboutLombaSemantik() {
const router = useRouter();
  const [activeTab, setActiveTab] = useState("UI/UX Design");
  const [step, setStep] = useState(1);
  const [formDataState, setFormDataState] = useState({
    leaderName: "",
    anggota2: "",
    anggota3: "",
    anggota4: "",
    anggota5: "",
    leaderPhone: "",
    teamName: "",
    institution: "",
    angkatan: "",
  });
  const [filesState, setFilesState] = useState<{
    buktiGrup: File | null;
    buktiStory: File | null;
    buktiKtm: File | null;
    buktiPembayaran: File | null;
  }>({
    buktiGrup: null,
    buktiStory: null,
    buktiKtm: null,
    buktiPembayaran: null,
  });
  const [selectedPayment, setSelectedPayment] = useState<"dana" | "btn" | null>(null);
  const [copiedPayment, setCopiedPayment] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const lomba = lombas[activeTab];
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyjbIEpci5wktPurqKp3uhw-y9hUHK6fAtby196KGtB7EOrfW7M23EKKSkxKqKV3xLzdw/exec';

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, key: keyof typeof filesState) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        alert("Ukuran file maksimal 5MB!");
        e.target.value = "";
        return;
      }
      setFilesState((prev) => ({
        ...prev,
        [key]: file,
      }));
    }
  };

  const handleRemoveFile = (key: keyof typeof filesState, inputId: string) => {
    setFilesState((prev) => ({
      ...prev,
      [key]: null,
    }));
    const input = document.getElementById(inputId) as HTMLInputElement;
    if (input) {
      input.value = "";
    }
  };

  const isStep1Valid = hasMounted && (
    activeTab === "UI/UX Design"
      ? formDataState.leaderName.trim() !== "" &&
        formDataState.anggota2.trim() !== "" &&
        formDataState.leaderPhone.trim() !== ""
      : formDataState.leaderName.trim() !== "" &&
        formDataState.anggota2.trim() !== "" &&
        formDataState.anggota3.trim() !== "" &&
        formDataState.leaderPhone.trim() !== ""
  );

  const isStep2Valid = hasMounted && (
    formDataState.teamName.trim() !== "" &&
    formDataState.institution.trim() !== "" &&
    formDataState.angkatan.trim() !== ""
  );

  const isStep3Valid = hasMounted && (
    filesState.buktiGrup !== null &&
    filesState.buktiStory !== null &&
    filesState.buktiKtm !== null
  );

  const isStep4Valid = hasMounted && (
    selectedPayment !== null &&
    filesState.buktiPembayaran !== null
  );

  const paymentMethods = {
    dana: { name: "DANA", number: "085664527826", holder: "a.n. Rafli Rizqi Fadillah", color: "#8B5CF6", gradient: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)" },
    btn: { name: "Bank BTN", number: "18101610249143", holder: "a.n. Rafli Rizqi Fadillah", color: "#F97316", gradient: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)" },
  };

  const handleCopyPayment = (key: "dana" | "btn") => {
    navigator.clipboard.writeText(paymentMethods[key].number).then(() => {
      setCopiedPayment(key);
      setTimeout(() => setCopiedPayment(null), 2000);
    });
  };

  const getStepTitle = () => {
    switch (step) {
      case 1: return "Data Anggota";
      case 2: return "Informasi Team";
      case 3: return "Upload Berkas";
      case 4: return "Pembayaran";
      default: return "Informasi Peserta";
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitMessage("Sedang memproses berkas dan mengirim data pendaftaran...");

    try {
      const isLeaderValid = formDataState.leaderName.trim() !== "";
      const isAnggota2Valid = formDataState.anggota2.trim() !== "";
      const isAnggota3Valid = activeTab === "UI/UX Design" || formDataState.anggota3.trim() !== "";
      const isPhoneValid = formDataState.leaderPhone.trim() !== "";
      const isTeamNameValid = formDataState.teamName.trim() !== "";
      const isInstitutionValid = formDataState.institution.trim() !== "";
      const isAngkatanValid = formDataState.angkatan.trim() !== "";

      if (
        !isLeaderValid ||
        !isAnggota2Valid ||
        !isAnggota3Valid ||
        !isPhoneValid ||
        !isTeamNameValid ||
        !isInstitutionValid ||
        !isAngkatanValid
      ) {
        throw new Error("Mohon lengkapi semua data pendaftaran!");
      }

      if (!filesState.buktiGrup || !filesState.buktiStory || !filesState.buktiKtm) {
        throw new Error("Mohon upload semua berkas yang diperlukan!");
      }

      if (!filesState.buktiPembayaran) {
        throw new Error("Mohon upload bukti pembayaran!");
      }

      if (!selectedPayment) {
        throw new Error("Mohon pilih metode pembayaran!");
      }

      const searchParams = new URLSearchParams();
      searchParams.append("nama_team", formDataState.teamName.trim());
      searchParams.append("institusi", formDataState.institution.trim());
      searchParams.append("angkatan", formDataState.angkatan.trim());
      searchParams.append("leader_team", formDataState.leaderName.trim());
      searchParams.append("anggota_2", formDataState.anggota2.trim());
      searchParams.append("anggota_3", formDataState.anggota3.trim());
      searchParams.append("anggota_4", activeTab === "Software Development" ? formDataState.anggota4.trim() : "");
      searchParams.append("anggota_5", activeTab === "Software Development" ? formDataState.anggota5.trim() : "");
      searchParams.append("no_telp_leader", formDataState.leaderPhone.trim());
      searchParams.append("mata_lomba", activeTab);
      searchParams.append("metode_pembayaran", selectedPayment === "dana" ? "DANA" : "Bank BTN");

      const fileKeys: (keyof typeof filesState)[] = ["buktiPembayaran", "buktiGrup", "buktiStory", "buktiKtm"];
      const fileNamesInBackend: Record<string, string> = {
        buktiPembayaran: "bukti_pembayaran",
        buktiGrup: "bukti_share_wa",       
        buktiStory: "bukti_share_ig",      
        buktiKtm: "bukti_identitas",       
      };

      const filePromises = fileKeys.map((key) => {
        const file = filesState[key];
        if (file) {
          const reader = new FileReader();
          return new Promise<{ name: string; value: string }>((resolve, reject) => {
            reader.onloadend = () => {
              resolve({
                name: fileNamesInBackend[key],
                value: reader.result as string
              });
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        }
        return Promise.resolve(null);
      });

      const processedFiles = await Promise.all(filePromises);
      
      processedFiles.forEach((fileData) => {
        if (fileData) {
          searchParams.append(fileData.name, fileData.value);
        }
      });

      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: searchParams.toString(),
      });

      setSubmitMessage("✅ Pendaftaran berhasil!");
      setShowSuccessModal(true);

    } catch (error: any) {
      setSubmitMessage(`Error: ${error.message}`);
      alert(`Gagal: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="form-pendaftaran-section"
      className="relative w-full overflow-hidden max-md:!px-4 flex flex-col items-center"
      style={{ background: "#000923", minHeight: "832px", padding: "60px 0 80px" }}
    >
      
      <div className="flex flex-col items-center w-full mb-8 max-md:!mb-8">
        <h2
          className="text-center font-bold leading-tight max-md:!mb-10 max-md:!text-[32px]"
          style={{ marginBottom: 50, fontFamily: "'Zen Dots', cursive", fontSize: "clamp(35px, 4vw, 54px)", paddingTop: "clamp(0px, 1vw, 10px)" }}
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

      <div className="flex justify-center w-full gap-20 mb-12 flex-wrap px-4 max-md:!flex-row max-md:!justify-center max-md:!flex-nowrap max-md:!gap-2 max-md:!pb-6 max-md:!mb-10 max-md:!px-3">
        {tabs.map((tab) => (
          <div key={tab} className="relative w-[300px] max-md:!flex-1 max-md:!min-w-0 max-md:!w-auto">
            <div 
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: "linear-gradient(90deg, #00ffff 0%, #ff00ff 100%)",
                padding: "2px",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                zIndex: 10,
                opacity: 0.4,
              }}
            />
            <button
              onClick={() => { setActiveTab(tab); setStep(1); }}
              className={`relative w-full h-[40px] px-6 py-3 rounded-full text-white font-semibold text-sm transition-all duration-300 cursor-pointer text-center max-md:!h-auto max-md:!min-h-[38px] max-md:!px-2 max-md:!py-2 max-md:!text-[10px] ${activeTab === tab ? "md:shadow-[0_0_60px_10px_rgba(180,0,203,0.45)]" : ""}`}
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontSize: "clamp(10px, 2vw, 14px)",
                background:
                  activeTab === tab
                    ? "rgba(10, 15, 35, 1)"
                    : "rgba(255,255,255,0.05)",
                zIndex: 2,
              }}
            >
              {tab}
            </button>
          </div>
        ))}
      </div>

      <div
        className="flex flex-col md:flex-row justify-center gap-[clamp(2rem,4vw,6rem)] px-6 md:px-12 items-start w-full max-md:!px-0"
        style={{ maxWidth: "1300px", marginLeft: "auto", marginRight: "auto" }}
      >
        
        <div 
          className="flex flex-col gap-6 max-md:!transform-none max-md:!pt-0 max-md:!flex-auto max-md:!w-full max-md:!text-center max-md:!items-center max-md:!mt-4 max-md:!gap-4 max-md:!px-5" 
          style={{ 
            flex: "1 1 auto",
            maxWidth: "630px",
            minWidth: "0",
            paddingTop: "90px"
          }}
        >
          
          <h3
            className="font-bold leading-tight max-md:!text-[24px] max-md:!mt-2 max-md:!leading-snug"
            style={{ fontFamily: "'Zen Dots', cursive", fontSize: "56px" }}
          >
            <span 
              style={{ 
                background: "linear-gradient(90deg, #c084fc 0%, #7c3aed 100%)", 
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {lomba.titleAccent}{" "}
            </span>
            <span className="text-white">{lomba.title}</span>
          </h3>

          <p
            className="text-white leading-relaxed text-justify max-md:!text-center max-md:!text-[13px] max-md:!leading-relaxed"
            style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "16px", opacity: 0.85 }}
          >
            {lomba.description}
          </p>

          <div style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "14px" }} className="max-md:!text-[13px] max-md:!text-center max-md:!mt-1">
            <span className="text-white font-semibold">Contact Person: </span>
            <span className="text-white">{lomba.cp.name}</span>
            <br />
            <span className="text-white opacity-80">Whatsapp : {lomba.cp.wa}</span>
          </div>

          <div className="flex items-center gap-4 max-md:!flex-col max-md:!w-full max-md:!gap-3">
            <a 
              href={`https://wa.me/${lomba.cp.wa.startsWith('0') ? '62' + lomba.cp.wa.substring(1) : lomba.cp.wa}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90 cursor-pointer max-md:!w-full max-md:!max-w-[280px] max-md:!h-11 max-md:!py-0 max-md:!flex max-md:!items-center max-md:!justify-center max-md:!text-[13px] max-md:!mt-0"
              style={{
                width: "170px",
                height: "45px",
                fontFamily: "'Exo 2', sans-serif",
                background:
                  "linear-gradient(90deg, #6e8efb 0%, rgba(208,0,203,0.7) 100%)",
                boxShadow: "0 4px 20px rgba(110,142,251,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              Hubungi Sekarang
            </a>

            <button
              type="button"
              onClick={() => {
                router.push(`${BASE_PATH}/detail-nic#guide-section`);
              }}
              className="px-6 py-3 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90 cursor-pointer max-md:!w-full max-md:!max-w-[280px] max-md:!h-11 max-md:!py-0 max-md:!flex max-md:!items-center max-md:!justify-center max-md:!text-[13px] max-md:!mt-0"
              style={{ 
                width: "170px",
                height: "45px",
                fontFamily: "'Exo 2', sans-serif",
                border: "2px solid transparent",
                background: "linear-gradient(#000923, #000923) padding-box, linear-gradient(90deg, #5b72ff 0%, #b620e0 100%) border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Guide
            </button>
          </div>
        </div>

        <div
          className="rounded-2xl flex flex-col w-full md:w-auto relative max-md:!transform-none max-md:!mt-10 max-md:!mx-auto max-md:!mb-10 max-md:!w-[95%] max-md:!pb-8"
          style={{
            width: "100%",
            maxWidth: "420px",
            marginTop: "60px",
            marginLeft: "1rem",
            flexShrink: 0,
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
          >
            <h4
              className="font-bold text-xl max-md:!text-lg max-md:!py-1"
              style={{ paddingBottom: 10, paddingTop: 25, fontFamily: "'Zen Dots', cursive" }}
            >
              <span className="text-white">Daftar </span>
              <span 
                style={{ 
                  background: "linear-gradient(90deg, #e124e1ff 0%, #3e66c9ff 100%)", 
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {lomba.titleAccent}
              </span>
              <br />
              <span 
                style={{ 
                  background: "linear-gradient(90deg, #e446e4ff 0%, #5980e2ff 100%)", 
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {lomba.title}
              </span>
            </h4>
          </div>

          <div className="px-8 py-6 max-md:!px-5 max-md:!pt-8 flex-1 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <span
                className="text-white font-semibold flex-1 max-md:!ml-0"
                style={{ marginLeft: "6.5%", marginTop: 10, fontFamily: "'Exo 2', sans-serif", fontSize: "14px" }}
              >
                {getStepTitle()}
              </span>
              <span
                className="text-white opacity-60 text-sm max-md:!mr-0 max-md:!text-xs"
                style={{ marginRight: "6.5%", fontFamily: "'Exo 2', sans-serif" }}
              >
                Step {step}/4
              </span>
            </div>

            <form id="form-pendaftaran-semantik" name="form-pendaftaran-semantik" onSubmit={handleSubmit} className="mt-5">
              {step === 1 && (
                <div className={`flex flex-col gap-6 max-md:!gap-4 ${activeTab === "Software Development" ? "pb-6" : ""}`}>
                  <div className={`flex flex-col gap-4 ${activeTab === "Software Development" ? "overflow-y-auto max-h-[360px] pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-[#10e6f1]/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent" : ""}`}>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="leaderName" className="text-white text-sm opacity-80 max-md:!ml-0"
                        style={{ marginLeft: "6.5%", fontFamily: "'Exo 2', sans-serif" }}>
                        Leader Team :
                      </label>
                      <input type="text" name="leaderName" id="leaderName" placeholder="Gojo Satoru" required 
                        value={formDataState.leaderName} 
                        onChange={(e) => setFormDataState({ ...formDataState, leaderName: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg text-black text-sm outline-none transition-all max-md:!w-full max-md:!ml-0 max-md:!h-12 max-md:!text-base max-md:!pl-3"
                        style={{
                          marginLeft: "6.5%",
                          paddingLeft: 12,
                          width: "87%",
                          height: "40px",
                          background: "rgba(255, 255, 255, 1)",
                          border: "1px solid rgba(255,255,255,0.15)",
                          fontFamily: "'Exo 2', sans-serif",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(16,230,241,0.6)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="leaderPhone" className="text-white text-sm opacity-80 max-md:!ml-0"
                        style={{ marginLeft: "6.5%", fontFamily: "'Exo 2', sans-serif" }}>
                        No. Telp Leader Team :
                      </label>
                      <input type="tel" name="leaderPhone" id="leaderPhone" placeholder="0821" required 
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={formDataState.leaderPhone} 
                        onChange={(e) => {
                          const numericValue = e.target.value.replace(/[^0-9]/g, '');
                          setFormDataState({ ...formDataState, leaderPhone: numericValue });
                        }}
                        className="w-full px-4 py-3 rounded-lg text-black text-sm outline-none transition-all max-md:!w-full max-md:!ml-0 max-md:!h-12 max-md:!text-base max-md:!pl-3"
                        style={{
                          marginLeft: "6.5%",
                          paddingLeft: 12,
                          width: "87%",
                          height: "40px",
                          background: "rgba(255, 255, 255, 1)",
                          border: "1px solid rgba(255,255,255,0.15)",
                          fontFamily: "'Exo 2', sans-serif",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(16,230,241,0.6)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                      />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="anggota2" className="text-white text-sm opacity-80 max-md:!ml-0"
                        style={{ marginLeft: "6.5%", fontFamily: "'Exo 2', sans-serif" }}>
                        Anggota 2 :
                      </label>
                      <input type="text" name="anggota2" id="anggota2" placeholder="Gojo Satoru" required 
                        value={formDataState.anggota2} 
                        onChange={(e) => setFormDataState({ ...formDataState, anggota2: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg text-black text-sm outline-none transition-all max-md:!w-full max-md:!ml-0 max-md:!h-12 max-md:!text-base max-md:!pl-3"
                        style={{
                          marginLeft: "6.5%",
                          paddingLeft: 12,
                          width: "87%",
                          height: "40px",
                          background: "rgba(255, 255, 255, 1)",
                          border: "1px solid rgba(255,255,255,0.15)",
                          fontFamily: "'Exo 2', sans-serif",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(16,230,241,0.6)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="anggota3" className="text-white text-sm opacity-80 max-md:!ml-0"
                        style={{ marginLeft: "6.5%", fontFamily: "'Exo 2', sans-serif" }}>
                        {activeTab === "UI/UX Design" ? "Anggota 3 (Opsional) :" : "Anggota 3 :"}
                      </label>
                      <input type="text" name="anggota3" id="anggota3" placeholder="Gojo Satoru" required={activeTab !== "UI/UX Design"}
                        value={formDataState.anggota3} 
                        onChange={(e) => setFormDataState({ ...formDataState, anggota3: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg text-black text-sm outline-none transition-all max-md:!w-full max-md:!ml-0 max-md:!h-12 max-md:!text-base max-md:!pl-3"
                        style={{
                          marginLeft: "6.5%",
                          paddingLeft: 12,
                          width: "87%",
                          height: "40px",
                          background: "rgba(255, 255, 255, 1)",
                          border: "1px solid rgba(255,255,255,0.15)",
                          fontFamily: "'Exo 2', sans-serif",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(16,230,241,0.6)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                      />
                    </div>

                    {activeTab === "Software Development" && (
                      <>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="anggota4" className="text-white text-sm opacity-80 max-md:!ml-0"
                            style={{ marginLeft: "6.5%", fontFamily: "'Exo 2', sans-serif" }}>
                            Anggota 4 (Opsional) :
                          </label>
                          <input type="text" name="anggota4" id="anggota4" placeholder="Gojo Satoru"
                            value={formDataState.anggota4} 
                            onChange={(e) => setFormDataState({ ...formDataState, anggota4: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg text-black text-sm outline-none transition-all max-md:!w-full max-md:!ml-0 max-md:!h-12 max-md:!text-base max-md:!pl-3"
                            style={{
                              marginLeft: "6.5%",
                              paddingLeft: 12,
                              width: "87%",
                              height: "40px",
                              background: "rgba(255, 255, 255, 1)",
                              border: "1px solid rgba(255,255,255,0.15)",
                              fontFamily: "'Exo 2', sans-serif",
                            }}
                            onFocus={(e) => (e.target.style.borderColor = "rgba(16,230,241,0.6)")}
                            onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label htmlFor="anggota5" className="text-white text-sm opacity-80 max-md:!ml-0"
                            style={{ marginLeft: "6.5%", fontFamily: "'Exo 2', sans-serif" }}>
                            Anggota 5 (Opsional) :
                          </label>
                          <input type="text" name="anggota5" id="anggota5" placeholder="Gojo Satoru"
                            value={formDataState.anggota5} 
                            onChange={(e) => setFormDataState({ ...formDataState, anggota5: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg text-black text-sm outline-none transition-all max-md:!w-full max-md:!ml-0 max-md:!h-12 max-md:!text-base max-md:!pl-3"
                            style={{
                              marginLeft: "6.5%",
                              paddingLeft: 12,
                              width: "87%",
                              height: "40px",
                              background: "rgba(255, 255, 255, 1)",
                              border: "1px solid rgba(255,255,255,0.15)",
                              fontFamily: "'Exo 2', sans-serif",
                            }}
                            onFocus={(e) => (e.target.style.borderColor = "rgba(16,230,241,0.6)")}
                            onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                          />
                        </div>
                      </>
                    )}

                  </div>

                  <button
                    type="button"
                    disabled={!isStep1Valid}
                    onClick={() => setStep(2)}
                    className={`w-full py-3 rounded-lg text-white font-semibold transition-all duration-300 max-md:!ml-0 max-md:!mt-8 max-md:!w-full max-md:!h-12 max-md:!py-0 max-md:!flex max-md:!items-center max-md:!justify-center ${
                      isStep1Valid 
                        ? "cursor-pointer hover:opacity-90 active:scale-[0.98]" 
                        : "cursor-not-allowed opacity-50"
                    }`}
                    style={{
                      marginTop: 30,
                      marginLeft: "6.5%",
                      width: "87%",
                      height: "40px",
                      marginBottom: 24,
                      fontFamily: "'Exo 2', sans-serif",
                      background: isStep1Valid
                        ? "linear-gradient(90deg, #6e8efb 0%, #d000cb 100%)"
                        : "rgba(128, 128, 128, 0.2)",
                      boxShadow: isStep1Valid
                        ? "0 4px 20px rgba(208, 0, 203, 0.4)"
                        : "none",
                    }}
                  >
                    Next
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="flex flex-col gap-6 max-md:!gap-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="teamName" className="text-white text-sm opacity-80 max-md:!ml-0"
                        style={{ marginLeft: "6.5%", fontFamily: "'Exo 2', sans-serif" }}>
                        Nama Team :
                      </label>
                      <input type="text" name="teamName" id="teamName" placeholder="ingpo Kicau mania" required 
                        value={formDataState.teamName} 
                        onChange={(e) => setFormDataState({ ...formDataState, teamName: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg text-black text-sm outline-none transition-all max-md:!w-full max-md:!ml-0 max-md:!h-12 max-md:!text-base max-md:!pl-3"
                        style={{
                          marginLeft: "6.5%",
                          paddingLeft: 12,
                          width: "87%",
                          height: "40px",
                          background: "rgba(255, 255, 255, 1)",
                          border: "1px solid rgba(255,255,255,0.15)",
                          fontFamily: "'Exo 2', sans-serif",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(16,230,241,0.6)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="institution" className="text-white text-sm opacity-80 max-md:!ml-0"
                        style={{ marginLeft: "6.5%", fontFamily: "'Exo 2', sans-serif" }}>
                        Institusi (Opsional) :
                      </label>
                      <span className="text-[#10e6f1] text-[10px] max-md:!ml-0 block mt-[-4px] mb-[2px] opacity-90"
                        style={{ marginLeft: "6.5%", fontFamily: "'Exo 2', sans-serif", fontStyle: "italic" }}>
                        *Institusi diisi berdasarkan institusi leader tim.
                      </span>
                      <input type="text" name="institution" id="institution" placeholder="Universitas Singaperbangsa Karawang" required 
                        value={formDataState.institution} 
                        onChange={(e) => setFormDataState({ ...formDataState, institution: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg text-black text-sm outline-none transition-all max-md:!w-full max-md:!ml-0 max-md:!h-12 max-md:!text-base max-md:!pl-3"
                        style={{
                          marginLeft: "6.5%",
                          paddingLeft: 12,
                          width: "87%",
                          height: "40px",
                          background: "rgba(255, 255, 255, 1)",
                          border: "1px solid rgba(255,255,255,0.15)",
                          fontFamily: "'Exo 2', sans-serif",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(16,230,241,0.6)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="angkatan" className="text-white text-sm opacity-80 max-md:!ml-0"
                        style={{ marginLeft: "6.5%", fontFamily: "'Exo 2', sans-serif" }}>
                        Angkatan (Opsional):
                      </label>
                      <input type="text" name="angkatan" id="angkatan" placeholder="2024" required 
                        value={formDataState.angkatan} 
                        onChange={(e) => setFormDataState({ ...formDataState, angkatan: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg text-black text-sm outline-none transition-all max-md:!w-full max-md:!ml-0 max-md:!h-12 max-md:!text-base max-md:!pl-3"
                        style={{
                          marginLeft: "6.5%",
                          paddingLeft: 12,
                          width: "87%",
                          height: "40px",
                          background: "rgba(255, 255, 255, 1)",
                          border: "1px solid rgba(255,255,255,0.15)",
                          fontFamily: "'Exo 2', sans-serif",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(16,230,241,0.6)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 mt-2 max-md:!mt-4 max-md:!ml-0 max-md:!w-full max-md:!gap-3" style={{ marginTop: 30, marginBottom: 24, marginLeft: "6.5%", width: "87%" }}>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 rounded-xl font-semibold transition-all duration-200 hover:opacity-85 cursor-pointer flex items-center justify-center gap-2 max-md:!h-12"
                      style={{
                        height: "48px",
                        fontFamily: "'Exo 2', sans-serif",
                        fontSize: "15px",
                        background: "#ffffff",
                        color: "#1a1a2e",
                        border: "none",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>
                    <button
                      type="button"
                      disabled={!isStep2Valid}
                      onClick={() => setStep(3)}
                      className={`flex-1 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 max-md:!h-12 ${
                        isStep2Valid 
                          ? "cursor-pointer hover:opacity-90 active:scale-[0.98]" 
                          : "cursor-not-allowed opacity-50"
                      }`}
                      style={{
                        height: "48px",
                        fontFamily: "'Exo 2', sans-serif",
                        fontSize: "15px",
                        color: "#ffffff",
                        border: "none",
                        background: isStep2Valid
                          ? "linear-gradient(90deg, #6e8efb 0%, #9b00d0 100%)"
                          : "rgba(128, 128, 128, 0.2)",
                        boxShadow: isStep2Valid
                          ? "0 4px 20px rgba(155, 0, 208, 0.4)"
                          : "none",
                      }}
                    >
                      Next
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="flex flex-col gap-5 max-md:!gap-4">
                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-white opacity-80 text-sm max-md:!ml-0" style={{ marginLeft: "6.5%", fontFamily: "'Exo 2', sans-serif" }}>
                      Bukti Share Ke 2 Group WhatsApp :
                    </label>
                    <input 
                      type="file" 
                      id="bukti-grup" 
                      accept=".jpg,.jpeg,.png,.pdf" 
                      className="hidden" 
                      onChange={(e) => handleFileChange(e, 'buktiGrup')}
                    />
                    <div className="flex justify-center items-center gap-4 flex-wrap w-full max-md:!pr-0" style={{paddingRight: "20px"}}>
                      {filesState.buktiGrup ? (
                        <div 
                          className="relative rounded-2xl overflow-hidden max-md:!ml-0 max-md:!w-full"
                          style={{
                            marginLeft: "6%",
                            width: "90%",
                            background: "white",
                            border: "2px solid rgba(255,255,255,0.3)",
                            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                          }}
                        >
                          <div className="flex items-center justify-between px-4 py-4">
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(16,230,241,0.15)" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#10e6f1" strokeWidth="2"/>
                                  <polyline points="14,2 14,8 20,8" stroke="#10e6f1" strokeWidth="2"/>
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-gray-800 font-bold text-sm leading-tight mb-1">{filesState.buktiGrup.name}</p>
                                <p className="text-gray-600 text-xs leading-tight truncate">{(filesState.buktiGrup.size / (1024 * 1024)).toFixed(2)} MB</p>
                              </div>
                            </div>
                            <div className="flex-shrink-0" style={{ marginRight: "24px", marginLeft: "10px" }}>
                              <button
                                type="button"
                                onClick={() => handleRemoveFile('buktiGrup', 'bukti-grup')}
                                className="flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100"
                                style={{ 
                                  background: "#F5F5F5",
                                  border: "1px solid #E0E0E0"
                                }}
                              >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                  <line x1="18" y1="6" x2="6" y2="18" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
                                  <line x1="6" y1="6" x2="18" y2="18" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                                <span className="text-gray-700 text-xs font-medium">Hapus</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <label 
                          htmlFor="bukti-grup" 
                          className="relative flex flex-col items-center justify-center rounded-xl cursor-pointer transition-all hover:bg-[rgba(16,230,241,0.08)] max-md:!ml-0 max-md:!w-full"
                          style={{
                            marginLeft: "6.5%",
                            width: "87%",
                            height: "75px",
                            background: "rgba(16,230,241,0.04)",
                          }}
                        >
                          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient id="dashed-gradient-grup" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#10e6f1" />
                                <stop offset="100%" stopColor="#d000cb" />
                              </linearGradient>
                            </defs>
                            <rect 
                              x="1" 
                              y="1" 
                              width="calc(100% - 2px)" 
                              height="calc(100% - 2px)" 
                              rx="12" 
                              fill="none" 
                              stroke="url(#dashed-gradient-grup)" 
                              strokeWidth="2" 
                              strokeDasharray="6, 6" 
                            />
                          </svg>
                          
                          <div className="flex items-center justify-center gap-2">
                            <svg width="18" height="18" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-[#10e6f1]">
                              <path d="M60.7327 73.4824L55.2502 79.0074V55.2499C55.2502 54.1228 54.8024 53.0418 54.0054 52.2447C53.2084 51.4477 52.1274 50.9999 51.0002 50.9999C49.873 50.9999 48.792 51.4477 47.995 52.2447C47.198 53.0418 46.7502 54.1228 46.7502 55.2499V79.0074L41.2677 73.4824C40.8714 73.0862 40.401 72.7718 39.8833 72.5574C39.3655 72.3429 38.8106 72.2325 38.2502 72.2325C37.6898 72.2325 37.1349 72.3429 36.6171 72.5574C36.0994 72.7718 35.629 73.0862 35.2327 73.4824C34.8364 73.8787 34.5221 74.3491 34.3076 74.8669C34.0932 75.3846 33.9828 75.9395 33.9828 76.4999C33.9828 77.0603 34.0932 77.6152 34.3076 78.133C34.5221 78.6507 34.8364 79.1212 35.2327 79.5174L47.9827 92.2674C48.3869 92.6544 48.8635 92.9577 49.3852 93.1599C49.8939 93.3848 50.444 93.5009 51.0002 93.5009C51.5564 93.5009 52.1065 93.3848 52.6152 93.1599C53.1369 92.9577 53.6135 92.6544 54.0177 92.2674L66.7677 79.5174C67.568 78.7171 68.0176 77.6317 68.0176 76.4999C68.0176 75.3681 67.568 74.2827 66.7677 73.4824C65.9674 72.6821 64.882 72.2325 63.7502 72.2325C62.6184 72.2325 61.533 72.6821 60.7327 73.4824ZM78.2852 26.4349C75.6884 20.4679 71.2068 15.517 65.527 12.3408C59.8472 9.16452 53.2827 7.93821 46.8393 8.84973C40.3959 9.76126 34.4291 12.7603 29.8533 17.3874C25.2774 22.0145 22.345 28.0143 21.5052 34.4674C17.4532 35.4378 13.8986 37.8625 11.5166 41.281C9.13453 44.6995 8.09086 48.8738 8.58378 53.0111C9.07669 57.1484 11.0719 60.9606 14.1904 63.7238C17.3089 66.487 21.3336 68.0087 25.5002 67.9999C26.6274 67.9999 27.7084 67.5522 28.5054 66.7551C29.3024 65.9581 29.7502 64.8771 29.7502 63.7499C29.7502 62.6228 29.3024 61.5418 28.5054 60.7447C27.7084 59.9477 26.6274 59.4999 25.5002 59.4999C23.2459 59.4999 21.0839 58.6044 19.4898 57.0103C17.8957 55.4163 17.0002 53.2543 17.0002 50.9999C17.0002 48.7456 17.8957 46.5836 19.4898 44.9895C21.0839 43.3955 23.2459 42.4999 25.5002 42.4999C26.6274 42.4999 27.7084 42.0522 28.5054 41.2551C29.3024 40.4581 29.7502 39.3771 29.7502 38.2499C29.7611 33.2234 31.5534 28.3634 34.8088 24.5334C38.0643 20.7034 42.572 18.1515 47.5311 17.3309C52.4903 16.5103 57.5798 17.4742 61.8954 20.0515C66.211 22.6287 69.4733 26.6523 71.1027 31.4074C71.3456 32.1377 71.7823 32.7884 72.3662 33.2899C72.95 33.7914 73.6591 34.1249 74.4177 34.2549C77.2485 34.7899 79.8147 36.2677 81.6981 38.4477C83.5815 40.6277 84.6711 43.3812 84.7894 46.2596C84.9077 49.1381 84.0477 51.9718 82.3495 54.2989C80.6513 56.6261 78.215 58.3095 75.4377 59.0749C74.8963 59.2145 74.3877 59.4593 73.941 59.7953C73.4942 60.1314 73.118 60.5522 72.8338 61.0337C72.5497 61.5151 72.3632 62.0479 72.2849 62.6014C72.2066 63.155 72.2382 63.7186 72.3777 64.2599C72.5172 64.8013 72.762 65.3099 73.0981 65.7567C73.4342 66.2034 73.855 66.5796 74.3364 66.8638C74.8179 67.1479 75.3506 67.3345 75.9042 67.4127C76.4578 67.491 77.0213 67.4595 77.5627 67.3199C82.0353 66.1381 86.0001 63.5289 88.855 59.8887C91.7098 56.2484 93.2988 51.776 93.3805 47.1506C93.4622 42.5251 92.0323 37.9994 89.3079 34.2605C86.5834 30.5217 82.7133 27.7741 78.2852 26.4349Z" />
                            </svg>
                            <span className="text-white text-xs font-semibold" style={{ fontFamily: "'Exo 2', sans-serif" }}>Pilih File</span>
                          </div>
                          <span className="text-white/40 text-[10px] mt-1" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                            namafile.pdf, 5MB
                          </span>
                        </label>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-white opacity-80 text-sm max-md:!ml-0" style={{ marginLeft: "6.5%", fontFamily: "'Exo 2', sans-serif" }}>
                      Bukti Share SG, follow Instagram & Twibbon :
                    </label>
                    <input 
                      type="file" 
                      id="bukti-story" 
                      accept=".jpg,.jpeg,.png,.pdf" 
                      className="hidden" 
                      onChange={(e) => handleFileChange(e, 'buktiStory')}
                    />
                    <div className="flex justify-center items-center gap-4 flex-wrap w-full max-md:!pr-0" style={{paddingRight: "20px"}}>
                      {filesState.buktiStory ? (
                        <div 
                          className="relative rounded-2xl overflow-hidden max-md:!ml-0 max-md:!w-full"
                          style={{
                            marginLeft: "6%",
                            width: "90%",
                            background: "white",
                            border: "2px solid rgba(255,255,255,0.3)",
                            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                          }}
                        >
                          <div className="flex items-center justify-between px-4 py-4">
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(16,230,241,0.15)" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#10e6f1" strokeWidth="2"/>
                                  <polyline points="14,2 14,8 20,8" stroke="#10e6f1" strokeWidth="2"/>
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-gray-800 font-bold text-sm leading-tight mb-1">{filesState.buktiStory.name}</p>
                                <p className="text-gray-600 text-xs leading-tight truncate">{(filesState.buktiStory.size / (1024 * 1024)).toFixed(2)} MB</p>
                              </div>
                            </div>
                            <div className="flex-shrink-0" style={{ marginRight: "24px", marginLeft: "10px" }}>
                              <button
                                type="button"
                                onClick={() => handleRemoveFile('buktiStory', 'bukti-story')}
                                className="flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100"
                                style={{ 
                                  background: "#F5F5F5",
                                  border: "1px solid #E0E0E0"
                                }}
                              >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                  <line x1="18" y1="6" x2="6" y2="18" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
                                  <line x1="6" y1="6" x2="18" y2="18" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                                <span className="text-gray-700 text-xs font-medium">Hapus</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <label 
                          htmlFor="bukti-story" 
                          className="relative flex flex-col items-center justify-center rounded-xl cursor-pointer transition-all hover:bg-[rgba(16,230,241,0.08)] max-md:!ml-0 max-md:!w-full"
                          style={{
                            marginLeft: "6.5%",
                            width: "87%",
                            height: "75px",
                            background: "rgba(16,230,241,0.04)",
                          }}
                        >
                          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient id="dashed-gradient-story" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#10e6f1" />
                                <stop offset="100%" stopColor="#d000cb" />
                              </linearGradient>
                            </defs>
                            <rect 
                              x="1" 
                              y="1" 
                              width="calc(100% - 2px)" 
                              height="calc(100% - 2px)" 
                              rx="12" 
                              fill="none" 
                              stroke="url(#dashed-gradient-story)" 
                              strokeWidth="2" 
                              strokeDasharray="6, 6" 
                            />
                          </svg>
                          
                          <div className="flex items-center justify-center gap-2">
                            <svg width="18" height="18" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-[#10e6f1]">
                              <path d="M60.7327 73.4824L55.2502 79.0074V55.2499C55.2502 54.1228 54.8024 53.0418 54.0054 52.2447C53.2084 51.4477 52.1274 50.9999 51.0002 50.9999C49.873 50.9999 48.792 51.4477 47.995 52.2447C47.198 53.0418 46.7502 54.1228 46.7502 55.2499V79.0074L41.2677 73.4824C40.8714 73.0862 40.401 72.7718 39.8833 72.5574C39.3655 72.3429 38.8106 72.2325 38.2502 72.2325C37.6898 72.2325 37.1349 72.3429 36.6171 72.5574C36.0994 72.7718 35.629 73.0862 35.2327 73.4824C34.8364 73.8787 34.5221 74.3491 34.3076 74.8669C34.0932 75.3846 33.9828 75.9395 33.9828 76.4999C33.9828 77.0603 34.0932 77.6152 34.3076 78.133C34.5221 78.6507 34.8364 79.1212 35.2327 79.5174L47.9827 92.2674C48.3869 92.6544 48.8635 92.9577 49.3852 93.1599C49.8939 93.3848 50.444 93.5009 51.0002 93.5009C51.5564 93.5009 52.1065 93.3848 52.6152 93.1599C53.1369 92.9577 53.6135 92.6544 54.0177 92.2674L66.7677 79.5174C67.568 78.7171 68.0176 77.6317 68.0176 76.4999C68.0176 75.3681 67.568 74.2827 66.7677 73.4824C65.9674 72.6821 64.882 72.2325 63.7502 72.2325C62.6184 72.2325 61.533 72.6821 60.7327 73.4824ZM78.2852 26.4349C75.6884 20.4679 71.2068 15.517 65.527 12.3408C59.8472 9.16452 53.2827 7.93821 46.8393 8.84973C40.3959 9.76126 34.4291 12.7603 29.8533 17.3874C25.2774 22.0145 22.345 28.0143 21.5052 34.4674C17.4532 35.4378 13.8986 37.8625 11.5166 41.281C9.13453 44.6995 8.09086 48.8738 8.58378 53.0111C9.07669 57.1484 11.0719 60.9606 14.1904 63.7238C17.3089 66.487 21.3336 68.0087 25.5002 67.9999C26.6274 67.9999 27.7084 67.5522 28.5054 66.7551C29.3024 65.9581 29.7502 64.8771 29.7502 63.7499C29.7502 62.6228 29.3024 61.5418 28.5054 60.7447C27.7084 59.9477 26.6274 59.4999 25.5002 59.4999C23.2459 59.4999 21.0839 58.6044 19.4898 57.0103C17.8957 55.4163 17.0002 53.2543 17.0002 50.9999C17.0002 48.7456 17.8957 46.5836 19.4898 44.9895C21.0839 43.3955 23.2459 42.4999 25.5002 42.4999C26.6274 42.4999 27.7084 42.0522 28.5054 41.2551C29.3024 40.4581 29.7502 39.3771 29.7502 38.2499C29.7611 33.2234 31.5534 28.3634 34.8088 24.5334C38.0643 20.7034 42.572 18.1515 47.5311 17.3309C52.4903 16.5103 57.5798 17.4742 61.8954 20.0515C66.211 22.6287 69.4733 26.6523 71.1027 31.4074C71.3456 32.1377 71.7823 32.7884 72.3662 33.2899C72.95 33.7914 73.6591 34.1249 74.4177 34.2549C77.2485 34.7899 79.8147 36.2677 81.6981 38.4477C83.5815 40.6277 84.6711 43.3812 84.7894 46.2596C84.9077 49.1381 84.0477 51.9718 82.3495 54.2989C80.6513 56.6261 78.215 58.3095 75.4377 59.0749C74.8963 59.2145 74.3877 59.4593 73.941 59.7953C73.4942 60.1314 73.118 60.5522 72.8338 61.0337C72.5497 61.5151 72.3632 62.0479 72.2849 62.6014C72.2066 63.155 72.2382 63.7186 72.3777 64.2599C72.5172 64.8013 72.762 65.3099 73.0981 65.7567C73.4342 66.2034 73.855 66.5796 74.3364 66.8638C74.8179 67.1479 75.3506 67.3345 75.9042 67.4127C76.4578 67.491 77.0213 67.4595 77.5627 67.3199C82.0353 66.1381 86.0001 63.5289 88.855 59.8887C91.7098 56.2484 93.2988 51.776 93.3805 47.1506C93.4622 42.5251 92.0323 37.9994 89.3079 34.2605C86.5834 30.5217 82.7133 27.7741 78.2852 26.4349Z" />
                            </svg>
                            <span className="text-white text-xs font-semibold" style={{ fontFamily: "'Exo 2', sans-serif" }}>Pilih File</span>
                          </div>
                          <span className="text-white/40 text-[10px] mt-1" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                            namafile.pdf, 5MB
                          </span>
                        </label>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-white opacity-80 text-sm max-md:!ml-0" style={{ marginLeft: "6.5%", fontFamily: "'Exo 2', sans-serif" }}>
                      Upload KRS / KTM / Kartu Pelajar / KTP :
                    </label>
                    <input 
                      type="file" 
                      id="bukti-ktm" 
                      accept=".jpg,.jpeg,.png,.pdf" 
                      className="hidden" 
                      onChange={(e) => handleFileChange(e, 'buktiKtm')}
                    />
                    <div className="flex justify-center items-center gap-4 flex-wrap w-full max-md:!pr-0" style={{paddingRight: "20px"}}>
                      {filesState.buktiKtm ? (
                        <div 
                          className="relative rounded-2xl overflow-hidden max-md:!ml-0 max-md:!w-full"
                          style={{
                            marginLeft: "6%",
                            width: "90%",
                            background: "white",
                            border: "2px solid rgba(255,255,255,0.3)",
                            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                          }}
                        >
                          <div className="flex items-center justify-between px-4 py-4">
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(16,230,241,0.15)" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#10e6f1" strokeWidth="2"/>
                                  <polyline points="14,2 14,8 20,8" stroke="#10e6f1" strokeWidth="2"/>
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-gray-800 font-bold text-sm leading-tight mb-1">{filesState.buktiKtm.name}</p>
                                <p className="text-gray-600 text-xs leading-tight truncate">{(filesState.buktiKtm.size / (1024 * 1024)).toFixed(2)} MB</p>
                              </div>
                            </div>
                            <div className="flex-shrink-0" style={{ marginRight: "24px", marginLeft: "10px" }}>
                              <button
                                type="button"
                                onClick={() => handleRemoveFile('buktiKtm', 'bukti-ktm')}
                                className="flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100"
                                style={{ 
                                  background: "#F5F5F5",
                                  border: "1px solid #E0E0E0"
                                }}
                              >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                  <line x1="18" y1="6" x2="6" y2="18" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
                                  <line x1="6" y1="6" x2="18" y2="18" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                                <span className="text-gray-700 text-xs font-medium">Hapus</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <label 
                          htmlFor="bukti-ktm" 
                          className="relative flex flex-col items-center justify-center rounded-xl cursor-pointer transition-all hover:bg-[rgba(16,230,241,0.08)] max-md:!ml-0 max-md:!w-full"
                          style={{
                            marginLeft: "6.5%",
                            width: "87%",
                            height: "75px",
                            background: "rgba(16,230,241,0.04)",
                          }}
                        >
                          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient id="dashed-gradient-ktm" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#10e6f1" />
                                <stop offset="100%" stopColor="#d000cb" />
                              </linearGradient>
                            </defs>
                            <rect 
                              x="1" 
                              y="1" 
                              width="calc(100% - 2px)" 
                              height="calc(100% - 2px)" 
                              rx="12" 
                              fill="none" 
                              stroke="url(#dashed-gradient-ktm)" 
                              strokeWidth="2" 
                              strokeDasharray="6, 6" 
                            />
                          </svg>
                          
                          <div className="flex items-center justify-center gap-2">
                            <svg width="18" height="18" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-[#10e6f1]">
                              <path d="M60.7327 73.4824L55.2502 79.0074V55.2499C55.2502 54.1228 54.8024 53.0418 54.0054 52.2447C53.2084 51.4477 52.1274 50.9999 51.0002 50.9999C49.873 50.9999 48.792 51.4477 47.995 52.2447C47.198 53.0418 46.7502 54.1228 46.7502 55.2499V79.0074L41.2677 73.4824C40.8714 73.0862 40.401 72.7718 39.8833 72.5574C39.3655 72.3429 38.8106 72.2325 38.2502 72.2325C37.6898 72.2325 37.1349 72.3429 36.6171 72.5574C36.0994 72.7718 35.629 73.0862 35.2327 73.4824C34.8364 73.8787 34.5221 74.3491 34.3076 74.8669C34.0932 75.3846 33.9828 75.9395 33.9828 76.4999C33.9828 77.0603 34.0932 77.6152 34.3076 78.133C34.5221 78.6507 34.8364 79.1212 35.2327 79.5174L47.9827 92.2674C48.3869 92.6544 48.8635 92.9577 49.3852 93.1599C49.8939 93.3848 50.444 93.5009 51.0002 93.5009C51.5564 93.5009 52.1065 93.3848 52.6152 93.1599C53.1369 92.9577 53.6135 92.6544 54.0177 92.2674L66.7677 79.5174C67.568 78.7171 68.0176 77.6317 68.0176 76.4999C68.0176 75.3681 67.568 74.2827 66.7677 73.4824C65.9674 72.6821 64.882 72.2325 63.7502 72.2325C62.6184 72.2325 61.533 72.6821 60.7327 73.4824ZM78.2852 26.4349C75.6884 20.4679 71.2068 15.517 65.527 12.3408C59.8472 9.16452 53.2827 7.93821 46.8393 8.84973C40.3959 9.76126 34.4291 12.7603 29.8533 17.3874C25.2774 22.0145 22.345 28.0143 21.5052 34.4674C17.4532 35.4378 13.8986 37.8625 11.5166 41.281C9.13453 44.6995 8.09086 48.8738 8.58378 53.0111C9.07669 57.1484 11.0719 60.9606 14.1904 63.7238C17.3089 66.487 21.3336 68.0087 25.5002 67.9999C26.6274 67.9999 27.7084 67.5522 28.5054 66.7551C29.3024 65.9581 29.7502 64.8771 29.7502 63.7499C29.7502 62.6228 29.3024 61.5418 28.5054 60.7447C27.7084 59.9477 26.6274 59.4999 25.5002 59.4999C23.2459 59.4999 21.0839 58.6044 19.4898 57.0103C17.8957 55.4163 17.0002 53.2543 17.0002 50.9999C17.0002 48.7456 17.8957 46.5836 19.4898 44.9895C21.0839 43.3955 23.2459 42.4999 25.5002 42.4999C26.6274 42.4999 27.7084 42.0522 28.5054 41.2551C29.3024 40.4581 29.7502 39.3771 29.7502 38.2499C29.7611 33.2234 31.5534 28.3634 34.8088 24.5334C38.0643 20.7034 42.572 18.1515 47.5311 17.3309C52.4903 16.5103 57.5798 17.4742 61.8954 20.0515C66.211 22.6287 69.4733 26.6523 71.1027 31.4074C71.3456 32.1377 71.7823 32.7884 72.3662 33.2899C72.95 33.7914 73.6591 34.1249 74.4177 34.2549C77.2485 34.7899 79.8147 36.2677 81.6981 38.4477C83.5815 40.6277 84.6711 43.3812 84.7894 46.2596C84.9077 49.1381 84.0477 51.9718 82.3495 54.2989C80.6513 56.6261 78.215 58.3095 75.4377 59.0749C74.8963 59.2145 74.3877 59.4593 73.941 59.7953C73.4942 60.1314 73.118 60.5522 72.8338 61.0337C72.5497 61.5151 72.3632 62.0479 72.2849 62.6014C72.2066 63.155 72.2382 63.7186 72.3777 64.2599C72.5172 64.8013 72.762 65.3099 73.0981 65.7567C73.4342 66.2034 73.855 66.5796 74.3364 66.8638C74.8179 67.1479 75.3506 67.3345 75.9042 67.4127C76.4578 67.491 77.0213 67.4595 77.5627 67.3199C82.0353 66.1381 86.0001 63.5289 88.855 59.8887C91.7098 56.2484 93.2988 51.776 93.3805 47.1506C93.4622 42.5251 92.0323 37.9994 89.3079 34.2605C86.5834 30.5217 82.7133 27.7741 78.2852 26.4349Z" />
                            </svg>
                            <span className="text-white text-xs font-semibold" style={{ fontFamily: "'Exo 2', sans-serif" }}>Pilih File</span>
                          </div>
                          <span className="text-white/40 text-[10px] mt-1" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                            namafile.pdf, 5MB
                          </span>
                        </label>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-2 max-md:!mt-4 max-md:!ml-0 max-md:!w-full max-md:!gap-3" style={{ marginTop: 30, marginBottom: 24, marginLeft: "6.5%", width: "87%" }}>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 rounded-xl font-semibold transition-all duration-200 hover:opacity-85 cursor-pointer flex items-center justify-center gap-2 max-md:!h-12"
                      style={{
                        height: "48px",
                        fontFamily: "'Exo 2', sans-serif",
                        fontSize: "15px",
                        background: "#ffffff",
                        color: "#1a1a2e",
                        border: "none",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>
                    <button
                      type="button"
                      disabled={!isStep3Valid}
                      onClick={() => setStep(4)}
                      className={`flex-1 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 max-md:!h-12 ${
                        isStep3Valid 
                          ? "cursor-pointer hover:opacity-90 active:scale-[0.98]" 
                          : "cursor-not-allowed opacity-50"
                      }`}
                      style={{
                        height: "48px",
                        fontFamily: "'Exo 2', sans-serif",
                        fontSize: "15px",
                        color: "#ffffff",
                        border: "none",
                        background: isStep3Valid
                          ? "linear-gradient(90deg, #6e8efb 0%, #9b00d0 100%)"
                          : "rgba(128, 128, 128, 0.2)",
                        boxShadow: isStep3Valid
                          ? "0 4px 20px rgba(155, 0, 208, 0.4)"
                          : "none",
                      }}
                    >
                      Next
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-5 text-left max-md:!ml-0 max-md:!w-full" style={{ marginLeft: "6.5%", width: "87%", fontFamily: "'Exo 2', sans-serif" }}>
                    <div className="flex flex-col gap-3">
                      <p className="text-white font-semibold text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>Pilih Salah Satu Metode Pembayaran</p>
                      <div
                        onClick={() => setSelectedPayment("dana")}
                        className="relative rounded-2xl cursor-pointer transition-all duration-200 overflow-hidden"
                        style={{
                          background: selectedPayment === "dana" 
                            ? "linear-gradient(90deg, #6e8efb 0%, #d000cb 100%)" 
                            : "white",
                          border: selectedPayment === "dana"
                            ? "2px solid #6e8efb"
                            : "2px solid rgba(255,255,255,0.3)",
                          boxShadow: selectedPayment === "dana" 
                            ? "0 4px 20px rgba(208, 0, 203, 0.4)" 
                            : "0 4px 16px rgba(0,0,0,0.1)",
                        }}
                      >
                        <div className="flex items-center justify-between px-4 py-4">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${selectedPayment === "dana" ? "border-white" : "border-gray-400"}`} style={{ marginLeft: "12px" }}>
                              {selectedPayment === "dana" && (
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              )}
                            </div>
                            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0" style={{ marginLeft: "-12px" }}>
                              <img 
                                src= {`${BASE_PATH}/images/logo dana.png`} 
                                alt="DANA Logo" 
                                className="w-9 h-9 object-contain"
                                style={{ filter: "brightness(1.1)" }}
                              />
                            </div>
                            <div className="flex-1 min-w-0" style={{ marginLeft: "-12px" }}>
                              <p className={`font-bold text-sm leading-tight mb-1 ${selectedPayment === "dana" ? "text-white" : "text-gray-800"}`}>DANA</p>
                              <p className={`text-xs leading-tight truncate ${selectedPayment === "dana" ? "text-white/80" : "text-gray-600"}`}>085664527826 · a.n. Rafli Rizqi Fadillah</p>
                            </div>
                          </div>
                          <div className="flex-shrink-0" style={{ marginRight: "24px", marginLeft: "10px" }}>
                            <button
                              type="button"
                              onClick={(e) => { e.stopPropagation(); handleCopyPayment("dana"); }}
                              className="flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-200 hover:opacity-80"
                              style={{ 
                                background: selectedPayment === "dana" 
                                  ? (copiedPayment === "dana" ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.15)")
                                  : (copiedPayment === "dana" ? "#E8F5E8" : "#F5F5F5"),
                                border: selectedPayment === "dana" 
                                  ? "1px solid rgba(255,255,255,0.3)" 
                                  : "1px solid #E0E0E0"
                              }}
                            >
                              {copiedPayment === "dana" ? (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                  <path d="M20 6L9 17l-5-5" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              ) : (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                  <rect x="9" y="9" width="13" height="13" rx="2" stroke={selectedPayment === "dana" ? "white" : "#666"} strokeWidth="1.5"/>
                                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke={selectedPayment === "dana" ? "white" : "#666"} strokeWidth="1.5"/>
                                </svg>
                              )}
                              <span className={`text-xs font-medium ${selectedPayment === "dana" ? "text-white" : "text-gray-700"}`}>
                                {copiedPayment === "dana" ? "Copied!" : "Salin"}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div
                        onClick={() => setSelectedPayment("btn")}
                        className="relative rounded-2xl cursor-pointer transition-all duration-200 overflow-hidden"
                        style={{
                          background: selectedPayment === "btn" 
                            ? "linear-gradient(90deg, #6e8efb 0%, #d000cb 100%)" 
                            : "white",
                          border: selectedPayment === "btn"
                            ? "2px solid #6e8efb"
                            : "2px solid rgba(255,255,255,0.3)",
                          boxShadow: selectedPayment === "btn" 
                            ? "0 4px 20px rgba(208, 0, 203, 0.4)" 
                            : "0 4px 16px rgba(0,0,0,0.1)",
                        }}
                      >
                        <div className="flex items-center justify-between px-4 py-4">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${selectedPayment === "btn" ? "border-white" : "border-gray-400"}`} style={{ marginLeft: "12px" }}>
                              {selectedPayment === "btn" && (
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              )}
                            </div>
                            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0" style={{ marginLeft: "-12px" }}>
                              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                                <img 
                                  src= {`${BASE_PATH}/images/btn.svg`} 
                                  alt="Bank BTN Logo" 
                                  className="w-6 h-6 object-contain"
                                />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0" style={{ marginLeft: "-12px" }}>
                              <p className={`font-bold text-sm leading-tight mb-1 ${selectedPayment === "btn" ? "text-white" : "text-gray-800"}`}>BANK BTN</p>
                              <p className={`text-xs leading-tight truncate ${selectedPayment === "btn" ? "text-white/80" : "text-gray-600"}`}>18101610249143 · a.n. Rafli Rizqi Fadillah</p>
                            </div>
                          </div>
                          <div className="flex-shrink-0" style={{ marginRight: "24px", marginLeft: "10px" }}>
                            <button
                              type="button"
                              onClick={(e) => { e.stopPropagation(); handleCopyPayment("btn"); }}
                              className="flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-200 hover:opacity-80"
                              style={{ 
                                background: selectedPayment === "btn" 
                                  ? (copiedPayment === "btn" ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.15)")
                                  : (copiedPayment === "btn" ? "#E8F5E8" : "#F5F5F5"),
                                border: selectedPayment === "btn" 
                                  ? "1px solid rgba(255,255,255,0.3)" 
                                  : "1px solid #E0E0E0"
                              }}
                            >
                              {copiedPayment === "btn" ? (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                  <path d="M20 6L9 17l-5-5" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              ) : (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                  <rect x="9" y="9" width="13" height="13" rx="2" stroke={selectedPayment === "btn" ? "white" : "#666"} strokeWidth="1.5"/>
                                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke={selectedPayment === "btn" ? "white" : "#666"} strokeWidth="1.5"/>
                                </svg>
                              )}
                              <span className={`text-xs font-medium ${selectedPayment === "btn" ? "text-white" : "text-gray-700"}`}>
                                {copiedPayment === "btn" ? "Copied!" : "Salin"}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2.5">
                      <p className="text-white font-semibold text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>Upload Bukti Pembayaran</p>
                      <input
                        type="file"
                        id="bukti-pembayaran"
                        accept="image/*,application/pdf"
                        className="hidden"
                        onChange={(e) => handleFileChange(e, 'buktiPembayaran')}
                      />
                      {filesState.buktiPembayaran ? (
                        <div 
                          className="relative rounded-2xl overflow-hidden"
                          style={{
                            background: "white",
                            border: "2px solid rgba(255,255,255,0.3)",
                            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                          }}
                        >
                          <div className="flex items-center justify-between px-4 py-4">
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(16,230,241,0.15)" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#10e6f1" strokeWidth="2"/>
                                  <polyline points="14,2 14,8 20,8" stroke="#10e6f1" strokeWidth="2"/>
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-gray-800 font-bold text-sm leading-tight mb-1">{filesState.buktiPembayaran.name}</p>
                                <p className="text-gray-600 text-xs leading-tight truncate">{(filesState.buktiPembayaran.size / (1024 * 1024)).toFixed(2)} MB</p>
                              </div>
                            </div>
                            <div className="flex-shrink-0" style={{ marginRight: "24px", marginLeft: "10px" }}>
                              <button
                                type="button"
                                onClick={() => handleRemoveFile('buktiPembayaran', 'bukti-pembayaran')}
                                className="flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100"
                                style={{ 
                                  background: "#F5F5F5",
                                  border: "1px solid #E0E0E0"
                                }}
                              >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                  <line x1="18" y1="6" x2="6" y2="18" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
                                  <line x1="6" y1="6" x2="18" y2="18" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                                <span className="text-gray-700 text-xs font-medium">Hapus</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <label
                          htmlFor="bukti-pembayaran"
                          className="flex flex-col items-center justify-center gap-2 py-6 rounded-2xl cursor-pointer transition-all duration-200 hover:border-[#10e6f1]/60 hover:bg-white/5"
                          style={{ border: "2px dashed rgba(16,230,241,0.4)", background: "rgba(16,230,241,0.03)" }}
                        >
                          <div style={{ marginTop: "8px" }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="#10e6f1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><polyline points="17,8 12,3 7,8" stroke="#10e6f1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="3" x2="12" y2="15" stroke="#10e6f1" strokeWidth="1.8" strokeLinecap="round"/></svg>
                          </div>
                          <p className="text-white font-semibold text-sm">Pilih File</p>
                          <p className="text-white/40 text-[10px]" style={{ paddingBottom: "4px" }}>JPG, PNG, PDF — Maks. 5MB</p>
                        </label>
                      )}
                    </div>

                  </div>

                  <div className="flex gap-3 mt-2 max-md:!ml-0 max-md:!w-full max-md:!gap-3" style={{ marginTop: 30, marginBottom: 24, marginLeft: "6.5%", width: "87%" }}>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="flex-1 rounded-xl font-semibold transition-all duration-200 hover:opacity-85 cursor-pointer flex items-center justify-center gap-2 max-md:!h-12"
                      style={{
                        height: "48px",
                        fontFamily: "'Exo 2', sans-serif",
                        fontSize: "15px",
                        background: "#ffffff",
                        color: "#1a1a2e",
                        border: "none",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || !isStep4Valid}
                      className={`flex-1 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 max-md:!h-12 ${
                        (isSubmitting || !isStep4Valid)
                          ? "cursor-not-allowed opacity-50" 
                          : "cursor-pointer hover:opacity-90 active:scale-[0.98]"
                      }`}
                      style={{
                        height: "48px",
                        fontFamily: "'Exo 2', sans-serif",
                        fontSize: "15px",
                        color: "#ffffff",
                        border: "none",
                        background: (isSubmitting || !isStep4Valid)
                          ? "rgba(128,128,128,0.5)"
                          : "linear-gradient(90deg, #6e8efb 0%, #9b00d0 100%)",
                        boxShadow: (isSubmitting || !isStep4Valid)
                          ? "none"
                          : "0 4px 20px rgba(155, 0, 208, 0.4)",
                      }}
                    >
                      {isSubmitting ? "Mengirim..." : "Submit Tim"}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {submitMessage && (
                    <div 
                      className="mt-4 p-3 rounded-lg text-xs text-center max-md:!ml-0 max-md:!w-full"
                      style={{
                        marginLeft: "6.5%",
                        width: "87%",
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
            </form>
          </div>
        </div>
      </div>

      {showSuccessModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{
            padding: "24px",
            background: "rgba(0,0,0,0.88)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "480px",
              borderRadius: "24px",
              padding: "2px",
              background: "linear-gradient(160deg, #00ffff 0%, #6e8efb 40%, #ff00ff 100%)",
              boxShadow: "0 0 60px rgba(0,255,255,0.15), 0 0 100px rgba(255,0,255,0.1)",
            }}
          >
            <div
              style={{
                borderRadius: "22px",
                background: "linear-gradient(180deg, rgba(0,9,35,0.97) 0%, rgba(5,2,30,0.98) 100%)",
                padding: "48px 40px 40px",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div style={{ position: "absolute", top: "-60px", left: "-60px", width: "180px", height: "180px", background: "radial-gradient(circle, rgba(0,255,255,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: "-60px", right: "-60px", width: "180px", height: "180px", background: "radial-gradient(circle, rgba(255,0,255,0.10) 0%, transparent 70%)", pointerEvents: "none" }} />

              <div
                style={{
                  width: "88px",
                  height: "88px",
                  borderRadius: "50%",
                  border: "2px solid rgba(0,255,255,0.35)",
                  background: "rgba(0,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "28px",
                  position: "relative",
                  boxShadow: "0 0 30px rgba(0,255,255,0.12)",
                }}
              >
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h3
                style={{
                  fontFamily: "'Zen Dots', sans-serif",
                  fontSize: "clamp(18px, 4.5vw, 24px)",
                  color: "#ffffff",
                  letterSpacing: "0.06em",
                  lineHeight: "1.3",
                  marginBottom: "16px",
                }}
              >
                Pendaftaran Berhasil!
              </h3>

              <div style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, #00ffff, #ff00ff)", borderRadius: "2px", marginBottom: "20px" }} />

              <p
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  fontSize: "clamp(13px, 3.2vw, 15px)",
                  color: "rgba(255,255,255,0.82)",
                  lineHeight: "1.7",
                  marginBottom: "32px",
                  maxWidth: "380px",
                }}
              >
                Data pendaftaran untuk tim{" "}
                <span style={{ color: "#e040fb", fontWeight: 600 }}>{formDataState.teamName || "Anda"}</span>{" "}
                di cabang lomba{" "}
                <span style={{ color: "#00e5ff", fontWeight: 600 }}>{activeTab}</span>{" "}
                telah berhasil disimpan.
              </p>

              <button
                onClick={() => {
                  setFormDataState({
                    leaderName: "",
                    anggota2: "",
                    anggota3: "",
                    anggota4: "",
                    anggota5: "",
                    leaderPhone: "",
                    teamName: "",
                    institution: "",
                    angkatan: "",
                  });
                  setFilesState({
                    buktiGrup: null,
                    buktiStory: null,
                    buktiKtm: null,
                    buktiPembayaran: null,
                  });
                  setSelectedPayment(null);
                  setStep(1);
                  setShowSuccessModal(false);
                  
                  sessionStorage.setItem("selectedLomba", activeTab);
                  router.push(`/terimakasih?jenis=${encodeURIComponent(activeTab)}`);
                }}
                style={{
                  width: "100%",
                  maxWidth: "340px",
                  padding: "14px 24px",
                  borderRadius: "14px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Exo 2', sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "#ffffff",
                  background: "linear-gradient(135deg, #6e8efb 0%, #d000cb 100%)",
                  boxShadow: "0 6px 24px rgba(208, 0, 203, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(ev) => {
                  ev.currentTarget.style.transform = "scale(1.04)";
                  ev.currentTarget.style.boxShadow = "0 8px 30px rgba(208, 0, 203, 0.5)";
                }}
                onMouseLeave={(ev) => {
                  ev.currentTarget.style.transform = "scale(1)";
                  ev.currentTarget.style.boxShadow = "0 6px 24px rgba(208, 0, 203, 0.35)";
                }}
                onMouseDown={(ev) => { ev.currentTarget.style.transform = "scale(0.97)"; }}
                onMouseUp={(ev) => { ev.currentTarget.style.transform = "scale(1.04)"; }}
              >
                <span>Next</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}