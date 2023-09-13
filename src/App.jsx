import "./App.css";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="bg-[#FFD89F]">
      <Header />
      <HeroSection />
      <Features />
      <Newsletter />
      <Footer />
    </main>
  );
}
