import clsx from "clsx";
import type { LucideIcon } from "lucide-react";
import type { IntroIconVariant } from "../../data/introData";

interface FeatureHighlightProps {
  icon: LucideIcon;
  iconVariant: IntroIconVariant;
  title: string;
  description: string;
  showDivider?: boolean;
}

const ICON_VARIANT_CLASSES: Record<IntroIconVariant, string> = {
  orange: "bg-[#FF7A00]",
  navy: "bg-[#0F2348]",
};

const FeatureHighlight = ({
  icon: Icon,
  iconVariant,
  title,
  description,
  showDivider = false,
}: FeatureHighlightProps) => {
  return (
    <article
      className={clsx(
        "flex flex-col items-center bg-white px-4 py-7 text-center sm:px-5 lg:px-6 lg:py-8",
        showDivider && "border-s border-slate-200",
      )}
    >
      <div
        className={clsx(
          "flex h-[58px] w-[58px] items-center justify-center rounded-full shadow-sm sm:h-16 sm:w-16",
          ICON_VARIANT_CLASSES[iconVariant],
        )}
      >
        <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" strokeWidth={2} />
      </div>

      <h3 className="mt-4 text-[15px] font-bold text-[#0F2348] sm:text-[17px]">
        {title}
      </h3>

      <p className="mt-2 max-w-[220px] text-[13px] leading-6 text-[#64748B] sm:text-sm">
        {description}
      </p>
    </article>
  );
};

export default FeatureHighlight;
