"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense, useRef } from "react";
import { BASE_PATH } from "@/config/constants";

// Pre-defined star positions to avoid Math.random() hydration mismatch
const STARS = [
  { w: 2, h: 2, l: 5, t: 12, o: 0.5, dur: 6, del: 0 },
  { w: 1.5, h: 1.5, l: 15, t: 45, o: 0.4, dur: 7, del: 1.2 },
  { w: 3, h: 3, l: 25, t: 8, o: 0.6, dur: 5.5, del: 2.5 },
  { w: 2, h: 2, l: 35, t: 70, o: 0.3, dur: 6.5, del: 0.8 },
  { w: 1, h: 1, l: 42, t: 30, o: 0.7, dur: 7.5, del: 3.1 },
  { w: 2.5, h: 2.5, l: 55, t: 55, o: 0.45, dur: 5, del: 1.8 },
  { w: 1.5, h: 1.5, l: 62, t: 15, o: 0.55, dur: 6.8, del: 4.2 },
  { w: 3, h: 3, l: 72, t: 80, o: 0.35, dur: 5.8, del: 0.5 },
  { w: 2, h: 2, l: 78, t: 40, o: 0.5, dur: 7.2, del: 2.8 },
  { w: 1, h: 1, l: 85, t: 65, o: 0.6, dur: 6.2, del: 3.5 },
  { w: 2.5, h: 2.5, l: 92, t: 20, o: 0.4, dur: 5.3, del: 1.5 },
  { w: 1.5, h: 1.5, l: 8, t: 88, o: 0.5, dur: 7.8, del: 4.0 },
  { w: 2, h: 2, l: 18, t: 60, o: 0.45, dur: 6.4, del: 2.2 },
  { w: 3, h: 3, l: 30, t: 35, o: 0.3, dur: 5.6, del: 0.3 },
  { w: 1, h: 1, l: 48, t: 90, o: 0.65, dur: 7.0, del: 3.8 },
  { w: 2, h: 2, l: 58, t: 5, o: 0.4, dur: 6.6, del: 1.0 },
  { w: 1.5, h: 1.5, l: 68, t: 50, o: 0.55, dur: 5.2, del: 2.6 },
  { w: 2.5, h: 2.5, l: 82, t: 75, o: 0.35, dur: 7.4, del: 4.5 },
  { w: 1, h: 1, l: 95, t: 42, o: 0.5, dur: 6.0, del: 0.7 },
  { w: 2, h: 2, l: 12, t: 25, o: 0.6, dur: 5.9, del: 3.3 },
  { w: 3, h: 3, l: 38, t: 95, o: 0.3, dur: 7.6, del: 1.6 },
  { w: 1.5, h: 1.5, l: 50, t: 18, o: 0.5, dur: 6.3, del: 4.8 },
  { w: 2, h: 2, l: 65, t: 72, o: 0.45, dur: 5.4, del: 2.0 },
  { w: 1, h: 1, l: 75, t: 10, o: 0.55, dur: 7.1, del: 0.2 },
  { w: 2.5, h: 2.5, l: 88, t: 58, o: 0.4, dur: 6.7, del: 3.6 },
  { w: 2, h: 2, l: 3, t: 48, o: 0.5, dur: 5.7, del: 1.4 },
  { w: 1.5, h: 1.5, l: 22, t: 82, o: 0.35, dur: 7.3, del: 4.3 },
  { w: 3, h: 3, l: 45, t: 28, o: 0.6, dur: 6.1, del: 0.9 },
  { w: 1, h: 1, l: 52, t: 68, o: 0.45, dur: 5.1, del: 2.4 },
  { w: 2, h: 2, l: 70, t: 3, o: 0.5, dur: 7.7, del: 3.9 },
];

