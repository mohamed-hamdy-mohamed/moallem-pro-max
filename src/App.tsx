import { lazy, Suspense } from "react";
import NavBar from "./shared/NavBar";
import SiteFooter from "./shared/SiteFooter";
import FloatingWhatsApp from "./shared/FloatingWhatsApp";
import Hero from "./sections/Hero";

const HeroIntro = lazy(() => import("./sections/HeroIntro"));
const ComparisonSection = lazy(() => import("./sections/Comparison"));
const AcademyIncludesSection = lazy(() => import("./sections/AcademyIncludes"));
const PostLaunchSection = lazy(() => import("./sections/PostLaunch"));
const PackagesSection = lazy(() => import("./sections/Packages"));
const OptionalServicesSection = lazy(() => import("./sections/OptionalServices"));

const SectionFallback = () => (
  <div className="min-h-[24rem] w-full" aria-hidden="true" />
);

const App = () => {
  return (
    <>
      <NavBar />
      <main id="main-content" className="pb-44 sm:pb-48">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <HeroIntro />
          <ComparisonSection />
          <AcademyIncludesSection />
          <PostLaunchSection />
          <PackagesSection />
          <OptionalServicesSection />
        </Suspense>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
};

export default App;
