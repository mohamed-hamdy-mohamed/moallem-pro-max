import clsx from "clsx";
import { SUMMARY_CARDS } from "../../data/packagesData";

const SummaryCards = () => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
    {SUMMARY_CARDS.map((card) => {
      const Icon = card.icon;

      return (
        <article
          key={card.id}
          className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_8px_28px_rgba(15,35,72,0.06)]"
        >
          <header className="flex items-center justify-center gap-2 border-b border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5">
            <Icon className="h-4 w-4 text-[#0F2348]" strokeWidth={2.2} />
            <h3 className="text-sm font-bold text-[#0F2348] sm:text-[15px]">{card.title}</h3>
          </header>

          <div className="flex flex-col gap-3 px-4 py-4 sm:px-5 sm:py-5">
            {card.badges.map((badge) => (
              <div
                key={badge.id}
                className={clsx(
                  "rounded-xl px-3 py-3 text-center shadow-sm",
                  badge.tone === "orange" ? "bg-[#FF7A00] text-white" : "bg-[#0F2348] text-white",
                )}
              >
                <p className="text-xs font-medium opacity-90 sm:text-[13px]">{badge.packageLabel}</p>
                <p className="mt-1 text-sm font-extrabold sm:text-base">{badge.value}</p>
              </div>
            ))}
          </div>
        </article>
      );
    })}
  </div>
);

export default SummaryCards;
