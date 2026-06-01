"use client";

import { useState } from "react";
import { BASE_PATH } from '@/config/constants';

const POSITION_CONFIG = {
  titleTop: -50,
  mascotTop: 477,
  topCardsTop: 242,
  bottomCardsTop: 914,
};

interface MascotCardProps {
  imageSrc: string;
  title: string;
  label?: string;
  labelPosition?: 'top' | 'bottom';
  description: string;
  cardBase: string;
  cardBoxShadow?: string;
  isMobile: boolean;
  desktopStyle?: React.CSSProperties;
  mobileStyle?: React.CSSProperties;
  mobileClassName?: string;
}

function MascotCard({
  imageSrc,
  title,
  label,
  labelPosition = 'top',
  description,
  cardBase,
  cardBoxShadow,
  isMobile,
  desktopStyle,
  mobileStyle,
  mobileClassName,
}: MascotCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showContent, setShowContent] = useState<'image' | 'text'>('image');

  const handleCardClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setShowContent((prev) => (prev === 'image' ? 'text' : 'image'));
      setIsOpen((prev) => !prev);
    }, 350);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  const contentSizeClass = isMobile ? "w-[90px] h-[90px]" : "w-[130px] h-[130px]";
  const gearSize = isMobile ? "90px" : "140px";

  const innerContent = (
    <div
      className={`w-full h-full flex flex-col items-center justify-center p-3 transition-opacity duration-200 ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {showContent === 'image' ? (
        <img
          loading="lazy"
          src={imageSrc}
          alt={title}
          className={`${contentSizeClass} object-contain transition-transform duration-300 group-hover:scale-105`}
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-center w-full h-full relative">
          <h4
            className="text-white font-bold mb-1 uppercase tracking-wider"
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: isMobile ? "10px" : "18px",
            }}
          >
            {title}
          </h4>
          <p
            className="text-gray-300 leading-relaxed overflow-y-auto px-1 font-normal"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontSize: isMobile ? "8px" : "14px",
              maxHeight: isMobile ? "60px" : "100px",
            }}
          >
            {description}
          </p>
          <div
            className="mt-1 text-pink-400 font-semibold uppercase tracking-widest animate-pulse"
            style={{ fontSize: isMobile ? "7px" : "10px" }}
          >
            {isMobile ? "Tap to Close" : "Click to Close"}
          </div>
        </div>
      )}
    </div>
  );

  const gearOverlay = isTransitioning && (
    <div
      className="absolute top-1/2 left-1/2 pointer-events-none z-30"
      style={{
        width: gearSize,
        height: gearSize,
        animation: "gearSpinReveal 0.7s cubic-bezier(0.25, 1, 0.5, 1) forwards",
      }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_0_15px_rgba(0,255,255,0.7)]"
      >
        <defs>
          <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="100%" stopColor="#d000cb" />
          </linearGradient>
        </defs>
        <g fill="url(#gearGradient)">
          <circle cx="50" cy="50" r="30" />
          
          <rect x="43" y="8" width="14" height="84" rx="3" transform="rotate(0 50 50)" />
          <rect x="43" y="8" width="14" height="84" rx="3" transform="rotate(45 50 50)" />
          <rect x="43" y="8" width="14" height="84" rx="3" transform="rotate(90 50 50)" />
          <rect x="43" y="8" width="14" height="84" rx="3" transform="rotate(135 50 50)" />
          
          <circle cx="50" cy="50" r="15" fill="#000923" />
          
          <circle cx="50" cy="50" r="7" fill="url(#gearGradient)" />
        </g>
      </svg>
    </div>
  );

  const labelEl = label && (
    <h3
      className="text-center font-bold uppercase tracking-widest"
      style={{
        fontFamily: "'Zen Dots', sans-serif",
        fontSize: "16px",
        background: "linear-gradient(90deg, #ff00ff, #00ffff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      } as React.CSSProperties}
    >
      {label}
    </h3>
  );

  if (isMobile) {
    return (
      <div className="flex flex-col items-center gap-3">
        {labelPosition === 'top' && labelEl}
        <div
          onClick={handleCardClick}
          className={`${cardBase} ${mobileClassName} flex items-center justify-center cursor-pointer transition-all duration-300 overflow-hidden active:scale-95`}
          style={{
            ...mobileStyle,
            zIndex: isTransitioning ? 30 : 10,
          }}
        >
          {gearOverlay}
          {innerContent}
        </div>
        {labelPosition === 'bottom' && labelEl}
      </div>
    );
  }

  return (
    <>
      {label && desktopStyle && (
        <h3
          className="absolute text-center font-bold uppercase tracking-widest"
          style={{
            fontFamily: "'Zen Dots', sans-serif",
            fontSize: "clamp(24px, 2.5vw, 64px)",
            top: labelPosition === 'bottom'
              ? `calc(${desktopStyle.top} + ${desktopStyle.height} + 80px)`
              : `calc(${desktopStyle.top} - 120px)`,
            left: `calc(${desktopStyle.left} + (${desktopStyle.width} / 2))`,
            transform: "translateX(-50%)",
            width: "max-content",
            whiteSpace: "nowrap",
            background: "linear-gradient(90deg, #ff00ff, #00ffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            zIndex: 20,
            pointerEvents: "none",
          } as React.CSSProperties}
        >
          {label}
        </h3>
      )}
      <div
        onClick={handleCardClick}
        className={`${cardBase} flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-[1.03] overflow-hidden group`}
        style={{
          ...desktopStyle,
          zIndex: isTransitioning ? 30 : 10,
        }}
      >
        {gearOverlay}
        {innerContent}
      </div>
    </>
  );
}

export default function Avatar() {
  const cardBase =
    "absolute rounded-[15px] border-2 border-[#d000cb] backdrop-blur-[2px] backdrop-brightness-100 backdrop-saturate-100";
  const cardBoxShadow = "0px 0px 100px #d000cb, inset 0 1px 0 rgba(255,255,255,0.40), inset 1px 0 0 rgba(255,255,255,0.32), inset 0 -1px 1px rgba(0,0,0,0.13), inset -1px 0 1px rgba(0,0,0,0.11)";


  return (
    <section
      className="relative w-full overflow-hidden max-md:!h-auto max-md:!pb-0"
      style={{ height: "1415px", background: "#000923", maxWidth: "100vw" }}
    >
      <style>{`
        @keyframes gearSpinReveal {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) scale(0);
            opacity: 0;
          }
          45% {
            transform: translate(-50%, -50%) rotate(180deg) scale(1.3);
            opacity: 1;
          }
          65% {
            transform: translate(-50%, -50%) rotate(270deg) scale(1.3);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) scale(2.2);
            opacity: 0;
          }
        }
      `}</style>

      <div className="max-md:!hidden w-full h-full relative" style={{ top: "150px" }}>
      
      <div 
        className="absolute -top-[150px] left-0 w-full pointer-events-none"
        style={{ 
          height: "100px",
          background: "linear-gradient(180deg, rgba(0,9,35,0.6) 0%, rgba(0,9,35,0.2) 50%, transparent 100%)",
          zIndex: 2,
        }}
      />

      <div className="absolute top-0 left-[calc(51%+70px)] -translate-x-1/2 w-[1440px] h-full pointer-events-none">
        <div
          className="absolute"
          style={{
            top: "292px", left: "599px", width: "527px", height: "444px",
            background: "linear-gradient(135deg, transparent 30%, rgba(208,0,203,0.55) 50%, transparent 70%)",
            filter: "blur(18px)",
            transform: "rotate(0deg)",
            pointerEvents: "none",
          }}
        />
        
        <div
          className="absolute"
          style={{
            top: "620px", left: "178px", width: "527px", height: "444px",
            background: "linear-gradient(135deg, transparent 30%, rgba(208,0,203,0.55) 50%, transparent 70%)",
            filter: "blur(18px)",
            pointerEvents: "none",
          }}
        />
        
        <div
          className="absolute"
          style={{
            top: "599px", left: "550px", width: "527px", height: "444px",
            background: "linear-gradient(225deg, transparent 30%, rgba(208,0,203,0.55) 50%, transparent 70%)",
            filter: "blur(18px)",
            pointerEvents: "none",
          }}
        />
        
        <div
          className="absolute"
          style={{
            top: "292px", left: "208px", width: "527px", height: "444px",
            background: "linear-gradient(225deg, transparent 30%, rgba(208,0,203,0.55) 50%, transparent 70%)",
            filter: "blur(18px)",
            pointerEvents: "none",
          }}
        />
      </div>


      <div
        className="absolute flex items-center justify-center"
        style={{ top: `${POSITION_CONFIG.titleTop}px`, left: "50%", transform: "translateX(-50%)", width: "713px", maxWidth: "90%", height: "64px" }}
      >
        <h2
          className="font-bold text-center whitespace-nowrap"
          style={{ fontFamily: "'Zen Dots', sans-serif", fontSize: "65px", lineHeight: 1 }}
        >
          <span className="text-white">Meet Our </span>
          <span
            style={{
              background: "linear-gradient(90deg, #ff00ff, #00ffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            } as React.CSSProperties}
          >
            Mascott
          </span>
        </h2>
      </div>

      <img loading="lazy"
        src={`${BASE_PATH}/images/mascot.webp`}
        alt="Mascot"
        className="absolute"
        style={{ top: `${POSITION_CONFIG.mascotTop}px`, left: "52%", transform: "translateX(-50%)", width: "332px", height: "328px", objectFit: "contain" }}
      />

      <MascotCard
        imageSrc={`${BASE_PATH}/images/kalung.webp`}
        title="Lonceng"
        label="Lonceng"
        description="melambangkan kepekaan terhadap informasi"
        cardBase={cardBase}
        isMobile={false}
        desktopStyle={{
          top: `${POSITION_CONFIG.topCardsTop}px`, left: "max(50px, calc(50% - 473px))",
          width: "207px", height: "159px",
          background: "#000923",
          boxShadow: cardBoxShadow,
        }}
      />

      <MascotCard
        imageSrc={`${BASE_PATH}/images/gear.webp`}
        title="Gear"
        label="Gear"
        description="melambangkan proses yg terstruktur"
        cardBase={cardBase}
        isMobile={false}
        desktopStyle={{
          top: `${POSITION_CONFIG.topCardsTop}px`, left: "min(calc(100% - 257px), calc(50% + 266px))",
          width: "207px", height: "159px",
          background: "#000923",
          boxShadow: cardBoxShadow,
        }}
      />

      <MascotCard
        imageSrc={`${BASE_PATH}/images/mata.webp`}
        title="Mata"
        label="Mata LED"
        labelPosition="bottom"
        description="melambangkan keterarahan (focus), dan berpikir terarah"
        cardBase={cardBase}
        isMobile={false}
        desktopStyle={{
          top: `${POSITION_CONFIG.bottomCardsTop}px`, left: "min(calc(100% - 257px), calc(50% + 266px))",
          width: "207px", height: "159px",
          background: "#000923",
          boxShadow: cardBoxShadow,
        }}
      />

      <MascotCard
        imageSrc={`${BASE_PATH}/images/kabel.webp`}
        title="Kabel"
        label="Kabel"
        labelPosition="bottom"
        description="melambangkan koneksi dan keterhubungan tanpa batas"
        cardBase={cardBase}
        isMobile={false}
        desktopStyle={{
          top: `${POSITION_CONFIG.bottomCardsTop}px`, left: "max(50px, calc(50% - 473px))",
          width: "207px", height: "159px",
          background: "#000923",
          boxShadow: cardBoxShadow,
        }}
      />
      </div>

      <div className="hidden max-md:!flex flex-col w-full px-4 pt-[25vh] pb-4 gap-10 items-center z-20 relative">

        <h2
          className="text-center font-bold leading-tight"
          style={{ fontFamily: "'Zen Dots', sans-serif", fontSize: "40px", lineHeight: 1.2 }}
        >
          <span className="text-white">Meet Our </span>
          <br/>
          <span
            style={{
              background: "linear-gradient(90deg, #ff00ff, #00ffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            } as React.CSSProperties}
          >
            Mascott
          </span>
        </h2>

        <img loading="lazy"
          src={`${BASE_PATH}/images/mascot.webp`}
          alt="Mascot"
          className="w-[280px] h-[280px] object-contain relative z-10 drop-shadow-[0_0_20px_rgba(208,0,203,0.5)]"
          style={{ transform: "translateX(20px)" }}
        />

        <div className="grid grid-cols-2 gap-4 w-full max-w-[400px]">
          <MascotCard
            imageSrc={`${BASE_PATH}/images/kalung.webp`}
            title="Kalung"
            label="Lonceng"
            description="melambangkan kepekaan terhadap informasi"
            cardBase={cardBase}
            isMobile={true}
            mobileClassName="!relative !top-auto !left-auto !w-full !h-[120px]"
            mobileStyle={{
              background: "#000923",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.40), inset 1px 0 0 rgba(255,255,255,0.32), inset 0 -1px 1px rgba(0,0,0,0.13), inset -1px 0 1px rgba(0,0,0,0.11)",
            }}
          />
          <MascotCard
            imageSrc={`${BASE_PATH}/images/gear.webp`}
            title="Gear"
            label="Gear"
            description="melambangkan proses yg terstruktur"
            cardBase={cardBase}
            isMobile={true}
            mobileClassName="!relative !top-auto !left-auto !w-full !h-[120px]"
            mobileStyle={{
              background: "#000923",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.40), inset 1px 0 0 rgba(255,255,255,0.32), inset 0 -1px 1px rgba(0,0,0,0.13), inset -1px 0 1px rgba(0,0,0,0.11)",
            }}
          />
          <MascotCard
            imageSrc={`${BASE_PATH}/images/kabel.webp`}
            title="Kabel"
            label="Kabel"
            labelPosition="bottom"
            description="melambangkan koneksi dan keterhubungan tanpa batas"
            cardBase={cardBase}
            isMobile={true}
            mobileClassName="!relative !top-auto !left-auto !w-full !h-[120px]"
            mobileStyle={{
              background: "#000923",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.40), inset 1px 0 0 rgba(255,255,255,0.32), inset 0 -1px 1px rgba(0,0,0,0.13), inset -1px 0 1px rgba(0,0,0,0.11)",
            }}
          />
          <MascotCard
            imageSrc={`${BASE_PATH}/images/mata.webp`}
            title="Mata"
            label="Mata LED"
            labelPosition="bottom"
            description="melambangkan keterarahan (focus), dan berpikir terarah"
            cardBase={cardBase}
            isMobile={true}
            mobileClassName="!relative !top-auto !left-auto !w-full !h-[120px]"
            mobileStyle={{
              background: "#000923",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.40), inset 1px 0 0 rgba(255,255,255,0.32), inset 0 -1px 1px rgba(0,0,0,0.13), inset -1px 0 1px rgba(0,0,0,0.11)",
            }}
          />
        </div>
      </div>
    </section>
  );
}