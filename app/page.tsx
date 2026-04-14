import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/pages/home/Hero";
import About from "./components/pages/home/About";
import Events from "./components/pages/home/Events";
import Timeline from "./components/pages/home/Timeline";
import Mascot from "./components/pages/home/Mascot";
import Tema from "./components/pages/home/Tema";

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
