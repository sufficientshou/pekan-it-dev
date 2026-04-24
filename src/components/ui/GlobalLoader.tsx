"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense, useRef } from "react";

function LoaderComponent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Menggunakan state untuk menentukan apakah loading sedang berjalan
  const [isLoading, setIsLoading] = useState(true);
  
  // Ref untuk menghindari loader muncul ganda atau bermasalah dalam interval
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Saat inisialisasi / ganti halaman, paksa loading aktif
    setIsLoading(true);
    
    // Beri minimal waktu 1 detik (1000ms) agar animasi CSS terlihat cakep
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]); // Hapus searchParams dari dependency untuk avoid infinite loop

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#060014] transition-opacity duration-300"
      style={{ opacity: isLoading ? 1 : 0 }}
    >
      {/* Element CSS Loader dari instruksi Anda */}
      <style>{`
        .loader {
          width: 40px;
          aspect-ratio: 1;
          display: flex;
          transform-origin: 0% 150%;
          animation: l20-0 2s infinite linear;
        }
        .loader:before,
        .loader:after {
          content: "";
          flex: 1;
          background: #f03355;
          animation: l20-1 1s infinite linear alternate;
          border-radius: 100px 0 0 100px;
          transform-origin: 100% 100%;
        }
        .loader:after {
          border-radius: 0 100px 100px 0;
          transform-origin: 0% 100%;
          --s: -1;
        }
        @keyframes l20-0 {
          0%, 10% { transform: translateY(0) scaleY(1); }
          49.99% { transform: translateY(-100%) scaleY(1); }
          50% { transform: translateY(-100%) scaleY(-1); }
          90%, 100% { transform: translateY(-200%) scaleY(-1); }
        }
        @keyframes l20-1 {
          0%, 20% { transform: rotate(0deg) translate(0, 0) rotate(0deg); }
          50% { transform: rotate(calc(var(--s, 1)*-90deg)) translate(0, 0) rotate(0deg); }
          100% { transform: rotate(calc(var(--s, 1)*-90deg)) translate(0, -20px) rotate(calc(var(--s, 1)*-90deg)); }
        }
      `}</style>

      {/* Bagian Animasi Loader Murni */}
      <div className="relative flex items-center justify-center">
        {/* CSS Loader Murni yang Anda berikan */}
        <div className="loader drop-shadow-[0_0_10px_rgba(240,51,85,0.6)]"></div>
      </div>
    </div>
  );
}

export default function GlobalLoader() {
  return (
    <Suspense fallback={null}>
      <LoaderComponent />
    </Suspense>
  );
}
