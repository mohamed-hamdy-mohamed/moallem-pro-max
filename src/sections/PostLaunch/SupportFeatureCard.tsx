import clsx from "clsx";
import { SUPPORT_ACCENT_CLASSES, type SupportFeature } from "../../data/postLaunchData";

interface SupportFeatureCardProps {
  feature: SupportFeature;
}

const SupportFeatureCard = ({ feature }: SupportFeatureCardProps) => {
  const Icon = feature.icon;

  return (
    <article className="flex h-full flex-col items-center rounded-2xl border border-slate-100 bg-white px-4 py-6 text-center shadow-[0_8px_30px_rgba(15,35,72,0.06)] transition-transform duration-200 hover:-translate-y-1 sm:px-5 sm:py-8">
      <div
        className={clsx(
          "flex h-14 w-14 items-center justify-center rounded-full sm:h-16 sm:w-16",
          SUPPORT_ACCENT_CLASSES[feature.accent],
        )}
      >
        <Icon className="h-7 w-7 text-white sm:h-8 sm:w-8" strokeWidth={2} aria-hidden="true" />
      </div>

      <h4 className="mt-4 text-base font-bold text-[#0F2348] sm:text-lg">{feature.title}</h4>
      <p className="mt-3 text-sm leading-7 text-[#64748B]">{feature.description}</p>
    </article>
  );
};

export default SupportFeatureCard;
