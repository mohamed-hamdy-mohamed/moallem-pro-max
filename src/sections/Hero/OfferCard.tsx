import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { OFFER_FIELDS, type IconVariant } from "../../data/heroData";

const ICON_VARIANT_CLASSES: Record<IconVariant, string> = {
  orange: "bg-[#FF7A00]",
  navy: "bg-[#0F2348]",
};

const OfferCard = () => {
  return (
    <article className="relative mx-auto w-full max-w-xl">
      <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center gap-2 rounded-2xl bg-[#0F2348] px-5 py-3 shadow-lg sm:gap-4 sm:px-8 sm:py-3.5">
          <span className="h-1 w-5 rounded-full bg-[#FF7A00] sm:w-8" aria-hidden="true" />
          <h2 className="whitespace-nowrap text-base font-bold text-white sm:text-lg">
            بيانات العرض
          </h2>
          <span className="h-1 w-5 rounded-full bg-[#FF7A00] sm:w-8" aria-hidden="true" />
        </div>
      </div>

      <div className="rounded-3xl border border-slate-100 bg-white px-5 pb-6 pt-10 shadow-[0_20px_60px_rgba(15,35,72,0.10)] sm:px-7 sm:pb-8 sm:pt-12">
        <div className="space-y-5 sm:space-y-6">
          {OFFER_FIELDS.map((field) => (
            <div key={field.id} className="flex items-start gap-3 sm:gap-4">
              <div
                className={clsx(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12",
                  ICON_VARIANT_CLASSES[field.iconVariant],
                )}
              >
                <field.icon className="h-5 w-5 text-white" strokeWidth={2} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="mb-2 block text-sm font-semibold text-[#0F2348] sm:text-[15px]">
                  {field.label}
                </p>

                <div
                  className={clsx(
                    "flex min-h-[46px] items-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#0F2348] sm:min-h-[50px] sm:text-[15px]",
                    field.isEmpty && "text-transparent",
                    field.isDropdown && "justify-between gap-3",
                  )}
                >
                  <span className={clsx(field.isEmpty && "select-none")}>
                    {field.isEmpty ? "\u00A0" : field.value}
                  </span>

                  {field.isDropdown && (
                    <ChevronDown
                      className="h-4 w-4 shrink-0 text-[#94A3B8]"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default OfferCard;
