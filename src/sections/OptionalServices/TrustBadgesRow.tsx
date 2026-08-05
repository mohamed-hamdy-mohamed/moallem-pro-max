import { TRUST_BADGES } from "../../data/optionalServicesData";

const TrustBadgesRow = () => (
  <div className="mt-6 flex flex-wrap items-center justify-center divide-x divide-x-reverse divide-slate-200 sm:mt-8">
    {TRUST_BADGES.map((badge) => {
      const Icon = badge.icon;

      return (
        <div
          key={badge.id}
          className="flex min-w-[110px] flex-1 flex-col items-center gap-1.5 px-2 py-2 text-center sm:min-w-[130px] sm:px-3"
        >
          <Icon className="h-5 w-5 text-[#FF7A00] sm:h-6 sm:w-6" strokeWidth={2} />
          <p className="text-[11px] leading-5 text-[#64748B] sm:text-xs sm:leading-6">
            {badge.label}
          </p>
        </div>
      );
    })}
  </div>
);

export default TrustBadgesRow;
