import clsx from "clsx";
import {
  ACCENT_ICON_CLASSES,
  ACCENT_TITLE_CLASSES,
  type BottomFeature,
} from "../../data/comparisonData";

interface BottomFeatureCardProps {
  feature: BottomFeature;
}

const BottomFeatureCard = ({ feature }: BottomFeatureCardProps) => {
  const Icon = feature.icon;

  return (
    <article className="flex h-full flex-col items-center rounded-2xl border border-slate-100 bg-white px-5 py-8 text-center shadow-[0_8px_30px_rgba(15,35,72,0.06)] sm:px-6 sm:py-10">
      <div
        className={clsx(
          "flex h-16 w-16 items-center justify-center rounded-full sm:h-[72px] sm:w-[72px]",
          ACCENT_ICON_CLASSES[feature.accent],
        )}
      >
        <Icon className="h-8 w-8 text-white sm:h-9 sm:w-9" strokeWidth={2} />
      </div>

      <h4
        className={clsx(
          "mt-5 text-lg font-bold sm:text-xl",
          ACCENT_TITLE_CLASSES[feature.accent],
        )}
      >
        {feature.title}
      </h4>

      <p className="mt-3 max-w-xs text-sm leading-7 text-[#64748B] sm:text-[15px]">
        {feature.description}
      </p>
    </article>
  );
};

export default BottomFeatureCard;
