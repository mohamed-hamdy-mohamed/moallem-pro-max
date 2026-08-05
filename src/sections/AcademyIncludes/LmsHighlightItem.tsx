import clsx from "clsx";
import { ICON_COLOR_CLASSES, type LmsHighlight } from "../../data/academyIncludesData";

interface LmsHighlightItemProps {
  item: LmsHighlight;
}

const LmsHighlightItem = ({ item }: LmsHighlightItemProps) => {
  const Icon = item.icon;

  return (
    <div className="flex flex-col items-center gap-2 px-2 text-center sm:px-3">
      <div
        className={clsx(
          "flex h-10 w-10 items-center justify-center rounded-full sm:h-11 sm:w-11",
          ICON_COLOR_CLASSES[item.color],
        )}
      >
        <Icon className="h-5 w-5 text-white" strokeWidth={2} />
      </div>
      <p className="text-xs leading-6 text-[#64748B] sm:text-sm">{item.label}</p>
    </div>
  );
};

export default LmsHighlightItem;
