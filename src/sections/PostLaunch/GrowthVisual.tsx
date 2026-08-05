import {
  BarChart3,
  Megaphone,
  Search,
  Sprout,
  Target,
} from "lucide-react";
import laptopImg from "../../assets/LaptopImg.png";

const GrowthVisual = () => (
  <div className="relative mx-auto w-full max-w-lg">
    <div className="pointer-events-none absolute left-2 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md sm:h-11 sm:w-11">
      <Target className="h-5 w-5 text-[#3B82F6]" strokeWidth={2} />
    </div>

    <div className="pointer-events-none absolute left-0 top-1/3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md sm:h-11 sm:w-11">
      <BarChart3 className="h-5 w-5 text-[#3B82F6]" strokeWidth={2} />
    </div>

    <div className="pointer-events-none absolute bottom-16 left-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#16A34A]/15 sm:h-11 sm:w-11">
      <Sprout className="h-5 w-5 text-[#16A34A]" strokeWidth={2} />
    </div>

    <div className="pointer-events-none absolute bottom-10 left-16 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md sm:h-11 sm:w-11">
      <Search className="h-5 w-5 text-[#16A34A]" strokeWidth={2} />
    </div>

    <div className="pointer-events-none absolute bottom-1/3 right-0 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#3B82F6] shadow-lg sm:h-12 sm:w-12">
      <Megaphone className="h-5 w-5 text-white" strokeWidth={2} />
    </div>

    <img
      src={laptopImg}
      alt="لوحة تحكم نمو الأكاديمية"
      className="relative z-10 mx-auto w-full max-w-[520px] bg-transparent object-contain drop-shadow-[0_24px_48px_rgba(15,35,72,0.12)]"
    />

    <div className="relative z-20 mt-4 flex items-center justify-center gap-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0081FB] text-[10px] font-bold text-white">
        f
      </span>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-[10px] font-bold text-white">
        ig
      </span>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0081FB] text-[10px] font-bold text-white">
        M
      </span>
    </div>
  </div>
);

export default GrowthVisual;
