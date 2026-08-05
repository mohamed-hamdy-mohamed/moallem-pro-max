import React from "react";
import {
  AlertTriangle,
  Clock3,
  PackageSearch,
  TrendingDown,
  Target,
  Handshake,
  Truck,
  TrendingUp,
  Rocket,
  ShieldCheck,
  Award,
} from "lucide-react";

type IconComp = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const PROBLEMS_ITEMS: { icon: IconComp; title: string }[] = [
  { icon: AlertTriangle, title: "صعوبة اختيار المنتج المناسب" },
  { icon: Clock3, title: "إهدار الوقت والمال في التجربة" },
  { icon: PackageSearch, title: "عدم معرفة المورد الموثوق" },
  { icon: TrendingDown, title: "ضعف الأرباح" },
];

const SOLUTIONS_ITEMS: { icon: IconComp; title: string }[] = [
  { icon: Target, title: "اختيار المنتجات المربحة" },
  { icon: Handshake, title: "التعامل مع الموردين بثقة" },
  { icon: Truck, title: "الشحن خطوة بخطوة" },
  { icon: TrendingUp, title: "تحقيق أرباح حقيقية" },
];

const FEATURES: { icon: IconComp; title: string; desc: string }[] = [
  {
    icon: Rocket,
    title: "سرعة التطبيق",
    desc: "تنفيذ عملي سريع لتحويل المعرفة إلى دخل.",
  },
  { icon: ShieldCheck, title: "دعم كامل", desc: "فريق دعم يرافقك خطوة بخطوة." },
  {
    icon: Award,
    title: "خبرة عملية",
    desc: "محتوى مُجرّب مع نتائج قابلة للقياس.",
  },
];

const Comparison: React.FC = () => {
  return (
    <section dir="rtl" className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading  */}

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex px-4 py-2 rounded-full bg-orange-100 text-[#FF7A00] font-medium">
            لماذا معلم برو ماكس؟
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-[#0F2348]">
            الفرق بين المحاولة العشوائية والطريق الصحيح
          </h2>

          <p className="mt-5 text-lg text-slate-500 leading-8">
            بدلًا من خسارة الوقت والمال في التجربة، اتبع خطة عملية أثبتت نجاحها.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problems Card */}
          <article className="bg-white rounded-3xl border border-gray-100 p-8 hover:border-[#FF7A00] transition transform hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-[#0F2348]">
                التحديات التي تواجهك
              </h3>
              <p className="mt-2 text-sm text-[#64748B]">
                المشاكل الشائعة قبل الانضمام للدورة
              </p>
            </div>

            <ul className="mt-6 space-y-4">
              {PROBLEMS_ITEMS.map((it, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-[#FF7A00] transition"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-orange-50">
                    <it.icon className="h-7 w-7 text-red-500" />
                  </div>
                  <div>
                    <div className="text-lg font-medium text-[#0F2348]">
                      {it.title}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          {/* Solutions Card */}
          <article className="bg-white rounded-3xl border border-gray-100 p-8 hover:border-[#FF7A00] transition transform hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-[#0F2348]">
                مع معلم برو ماكس
              </h3>
              <p className="mt-2 text-sm text-[#64748B]">
                الحلول العملية التي نقدمها لضمان نجاحك التجاري
              </p>
            </div>

            <ul className="mt-6 space-y-4">
              {SOLUTIONS_ITEMS.map((it, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-[#FF7A00] transition"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-red-50">
                    <it.icon className="h-7 w-7 text-[#FF7A00]" />
                  </div>
                  <div>
                    <div className="text-lg font-medium text-[#0F2348]">
                      {it.title}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Feature Grid - centered premium cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {FEATURES.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition"
            >
              <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center mx-auto">
                <item.icon className="w-9 h-9 text-[#FF7A00]" />
              </div>

              <h4 className="mt-6 text-xl font-bold text-[#0F2348]">
                {item.title}
              </h4>

              <p className="mt-3 text-slate-500 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
