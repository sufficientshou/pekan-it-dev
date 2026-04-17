import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FormPendaftaran from "../components/pages/pendaftaran/FormPendaftaran";
import Syarat from "../components/pages/pendaftaran/Syarat";
import Hero from "../components/pages/pendaftaran/Hero";
import Syarat1 from "../components/pages/pendaftaran/syarat1";
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
