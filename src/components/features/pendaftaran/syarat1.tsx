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
    icon: `${BASE_PATH}/images/Vector.webp`,
  },
  {
    id: "follow-himtika",
    label: "Upload Bukti Follow IG HIMTIKA",
    sub: "Klik folder untuk mengikuti @himtika_official",
    bgColor: "#38c7ea",
    lightBg: "#6adaff",
    icon: `${BASE_PATH}/images/ri_instagram-fill.webp`,
    link: "https://www.instagram.com/himtika_unsika?igsh=MXNoaXdpZmpieWF3Nw==",
  },
  {
    id: "follow-pekanit",
    label: "Upload Bukti Follow IG PEKAN IT",
    sub: "Klik folder untuk mengikuti @pekanit_unsika",
    bgColor: "#3f78ff",
    lightBg: "#6f9cff",
    icon: `${BASE_PATH}/images/ri_instagram-fill (1).webp`,
    link: "https://www.instagram.com/pekanit_unsika?igsh=NW9mOXI5MHBvanR4",
  },
  {
    id: "twibbon",
    label: "Bukti Upload Postingan Twibbon di IG",
    sub: "Klik folder untuk membuka halaman Twibbon.",
    bgColor: "#6d63ff",
    lightBg: "#9a93ff",
    icon: `${BASE_PATH}/images/fluent_image-sparkle-20-filled.webp`,
    link: "https://bit.ly/Twibbon_PekanIT2026",
  },
  {
    id: "share-ig",
    label: "Upload Bukti Share pamflet ke IG Story",
    sub: null,
    bgColor: "#9a56f2",
    lightBg: "#b87ff7",
    icon: `${BASE_PATH}/images/Vector (1).webp`,
  },
  {
    id: "ktm",
    label: "Upload Kartu Identitas",
    sub: null,
    bgColor: "#9da8b2",
    lightBg: "#bcc5cd",
    icon: `${BASE_PATH}/images/Vector (2).webp`,
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
          filter: "blur(2px)",
          background: "linear-gradient(90deg, rgba(16,230,241,0.8) 0%, rgba(208,0,203,1) 100%)",
          borderRadius: "50px",
        }}
      />
      <div
        className="absolute max-md:!hidden"
        style={{
          top: "116px", left: "-61px", width: "210px", height: "9px",
          transform: "rotate(180deg)",
          filter: "blur(2px)",
          background: "linear-gradient(90deg, rgba(16,230,241,0.8) 0%, rgba(208,0,203,1) 100%)",
          borderRadius: "50px",
        }}
      />
      
      <div
        className="absolute rounded-full max-md:!hidden"
        style={{
          top: "57px", left: "196px", width: "76px", height: "18px",
          transform: "rotate(180deg)",
          filter: "blur(2px)",
          background: "rgba(16,230,241,1)",
          boxShadow: "0 0 10px rgba(16,230,241,0.8)",
        }}
      />
      <div
        className="absolute max-md:!hidden"
        style={{
          top: "112px", left: "0", width: "151px", height: "9px",
          transform: "rotate(180deg)",
          filter: "blur(2px)",
          background: "linear-gradient(90deg, rgba(16,230,241,0.4) 0%, rgba(208,0,203,0.3) 100%)",
          borderRadius: "15px 0 0 15px",
        }}
      />
      <div
        className="absolute max-md:!hidden"
        style={{
          top: "108px", left: "97px", width: "60px", height: "18px",
          transform: "rotate(180deg)",
          filter: "blur(2px)",
          background: "rgba(16,230,241,1)",
          borderRadius: "50px",
          boxShadow: "0 0 10px rgba(16,230,241,0.8)",
        }}
      />

      <div
        className="absolute max-md:!hidden"
        style={{
          top: "57px", right: "-39px", width: "266px", height: "9px",
          transform: "rotate(180deg)",
          filter: "blur(2px)",
          background: "linear-gradient(90deg, rgba(16,230,241,0.8) 0%, rgba(208,0,203,1) 100%)",
          borderRadius: "50px",
        }}
      />
      <div
        className="absolute max-md:!hidden"
        style={{
          top: "116px", right: "-61px", width: "210px", height: "9px",
          transform: "rotate(180deg)",
          filter: "blur(2px)",
          background: "linear-gradient(90deg, rgba(16,230,241,0.8) 0%, rgba(208,0,203,1) 100%)",
          borderRadius: "50px",
        }}
      />
      
      <div
        className="absolute rounded-full max-md:!hidden"
        style={{
          top: "57px", right: "196px", width: "76px", height: "18px",
          transform: "rotate(180deg)",
          filter: "blur(2px)",
          background: "rgba(16,230,241,1)",
          boxShadow: "0 0 10px rgba(16,230,241,0.8)",
        }}
      />
      <div
        className="absolute max-md:!hidden"
        style={{
          top: "112px", right: "0", width: "151px", height: "9px",
          transform: "rotate(180deg)",
          filter: "blur(2px)",
          background: "linear-gradient(90deg, rgba(16,230,241,0.4) 0%, rgba(208,0,203,0.3) 100%)",
          borderRadius: "15px 0 0 15px",
        }}
      />
      <div
        className="absolute max-md:!hidden"
        style={{
          top: "108px", right: "97px", width: "60px", height: "18px",
          transform: "rotate(180deg)",
          filter: "blur(2px)",
          background: "rgba(16,230,241,1)",
          borderRadius: "50px",
          boxShadow: "0 0 10px rgba(16,230,241,0.8)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center w-full pt-10 pb-20">
        
        <div className="flex flex-col items-center gap-4 mb-16 max-md:!mb-8">
          <h2
            className="text-center font-bold leading-tight max-md:!text-[40px]"
            style={{ fontFamily: "'Zen Dots', sans-serif", fontSize: "clamp(20px, 4vw, 54px)" }}
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
            style={{ fontFamily: "'Exo 2', sans-serif", marginBottom: "40px", fontSize: "clamp(15px, 3vw, 24px)" }}
          >
            Peserta wajib memenuhi beberapa ketentuan berikut sebelum mengikuti lomba:
          </p>
        </div>

        <div className="mx-auto max-w-[1100px] w-full grid grid-cols-1 gap-x-10 gap-y-12 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-10 place-items-center max-md:!flex max-md:!flex-row max-md:!flex-nowrap max-md:!overflow-x-auto max-md:!snap-x max-md:!snap-mandatory max-md:!justify-start max-md:!items-center max-md:!gap-x-6 max-md:!pb-10 max-md:[scrollbar-width:none] max-md:![&::-webkit-scrollbar]:hidden">
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
    <div 
      className="relative group flex flex-col items-center justify-center max-md:!w-[82vw] max-md:!max-w-[300px] max-md:!h-[210px] max-md:!shrink-0 max-md:!snap-center max-md:active:scale-[0.98] transition-all hover:scale-[1.02] cursor-pointer" 
      style={{ width: "500px", height: "210px", '--folder-bg': bgColor, '--folder-light': lightBg } as React.CSSProperties}
    >
      <div className="file relative w-60 h-40 origin-bottom [perspective:1500px] z-50 scale-[1.2] max-md:scale-[1.1] mt-6 max-md:mt-2">
        <div className="work-5 bg-[var(--folder-bg)] w-full h-full origin-top rounded-2xl rounded-tl-none relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-[var(--folder-bg)] after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-[var(--folder-bg)] before:[clip-path:polygon(0_35%,0%_100%,50%_100%)]"></div>
        
        <div className="work-4 absolute inset-1 bg-zinc-400 rounded-2xl origin-bottom select-none"></div>
        <div className="work-3 absolute inset-1 bg-zinc-300 rounded-2xl origin-bottom"></div>
        <div className="work-2 absolute inset-1 bg-zinc-200 rounded-2xl origin-bottom"></div>
        
        <div className="work-1 absolute bottom-0 bg-gradient-to-t from-[var(--folder-bg)] to-[var(--folder-light)] w-full h-[156px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-[16px] after:bg-[var(--folder-light)] after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px] before:right-[142px] before:size-3 before:bg-[var(--folder-light)] before:[clip-path:polygon(100%_14%,50%_100%,100%_100%)] origin-bottom">
            <div className="absolute inset-0 overflow-hidden rounded-2xl rounded-tr-none z-0">
                <img loading="lazy" src={icon} alt="" className="absolute -bottom-2 -right-4 w-28 h-28 object-contain opacity-[0.35] pointer-events-none" />
            </div>
            <div className="absolute inset-0 z-10 flex flex-col justify-end gap-1 pointer-events-none" style={{ paddingLeft: "13px", paddingBottom: "20px", paddingRight: "16px" }}>
                <span className="text-[#101c44] font-semibold leading-[1.2] text-[15px] max-w-[130px]" style={{ fontFamily: "'Zen Dots', sans-serif" }}>
                  {label}
                </span>
                {sub && (
                  <span className="font-normal leading-tight text-[#17234d]/80 text-[10px] max-w-[150px]" style={{ fontFamily: "'Zen Dots', sans-serif" }}>
                    {sub}
                  </span>
                )}
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
