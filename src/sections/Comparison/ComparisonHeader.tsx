import logo from "../../assets/logo.png";
import { COMPARISON_HEADING, COMPARISON_LABELS } from "../../data/comparisonData";

const ComparisonHeader = () => (
  <header className="mx-auto max-w-4xl text-center">
    <div className="mx-auto mb-5 flex w-fit flex-col items-center sm:mb-6">
      <img
        src={logo}
        alt="معلم برو ماكس"
        width={384}
        height={384}
        loading="lazy"
        decoding="async"
        className="h-[100px] w-[100px] object-contain sm:h-[120px] sm:w-[120px] md:h-[140px] md:w-[140px]"
      />
      <p className="mt-2 text-[11px] font-bold tracking-[0.2em] text-[#64748B] sm:text-xs">
        {COMPARISON_LABELS.brandTagline}
      </p>
    </div>

    <h2
      id="comparison-title"
      className="text-2xl font-extrabold leading-tight text-[#0F2348] sm:text-3xl md:text-4xl md:leading-[1.2]"
    >
      {COMPARISON_HEADING.title}
    </h2>

    <div className="mx-auto mt-4 flex items-center justify-center gap-1.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className="h-1.5 w-1.5 rounded-full bg-[#FF7A00]" />
      ))}
    </div>

    <p className="mt-4 text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8 md:text-lg">
      {COMPARISON_HEADING.subtitle}
    </p>
  </header>
);

export default ComparisonHeader;
