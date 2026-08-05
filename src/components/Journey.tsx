import { MessageCircle, Settings, BookOpen, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface JourneyStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    icon: MessageCircle,
    title: "تواصل معنا",
    description:
      "احجز استشارة قصيرة لنفهم أهدافك ونضع خطة عملية لبناء أكاديميتك.",
  },
  {
    icon: Settings,
    title: "نجهز منصتك",
    description:
      "نهيئ الصفحات والهيكل والإعدادات الأساسية لتبدو منصتك احترافية وجاهزة للعرض.",
  },
  {
    icon: BookOpen,
    title: "أضف محتواك",
    description:
      "ارفع الدورات وابنِ المسارات التعليمية التي تزيد من تفاعل الطلاب ورضاهم.",
  },
  {
    icon: Rocket,
    title: "أطلق أكاديميتك الآن",
    description:
      "ابدأ باستقبال الطلاب وتقديم تجربة تعليمية مميزة بثقة واحتراف.",
  },
];

const Journey = () => {
  return (
    <section dir="rtl" className="bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#FF7A00]/10 text-[#FF7A00] text-sm font-medium">
            رحلتك تبدأ من هنا
          </span>

          <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F2348]">
            حوّل خبرتك إلى أكاديمية رقمية بخطوات بسيطة
          </h2>

          <p className="mt-4 text-[#64748B] text-base max-w-2xl mx-auto">
            نرشدك من الفكرة إلى الإطلاق عبر خطوات عملية وواضحة تساعدك على بناء
            أكاديمية رقمية مهنية وتجربة تعليمية موثوقة للطلاب.
          </p>
        </div>

        <div className="mt-12 relative">
          {/* horizontal connector line behind the numbered circles (desktop) */}
          <div className="hidden md:block absolute left-6 right-6 top-16 h-0.5 bg-gray-200 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {JOURNEY_STEPS.map((step, idx) => {
              const number = (idx + 1).toString().padStart(2, "0");

              return (
                <div key={idx} className="relative z-10">
                  {/* Number circle */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-white shadow-md ring-1 ring-black/5 flex items-center justify-center text-sm font-semibold text-[#0F2348]">
                      {number}
                    </div>
                  </div>

                  <article className="h-full flex flex-col justify-between bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 border border-transparent">
                    <div className="flex flex-col items-center text-center">
                      <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-[#FFF5EB] text-[#FF7A00]">
                        <step.icon className="w-8 h-8" />
                      </div>

                      <h3 className="mt-6 text-lg md:text-xl font-extrabold text-[#0F2348]">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm md:text-base text-[#64748B] leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-6 flex justify-center">
                      <span className="inline-block w-16 h-1 rounded-full bg-[#FF7A00]/10" />
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
