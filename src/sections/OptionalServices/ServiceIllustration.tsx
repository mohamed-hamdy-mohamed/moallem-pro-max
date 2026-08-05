import {
  Crown,
  Mic,
  Monitor,
  Shield,
  Users,
} from "lucide-react";
import type { OptionalService } from "../../data/optionalServicesData";

interface ServiceIllustrationProps {
  service: OptionalService;
}

const ServiceIllustration = ({ service }: ServiceIllustrationProps) => {
  if (service.variant === "social") {
    return (
      <div className="flex items-center justify-center gap-3 py-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF7A00]/15">
          <Users className="h-6 w-6 text-[#FF7A00]" strokeWidth={2} />
        </div>
        <div className="h-px w-8 bg-slate-200" />
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F2348]/10">
          <Users className="h-5 w-5 text-[#0F2348]" strokeWidth={2} />
        </div>
        <div className="h-px w-8 bg-slate-200" />
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF7A00]/15">
          <Users className="h-6 w-6 text-[#FF7A00]" strokeWidth={2} />
        </div>
      </div>
    );
  }

  if (service.variant === "memberships") {
    return (
      <div className="flex items-center justify-center py-4">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3B82F6]/10">
          <Shield className="h-8 w-8 text-[#3B82F6]" strokeWidth={2} />
          <Crown className="absolute -right-1 -top-1 h-5 w-5 text-[#FF7A00]" strokeWidth={2} />
        </div>
      </div>
    );
  }

  if (service.variant === "recording") {
    return (
      <div className="flex items-center justify-center gap-4 py-4">
        <Monitor className="h-10 w-10 text-[#0F2348]" strokeWidth={2} />
        <Mic className="h-8 w-8 text-[#FF7A00]" strokeWidth={2} />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-slate-100">
        <span className="text-2xl font-bold">
          <span className="text-[#4285F4]">G</span>
        </span>
      </div>
    </div>
  );
};

export default ServiceIllustration;
