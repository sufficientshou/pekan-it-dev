import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/pages/detail-semantik/Hero";
import Inside from "../components/pages/detail-semantik/Inside";
import Journey from "../components/pages/detail-semantik/Journey";
import Guide from "../components/pages/detail-semantik/Guide";
import Highlights from "../components/pages/detail-semantik/Highlight";

export default function DetailSemantikPage() {
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
