import clsx from "clsx";
import type { ChallengeItem } from "../../data/comparisonData";

interface ChallengeRowProps {
  item: ChallengeItem;
  showDivider: boolean;
}

const ChallengeRow = ({ item, showDivider }: ChallengeRowProps) => {
  const Icon = item.icon;

  return (
    <div className={clsx(showDivider && "border-t border-dashed border-slate-200")}>
      <div className="flex items-start gap-4 py-5 sm:gap-5 sm:py-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-50 sm:h-14 sm:w-14">
          <Icon className="h-6 w-6 text-[#EF4444] sm:h-7 sm:w-7" strokeWidth={2} />
        </div>

        <div className="min-w-0 flex-1 text-right">
          <h4 className="text-base font-bold text-[#EF4444] sm:text-lg">{item.title}</h4>
          <p className="mt-2 text-sm leading-7 text-[#64748B] sm:text-[15px]">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChallengeRow;
