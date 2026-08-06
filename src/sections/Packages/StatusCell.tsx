import clsx from "clsx";
import { Check, X } from "lucide-react";
import type { CellValue } from "../../data/packagesData";

interface StatusCellProps {
  value: CellValue;
  className?: string;
}

const StatusCell = ({ value, className }: StatusCellProps) => {
  if (value.type === "check") {
    return (
      <div className={clsx("flex items-center justify-center", className)}>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF7A00] shadow-sm sm:h-8 sm:w-8">
          <Check className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" strokeWidth={3} />
        </span>
      </div>
    );
  }

  if (value.type === "cross") {
    return (
      <div className={clsx("flex items-center justify-center", className)}>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#CBD5E1] shadow-sm sm:h-8 sm:w-8">
          <X className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" strokeWidth={3} />
        </span>
      </div>
    );
  }

  return (
    <div className={clsx("px-2 text-center text-sm font-semibold leading-6 text-[#0F2348] sm:text-[15px]", className)}>
      <span>{value.text}</span>
      {value.accent ? (
        <span className="mt-0.5 block text-xs font-bold text-[#FF7A00] sm:text-sm">{value.accent}</span>
      ) : null}
    </div>
  );
};

export default StatusCell;
