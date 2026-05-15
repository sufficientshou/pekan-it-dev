import { Navbar, Footer } from "@/components/layout";
import { Hero, About, Events, Timeline, Mascot, Tema } from "@/components/features/home";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ background: "#000923", width: "100%", maxWidth: "100vw" }}>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Timeline />
      <Mascot />
      <Tema />
      <Footer />
    </main>
  );
}
