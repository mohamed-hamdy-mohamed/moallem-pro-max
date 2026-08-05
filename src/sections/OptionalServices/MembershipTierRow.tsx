import clsx from "clsx";
import { Shield, Users } from "lucide-react";
import { TIER_CLASSES, type MembershipTier } from "../../data/optionalServicesData";

interface MembershipTierRowProps {
  tier: MembershipTier;
}

const MembershipTierRow = ({ tier }: MembershipTierRowProps) => {
  const styles = TIER_CLASSES[tier.variant];

  return (
    <li className="flex items-center gap-3 rounded-xl border border-slate-100 bg-[#F8FAFC] px-3 py-2.5 sm:px-4 sm:py-3">
      <div
        className={clsx(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10",
          styles.shield,
        )}
      >
        <Shield className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={2} />
      </div>

      <div className="min-w-0 flex-1 text-right">
        <p className={clsx("text-xs font-bold sm:text-sm", styles.name)}>{tier.name}</p>
        <p className={clsx("text-[11px] sm:text-xs", styles.detail)}>{tier.detail}</p>
      </div>

      <div className={clsx("flex shrink-0 -space-x-1 space-x-reverse", styles.users)}>
        <Users className="h-4 w-4" strokeWidth={2} />
        <Users className="h-4 w-4 opacity-70" strokeWidth={2} />
      </div>
    </li>
  );
};

export default MembershipTierRow;
