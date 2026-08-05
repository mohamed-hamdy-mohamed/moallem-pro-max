import { HERO_HEADING } from "../../data/heroData";
import HeroLaptop from "./HeroLaptop";
import OfferCard from "./OfferCard";

const Hero = () => {
  return (
    <section id="hero" dir="rtl" aria-labelledby="hero-title" className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,_#e2e8f0_1px,_transparent_1px)] bg-size-[24px_24px] opacity-25"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-2 sm:px-6 sm:pb-14 sm:pt-3 lg:px-8 lg:pb-16">
        <header className="mx-auto max-w-4xl text-center">
          <h1
            id="hero-title"
            className="text-[30px] font-extrabold leading-[1.15] text-[#0F2348] sm:text-[38px] md:text-[44px] md:leading-[1.12]"
          >
            {HERO_HEADING.title}
          </h1>

          <p className="mt-2 text-[22px] font-extrabold leading-[1.2] text-[#FF7A00] sm:mt-3 sm:text-[30px] md:text-[38px] md:leading-[1.18]">
            {HERO_HEADING.subtitle}
          </p>

          <div className="mt-5 flex items-center justify-center gap-3 sm:mt-6 sm:gap-4">
            <span className="h-px w-10 bg-[#FF7A00] sm:w-14 md:w-16" aria-hidden="true" />
            <p className="max-w-2xl text-sm font-medium leading-[1.75] text-[#0F2348] sm:text-base sm:leading-8 md:text-[17px]">
              {HERO_HEADING.tagline}
            </p>
            <span className="h-px w-10 bg-[#FF7A00] sm:w-14 md:w-16" aria-hidden="true" />
          </div>
        </header>

        <div className="mt-8 grid grid-cols-1 items-center gap-8 lg:mt-12 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          <div className="order-2 lg:order-2">
            <HeroLaptop />
          </div>

          <div id="offer" className="order-1 lg:order-1">
            <OfferCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
