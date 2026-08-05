import { BookOpen, Smile, Laptop, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface TrustItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const TRUST_ITEMS: TrustItem[] = [
  {
    icon: BookOpen,
    title: "تنظيم احترافي للمحتوى",
    description:
      "نظام واضح لبناء المقررات والمسارات التعليمية يسهل إدارة المحتوى وتقديمه بشكل احترافي للطلاب.",
  },
  {
    icon: Smile,
    title: "تجربة استخدام سهلة",
    description:
      "واجهة مُصممة للمدرّسين والطلاب لتسهيل النشر، المتابعة، والتفاعل دون تعقيد.",
  },
  {
    icon: Laptop,
    title: "يعمل على جميع الأجهزة",
    description:
      "منصتنا متوافقة مع الحواسيب والهواتف والأجهزة اللوحية لتضمن تجربة متسقة أينما كان الطالب.",
  },
  {
    icon: Rocket,
    title: "جاهز للنمو والتوسع",
    description:
      "بنية قابلة للتوسع تمكنك من إضافة مسارات، طلاب، ومحتوى إضافي بسهولة مع نمو أكاديميتك.",
  },
];

const TrustSection = () => {
  return (
    <section
      dir="rtl"
      aria-labelledby="trust-heading"
      className="py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#FF7A00]/10 text-[#FF7A00] text-sm font-medium">
            لماذا معلم برو ماكس؟
          </span>

          <h2
            id="trust-heading"
            className="mt-6 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F2348]"
          >
            كل ما تحتاجه لإطلاق أكاديمية تعليمية احترافية
          </h2>

          <p className="mt-4 text-base text-[#64748B] max-w-2xl mx-auto">
            نركّز على توفير تجربة تعليمية مهنية للمدرّسين والطلاب، مع أدوات
            عملية لإدارة المحتوى، التفاعل، والتوسع المستدام للأكاديمية.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {TRUST_ITEMS.map((item, idx) => (
            <article
              key={idx}
              className="h-full flex flex-col justify-start p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-transform duration-200 ease-in-out hover:-translate-y-1 border border-gray-100 hover:border-[#FF7A00]/40"
            >
              <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-lg bg-[#FFF5EB] text-[#FF7A00] mx-auto">
                <item.icon className="w-7 h-7" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-[#0F2348] text-center">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-[#64748B] leading-relaxed text-center flex-1">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
