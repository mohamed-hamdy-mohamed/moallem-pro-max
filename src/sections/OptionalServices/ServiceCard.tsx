import clsx from "clsx";
import { Check } from "lucide-react";
import {
  CHECK_COLOR_CLASSES,
  type OptionalService,
} from "../../data/optionalServicesData";
import CardDotDecoration from "./CardDotDecoration";
import MembershipTierRow from "./MembershipTierRow";
import ServiceIllustration from "./ServiceIllustration";

interface ServiceCardProps {
  service: OptionalService;
}

const ServiceCard = ({ service }: ServiceCardProps) => (
  <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_10px_36px_rgba(15,35,72,0.07)]">
    <div className="border-b border-slate-100 px-5 py-4 sm:px-6 sm:py-5">
      <h3
        className={clsx(
          "text-base font-bold sm:text-lg",
          service.titleColor === "green" ? "text-[#15803D]" : "text-[#0F2348]",
        )}
      >
        {service.title}
      </h3>
      <p className="mt-2.5 text-sm leading-7 text-[#64748B] sm:text-[15px] sm:leading-8">
        {service.description}
      </p>
    </div>

    <div className="flex flex-1 flex-col px-5 pb-5 sm:px-6 sm:pb-6">
      <ServiceIllustration service={service} />

      {service.membershipTiers ? (
        <ul className="mt-1 space-y-2.5 sm:space-y-3">
          {service.membershipTiers.map((tier) => (
            <MembershipTierRow key={tier.id} tier={tier} />
          ))}
        </ul>
      ) : (
        <ul className="mt-1 space-y-2 sm:space-y-2.5">
          {service.checklist.map((item) => (
            <li key={item.id} className="flex items-start gap-2.5 text-right">
              <span
                className={clsx(
                  "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                  CHECK_COLOR_CLASSES[service.checkColor],
                )}
              >
                <Check className="h-3 w-3 text-white" strokeWidth={3} />
              </span>
              <span className="text-sm leading-7 text-[#0F2348] sm:text-[15px]">{item.text}</span>
            </li>
          ))}
        </ul>
      )}
    </div>

    {service.dotCorner ? <CardDotDecoration corner={service.dotCorner} /> : null}
  </article>
);

export default ServiceCard;
