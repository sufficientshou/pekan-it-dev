"use client";

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

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
  // const router = useRouter();
  // const [activeTab, setActiveTab] = useState("Desain Grafis");
  // const [step, setStep] = useState(1);
  // const [form, setForm] = useState({
  //   nama: "",
  //   telepon: "",
  //   npm: "",
  //   angkatan: "",
  // });
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [submitMessage, setSubmitMessage] = useState("");

  // const lomba = lombas[activeTab];

  // // Masukkan scriptURL dan sheetDataURL kamu di sini
  // const scriptURL = 'https://script.google.com/macros/s/AKfycbxO3rnzUxdQQ08uyiu4USJ4VqR6BkeXaWzejmpHANJ4sZx4daX_JKNItBBf62rjAe4b/exec';
  // const sheetDataURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTz8qFQ--NhZVusFMB5Q3dfPp7skPFZx8MLekm8LUF2bpvBvquh22f0olcZ8vxWd-bZkjIzOHroSUEU/pub?gid=1920851944&single=true&output=csv';

  // // LOGIC 1: Interaksi UI Upload File (Muncul/Hilang Label)
  // useEffect(() => {
  //   const setupFileUpload = (inputId: string, labelId: string, successId: string, changeBtnId: string) => {
  //     const input = document.getElementById(inputId) as HTMLInputElement;
  //     const label = document.getElementById(labelId) as HTMLElement;
  //     const suc  essMsg = document.getElementById(successId) as HTMLElement;
  //     const changeBtn = document.getElementById(changeBtnId) as HTMLElement;

  //     if (!input || !label || !successMsg || !changeBtn) return;

  //     const handleChange = () => {
  //       if (input.files && input.files.length > 0) {
  //         label.style.display = "none";
  //         successMsg.style.display = "inline-block";
  //         changeBtn.style.display = "inline-block";
  //       }
  //     };

  //     const handleReset = () => {
  //       input.value = "";
  //       label.style.display = "inline-block";
  //       successMsg.style.display = "none";
  //       changeBtn.style.display = "none";
  //     };

  //     input.addEventListener("change", handleChange);
  //     changeBtn.addEventListener("click", handleReset);

  //     // Cleanup listener
  //     return () => {
  //       input.removeEventListener("change", handleChange);
  //       changeBtn.removeEventListener("click", handleReset);
  //     };
  //   };

  //   if (step === 2) {
  //     setupFileUpload("bukti-grup", "upload-label-grup", "upload-success-grup", "change-file-button-grup");
  //     setupFileUpload("bukti-story", "upload-label-story", "upload-success-story", "change-file-button-story");
  //     // ID disesuaikan dengan UI baru (bukti-ktm)
  //     setupFileUpload("bukti-ktm", "upload-label-ktm", "upload-success-ktm", "change-file-button-ktm");
  //   }
  // }, [step]);

  // // LOGIC 2: Pengecekan Duplikat & Submit Data
  // useEffect(() => {
  //   const form = document.forms.namedItem('form-pendaftaran-semantik') as HTMLFormElement;
  //   if (!form) return;

  //   const uploadFormData = (formData: FormData) => {
  //     const fileInputs = form.querySelectorAll('input[type="file"]');
  //     let filePromises: Promise<any>[] = [];

  //     fileInputs.forEach((fileInput: any) => {
  //       if (fileInput.files && fileInput.files.length > 0) {
  //         const file = fileInput.files[0];
  //         const reader = new FileReader();

  //         const promise = new Promise((resolve, reject) => {
  //           reader.onloadend = () => {
  //             resolve({
  //               name: fileInput.name,
  //               filename: file.name,
  //               value: reader.result
  //             });
  //           };
  //           reader.onerror = reject;
  //           reader.readAsDataURL(file);
  //         });

  //         filePromises.push(promise);
  //       }
  //     });

  //     Promise.all(filePromises)
  //       .then(files => {
  //         files.forEach(fileData => {
  //           formData.append(fileData.name, fileData.value);
  //           formData.append(fileData.name + '_filename', fileData.filename);
  //         });

  //         // Tambahkan mata_lomba dari state activeTab
  //         formData.append("mata_lomba", activeTab);

  //         return fetch(scriptURL, {
  //           method: 'POST',
  //           body: formData,
  //         });
  //       })
  //       .then(response => {
  //         console.log("Response Status:", response.status);
  //         return response.json();
  //       })
  //       .then(data => {
  //         console.log("Data dari Server:", data);
  //         if (data.result === 'success') {
  //           setSubmitMessage("✅ Pendaftaran berhasil! Data telah tersimpan.");
  //           alert("Terima kasih! Formulir Anda telah berhasil dikirim. Setelah Klik 'Ok', tunggu sampai berpindah halaman.");
            
  //           setTimeout(() => {
  //             router.push(`/terimakasih?jenis=${encodeURIComponent(activeTab)}`);
  //           }, 100);
  //           form.reset();
  //           setStep(1);
  //         } else if (data.result === 'duplicate') {
  //           setSubmitMessage("❌ Data duplikat. Mohon gunakan nama & nomor telepon yang berbeda.");
  //           alert("Data duplikat. Mohon gunakan nama & nomor telepon yang berbeda.");
  //         } else {
  //           throw new Error(data.error || "Kesalahan tidak diketahui dari server.");
  //         }
  //       })
  //       .catch(error => {
  //         setSubmitMessage("❌ Gagal mengirim: " + error.message);
  //         alert("Gagal mengirim formulir. Error: " + error.message);
  //       })
  //       .finally(() => {
  //         setIsSubmitting(false);
  //       });
  //   };

  //   const handleSubmit = (e: Event) => {
  //     e.preventDefault();
  //     setIsSubmitting(true);
  //     setSubmitMessage("⏳ Sedang memproses data...");

  //     const formData = new FormData(form);
  //     let isEmpty = false;

  //     formData.append("mata_lomba", activeTab);

  //     // Validasi Input Kosong
  //     const generalInputs = form.querySelectorAll('input:not([type="radio"]):not([type="file"]), textarea, select');
  //     generalInputs.forEach((input: any) => {
  //       if (!input.value.trim()) isEmpty = true;
  //     });

  //     const fileInputs = form.querySelectorAll('input[type="file"]');
  //     fileInputs.forEach((fileInput: any) => {
  //       if (fileInput.files.length === 0) isEmpty = true;
  //     });

  //     if (isEmpty) {
  //       setSubmitMessage("❌ Kamu wajib mengisi semua data.");
  //       alert("Kamu wajib mengisi semua data yang ada.");
  //       setIsSubmitting(false);
  //       return;
  //     }

  //     const nama = (formData.get("nama") as string)?.trim().toLowerCase();
  //     const noTelepon = (formData.get("no_telepon") as string)?.trim();

  //     // Cek Duplikasi ke Spreadsheet CSV (Fitur lama yang dipertahankan)
  //     fetch(sheetDataURL)
  //       .then(response => {
  //         if (!response.ok) throw new Error("Gagal mengakses data spreadsheet.");
  //         return response.text();
  //       })
  //       .then(csvText => {
  //         const rows = csvText.split('\n').map(row => row.split(','));
  //         const header = rows[0];
  //         const namaIndex = header.indexOf("nama");
  //         const noTeleponIndex = header.indexOf("no_telepon");

  //         const isDuplicate = rows.some((row, i) => {
  //           if (i === 0) return false;
  //           const namaData = row[namaIndex]?.trim().toLowerCase();
  //           const noTelpData = row[noTeleponIndex]?.trim();
  //           return namaData === nama && noTelpData === noTelepon;
  //         });

  //         if (isDuplicate) {
  //           setSubmitMessage("❌ Nama dan nomor telepon ini sudah terdaftar.");
  //           alert("Data dengan nama dan nomor telepon ini sudah pernah dikirim.");
  //           setIsSubmitting(false);
  //           return;
  //         }

  //         uploadFormData(formData);
  //       })
  //       .catch(error => {
  //         setSubmitMessage("❌ Gagal memeriksa duplikasi.");
  //         alert("Gagal memeriksa duplikasi. Error: " + error.message);
  //         setIsSubmitting(false);
  //       });
  //   };

  //   form.addEventListener('submit', handleSubmit);
  //   return () => form.removeEventListener('submit', handleSubmit);
  // }, [step, activeTab]); // Re-run saat ganti lomba atau step

  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Desain Grafis");
  const [step, setStep] = useState(1);
  const [formDataState, setFormDataState] = useState({
    nama: "",
    telepon: "",
    npm: "",
    angkatan: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const lomba = lombas[activeTab];

  // Get script URL from environment variable
  const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';

  // --- LOGIC 1: INTERAKSI UI FILE (DOM) ---
  useEffect(() => {
    const setupFileUpload = (inputId: string, labelId: string, successId: string, changeBtnId: string) => {
      const input = document.getElementById(inputId) as HTMLInputElement;
      const label = document.getElementById(labelId);
      const successMsg = document.getElementById(successId);
      const changeBtn = document.getElementById(changeBtnId);

      if (!input || !label || !successMsg || !changeBtn) return;

      input.onchange = () => {
        if (input.files && input.files.length > 0) {
          label.style.display = "none";
          successMsg.style.display = "inline-block";
          changeBtn.style.display = "inline-block";
        }
      };

      changeBtn.onclick = () => {
        input.value = "";
        label.style.display = "inline-block";
        successMsg.style.display = "none";
        changeBtn.style.display = "none";
      };
    };

    if (step === 2) {
      setupFileUpload("bukti-grup", "upload-label-grup", "upload-success-grup", "change-file-button-grup");
      setupFileUpload("bukti-story", "upload-label-story", "upload-success-story", "change-file-button-story");
      setupFileUpload("bukti-ktm", "upload-label-ktm", "upload-success-ktm", "change-file-button-ktm");
    }
  }, [step]);

  // --- LOGIC 2: SUBMIT HANDLER ---
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setSubmitMessage("⏳ Sedang memproses data...");

  //   const form = e.currentTarget as HTMLFormElement;
  //   const formData = new FormData(form);
    
  //   // Sinkronisasi tab ke formData
  //   formData.append("mata_lomba", activeTab);

  //   try {
  //     // 1. Validasi Input Kosong
  //     let isEmpty = false;
  //     const inputs = form.querySelectorAll('input[required]');
  //     inputs.forEach((input: any) => {
  //       if (!input.value.trim()) isEmpty = true;
  //     });

  //     if (isEmpty) {
  //       throw new Error("Kamu wajib mengisi semua data.");
  //     }

  //     // 2. Cek Duplikat via CSV (Fitur lama)
  //     const csvRes = await fetch(sheetDataURL);
  //     const csvText = await csvRes.text();
  //     const rows = csvText.split('\n').map(row => row.split(','));
  //     const header = rows[0];
  //     const namaIdx = header.indexOf("nama");
  //     const telpIdx = header.indexOf("no_telepon");
      
  //     const namaBaru = (formData.get("nama") as string).trim().toLowerCase();
  //     const telpBaru = (formData.get("no_telepon") as string).trim();

  //     const isDuplicate = rows.some((row, i) => {
  //       if (i === 0) return false;
  //       return row[namaIdx]?.trim().toLowerCase() === namaBaru && row[telpIdx]?.trim() === telpBaru;
  //     });

  //     if (isDuplicate) {
  //       throw new Error("Data dengan nama & nomor ini sudah terdaftar.");
  //     }

  //     // 3. Proses File Upload (FileReader + Promise.all)
  //     const fileInputs = form.querySelectorAll('input[type="file"]');
  //     const filePromises = Array.from(fileInputs).map((input: any) => {
  //       if (input.files.length > 0) {
  //         return new Promise((resolve, reject) => {
  //           const reader = new FileReader();
  //           reader.onload = () => resolve({ name: input.name, filename: input.files[0].name, value: reader.result });
  //           reader.onerror = reject;
  //           reader.readAsDataURL(input.files[0]);
  //         });
  //       }
  //       return null;
  //     });

  //     const files = await Promise.all(filePromises);
  //     files.forEach((f: any) => {
  //       if (f) {
  //         formData.append(f.name, f.value);
  //         formData.append(f.name + '_filename', f.filename);
  //       }
  //     });

  //     // 4. Kirim ke Apps Script
  //     const response = await fetch(scriptURL, { method: 'POST', body: formData });
  //     const result = await response.json();

  //     if (result.result === 'success') {
  //       setSubmitMessage("✅ Berhasil! Mengalihkan halaman...");
  //       alert("Terima kasih! Pendaftaran berhasil.");
  //       form.reset();
  //       setStep(1);
  //       router.push(`/terimakasih?jenis=${encodeURIComponent(activeTab)}`);
  //     } else {
  //       throw new Error(result.error || result.message || "Gagal menyimpan ke spreadsheet");
  //     }

  //   } catch (error: any) {
  //     setSubmitMessage(`❌ Error: ${error.message}`);
  //     alert(`Gagal: ${error.message}`);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setSubmitMessage("⏳ Sedang memproses data...");

  //   // 1. Ambil data dari STATE 'form', bukan dari DOM
  //   // Ini aman karena state 'form' tidak hilang meski kamu pindah Step
  //   const namaBaru = form.nama.trim().toLowerCase();
  //   const telpBaru = form.telepon.trim(); // Sesuaikan key-nya (tadi di state 'telepon')
  //   const npmBaru = form.npm.trim();
  //   const angkatanBaru = form.angkatan.trim();

  //   // 2. Buat objek FormData baru untuk dikirim ke Apps Script
  //   const sendData = new FormData();
  //   sendData.append("nama", namaBaru);
  //   sendData.append("no_telepon", telpBaru); // Apps Script minta 'no_telepon'
  //   sendData.append("npm", npmBaru);
  //   sendData.append("angkatan", angkatanBaru);
  //   sendData.append("mata_lomba", activeTab);

  //   try {
  //     // Validasi sederhana
  //     if (!namaBaru || !telpBaru || !npmBaru) {
  //       throw new Error("Data Step 1 belum lengkap!");
  //     }

  //     // 3. Cek Duplikat via CSV (Gunakan variabel baru tadi)
  //     const csvRes = await fetch(sheetDataURL);
  //     const csvText = await csvRes.text();
  //     const rows = csvText.split('\n').map(row => row.split(','));
  //     const header = rows[0];
  //     const namaIdx = header.indexOf("nama");
  //     const telpIdx = header.indexOf("no_telepon");

  //     const isDuplicate = rows.some((row, i) => {
  //       if (i === 0) return false;
  //       return row[namaIdx]?.trim().toLowerCase() === namaBaru && row[telpIdx]?.trim() === telpBaru;
  //     });

  //     if (isDuplicate) {
  //       throw new Error("Nama dan nomor telepon ini sudah terdaftar.");
  //     }

  //     // 4. Proses File (Tetap ambil dari DOM karena input file ada di Step 2)
  //     const formElement = e.currentTarget as HTMLFormElement;
  //     const fileInputs = formElement.querySelectorAll('input[type="file"]');
      
  //     // ... Sisa logic FileReader dan fetch(scriptURL) di bawahnya ...
  //     // Gunakan 'sendData' sebagai body fetch, bukan 'formData' lama
  //   } catch (error: any) {
  //     setSubmitMessage(`❌ Error: ${error.message}`);
  //     alert(`Gagal: ${error.message}`);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 1. Ambil referensi form SEKARANG juga sebelum proses async dimulai
    const formElement = e.currentTarget; 
    
    setIsSubmitting(true);
    setSubmitMessage("⏳ Sedang memproses data...");

    // Ambil data dari STATE 'formDataState'
    const namaBaru = formDataState.nama.trim();
    const telpBaru = formDataState.telepon.trim();
    const npmBaru = formDataState.npm.trim();
    const angkatanBaru = formDataState.angkatan.trim();

    // Buat objek FormData untuk dikirim
    const sendData = new FormData();
    sendData.append("nama", namaBaru);
    sendData.append("no_telepon", telpBaru);
    sendData.append("npm", npmBaru);
    sendData.append("angkatan", angkatanBaru);
    sendData.append("mata_lomba", activeTab);

    try {
      if (!namaBaru || !telpBaru || !npmBaru) {
        throw new Error("Data Step 1 belum lengkap!");
      }

      // Proses File (Gunakan formElement yang sudah disimpan di awal tadi)
      const fileInputs = formElement.querySelectorAll('input[type="file"]');
      const filePromises = Array.from(fileInputs).map((fileInput: any) => {
        if (fileInput.files && fileInput.files.length > 0) {
          const file = fileInput.files[0];
          const reader = new FileReader();

          return new Promise((resolve, reject) => {
            reader.onloadend = () => {
              resolve({
                name: fileInput.name,
                filename: file.name,
                value: reader.result
              });
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        }
        return null;
      });

      const files = await Promise.all(filePromises);
      
      files.forEach((fileData: any) => {
        if (fileData) {
          sendData.append(fileData.name, fileData.value);
          sendData.append(fileData.name + '_filename', fileData.filename);
        }
      });

      // Kirim ke Google Apps Script (duplicate check dilakukan di server)
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: sendData,
      });

      const result = await response.json();

      if (result.result === 'success') {
        setSubmitMessage("✅ Pendaftaran berhasil!");
        alert("Terima kasih! Pendaftaran berhasil.");
        setFormDataState({ nama: "", telepon: "", npm: "", angkatan: "" }); // Reset state
        setStep(1);
        
        // Simpan `activeTab` (misal "Desain Grafis") ke sessionStorage agar bisa dibaca page Terima Kasih
        sessionStorage.setItem("selectedLomba", activeTab);
        
        router.push(`/terimakasih?jenis=${encodeURIComponent(activeTab)}`);
      } else if (result.result === 'duplicate') {
        throw new Error("NPM atau nomor telepon sudah terdaftar di lomba ini.");
      } else if (result.result === 'spam') {
        throw new Error("Mohon tunggu 30 detik sebelum submit kembali.");
      } else {
        throw new Error(result.message || "Gagal menyimpan data.");
      }

    } catch (error: any) {
      setSubmitMessage(`❌ Error: ${error.message}`);
      alert(`Gagal: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section
      id="form-pendaftaran-section"
      className="relative w-full overflow-hidden max-md:!px-4"
      style={{ background: "#000923", minHeight: "832px", padding: "60px 0 80px" }}
    >
      
      <div className="flex flex-col items-center mb-8 max-md:!mb-8">
        <h2
          className="text-center font-bold leading-tight max-md:!mb-10"
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

      <div className="flex justify-center gap-20 mb-12 flex-wrap px-4 max-md:!justify-start max-md:!flex-nowrap max-md:!overflow-x-auto max-md:!snap-x max-md:!snap-mandatory max-md:!gap-3 max-md:!pb-6 max-md:!mb-10 max-md:[scrollbar-width:none] max-md:![&::-webkit-scrollbar]:hidden">
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
          className="flex flex-col gap-6 max-md:!transform-none max-md:!pt-0 max-md:!flex-auto max-md:!w-full max-md:!text-center max-md:!items-center max-md:!mt-8" 
          style={{ 

            flex: "0 0 630px",

            transform: "translateX(90px)",

            paddingTop: "90px"
          }}
        >
          
          <h3
            className="font-bold leading-tight max-md:!text-[36px] max-md:!mt-4"
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

          <a 
            href={`https://wa.me/${lomba.cp.wa.startsWith('0') ? '62' + lomba.cp.wa.substring(1) : lomba.cp.wa}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90 cursor-pointer max-md:!w-full max-md:!max-w-[300px] max-md:!h-12 max-md:!py-0 max-md:!flex max-md:!items-center max-md:!justify-center"
            style={{

              width: "170px", // Ganti ke "200px" atau ukuran lain jika ingin lebar spesifik
              height: "45px",       // Ganti ke "50px" atau ukuran lain jika ingin lebih tinggi
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

          <div className="px-8 py-6 max-md:!px-5 max-md:!pt-8">
            <div className="flex justify-between items-center mb-6">
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

            <form key={step} id="form-pendaftaran-semantik" name="form-pendaftaran-semantik" onSubmit={handleSubmit} action="" method="post" encType="multipart/form-data" className="mt-5">
              {step === 1 ? (
                <div className="flex flex-col gap-6 max-md:!gap-4">
                  <div className="flex flex-col gap-8 max-md:!gap-1">
                      <span className="w-full flex flex-col gap-2 sm:gap-3 lg:gap-4">
                          <label htmlFor="Nama" className="text-white text-sm opacity-80 max-md:!ml-0"
                        style={{marginLeft:10 , fontFamily: "'Exo 2', sans-serif" }}>
                            Nama Lengkap :
                          </label>
                          <input type="text" name="nama" id="Nama" placeholder="Light Yagami" required 
                                  value={formDataState.nama} 
                                  onChange={(e) => setFormDataState({ ...formDataState, nama: e.target.value })}
                                  className="w-full px-4 py-3 rounded-lg text-black text-sm outline-none transition-all max-md:!w-full max-md:!ml-0 max-md:!h-12 max-md:!text-base max-md:!pl-3"
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
                                  }  />
                      </span>
                      
                      <span className="w-full flex flex-col gap-2 sm:gap-3 lg:gap-4">
                          <label htmlFor="NoTelepon" className="text-white text-sm opacity-80 max-md:!ml-0"
                        style={{marginLeft:10 , fontFamily: "'Exo 2', sans-serif" }}>
                            No. WhatsApp :
                          </label>
                          <input type="text" name="no_telepon" id="NoTelepon" placeholder="0895xxxxxxxx" required 
                            value={formDataState.telepon} 
                            onChange={(e) => setFormDataState({ ...formDataState, telepon: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg text-black text-sm outline-none transition-all max-md:!w-full max-md:!ml-0 max-md:!h-12 max-md:!text-base max-md:!pl-3"
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
                            }  />
                      </span>

                      <span className="w-full flex flex-col gap-2 sm:gap-3 lg:gap-4">
                          <label htmlFor="npm" className="text-white text-sm opacity-80 max-md:!ml-0"
                        style={{marginLeft:10 , fontFamily: "'Exo 2', sans-serif" }}>
                            NPM :
                          </label>
                          <input type="text" name="npm" id="npm" placeholder="2_10631170___" required 
                                  value={formDataState.npm} 
                                  onChange={(e) => setFormDataState({ ...formDataState, npm: e.target.value })}
                                  className="w-full px-4 py-3 rounded-lg text-black text-sm outline-none transition-all max-md:!w-full max-md:!ml-0 max-md:!h-12 max-md:!text-base max-md:!pl-3"
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
                                  }  />
                      </span>
                      
                      <span className="w-full flex flex-col gap-2 sm:gap-3 lg:gap-4">
                          <label htmlFor="angkatan" className="text-white text-sm opacity-80 max-md:!ml-0"
                        style={{marginLeft:10 , fontFamily: "'Exo 2', sans-serif" }}>
                            Angkatan :
                          </label>
                          <input type="text" name="angkatan" id="angkatan" placeholder="202_" required 
                                  value={formDataState.angkatan} 
                                  onChange={(e) => setFormDataState({ ...formDataState, angkatan: e.target.value })}
                                  className="w-full px-4 py-3 rounded-lg text-black text-sm outline-none transition-all max-md:!w-full max-md:!ml-0 max-md:!h-12 max-md:!text-base max-md:!pl-3"
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
                                  }  />
                      </span>
                  </div>

                  <button
                    type="button"
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
                    <div className="flex flex-col gap-5 transition-all duration-500">
                        <span className="w-full">
                            <label htmlFor="bukti-grup" className="text-white opacity-70 text-sm max-md:!ml-0" style={{ marginLeft: 10, fontFamily: "'Exo 2', sans-serif" }}>Upload Bukti Share Pamflet ke 2 Grup Whatsapp :</label>
                            <input type="file" id="bukti-grup" name="bukti_grup" accept=".jpg,.jpeg,.png,.pdf" style={{display: "none"}} required />
                            <div className="flex justify-center items-center gap-4 flex-wrap">
                                <label htmlFor="bukti-grup" 
                                  className="flex items-center justify-center gap-3 rounded-lg py-10 cursor-pointer transition-colors max-md:!mt-2 max-md:!ml-0 max-md:!w-full max-md:!h-[80px]"
                                  style={{
                                    marginTop: 10,  
                                    width: "95%", // Ganti nilainya untuk mengatur lebar secara manual
                                    height: "80px",
                                    border: "2px dashed rgba(16,230,241,0.4)",
                                    background: "rgba(16,230,241,0.04)",
                                  }} 
                                  id="upload-label-grup">
                                    <svg width="20" height="20" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] fill-current'>
                                        <path d="M60.7327 73.4824L55.2502 79.0074V55.2499C55.2502 54.1228 54.8024 53.0418 54.0054 52.2447C53.2084 51.4477 52.1274 50.9999 51.0002 50.9999C49.873 50.9999 48.792 51.4477 47.995 52.2447C47.198 53.0418 46.7502 54.1228 46.7502 55.2499V79.0074L41.2677 73.4824C40.8714 73.0862 40.401 72.7718 39.8833 72.5574C39.3655 72.3429 38.8106 72.2325 38.2502 72.2325C37.6898 72.2325 37.1349 72.3429 36.6171 72.5574C36.0994 72.7718 35.629 73.0862 35.2327 73.4824C34.8364 73.8787 34.5221 74.3491 34.3076 74.8669C34.0932 75.3846 33.9828 75.9395 33.9828 76.4999C33.9828 77.0603 34.0932 77.6152 34.3076 78.133C34.5221 78.6507 34.8364 79.1212 35.2327 79.5174L47.9827 92.2674C48.3869 92.6544 48.8635 92.9577 49.3852 93.1599C49.8939 93.3848 50.444 93.5009 51.0002 93.5009C51.5564 93.5009 52.1065 93.3848 52.6152 93.1599C53.1369 92.9577 53.6135 92.6544 54.0177 92.2674L66.7677 79.5174C67.568 78.7171 68.0176 77.6317 68.0176 76.4999C68.0176 75.3681 67.568 74.2827 66.7677 73.4824C65.9674 72.6821 64.882 72.2325 63.7502 72.2325C62.6184 72.2325 61.533 72.6821 60.7327 73.4824ZM78.2852 26.4349C75.6884 20.4679 71.2068 15.517 65.527 12.3408C59.8472 9.16452 53.2827 7.93821 46.8393 8.84973C40.3959 9.76126 34.4291 12.7603 29.8533 17.3874C25.2774 22.0145 22.345 28.0143 21.5052 34.4674C17.4532 35.4378 13.8986 37.8625 11.5166 41.281C9.13453 44.6995 8.09086 48.8738 8.58378 53.0111C9.07669 57.1484 11.0719 60.9606 14.1904 63.7238C17.3089 66.487 21.3336 68.0087 25.5002 67.9999C26.6274 67.9999 27.7084 67.5522 28.5054 66.7551C29.3024 65.9581 29.7502 64.8771 29.7502 63.7499C29.7502 62.6228 29.3024 61.5418 28.5054 60.7447C27.7084 59.9477 26.6274 59.4999 25.5002 59.4999C23.2459 59.4999 21.0839 58.6044 19.4898 57.0103C17.8957 55.4163 17.0002 53.2543 17.0002 50.9999C17.0002 48.7456 17.8957 46.5836 19.4898 44.9895C21.0839 43.3955 23.2459 42.4999 25.5002 42.4999C26.6274 42.4999 27.7084 42.0522 28.5054 41.2551C29.3024 40.4581 29.7502 39.3771 29.7502 38.2499C29.7611 33.2234 31.5534 28.3634 34.8088 24.5334C38.0643 20.7034 42.572 18.1515 47.5311 17.3309C52.4903 16.5103 57.5798 17.4742 61.8954 20.0515C66.211 22.6287 69.4733 26.6523 71.1027 31.4074C71.3456 32.1377 71.7823 32.7884 72.3662 33.2899C72.95 33.7914 73.6591 34.1249 74.4177 34.2549C77.2485 34.7899 79.8147 36.2677 81.6981 38.4477C83.5815 40.6277 84.6711 43.3812 84.7894 46.2596C84.9077 49.1381 84.0477 51.9718 82.3495 54.2989C80.6513 56.6261 78.215 58.3095 75.4377 59.0749C74.8963 59.2145 74.3877 59.4593 73.941 59.7953C73.4942 60.1314 73.118 60.5522 72.8338 61.0337C72.5497 61.5151 72.3632 62.0479 72.2849 62.6014C72.2066 63.155 72.2382 63.7186 72.3777 64.2599C72.5172 64.8013 72.762 65.3099 73.0981 65.7567C73.4342 66.2034 73.855 66.5796 74.3364 66.8638C74.8179 67.1479 75.3506 67.3345 75.9042 67.4127C76.4578 67.491 77.0213 67.4595 77.5627 67.3199C82.0353 66.1381 86.0001 63.5289 88.855 59.8887C91.7098 56.2484 93.2988 51.776 93.3805 47.1506C93.4622 42.5251 92.0323 37.9994 89.3079 34.2605C86.5834 30.5217 82.7133 27.7741 78.2852 26.4349Z" />
                                    </svg>
                                    <span>Pilih File</span>
                                </label>
                                <span id="upload-success-grup" className="text-2xl text-green-500 font-semibold" style={{display: "none"}}>
                                    ✅ Berhasil diunggah!
                                </span>
                                <button type="button" id="change-file-button-grup" className="rounded-3xl px-4 py-2 border-none bg-[#707070] hover:bg-[#505050] text-white cursor-pointer transition-colors duration-300" style={{display: "none"}}>
                                    Ganti File
                                </button>
                            </div>
                        </span>

                        <span className="w-full">
                            <label htmlFor="bukti-story" className="text-white opacity-70 text-sm max-md:!ml-0" style={{ marginLeft: 10, fontFamily: "'Exo 2', sans-serif" }}>Bukti Share SG, Follow IG, & Post Twibbon :</label>
                            <input type="file" id="bukti-story" name="bukti-story" accept=".jpg,.jpeg,.png,.pdf" style={{display: "none"}} required />
                            <div className="flex justify-center items-center gap-4 flex-wrap">
                                <label htmlFor="bukti-story" 
                                  className="flex items-center justify-center gap-3 rounded-lg py-10 cursor-pointer transition-colors max-md:!mt-2 max-md:!ml-0 max-md:!w-full max-md:!h-[80px]"
                                  style={{
                                    marginTop: 10,  
                                    width: "95%", // Ganti nilainya untuk mengatur lebar secara manual
                                    height: "80px",
                                    border: "2px dashed rgba(16,230,241,0.4)",
                                    background: "rgba(16,230,241,0.04)",
                                  }} 
                                  id="upload-label-story">
                                    <svg width="20" height="20" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] fill-current'>
                                        <path d="M60.7327 73.4824L55.2502 79.0074V55.2499C55.2502 54.1228 54.8024 53.0418 54.0054 52.2447C53.2084 51.4477 52.1274 50.9999 51.0002 50.9999C49.873 50.9999 48.792 51.4477 47.995 52.2447C47.198 53.0418 46.7502 54.1228 46.7502 55.2499V79.0074L41.2677 73.4824C40.8714 73.0862 40.401 72.7718 39.8833 72.5574C39.3655 72.3429 38.8106 72.2325 38.2502 72.2325C37.6898 72.2325 37.1349 72.3429 36.6171 72.5574C36.0994 72.7718 35.629 73.0862 35.2327 73.4824C34.8364 73.8787 34.5221 74.3491 34.3076 74.8669C34.0932 75.3846 33.9828 75.9395 33.9828 76.4999C33.9828 77.0603 34.0932 77.6152 34.3076 78.133C34.5221 78.6507 34.8364 79.1212 35.2327 79.5174L47.9827 92.2674C48.3869 92.6544 48.8635 92.9577 49.3852 93.1599C49.8939 93.3848 50.444 93.5009 51.0002 93.5009C51.5564 93.5009 52.1065 93.3848 52.6152 93.1599C53.1369 92.9577 53.6135 92.6544 54.0177 92.2674L66.7677 79.5174C67.568 78.7171 68.0176 77.6317 68.0176 76.4999C68.0176 75.3681 67.568 74.2827 66.7677 73.4824C65.9674 72.6821 64.882 72.2325 63.7502 72.2325C62.6184 72.2325 61.533 72.6821 60.7327 73.4824ZM78.2852 26.4349C75.6884 20.4679 71.2068 15.517 65.527 12.3408C59.8472 9.16452 53.2827 7.93821 46.8393 8.84973C40.3959 9.76126 34.4291 12.7603 29.8533 17.3874C25.2774 22.0145 22.345 28.0143 21.5052 34.4674C17.4532 35.4378 13.8986 37.8625 11.5166 41.281C9.13453 44.6995 8.09086 48.8738 8.58378 53.0111C9.07669 57.1484 11.0719 60.9606 14.1904 63.7238C17.3089 66.487 21.3336 68.0087 25.5002 67.9999C26.6274 67.9999 27.7084 67.5522 28.5054 66.7551C29.3024 65.9581 29.7502 64.8771 29.7502 63.7499C29.7502 62.6228 29.3024 61.5418 28.5054 60.7447C27.7084 59.9477 26.6274 59.4999 25.5002 59.4999C23.2459 59.4999 21.0839 58.6044 19.4898 57.0103C17.8957 55.4163 17.0002 53.2543 17.0002 50.9999C17.0002 48.7456 17.8957 46.5836 19.4898 44.9895C21.0839 43.3955 23.2459 42.4999 25.5002 42.4999C26.6274 42.4999 27.7084 42.0522 28.5054 41.2551C29.3024 40.4581 29.7502 39.3771 29.7502 38.2499C29.7611 33.2234 31.5534 28.3634 34.8088 24.5334C38.0643 20.7034 42.572 18.1515 47.5311 17.3309C52.4903 16.5103 57.5798 17.4742 61.8954 20.0515C66.211 22.6287 69.4733 26.6523 71.1027 31.4074C71.3456 32.1377 71.7823 32.7884 72.3662 33.2899C72.95 33.7914 73.6591 34.1249 74.4177 34.2549C77.2485 34.7899 79.8147 36.2677 81.6981 38.4477C83.5815 40.6277 84.6711 43.3812 84.7894 46.2596C84.9077 49.1381 84.0477 51.9718 82.3495 54.2989C80.6513 56.6261 78.215 58.3095 75.4377 59.0749C74.8963 59.2145 74.3877 59.4593 73.941 59.7953C73.4942 60.1314 73.118 60.5522 72.8338 61.0337C72.5497 61.5151 72.3632 62.0479 72.2849 62.6014C72.2066 63.155 72.2382 63.7186 72.3777 64.2599C72.5172 64.8013 72.762 65.3099 73.0981 65.7567C73.4342 66.2034 73.855 66.5796 74.3364 66.8638C74.8179 67.1479 75.3506 67.3345 75.9042 67.4127C76.4578 67.491 77.0213 67.4595 77.5627 67.3199C82.0353 66.1381 86.0001 63.5289 88.855 59.8887C91.7098 56.2484 93.2988 51.776 93.3805 47.1506C93.4622 42.5251 92.0323 37.9994 89.3079 34.2605C86.5834 30.5217 82.7133 27.7741 78.2852 26.4349Z" />
                                    </svg>
                                    <span>Pilih File</span>
                                </label>
                                <span id="upload-success-story" className="text-2xl text-green-500 font-semibold" style={{display: "none"}}>
                                    ✅ Berhasil diunggah!
                                </span>
                                <button type="button" id="change-file-button-story" className="rounded-3xl px-4 py-2 border-none bg-[#707070] hover:bg-[#505050] text-white cursor-pointer transition-colors duration-300" style={{display: "none"}}>
                                    Ganti File
                                </button>
                            </div>
                        </span>
                        
                        <span className="w-full">
                            <label htmlFor="bukti-ktm" className="text-white opacity-70 text-sm max-md:!ml-0" style={{ marginLeft: 10, fontFamily: "'Exo 2', sans-serif" }}>Upload KRS/KTM :</label>
                            <input type="file" id="bukti-ktm" name="bukti_ktm" accept=".jpg,.jpeg,.png,.pdf" style={{display: "none"}} required />
                            <div className="flex justify-center items-center gap-4 flex-wrap">
                                <label htmlFor="bukti-ktm" 
                                  className="flex items-center justify-center gap-3 rounded-lg py-10 cursor-pointer transition-colors max-md:!mt-2 max-md:!ml-0 max-md:!w-full max-md:!h-[80px]"
                                  style={{
                                    marginTop: 10,  
                                    width: "95%", // Ganti nilainya untuk mengatur lebar secara manual
                                    height: "80px",
                                    border: "2px dashed rgba(16,230,241,0.4)",
                                    background: "rgba(16,230,241,0.04)",
                                  }} 
                                  id="upload-label-ktm">
                                    <svg width="20" height="20" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] fill-current'>
                                        <path d="M60.7327 73.4824L55.2502 79.0074V55.2499C55.2502 54.1228 54.8024 53.0418 54.0054 52.2447C53.2084 51.4477 52.1274 50.9999 51.0002 50.9999C49.873 50.9999 48.792 51.4477 47.995 52.2447C47.198 53.0418 46.7502 54.1228 46.7502 55.2499V79.0074L41.2677 73.4824C40.8714 73.0862 40.401 72.7718 39.8833 72.5574C39.3655 72.3429 38.8106 72.2325 38.2502 72.2325C37.6898 72.2325 37.1349 72.3429 36.6171 72.5574C36.0994 72.7718 35.629 73.0862 35.2327 73.4824C34.8364 73.8787 34.5221 74.3491 34.3076 74.8669C34.0932 75.3846 33.9828 75.9395 33.9828 76.4999C33.9828 77.0603 34.0932 77.6152 34.3076 78.133C34.5221 78.6507 34.8364 79.1212 35.2327 79.5174L47.9827 92.2674C48.3869 92.6544 48.8635 92.9577 49.3852 93.1599C49.8939 93.3848 50.444 93.5009 51.0002 93.5009C51.5564 93.5009 52.1065 93.3848 52.6152 93.1599C53.1369 92.9577 53.6135 92.6544 54.0177 92.2674L66.7677 79.5174C67.568 78.7171 68.0176 77.6317 68.0176 76.4999C68.0176 75.3681 67.568 74.2827 66.7677 73.4824C65.9674 72.6821 64.882 72.2325 63.7502 72.2325C62.6184 72.2325 61.533 72.6821 60.7327 73.4824ZM78.2852 26.4349C75.6884 20.4679 71.2068 15.517 65.527 12.3408C59.8472 9.16452 53.2827 7.93821 46.8393 8.84973C40.3959 9.76126 34.4291 12.7603 29.8533 17.3874C25.2774 22.0145 22.345 28.0143 21.5052 34.4674C17.4532 35.4378 13.8986 37.8625 11.5166 41.281C9.13453 44.6995 8.09086 48.8738 8.58378 53.0111C9.07669 57.1484 11.0719 60.9606 14.1904 63.7238C17.3089 66.487 21.3336 68.0087 25.5002 67.9999C26.6274 67.9999 27.7084 67.5522 28.5054 66.7551C29.3024 65.9581 29.7502 64.8771 29.7502 63.7499C29.7502 62.6228 29.3024 61.5418 28.5054 60.7447C27.7084 59.9477 26.6274 59.4999 25.5002 59.4999C23.2459 59.4999 21.0839 58.6044 19.4898 57.0103C17.8957 55.4163 17.0002 53.2543 17.0002 50.9999C17.0002 48.7456 17.8957 46.5836 19.4898 44.9895C21.0839 43.3955 23.2459 42.4999 25.5002 42.4999C26.6274 42.4999 27.7084 42.0522 28.5054 41.2551C29.3024 40.4581 29.7502 39.3771 29.7502 38.2499C29.7611 33.2234 31.5534 28.3634 34.8088 24.5334C38.0643 20.7034 42.572 18.1515 47.5311 17.3309C52.4903 16.5103 57.5798 17.4742 61.8954 20.0515C66.211 22.6287 69.4733 26.6523 71.1027 31.4074C71.3456 32.1377 71.7823 32.7884 72.3662 33.2899C72.95 33.7914 73.6591 34.1249 74.4177 34.2549C77.2485 34.7899 79.8147 36.2677 81.6981 38.4477C83.5815 40.6277 84.6711 43.3812 84.7894 46.2596C84.9077 49.1381 84.0477 51.9718 82.3495 54.2989C80.6513 56.6261 78.215 58.3095 75.4377 59.0749C74.8963 59.2145 74.3877 59.4593 73.941 59.7953C73.4942 60.1314 73.118 60.5522 72.8338 61.0337C72.5497 61.5151 72.3632 62.0479 72.2849 62.6014C72.2066 63.155 72.2382 63.7186 72.3777 64.2599C72.5172 64.8013 72.762 65.3099 73.0981 65.7567C73.4342 66.2034 73.855 66.5796 74.3364 66.8638C74.8179 67.1479 75.3506 67.3345 75.9042 67.4127C76.4578 67.491 77.0213 67.4595 77.5627 67.3199C82.0353 66.1381 86.0001 63.5289 88.855 59.8887C91.7098 56.2484 93.2988 51.776 93.3805 47.1506C93.4622 42.5251 92.0323 37.9994 89.3079 34.2605C86.5834 30.5217 82.7133 27.7741 78.2852 26.4349Z" />
                                    </svg>
                                    <span>Pilih File</span>
                                </label>
                                <span id="upload-success-ktm" className="text-2xl text-green-500 font-semibold" style={{display: "none"}}>
                                    ✅ Berhasil diunggah!
                                </span>
                                <button type="button" id="change-file-button-ktm" className="rounded-3xl px-4 py-2 border-none bg-[#707070] hover:bg-[#505050] text-white cursor-pointer transition-colors duration-300" style={{display: "none"}}>
                                    Ganti File
                                </button>
                            </div>
                        </span>
                    </div>

                    <div className="flex gap-3 mt-2 max-md:!mt-4 max-md:!w-full max-md:!gap-2">
                      <button
                        type="button"
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
                        type="submit"
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}