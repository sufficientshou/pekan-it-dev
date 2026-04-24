import { Navbar, Footer } from "@/components/layout";
import { Hero, About, Events, Timeline, Mascot, Tema } from "@/components/features/home";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#000923" }}>
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
