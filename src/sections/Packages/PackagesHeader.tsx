import { PACKAGES_HEADING } from "../../data/packagesData";

const PackagesHeader = () => (
  <header className="mx-auto max-w-4xl text-center">
    <h2
      id="packages-title"
      className="text-2xl font-extrabold leading-tight text-[#0F2348] sm:text-3xl md:text-4xl md:leading-[1.2]"
    >
      {PACKAGES_HEADING.title}
    </h2>

    <div className="mx-auto mt-4 flex max-w-3xl items-center justify-center gap-3 sm:mt-5">
      <span className="hidden h-px flex-1 bg-slate-200 sm:block" aria-hidden="true" />
      <span className="h-2 w-2 shrink-0 rounded-full bg-[#FF7A00]" aria-hidden="true" />
      <p className="text-sm font-bold leading-7 text-[#0F2348] sm:text-base sm:leading-8 md:text-lg">
        {PACKAGES_HEADING.subtitle}
      </p>
      <span className="h-2 w-2 shrink-0 rounded-full bg-[#FF7A00]" aria-hidden="true" />
      <span className="hidden h-px flex-1 bg-slate-200 sm:block" aria-hidden="true" />
    </div>

    <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#64748B] sm:mt-5 sm:text-base sm:leading-8">
      {PACKAGES_HEADING.description}
    </p>
  </header>
);

export default PackagesHeader;
