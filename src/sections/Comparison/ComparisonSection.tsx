
import BottomFeaturesGrid from "./BottomFeaturesGrid";
import ChallengesCard from "./ChallengesCard";
import ComparisonArrow from "./ComparisonArrow";
import ComparisonHeader from "./ComparisonHeader";
import SolutionCard from "./SolutionCard";

const ComparisonSection = () => {
  return (
    <section id="comparison" dir="rtl" aria-labelledby="comparison-title" className="relative bg-white py-12 sm:py-14 lg:py-16">
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
