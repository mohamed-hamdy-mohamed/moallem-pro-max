import laptopImg from "../../assets/LaptopImg.png";
import { HERO_BADGES } from "../../data/heroData";
import HeroBadge from "./HeroBadge";

const HeroLaptop = () => {
  return (
    <div className="relative mx-auto w-full max-w-[640px]">
      <svg
        className="pointer-events-none absolute inset-0 z-[1] hidden h-full w-full lg:block"
        viewBox="0 0 640 580"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M100 72 C170 95, 250 130, 310 195"
          stroke="#CBD5E1"
          strokeWidth="1.2"
          strokeDasharray="5 7"
          strokeLinecap="round"
        />
        <path
          d="M340 58 C380 105, 400 165, 395 235"
          stroke="#CBD5E1"
          strokeWidth="1.2"
          strokeDasharray="5 7"
          strokeLinecap="round"
        />
        <path
          d="M55 248 C120 228, 210 218, 295 258"
          stroke="#CBD5E1"
          strokeWidth="1.2"
          strokeDasharray="5 7"
          strokeLinecap="round"
        />
        <path
          d="M85 468 C155 410, 235 375, 310 345"
          stroke="#CBD5E1"
          strokeWidth="1.2"
          strokeDasharray="5 7"
          strokeLinecap="round"
        />
        <path
          d="M545 248 C490 235, 445 250, 400 290"
          stroke="#CBD5E1"
          strokeWidth="1.2"
          strokeDasharray="5 7"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative z-10 px-2 pt-4 sm:pt-6 lg:pt-8">
        <img
          src={laptopImg}
          alt="لوحة تحكم معلم برو ماكس"
          className="relative z-10 mx-auto w-full max-w-[560px] bg-transparent object-contain drop-shadow-[0_20px_40px_rgba(15,35,72,0.10)] lg:max-w-[580px]"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-30 hidden lg:block">
        {HERO_BADGES.map((badge) => (
          <HeroBadge
            key={badge.id}
            icon={badge.icon}
            iconVariant={badge.iconVariant}
            title={badge.title}
            subtitle={badge.subtitle}
            className={badge.position}
          />
        ))}
      </div>

      <div className="relative z-30 mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:hidden">
        {HERO_BADGES.map((badge) => (
          <HeroBadge
            key={badge.id}
            icon={badge.icon}
            iconVariant={badge.iconVariant}
            title={badge.title}
            subtitle={badge.subtitle}
            floating={false}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroLaptop;
