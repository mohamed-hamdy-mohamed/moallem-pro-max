import { OPTIONAL_SERVICES } from "../../data/optionalServicesData";
import SectionDotDecorations from "../../ui/SectionDotDecorations";
import ServiceCard from "./ServiceCard";
import ServicesCTA from "./ServicesCTA";
import ServicesHeader from "./ServicesHeader";
import TrustBadgesRow from "./TrustBadgesRow";

const OptionalServicesSection = () => {
  return (
    <section
      id="services"
      dir="rtl"
      aria-labelledby="optional-services-title"
      className="cv-auto-lg relative overflow-hidden bg-[#F8FAFC] py-12 sm:py-14 lg:py-16"
    >
      <SectionDotDecorations
        idPrefix="optional-services"
        leftPositionClassName="left-6 top-16 grid-cols-3 lg:left-12"
        rightPositionClassName="right-6 top-16 grid-cols-3 lg:right-12"
        leftDotClassName="bg-[#FF7A00]/35"
        rightDotClassName="bg-[#0F2348]/20"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServicesHeader />

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 md:grid-cols-2 md:gap-6 lg:gap-7">
          {OPTIONAL_SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <ServicesCTA />
        <TrustBadgesRow />
      </div>
    </section>
  );
};

export default OptionalServicesSection;
