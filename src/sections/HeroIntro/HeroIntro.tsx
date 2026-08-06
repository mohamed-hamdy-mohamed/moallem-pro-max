import { INTRO_FEATURES } from "../../data/introData";
import FeatureHighlight from "./FeatureHighlight";
import IntroCard from "./IntroCard";

const HeroIntro = () => {
  return (
    <section dir="rtl" aria-label="مقدمة عن معلم برو ماكس" className="cv-auto bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-2 sm:px-6 sm:pb-16 lg:px-8">
        <IntroCard />

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_4px_24px_rgba(15,35,72,0.04)] sm:mt-10">
          <div className="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {INTRO_FEATURES.map((feature, index) => (
              <FeatureHighlight
                key={feature.id}
                icon={feature.icon}
                iconVariant={feature.iconVariant}
                title={feature.title}
                description={feature.description}
                showDivider={index > 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroIntro;
