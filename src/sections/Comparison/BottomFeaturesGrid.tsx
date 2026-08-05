import { BOTTOM_FEATURES, COMPARISON_LABELS } from "../../data/comparisonData";
import BottomFeatureCard from "./BottomFeatureCard";

const BottomFeaturesGrid = () => (
  <div className="mt-12 sm:mt-14 lg:mt-16">
    <div className="flex items-center justify-center gap-3 sm:gap-4">
      <span className="hidden h-px w-10 bg-[#FF7A00] sm:block md:w-14" aria-hidden="true" />
      <h3 className="rounded-2xl bg-[#0F2348] px-6 py-3 text-base font-bold text-white sm:px-8 sm:text-lg">
        {COMPARISON_LABELS.bottomFeaturesTitle}
      </h3>
      <span className="hidden h-px w-10 bg-[#FF7A00] sm:block md:w-14" aria-hidden="true" />
    </div>

    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {BOTTOM_FEATURES.map((feature) => (
        <BottomFeatureCard key={feature.id} feature={feature} />
      ))}
    </div>
  </div>
);

export default BottomFeaturesGrid;
