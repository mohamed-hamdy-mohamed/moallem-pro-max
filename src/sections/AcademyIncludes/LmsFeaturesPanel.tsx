import { GraduationCap } from "lucide-react";
import laptopImg from "../../assets/LaptopImage2.png";
import { LMS_FEATURES, LMS_HIGHLIGHTS, LMS_PANEL } from "../../data/academyIncludesData";
import LmsFeatureCard from "./LmsFeatureCard";
import LmsHighlightItem from "./LmsHighlightItem";

const LmsFeaturesPanel = () => (
  <article className="relative rounded-3xl border-2 border-[#BFDBFE] bg-white px-4 pb-6 pt-10 shadow-[0_12px_40px_rgba(15,35,72,0.06)] sm:px-6 sm:pb-8 sm:pt-12 lg:px-8">
    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
      <div className="flex items-center gap-2 rounded-2xl bg-[#0F2348] px-5 py-3 shadow-lg sm:gap-3 sm:px-7 sm:py-3.5">
        <GraduationCap className="h-5 w-5 text-[#FF7A00] sm:h-6 sm:w-6" strokeWidth={2} />
        <h3 className="whitespace-nowrap text-sm font-bold text-white sm:text-base">
          {LMS_PANEL.title}
        </h3>
      </div>
    </div>

    <div className="mt-4 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
      <div className="order-2 lg:order-1">
        <img
          src={laptopImg}
          alt="لوحة تحكم نظام إدارة التعلم"
          className="mx-auto h-auto w-full max-w-md bg-transparent object-cover"
          width={1000}
          height={667}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="order-1 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:order-2">
        {LMS_FEATURES.map((feature, index) => (
          <div
            key={feature.id}
            className={index === LMS_FEATURES.length - 1 ? "sm:col-span-2 lg:col-span-1" : undefined}
          >
            <LmsFeatureCard feature={feature} />
          </div>
        ))}
      </div>
    </div>

    <div className="mt-8 grid grid-cols-2 gap-4 border-t border-dashed border-slate-200 pt-6 sm:grid-cols-4 sm:gap-6 sm:pt-8">
      {LMS_HIGHLIGHTS.map((item) => (
        <LmsHighlightItem key={item.id} item={item} />
      ))}
    </div>
  </article>
);

export default LmsFeaturesPanel;
