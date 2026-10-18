import type { Metadata } from "next";
import { Zen_Dots, Exo_2, Plus_Jakarta_Sans, Orbitron } from "next/font/google";
import "./globals.css";
import { GlobalLoader } from "@/components/ui";
import { BASE_PATH } from "@/config/constants";

const zenDots = Zen_Dots({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zen-dots",
});

const exo2 = Exo_2({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-exo",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

const orbitron = Orbitron({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
});
export const metadata: Metadata = {
  title: "PEKAN IT — Pekan Informatika",
  description:
    "PEKAN IT adalah kegiatan yang mewadahi ide dan kreativitas bidang IT lewat kompetisi dan edukasi. Dikelola oleh Divisi Edukasi, HIMTIKA UNSIKA.",
  keywords: [
    "PEKAN IT",
    "HIMTIKA",
    "UNSIKA",
    "Informatika",
    "Kompetisi IT",
    "Semantik",
    "NIC",
    "Tech Talks",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${zenDots.variable} ${exo2.variable} ${plusJakartaSans.variable} ${orbitron.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Zen+Dots&family=Exo+2:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Dots&family=Exo+2:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <GlobalLoader />
        {children}

        <a 
          href="https://himtika.cs.unsika.ac.id/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-lg"
          title="Kembali ke Web HIMTIKA"
        >
          <img 
            src={`${BASE_PATH}/images/img-himtika.webp`} 
            alt="HIMTIKA Logo" 
            className="w-6 h-6 md:w-8 md:h-8 object-contain"
          />
        </a>
      </body>
    </html>
  );
}
