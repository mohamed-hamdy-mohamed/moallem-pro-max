import { Check, GraduationCap, ShieldCheck } from "lucide-react";
import laptopImg from "../../assets/LaptopImage2.png";
import { COMPARISON_LABELS, SOLUTION_TEXT } from "../../data/comparisonData";

const SolutionCard = () => (
  <article className="relative order-1 rounded-3xl border border-slate-100 bg-[#F8FAFC] p-5 shadow-[0_12px_40px_rgba(15,35,72,0.07)] sm:p-6 lg:order-1 lg:p-7">
    <div className="absolute -top-4 right-4 flex items-center gap-2 rounded-xl bg-[#16A34A] px-4 py-2 shadow-md sm:right-6">
      <Check className="h-4 w-4 text-white" strokeWidth={2.5} />
      <span className="text-sm font-bold text-white sm:text-[15px]">
        {COMPARISON_LABELS.solutionBadge}
      </span>
    </div>

    <div className="relative mx-auto mt-8 max-w-md">
      <div className="pointer-events-none absolute -left-2 top-8 z-20 hidden h-10 w-10 items-center justify-center rounded-full bg-[#FF7A00] shadow-lg sm:flex sm:h-11 sm:w-11">
        <ShieldCheck className="h-5 w-5 text-white" strokeWidth={2} />
      </div>

      <div className="pointer-events-none absolute -right-1 top-4 z-20 hidden h-10 w-10 items-center justify-center rounded-full bg-[#0F2348] shadow-lg sm:flex sm:h-11 sm:w-11">
        <GraduationCap className="h-5 w-5 text-white" strokeWidth={2} />
      </div>

      <img
        src={laptopImg}
        alt="منصة معلم برو ماكس"
        className="relative z-10 mx-auto h-auto w-full bg-transparent object-cover"
        width={1000}
        height={667}
        loading="lazy"
        decoding="async"
      />
    </div>

    <div className="mt-6 text-center sm:mt-8">
      <p className="text-sm leading-8 text-[#0F2348] sm:text-[15px] sm:leading-9">
        {SOLUTION_TEXT.paragraph}
      </p>
      <p className="mt-3 text-sm font-bold leading-8 text-[#16A34A] sm:text-[15px] sm:leading-9">
        {SOLUTION_TEXT.highlight}
      </p>
    </div>
  </article>
);

export default SolutionCard;
