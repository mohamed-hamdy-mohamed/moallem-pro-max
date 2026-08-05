import { GraduationCap } from "lucide-react";
import { GROWTH_INTRO } from "../../data/postLaunchData";

const GrowthIntroCard = () => (
  <article className="rounded-2xl border border-[#16A34A]/20 bg-white p-5 shadow-sm sm:p-6">
    <div className="inline-flex items-center gap-2 rounded-full bg-[#16A34A] px-4 py-2">
      <GraduationCap className="h-4 w-4 text-white" strokeWidth={2} />
      <span className="text-sm font-bold text-white">{GROWTH_INTRO.badge}</span>
    </div>
    <p className="mt-4 text-sm leading-8 text-[#0F2348] sm:text-[15px] sm:leading-9">
      {GROWTH_INTRO.paragraph}
    </p>
  </article>
);

export default GrowthIntroCard;
