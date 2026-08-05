import clsx from "clsx";
import type { LucideIcon } from "lucide-react";
import type { IconVariant } from "../../data/heroData";

interface HeroBadgeProps {
  icon: LucideIcon;
  iconVariant: IconVariant;
  title: string;
  subtitle: string;
  className?: string;
  floating?: boolean;
}

const ICON_VARIANT_CLASSES: Record<IconVariant, string> = {
  orange: "bg-[#FF7A00]",
  navy: "bg-[#0F2348]",
};

const HeroBadge = ({
  icon: Icon,
  iconVariant,
  title,
  subtitle,
  className,
  floating = true,
}: HeroBadgeProps) => {
  return (
    <div
      dir="ltr"
      className={clsx(
        "z-20 flex items-center gap-2.5 rounded-2xl border border-slate-100/80 bg-white px-3 py-2 shadow-[0_8px_28px_rgba(15,35,72,0.10)] sm:gap-3 sm:px-3.5 sm:py-2.5",
        floating && "absolute",
        className,
      )}
    >
      <div
        className={clsx(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10",
          ICON_VARIANT_CLASSES[iconVariant],
        )}
      >
        <Icon className="h-[18px] w-[18px] text-white sm:h-5 sm:w-5" strokeWidth={2} />
      </div>

      <div className="min-w-0">
        <p className="text-[13px] font-bold leading-tight text-[#0F2348] sm:text-sm">{title}</p>
        <p className="mt-0.5 text-[11px] leading-tight text-[#64748B] sm:text-xs">{subtitle}</p>
      </div>
    </div>
  );
};

export default HeroBadge;
