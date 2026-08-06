import {  ChevronsRight } from "lucide-react";

const ComparisonArrow = () => (
  <div className="order-2 flex items-center justify-center py-2 lg:order-2 lg:py-0">
    <div
      className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F2348] shadow-[0_8px_24px_rgba(15,35,72,0.25)] sm:h-14 sm:w-14"
      aria-hidden="true"
    >
      <ChevronsRight className="h-6 w-6 text-white sm:h-7 sm:w-7" strokeWidth={2.5} />
    </div>
  </div>
);

export default ComparisonArrow;
