import Comparison from "./components/Comparison";
import Features from "./components/Features";
import FinalCTA from "./components/FinalCTA";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Navbar from "./components/NavBar";
import Platform from "./components/Platform";
import TrustSection from "./components/TrustSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Comparison />
      <Features />
      <Platform />
      <Journey />
      <TrustSection />
      <FinalCTA />
      <FloatingWhatsApp />
    </>
  );
};

export default App;
