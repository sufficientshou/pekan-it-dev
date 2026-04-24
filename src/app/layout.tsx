import type { Metadata } from "next";
import "./globals.css";
import GlobalLoader from "../src/components/ui/GlobalLoader";

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
      <body className="antialiased">
        <GlobalLoader />
        {children}
      </body>
    </html>
  );
}
