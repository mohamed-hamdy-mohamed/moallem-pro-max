import SectionDotDecorations from "../../ui/SectionDotDecorations";
import BottomFeaturesGrid from "./BottomFeaturesGrid";
import ChallengesCard from "./ChallengesCard";
import ComparisonArrow from "./ComparisonArrow";
import ComparisonHeader from "./ComparisonHeader";
import SolutionCard from "./SolutionCard";

const ComparisonSection = () => {
  return (
    <section id="comparison" dir="rtl" aria-labelledby="comparison-title" className="relative bg-white py-12 sm:py-14 lg:py-16">
      <SectionDotDecorations
        idPrefix="comparison"
        leftPositionClassName="left-6 top-8 grid-cols-4 lg:left-12"
        rightPositionClassName="right-6 top-8 grid-cols-4 lg:right-12"
        leftDotClassName="bg-[#FF7A00]/50"
        rightDotClassName="bg-[#0F2348]/25"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ComparisonHeader />

        <div className="mt-8 lg:mt-12">
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
            <ChallengesCard />
            <ComparisonArrow />
            <SolutionCard />
          </div>
        </div>

        <BottomFeaturesGrid />
      </div>
    </section>
  );
};

export default ComparisonSection;
