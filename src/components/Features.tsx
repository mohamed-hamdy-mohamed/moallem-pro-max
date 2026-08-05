import React from "react";
import { GraduationCap, BookOpen, Users, type LucideIcon } from "lucide-react";

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURES: FeatureItem[] = [
  {
    icon: GraduationCap,
    title: "بناء أكاديمية احترافية",
    description:
      "بناء عروض ودورات مهيكلة تساعدك على تقديم محتواك بشكل احترافي وتحويل المهتمين إلى طلاب.",
  },
  {
    icon: BookOpen,
    title: "إدارة المحتوى والطلاب بسهولة",
    description:
      "تنظيم الدروس والطلاب في لوحة واحدة لتقليل الوقت الإداري وزيادة معدلات الاحتفاظ.",
  },
  {
    icon: Users,
    title: "تجربة تعليمية متكاملة",
    description:
      "تجربة سلسة للطالب تزيد من الثقة والتفاعل، مما يرفع التوصيات ومعدل استمرارية الاشتراك.",
  },
];

const Features: React.FC = () => {
  return (
    <section dir="rtl" className="bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 py-12 sm:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#FF7A00]/10 text-[#FF7A00] text-sm font-medium">
            مميزات المنصة
          </span>

          <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F2348]">
            كل ما تحتاجه لبناء أكاديمية تعليمية احترافية
          </h2>

          <p className="mt-4 text-[#64748B] text-base leading-7 max-w-2xl mx-auto">
            معلم برو ماكس يساعد المعلمين على تحويل معرفتهم إلى أكاديمية رقمية
            منظمة وتقديم تجربة متسقة ومحترفة للطلاب.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((f, idx) => (
            <article
              key={idx}
              className="h-full bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 rounded-lg bg-[#FFF5EB] flex items-center justify-center">
                  <f.icon className="h-8 w-8 text-[#FF7A00]" />
                </div>

                <h3 className="text-xl font-bold text-[#0F2348]">{f.title}</h3>

                <p className="text-base leading-7 text-[#64748B] max-w-[46ch]">
                  {f.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
