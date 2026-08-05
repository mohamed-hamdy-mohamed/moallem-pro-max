import { ACADEMY_INCLUDES_HEADING } from "../../data/academyIncludesData";

const AcademyHeader = () => (
  <header className="mx-auto max-w-4xl text-center">
    <h2
      id="academy-includes-title"
      className="text-2xl font-extrabold leading-tight text-[#0F2348] sm:text-3xl md:text-4xl md:leading-[1.2]"
    >
      {ACADEMY_INCLUDES_HEADING.title}
    </h2>

    <p className="mt-4 text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8 md:text-lg">
      {ACADEMY_INCLUDES_HEADING.subtitle}
    </p>
  </header>
);

export default AcademyHeader;
