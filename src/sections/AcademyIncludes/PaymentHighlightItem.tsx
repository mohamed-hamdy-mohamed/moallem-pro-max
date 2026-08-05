import type { PaymentHighlight } from "../../data/academyIncludesData";

interface PaymentHighlightItemProps {
  item: PaymentHighlight;
}

const PaymentHighlightItem = ({ item }: PaymentHighlightItemProps) => {
  const Icon = item.icon;

  return (
    <div className="flex flex-col items-center gap-2 px-2 text-center sm:px-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm sm:h-11 sm:w-11">
        <Icon className="h-5 w-5 text-[#0F2348]" strokeWidth={2} />
      </div>
      <p className="text-xs leading-6 text-[#64748B] sm:text-sm">{item.label}</p>
    </div>
  );
};

export default PaymentHighlightItem;