function LoaderComponent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const fadeRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setIsFadingOut(false);
    
    if (timerRef.current) clearTimeout(timerRef.current);
    if (fadeRef.current) clearTimeout(fadeRef.current);

    // Start fade out after 1.4s
    timerRef.current = setTimeout(() => {
      setIsFadingOut(true);
      // Remove from DOM after fade-out animation completes
      fadeRef.current = setTimeout(() => {
        setIsLoading(false);
      }, 600);
    }, 1400);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (fadeRef.current) clearTimeout(fadeRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ 
        opacity: isFadingOut ? 0 : 1,
        transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        background: "radial-gradient(ellipse at center, #0a0025 0%, #060014 50%, #020008 100%)",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes loaderSnow {
          0% { opacity: 0; transform: translateY(-10px); }
          10% { opacity: 1; }
          100% { opacity: 0.3; transform: translateY(100vh); }
        }

        @keyframes loaderFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes loaderPulseGlow {
          0%, 100% { 
            filter: drop-shadow(0 0 15px rgba(16,230,241,0.3)) drop-shadow(0 0 30px rgba(208,0,203,0.2));
            transform: scale(1);
          }
          50% { 
            filter: drop-shadow(0 0 25px rgba(16,230,241,0.6)) drop-shadow(0 0 50px rgba(208,0,203,0.4));
            transform: scale(1.05);
          }
        }

        @keyframes loaderRingPulse {
          0% { transform: scale(0.8); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 0.2; }
          100% { transform: scale(0.8); opacity: 0.6; }
        }

        @keyframes loaderFadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes loaderOrbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes loaderProgressBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        .ldr-stars-layer {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          overflow: hidden;
        }

        .ldr-star {
          position: absolute;
          border-radius: 50%;
          background: white;
          animation: loaderSnow linear infinite;
        }

        .ldr-center {
          position: relative;
          z-index: 20;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          animation: loaderFadeInUp 0.8s ease-out forwards;
        }

        .ldr-logo-wrapper {
          position: relative;
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ldr-logo-wrapper img {
          width: 90px;
          height: 90px;
          object-fit: contain;
          animation: loaderPulseGlow 2.5s ease-in-out infinite, loaderFloat 3s ease-in-out infinite;
          position: relative;
          z-index: 3;
        }

        .ldr-orbit-ring {
          position: absolute;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          border: 1px solid transparent;
          border-top-color: rgba(16,230,241,0.4);
          border-right-color: rgba(208,0,203,0.2);
          animation: loaderOrbit 3s linear infinite;
          z-index: 2;
        }

        .ldr-orbit-ring-2 {
          position: absolute;
          width: 170px;
          height: 170px;
          border-radius: 50%;
          border: 1px solid transparent;
          border-bottom-color: rgba(208,0,203,0.3);
          border-left-color: rgba(16,230,241,0.15);
          animation: loaderOrbit 5s linear infinite reverse;
          z-index: 1;
        }

        .ldr-glow {
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(16,230,241,0.12) 0%, rgba(208,0,203,0.08) 40%, transparent 70%);
          animation: loaderRingPulse 3s ease-in-out infinite;
          z-index: 1;
        }

        .ldr-progress-track {
          width: 180px;
          height: 2px;
          background: rgba(255,255,255,0.06);
          border-radius: 2px;
          overflow: hidden;
        }

        .ldr-progress-fill {
          height: 100%;
          border-radius: 2px;
          background: linear-gradient(90deg, rgba(16,230,241,0.8), rgba(208,0,203,0.8));
          animation: loaderProgressBar 1.4s ease-out forwards;
          box-shadow: 0 0 8px rgba(16,230,241,0.4);
        }

        .ldr-text {
          font-family: 'Zen Dots', cursive;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          background: linear-gradient(90deg, rgba(16,230,241,0.7), rgba(208,0,203,0.7));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: loaderFadeInUp 0.8s 0.3s ease-out both;
        }
      `}</style>

      {/* Ambient gradient orbs */}
      <div style={{
        position: "absolute",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(16,230,241,0.04) 0%, transparent 70%)",
        top: "20%",
        left: "10%",
        filter: "blur(60px)",
      }} />
      <div style={{
        position: "absolute",
        width: "350px",
        height: "350px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(208,0,203,0.04) 0%, transparent 70%)",
        bottom: "15%",
        right: "10%",
        filter: "blur(60px)",
      }} />

      {/* Star layers - using pre-defined positions to avoid hydration mismatch */}
      <div className="ldr-stars-layer">
        {STARS.map((s, i) => (
          <div
            key={i}
            className="ldr-star"
            style={{
              width: `${s.w}px`,
              height: `${s.h}px`,
              left: `${s.l}%`,
              top: `${s.t}%`,
              opacity: s.o,
              animationDuration: `${s.dur}s`,
              animationDelay: `${s.del}s`,
            }}
          />
        ))}
      </div>

      {/* Center content */}
      <div className="ldr-center">
        <div className="ldr-logo-wrapper">
          <div className="ldr-glow" />
          <div className="ldr-orbit-ring" />
          <div className="ldr-orbit-ring-2" />
          <img src={`${BASE_PATH}/images/LOGO.png`} alt="PEKAN IT" />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
          <div className="ldr-progress-track">
            <div className="ldr-progress-fill" />
          </div>
          <span className="ldr-text">Loading</span>
        </div>
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
