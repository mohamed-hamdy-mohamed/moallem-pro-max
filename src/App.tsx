import NavBar from "./shared/NavBar";
import SiteFooter from "./shared/SiteFooter";
import FloatingWhatsApp from "./shared/FloatingWhatsApp";
import Hero from "./sections/Hero";
import HeroIntro from "./sections/HeroIntro";
import ComparisonSection from "./sections/Comparison";
import AcademyIncludesSection from "./sections/AcademyIncludes";
import PostLaunchSection from "./sections/PostLaunch";
import OptionalServicesSection from "./sections/OptionalServices";

const App = () => {
  return (
    <>
      <NavBar />
      <main className="pb-44 sm:pb-48">
        <Hero />
        <HeroIntro />
        <ComparisonSection />
        <AcademyIncludesSection />
        <PostLaunchSection />
        <OptionalServicesSection />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
};

export default App;
