import { Headphones, Rocket } from "lucide-react";
import { CTA_BLOCK } from "../../data/optionalServicesData";

const ServicesCTA = () => (
  <article className="mt-8 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_10px_36px_rgba(15,35,72,0.07)] sm:mt-10">
    <div className="grid grid-cols-1 items-center gap-5 p-5 sm:p-6 lg:grid-cols-[auto_1fr_auto] lg:gap-6 lg:p-7">
      <div className="flex justify-center lg:justify-end">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF7A00]/10 sm:h-[72px] sm:w-[72px]">
          <Headphones className="h-8 w-8 text-[#FF7A00]" strokeWidth={2} />
        </div>
      </div>

      <div className="text-center lg:text-right">
        <h3 className="text-lg font-bold text-[#0F2348] sm:text-xl">{CTA_BLOCK.title}</h3>
        <p className="mt-2 text-sm leading-7 text-[#64748B] sm:text-[15px] sm:leading-8">
          {CTA_BLOCK.description}
        </p>
        <p className="mt-3 text-sm font-semibold leading-7 text-[#0F2348] sm:text-[15px]">
          {CTA_BLOCK.support}
        </p>
      </div>

      <div className="flex justify-center lg:justify-start">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF7A00]/10 sm:h-[72px] sm:w-[72px]">
          <Rocket className="h-8 w-8 text-[#FF7A00]" strokeWidth={2} />
        </div>
      </div>
    </div>
  </article>
);

export default ServicesCTA;
