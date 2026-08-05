import clsx from "clsx";
import {
  ICON_COLOR_CLASSES,
  ICON_TEXT_CLASSES,
  type LmsFeature,
} from "../../data/academyIncludesData";

interface LmsFeatureCardProps {
  feature: LmsFeature;
}

const LmsFeatureCard = ({ feature }: LmsFeatureCardProps) => {
  const Icon = feature.icon;

  return (
    <article className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md sm:gap-4 sm:p-5">
      <div
        className={clsx(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12",
          ICON_COLOR_CLASSES[feature.color],
        )}
      >
        <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" strokeWidth={2} />
      </div>

      <div className="min-w-0 text-right">
        <h4 className="text-sm font-bold text-[#0F2348] sm:text-base">{feature.title}</h4>
        <p className={clsx("mt-1 text-xs sm:text-sm", ICON_TEXT_CLASSES[feature.color])}>
          {feature.description}
        </p>
      </div>
    </article>
  );
};

export default LmsFeatureCard;
