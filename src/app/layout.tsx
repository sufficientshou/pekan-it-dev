import type { Metadata } from "next";
import "./globals.css";
import { GlobalLoader } from "@/components/ui";

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
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Dots&family=Exo+2:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <GlobalLoader />
        {children}
      </body>
    </html>
  );
}
