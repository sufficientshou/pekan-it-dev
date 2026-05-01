import { BASE_PATH } from "@/config/constants";

type Folder = {
  id: string;
  label: string;
  sub: string | null;
  bgColor: string;
  lightBg: string;
  icon: string;
  link?: string;
};

const folders: Folder[] = [
  {
    id: "whatsapp",
    label: "Upload Bukti Share pamflet ke 2 grup WhatsApp",
    sub: null,
    bgColor: "#37c7b8",
    lightBg: "#5eddcf",
    icon: `${BASE_PATH}/images/Vector.svg`,
  },
  {
    id: "follow-himtika",
    label: "Upload Bukti Follow IG HIMTIKA",
    sub: "Klik folder untuk mengikuti @himtika_official",
    bgColor: "#38c7ea",
    lightBg: "#6adaff",
    icon: `${BASE_PATH}/images/ri_instagram-fill.svg`,
    link: "https://www.instagram.com/himtika_unsika?igsh=MXNoaXdpZmpieWF3Nw==",
  },
  {
    id: "follow-pekanit",
    label: "Upload Bukti Follow IG PEKAN IT",
    sub: "Klik folder untuk mengikuti @pekanit_unsika",
    bgColor: "#3f78ff",
    lightBg: "#6f9cff",
    icon: `${BASE_PATH}/images/ri_instagram-fill (1).svg`,
    link: "https://www.instagram.com/pekanit_unsika?igsh=NW9mOXI5MHBvanR4",
  },
  {
    id: "twibbon",
    label: "Bukti Upload Postingan Twibbon di IG",
    sub: "Klik folder untuk membuka halaman Twibbon.",
    bgColor: "#6d63ff",
    lightBg: "#9a93ff",
    icon: `${BASE_PATH}/images/fluent_image-sparkle-20-filled.svg`,
    link: "https://drive.google.com/drive/folders/1wKnQv_H60Mn9l9pTuHHoW-hHPB21ENdD",
  },
  {
    id: "share-ig",
    label: "Upload Bukti Share pamflet ke IG Story",
    sub: null,
    bgColor: "#9a56f2",
    lightBg: "#b87ff7",
    icon: `${BASE_PATH}/images/Vector (1).svg`,
  },
  {
    id: "ktm",
    label: "Upload Bukti KRS atau KTM",
    sub: null,
    bgColor: "#9da8b2",
    lightBg: "#bcc5cd",
    icon: `${BASE_PATH}/images/Vector (2).svg`,
  },
];

const folderMask = {
  WebkitMask:
    "conic-gradient(#0000 25%, blue 0 50%, green 0 95%, purple 0), " +
    "radial-gradient(70px, #0000 98%, #000) 10000% 10000%/99.5% 99.5%",
  mask:
    "conic-gradient(#0000 25%, blue 0 50%, green 0 95%, purple 0), " +
    "radial-gradient(70px, #0000 98%, #000) 10000% 10000%/99.5% 99.5%",
};

