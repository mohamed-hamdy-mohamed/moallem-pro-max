import { Crown, Shield } from "lucide-react";
import type { OptionalService } from "../../data/optionalServicesData";
import googleLogo from "../../assets/google.svg";
import TrainingLaptop from "../../assets/Training_Laptop.png";
import SocialMedia from "../../assets/SocialMedia.png";

interface ServiceIllustrationProps {
  service: OptionalService;
}

const IMAGE_CLASS =
  "mx-auto h-auto max-h-[180px] w-auto max-w-[260px] object-contain sm:max-h-[210px]";

const ICON_WRAPPER =
  "flex h-[210px] items-center justify-center";

const ServiceIllustration = ({ service }: ServiceIllustrationProps) => {
  switch (service.variant) {
    case "social":
      return (
        <div className={ICON_WRAPPER}>
          <img
            src={SocialMedia}
            alt="مجتمع الطلاب"
            className={IMAGE_CLASS}
          />
        </div>
      );

    case "memberships":
      return (
        <div className={ICON_WRAPPER}>
          <div className="relative flex h-[180px] w-[180px] items-center justify-center rounded-3xl bg-[#F8FAFC] shadow-sm">
            <Shield
              className="h-20 w-20 text-[#3B82F6]"
              strokeWidth={1.8}
            />

            <Crown
              className="absolute -top-3 h-10 w-10 text-[#FFB000]"
              strokeWidth={1.8}
            />
          </div>
        </div>
      );

    case "recording":
      return (
        <div className={ICON_WRAPPER}>
          <img
            src={TrainingLaptop}
            alt="تدريب على تسجيل الكورسات"
            className={IMAGE_CLASS}
          />
        </div>
      );

    default:
      return (
        <div className={ICON_WRAPPER}>
          <img
            src={googleLogo}
            alt="Google"
            className={IMAGE_CLASS}
          />
        </div>
      );
  }
};

export default ServiceIllustration;