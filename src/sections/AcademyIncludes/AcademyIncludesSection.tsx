import SectionDotDecorations from "../../ui/SectionDotDecorations";
import AcademyHeader from "./AcademyHeader";
import LmsFeaturesPanel from "./LmsFeaturesPanel";
import ShoppingPaymentsPanel from "./ShoppingPaymentsPanel";

const AcademyIncludesSection = () => {
  return (
    <section
      id="features"
      dir="rtl"
      aria-labelledby="academy-includes-title"
      className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      <SectionDotDecorations
        idPrefix="academy"
        leftPositionClassName="left-6 top-16 grid-cols-3 lg:left-12"
        rightPositionClassName="right-6 top-16 grid-cols-3 lg:right-12"
        leftDotClassName="bg-[#FF7A00]/35"
        rightDotClassName="bg-[#0F2348]/20"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AcademyHeader />

        <div className="mt-10 sm:mt-12 lg:mt-14">
          <LmsFeaturesPanel />
          <ShoppingPaymentsPanel />
        </div>
      </div>
    </section>
  );
};

export default AcademyIncludesSection;