export default function Syarat1() {
  return (
    <section
      id="syarat-pendaftaran-section"
      className="relative w-full overflow-hidden"
      style={{ background: "#000923", marginTop: "90px" }}
    >
      
      {/* Blur gradient untuk transisi dari section sebelumnya */}
      <div 
        className="absolute left-0 w-full pointer-events-none"
        style={{ 
          top: "-120px",
          height: "120px",
          background: "linear-gradient(180deg, rgba(0,9,35,0) 0%, rgba(0,9,35,0.8) 60%, rgba(0,9,35,1) 100%)",
          filter: "blur(20px)",
        }}
      />
      
      <div
        className="absolute max-md:!hidden"
        style={{
          top: "57px", left: "-39px", width: "266px", height: "9px",
          transform: "rotate(180deg)",
          filter: "blur(7px)",
          background: "linear-gradient(90deg, rgba(16,230,241,0.7) 0%, rgba(208,0,203,1) 100%)",
          border: "1px solid black",
        }}
      />
      <div
        className="absolute max-md:!hidden"
        style={{
          top: "116px", left: "-61px", width: "210px", height: "9px",
          transform: "rotate(180deg)",
          filter: "blur(7px)",
          background: "linear-gradient(90deg, rgba(16,230,241,0.7) 0%, rgba(208,0,203,1) 100%)",
          border: "1px solid black",
        }}
      />
      
      <div
        className="absolute rounded-full max-md:!hidden"
        style={{
          top: "57px", left: "196px", width: "76px", height: "18px",
          transform: "rotate(180deg)",
          filter: "blur(11px)",
          background: "rgba(16,230,241,1)",
        }}
      />
      <div
        className="absolute max-md:!hidden"
        style={{
          top: "112px", left: "0", width: "151px", height: "9px",
          transform: "rotate(180deg)",
          filter: "blur(4.5px)",
          background: "linear-gradient(90deg, rgba(16,230,241,0.3) 0%, rgba(208,0,203,0.15) 100%)",
          borderRadius: "15px 0 0 15px",
        }}
      />
      <div
        className="absolute max-md:!hidden"
        style={{
          top: "108px", left: "97px", width: "60px", height: "18px",
          transform: "rotate(180deg)",
          filter: "blur(11px)",
          background: "rgba(16,230,241,1)",
          borderRadius: "30px 30px 0 0",
        }}
      />

      <div
        className="absolute max-md:!hidden"
        style={{
          top: "57px", right: "-39px", width: "266px", height: "9px",
          transform: "rotate(180deg)",
          filter: "blur(7px)",
          background: "linear-gradient(90deg, rgba(16,230,241,0.7) 0%, rgba(208,0,203,1) 100%)",
          border: "1px solid black",
        }}
      />
      <div
        className="absolute max-md:!hidden"
        style={{
          top: "116px", right: "-61px", width: "210px", height: "9px",
          transform: "rotate(180deg)",
          filter: "blur(7px)",
          background: "linear-gradient(90deg, rgba(16,230,241,0.7) 0%, rgba(208,0,203,1) 100%)",
          border: "1px solid black",
        }}
      />
      
      <div
        className="absolute rounded-full max-md:!hidden"
        style={{
          top: "57px", right: "196px", width: "76px", height: "18px",
          transform: "rotate(180deg)",
          filter: "blur(11px)",
          background: "rgba(16,230,241,1)",
        }}
      />
      <div
        className="absolute max-md:!hidden"
        style={{
          top: "112px", right: "0", width: "151px", height: "9px",
          transform: "rotate(180deg)",
          filter: "blur(4.5px)",
          background: "linear-gradient(90deg, rgba(16,230,241,0.3) 0%, rgba(208,0,203,0.15) 100%)",
          borderRadius: "15px 0 0 15px",
        }}
      />
      <div
        className="absolute max-md:!hidden"
        style={{
          top: "108px", right: "97px", width: "60px", height: "18px",
          transform: "rotate(180deg)",
          filter: "blur(11px)",
          background: "rgba(16,230,241,1)",
          borderRadius: "30px 30px 0 0",
        }}
      />

      <div className="relative z-10 flex flex-col items-center w-full pt-10 pb-20">
        
        <div className="flex flex-col items-center gap-4 mb-16 max-md:!mb-8">
          <h2
            className="text-center font-bold leading-tight max-md:!text-[40px]"
            style={{ fontFamily: "'Zen Dots', sans-serif", fontSize: "72px" }}
          >
            <span
              style={{
                background: "linear-gradient(90deg, #ff00ff, #00ffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              } as React.CSSProperties}
            >
              Before
            </span>
            <span className="text-white"> You</span>
            <br className="max-md:!hidden" />
            <span className="text-white">Register</span>
          </h2>
          <p
            className="w-full max-w-[536px] text-center text-white text-2xl font-normal leading-relaxed max-md:!text-lg max-md:!mb-5 max-md:!px-4"
            style={{ fontFamily: "'Exo 2', sans-serif", marginBottom: "40px" }}
          >
            Peserta wajib memenuhi beberapa ketentuan berikut sebelum mengikuti lomba:
          </p>
        </div>

        <div className="mx-auto max-w-[1300px] w-full grid grid-cols-1 gap-x-16 gap-y-20 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-10 place-items-center max-md:!flex max-md:!flex-row max-md:!flex-nowrap max-md:!overflow-x-auto max-md:!snap-x max-md:!snap-mandatory max-md:!justify-start max-md:!items-center max-md:!gap-x-6 max-md:!pb-10 max-md:[scrollbar-width:none] max-md:![&::-webkit-scrollbar]:hidden">
          {folders.map((f) => (
            <SyaratCard key={f.id} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SyaratCard({
  label,
  sub,
  bgColor,
  lightBg,
  icon,
  link,
}: {
  label: string;
  sub: string | null;
  bgColor: string;
  lightBg: string;
  icon: string;
  link?: string;
}) {
  const CardContent = (
    <div className="relative max-md:!w-[82vw] max-md:!max-w-[300px] max-md:!h-[210px] max-md:!shrink-0 max-md:!snap-center max-md:active:scale-[0.98] transition-all hover:scale-[1.02] cursor-pointer" style={{ width: "360px", height: "260px" }}>

      <div
        className="absolute top-0 left-0 flex flex-col justify-end items-start max-md:!w-[82vw] max-md:!max-w-[300px] max-md:!h-[210px] max-md:!p-5"
        style={{ width: "360px", height: "260px", padding: "32px" }}
      >
        
        <div
          className="absolute left-0 top-0 w-full h-full overflow-hidden"
          style={{
            borderRadius: "20px",
          }}
        >
          
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{ background: bgColor, borderRadius: "20px" }}
          />

          <div
            className="absolute left-0 top-0 w-full h-full"
            style={{
              borderRadius: "20px",
              background: "linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.0) 55%)",
            }}
          />

          <div
            className="absolute overflow-hidden"
            style={{
              bottom: "12px",
              left: "12px",
              right: "12px",
              height: "90%",
              borderRadius: "20px",
            }}
          >
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{ background: lightBg, borderRadius: "20px" }}
            />

            <img loading="lazy"
              src={icon}
              alt=""
              className="pointer-events-none absolute max-md:!w-[130px] max-md:!h-[120px] max-md:!opacity-80"
              style={{ 
                bottom: "0px", 
                right: "-12px", 
                width: "200px", 
                height: "190px", 
                objectFit: "contain",
                zIndex: 0,
                opacity: 1
              }}
            />

            <div
              className="relative z-10 flex flex-col justify-center h-full p-5 max-md:!p-4"
              style={{ gap: "8px" }}
            >
              <span
                className="text-[#101c44] font-semibold leading-[1.3] max-w-[170px] max-md:!text-[15px] max-md:!ml-[10px]"
                style={{ marginLeft: "20px",fontFamily: "'Zen Dots', sans-serif", fontSize: "20px" }}
              >
                {label}
              </span>
              {sub && (
                <span
                  className="font-normal leading-tight text-[#17234d]/80 max-md:!text-[10px] max-md:!ml-[10px]"
                  style={{ marginLeft: "20px", fontFamily: "'Zen Dots', sans-serif", fontSize: "12px" }}
                >
                  {sub}
                </span>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {CardContent}
      </a>
    );
  }

  return CardContent;
}
