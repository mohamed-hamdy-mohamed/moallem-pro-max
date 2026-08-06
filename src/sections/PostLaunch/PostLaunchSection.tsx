import { GROWTH_SERVICES, POST_LAUNCH_HEADING } from "../../data/postLaunchData";
import GrowthIntroCard from "./GrowthIntroCard";
import GrowthServiceItem from "./GrowthServiceItem";
import GrowthVisual from "./GrowthVisual";
import SupportSection from "./SupportSection";

const PostLaunchSection = () => {
  return (
    <section
      dir="rtl"
      aria-labelledby="post-launch-title"
      className="relative overflow-hidden bg-[#F8FAFC] py-14 sm:py-16 lg:py-20"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-4xl text-center">
          <h2
            id="post-launch-title"
            className="text-2xl font-extrabold leading-tight text-[#0F2348] sm:text-3xl md:text-4xl md:leading-[1.2]"
          >
            {POST_LAUNCH_HEADING.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8 md:text-lg">
            {POST_LAUNCH_HEADING.subtitle}
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-2">
            <GrowthVisual />
          </div>

          <div className="order-1 space-y-8 lg:order-1">
            <GrowthIntroCard />

            {GROWTH_SERVICES.map((service) => (
              <GrowthServiceItem key={service.id} service={service} />
            ))}
          </div>
        </div>

        <SupportSection />
      </div>
    </section>
  );
};

export default PostLaunchSection;
