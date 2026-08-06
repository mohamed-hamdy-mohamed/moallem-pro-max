import { memo } from "react";
import { Crown, Shield } from "lucide-react";
import type { OptionalService } from "../../data/optionalServicesData";
import googleLogo from "../../assets/google.svg";
import TrainingLaptop from "../../assets/Training_Laptop.png";
import SocialMedia from "../../assets/SocialMedia.png";

interface ServiceIllustrationProps {
  service: OptionalService;
}

const ILLUSTRATION_FRAME =
  "flex min-h-[220px] items-center justify-center overflow-hidden px-2 py-3 sm:min-h-[240px]";

const ILLUSTRATION_IMG =
  "mx-auto h-auto w-full max-w-[300px] object-contain object-center sm:max-w-[330px]";

const ServiceIllustration = ({ service }: ServiceIllustrationProps) => {
  switch (service.variant) {
    case "social":
      return (
        <div className={ILLUSTRATION_FRAME}>
          <img
            src={SocialMedia}
            alt="مجتمع الطلاب"
            width={1000}
            height={667}
            loading="lazy"
            decoding="async"
            className={`${ILLUSTRATION_IMG} max-w-[320px] sm:max-w-[360px]`}
          />
        </div>
      );

    case "memberships":
      return (
        <div className={ILLUSTRATION_FRAME}>
          <div className="relative flex h-[160px] w-[160px] items-center justify-center rounded-3xl bg-[#F8FAFC] shadow-sm sm:h-[180px] sm:w-[180px]">
            <Shield className="h-20 w-20 text-[#3B82F6]" strokeWidth={1.8} aria-hidden="true" />
            <Crown className="absolute -top-3 h-10 w-10 text-[#FFB000]" strokeWidth={1.8} aria-hidden="true" />
          </div>
        </div>
      );

    case "recording":
      return (
        <div className={ILLUSTRATION_FRAME}>
          <img
            src={TrainingLaptop}
            alt="تدريب على تسجيل الكورسات"
            width={1000}
            height={750}
            loading="lazy"
            decoding="async"
            className={ILLUSTRATION_IMG}
          />
        </div>
      );

    default:
      return (
        <div className={ILLUSTRATION_FRAME}>
          <img
            src={googleLogo}
            alt="Google"
            width={48}
            height={48}
            loading="lazy"
            decoding="async"
            className="mx-auto h-auto w-[72px] max-w-full object-contain sm:w-[84px]"
          />
        </div>
      );
  }
};

export default memo(ServiceIllustration);
