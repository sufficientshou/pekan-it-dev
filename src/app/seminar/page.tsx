import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/features/seminar/Hero";
import Inside from "@/components/features/seminar/Inside";
import Speaker from "@/components/features/seminar/Speaker";
import Daftar from "@/components/features/seminar/Daftar";

export default function SeminarPage() {
  return (
    <main className="min-h-screen overflow-x-visible max-md:!overflow-x-hidden" style={{ background: "#000923" }}>
      <Navbar />
      <Hero />
      <Inside />
      <Speaker />
      <Daftar />
      <Footer />
    </main>
  );
}
