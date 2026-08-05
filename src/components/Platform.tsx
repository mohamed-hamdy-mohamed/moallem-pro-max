import laptop from "../assets/LaptopImg.png";
import {
  Video,
  Users,
  FileText,
  BarChart3,
  Smartphone,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface PlatformFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const PLATFORM_FEATURES: PlatformFeature[] = [
  {
    icon: Video,
    title: "رفع وتنظيم الدروس",
    description: "تحميل دروس الفيديو وتنظيمها بطريقة عرض احترافية.",
  },
  {
    icon: Users,
    title: "إدارة الطلاب",
    description: "لوحة تحكّم لرصد الطلاب وإدارة الاشتراكات بكفاءة.",
  },
  {
    icon: FileText,
    title: "تنظيم المحتوى التعليمي",
    description: "هيكلة الدروس والموارد ضمن مسارات قابلة للمتابعة.",
  },
  {
    icon: BarChart3,
    title: "متابعة الأداء",
    description: "تقارير تساعدك على فهم أداء المحتوى وتحسين تجربة الطلاب.",
  },
  {
    icon: Smartphone,
    title: "تجربة مناسبة لجميع الأجهزة",
    description: "واجهات متجاوبة تضمن تجربة ممتازة على الجوال واللوح والحاسوب.",
  },
  {
    icon: ShieldCheck,
    title: "بيئة تعليمية احترافية",
    description: "أدوات وثقة تساعدك على تقديم محتوى ذا جودة ومصداقية.",
  },
];

const Platform = () => {
  return (
    <section dir="rtl" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Image side (right on desktop visual) - render first for mobile */}
          <div className="order-first md:order-2">
            <div className="relative rounded-2xl bg-white shadow-lg p-6 flex items-center justify-center">
              <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-[#FF7A00]/10 blur-2xl opacity-80" />
              <div className="absolute -left-10 -bottom-10 w-56 h-56 rounded-full bg-[#0F2348]/5 blur-2xl opacity-60" />
              <img
                src={laptop}
                alt="منصة معلم برو ماكس التعليمية"
                className="w-full max-w-md rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Content side */}
          <div className="text-right md:order-1">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FF7A00]/10 text-[#FF7A00] text-sm font-medium">
              منصة متكاملة للمعلمين
            </span>

            <h3 className="mt-6 text-2xl sm:text-3xl font-extrabold text-[#0F2348]">
              كل أدواتك التعليمية في مكان واحد
            </h3>

            <p className="mt-4 text-[#64748B] text-base max-w-xl">
              معلم برو ماكس ليست صفحة دورة واحدة — إنها بيئة متكاملة لتنظيم
              المحتوى، إدارة الطلاب، وتقديم تجربة تعليمية احترافية تزيد من ثقة
              المتعلّم وتُحسّن تجربة التعلم وجودته.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PLATFORM_FEATURES.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1 h-full"
                >
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-[#FFF5EB] flex items-center justify-center">
                    <f.icon className="h-5 w-5 text-[#FF7A00]" />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-[#0F2348]">
                      {f.title}
                    </div>
                    <div className="text-sm text-[#64748B] mt-1">
                      {f.description}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
