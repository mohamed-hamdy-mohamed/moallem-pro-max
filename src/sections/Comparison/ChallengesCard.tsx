import { AlertTriangle } from "lucide-react";
import { CHALLENGE_ITEMS, COMPARISON_LABELS } from "../../data/comparisonData";
import ChallengeRow from "./ChallengeRow";

const ChallengesCard = () => (
  <article className="relative order-3 rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_12px_40px_rgba(15,35,72,0.07)] sm:p-6 lg:order-3 lg:p-7">
    <div className="absolute -top-4 right-4 flex items-center gap-2 rounded-xl bg-[#EF4444] px-4 py-2 shadow-md sm:right-6">
      <AlertTriangle className="h-4 w-4 text-white" strokeWidth={2.5} />
      <span className="text-sm font-bold text-white sm:text-[15px]">
        {COMPARISON_LABELS.challengesBadge}
      </span>
    </div>

    <div className="mt-8">
      {CHALLENGE_ITEMS.map((item, index) => (
        <ChallengeRow key={item.id} item={item} showDivider={index > 0} />
      ))}
    </div>
  </article>
);

export default ChallengesCard;
