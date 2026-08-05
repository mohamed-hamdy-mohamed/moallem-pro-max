import logo from "../../assets/logo.png";
import { OPTIONAL_SERVICES_HEADING } from "../../data/optionalServicesData";

const ServicesHeader = () => (
  <header className="mx-auto max-w-4xl text-center">
    <div className="mx-auto mb-5 flex w-fit flex-col items-center sm:mb-6">
      <img
        src={logo}
        alt="معلم برو ماكس"
        className="h-[88px] w-[88px] object-contain sm:h-[100px] sm:w-[100px]"
      />
      <p className="mt-2 text-[11px] font-bold tracking-[0.2em] text-[#64748B] sm:text-xs">
        MOALLEM PRO MAX
      </p>
    </div>

    <h2
      id="optional-services-title"
      className="text-2xl font-extrabold leading-tight text-[#0F2348] sm:text-3xl md:text-4xl"
    >
      {OPTIONAL_SERVICES_HEADING.title}
    </h2>

    <div className="mt-4 flex items-center justify-center gap-3">
      <span className="hidden h-px w-10 bg-slate-200 sm:block" aria-hidden="true" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A00]" aria-hidden="true" />
      <p className="text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">
        {OPTIONAL_SERVICES_HEADING.subtitle}
      </p>
      <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A00]" aria-hidden="true" />
      <span className="hidden h-px w-10 bg-slate-200 sm:block" aria-hidden="true" />
    </div>

    <div className="mt-4 inline-flex rounded-full bg-[#0F2348] px-5 py-2.5 sm:mt-5 sm:px-6">
      <span className="text-sm font-semibold text-white sm:text-[15px]">
        {OPTIONAL_SERVICES_HEADING.badge}
      </span>
    </div>
  </header>
);

export default ServicesHeader;
