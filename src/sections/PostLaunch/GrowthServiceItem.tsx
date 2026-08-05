import type { GrowthService } from "../../data/postLaunchData";

interface GrowthServiceItemProps {
  service: GrowthService;
}

const GrowthServiceItem = ({ service }: GrowthServiceItemProps) => {
  const Icon = service.icon;

  return (
    <article className="text-right">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#16A34A]/10">
        <Icon className="h-6 w-6 text-[#16A34A]" strokeWidth={2} />
      </div>
      <h4 className="text-lg font-bold text-[#16A34A] sm:text-xl">{service.title}</h4>
      <p className="mt-3 text-sm leading-8 text-[#0F2348] sm:text-[15px] sm:leading-9">
        {service.description}
      </p>
    </article>
  );
};

export default GrowthServiceItem;
