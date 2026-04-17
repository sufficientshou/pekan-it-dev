import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Hero from "../pages/detail-semantik/Hero";
import Journey from "../pages/detail-semantik/Journey";
export default function PendaftaranPage() {
  return (
    <main className="min-h-screen" style={{ background: "#000923" }}>
      <Navbar />
      <Hero />
      <Journey />
      <Footer />
    </main>
  );
}
