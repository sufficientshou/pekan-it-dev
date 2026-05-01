
type Folder = {
  id: string;
  label: string;
  sub: string | null;
  bgColor: string;
  lightBg: string;
  icon: string;
};

export default function Syarat() {
  const folders: Folder[] = [
    {
      id: "whatsapp",
      label: "Upload Bukti Share pamflet ke 2 grup WhatsApp",
      sub: null,
      bgColor: "#37c7b8",
      lightBg: "#5eddcf",
      icon: "/images/icons/vector-whatsapp.svg",
    },
    {
      id: "follow-himtika",
      label: "Upload Bukti Follow IG HIMTIKA",
      sub: "Klik folder untuk mengikuti @himtika_official",
      bgColor: "#38c7ea",
      lightBg: "#6adaff",
      icon: "/images/icons/vector-ig.svg",
    },
    {
      id: "follow-pekanit",
      label: "Upload Bukti Follow IG PEKAN IT",
      sub: "Klik folder untuk mengikuti @pekanit_unsika",
      bgColor: "#3f78ff",
      lightBg: "#6f9cff",
      icon: "/images/icons/vector-ig2.svg",
    },
    {
      id: "twibbon",
      label: "Bukti Upload Postingan Twibbon di IG",
      sub: "Klik folder untuk membuka halaman Twibbon.",
      bgColor: "#6d63ff",
      lightBg: "#9a93ff",
      icon: "/images/icons/vector-twibbon.svg",
    },
    {
      id: "share-ig",
      label: "Upload Bukti Share pamflet ke IG Story",
      sub: null,
      bgColor: "#9a56f2",
      lightBg: "#b87ff7",
      icon: "/images/icons/vector-ig-story.svg",
    },
    {
      id: "ktm",
      label: "Upload Bukti KRS atau KTM",
      sub: null,
      bgColor: "#9da8b2",
      lightBg: "#bcc5cd",
      icon: "/images/icons/vector-ktm.svg",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#000923] py-14 md:py-20">

      <div className="mx-auto max-w-[1300px] w-full grid grid-cols-1 gap-x-16 gap-y-20 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-10">
        {folders.map((f) => (
          <SyaratCard key={f.id} {...f} />
        ))}
      </div>
    </section>
  );
}

const folderMask = {
  WebkitMask:
    "conic-gradient(#0000 25%, blue 0 50%, green 0 95%, purple 0), " +
    "radial-gradient(70px, #0000 98%, #000) 10000% 10000%/99.5% 99.5%",
  mask:
    "conic-gradient(#0000 25%, blue 0 50%, green 0 95%, purple 0), " +
    "radial-gradient(70px, #0000 98%, #000) 10000% 10000%/99.5% 99.5%",
};

function SyaratCard({
  label,
  sub,
  bgColor,
  lightBg,
  icon,
}: {
  label: string;
  sub: string | null;
  bgColor: string;
  lightBg: string;
  icon: string;
}) {
  return (
    <div className="relative" style={{ width: "360px", height: "260px" }}>

      <div
        className="absolute top-0 left-0 flex flex-col justify-end items-start"
        style={{ width: "360px", height: "260px", padding: "32px" }}
      >
        
        <div
          className="absolute left-0 top-0 w-full h-full"
          style={{
            borderRadius: "100px",
            ...folderMask,
          }}
        >
          
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{ background: bgColor, borderRadius: "30px" }}
          />

          <div
            className="absolute left-0 top-0 w-full h-full"
            style={{
              borderRadius: "30px",
              background: "linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.0) 55%)",
            }}
          />

          <img loading="lazy"
            src={icon}
            alt=""
            className="pointer-events-none absolute top-4 left-5 opacity-90"
            style={{ width: "70px", height: "70px", objectFit: "contain" }}
          />

          <div
            className="absolute overflow-hidden"
            style={{
              bottom: "12px",
              left: "12px",
              right: "12px",
              height: "90%",
              borderRadius: "0 20px 20px 20px",
              ...folderMask,
            }}
          >
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{ background: lightBg, borderRadius: "0 20px 20px 20px" }}
            />

            <div
              className="relative z-10 flex flex-col justify-center h-full p-5"
              style={{ gap: "6px" }}
            >
              <span
                className="text-[#101c44] font-semibold leading-snug"
                style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "14px" }}
              >
                {label}
              </span>
              {sub && (
                <span
                  className="font-normal leading-tight text-[#17234d]/80"
                  style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "12px" }}
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
}