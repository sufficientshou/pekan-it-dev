import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Hero from "../../components/features/detail-nic/Hero";
import Inside from "../../components/features/detail-nic/Inside";
import Journey from "../../components/features/detail-nic/Journey";
import Guide from "../../components/features/detail-nic/Guide";
import Highlights from "../../components/features/detail-nic/Highlight";

export default function DetailNicPage() {
  return (
    <main className="min-h-screen overflow-x-visible max-md:!overflow-x-hidden" style={{ background: "#000923" }}>
      <Navbar />
      <Hero />
      <Inside />
      <Journey />
      <Guide/>
      <Highlights />
      <Footer />
    </main>
  );
}
