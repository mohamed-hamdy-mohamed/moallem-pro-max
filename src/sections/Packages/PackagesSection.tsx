import FeaturesTable from "./FeaturesTable";
import PackagesHeader from "./PackagesHeader";
import SummaryCards from "./SummaryCards";
import TrainingTable from "./TrainingTable";

const PackagesSection = () => (
  <section
    id="packages"
    dir="rtl"
    aria-labelledby="packages-title"
    className="cv-auto-lg relative overflow-hidden bg-white py-12 sm:py-14 lg:py-16"
  >
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <PackagesHeader />

      <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6 lg:mt-12">
        <FeaturesTable />
        <TrainingTable />
        <SummaryCards />
      </div>
    </div>
  </section>
);

export default PackagesSection;
