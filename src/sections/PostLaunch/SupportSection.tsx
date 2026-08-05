import { AlertCircle, Headphones } from "lucide-react";
import {
  SUPPORT_FEATURES,
  SUPPORT_HEADING,
  SUPPORT_NOTE,
} from "../../data/postLaunchData";
import SupportFeatureCard from "./SupportFeatureCard";

const SupportSection = () => (
  <div className="mt-14 sm:mt-16 lg:mt-20">
    <div className="overflow-hidden rounded-2xl bg-[#0F2348] px-5 py-4 sm:px-8 sm:py-5">
      <div className="flex items-center justify-center gap-3">
        <Headphones className="h-6 w-6 shrink-0 text-white sm:h-7 sm:w-7" strokeWidth={2} />
        <h3 className="text-center text-base font-bold text-white sm:text-lg">
          {SUPPORT_HEADING.title}
        </h3>
      </div>
    </div>

    <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-8 text-[#0F2348] sm:text-[15px] sm:leading-9">
      {SUPPORT_HEADING.subtitle}
    </p>

    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {SUPPORT_FEATURES.map((feature) => (
        <SupportFeatureCard key={feature.id} feature={feature} />
      ))}
    </div>

    <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[#FF7A00]/20 bg-[#FFF9F0] px-4 py-4 sm:items-center sm:gap-4 sm:px-6 sm:py-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF7A00]">
        <AlertCircle className="h-5 w-5 text-white" strokeWidth={2} />
      </div>
      <p className="text-sm leading-7 text-[#0F2348] sm:text-[15px] sm:leading-8">
        {SUPPORT_NOTE}
      </p>
    </div>
  </div>
);

export default SupportSection;
