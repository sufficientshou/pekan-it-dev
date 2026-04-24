import { Navbar, Footer } from "@/components/layout";
import { FormPendaftaran, Hero, Syarat1 } from "@/components/features/pendaftaran";
export default function PendaftaranPage() {
  return (
    <main className="min-h-screen" style={{ background: "#000923" }}>
      <Navbar />
      <Hero />
      <Syarat1 />
      <FormPendaftaran />
      <Footer />
    </main>
  );
}
