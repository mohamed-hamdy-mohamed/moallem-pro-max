import React from "react";
import heroImg from "../assets/hero.png";
import {
  MessageCircle,
  ArrowLeft,
  BadgeCheck,
  BookOpen,
  GraduationCap,
  Award,
  Users,
  Star,
  Video,
  type LucideIcon,
} from "lucide-react";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

const WHATSAPP_NUMBER = "905553581535";

const handleWhatsAppClick = () => {
  window.fbq?.("track", "Lead", {
    button: "WhatsApp",
    page_location: window.location.href,
  });
};

const TRUST_BADGES: { icon: LucideIcon; text: string }[] = [
  { icon: BadgeCheck, text: "أكثر من 1200 طالب" },
  { icon: BadgeCheck, text: "تحديثات مجانية" },
  { icon: BadgeCheck, text: "دعم مباشر" },
];

const FEATURE_PILLS: { icon: LucideIcon; text: string }[] = [
  { icon: BookOpen, text: "شرح عملي" },
  { icon: GraduationCap, text: "بدون خبرة" },
  { icon: Award, text: "نتائج حقيقية" },
];

const HERO_CARDS: {
  icon: LucideIcon;
  value: string;
  label: string;
  pos: string;
}[] = [
  { icon: Star, value: "95%", label: "رضا العملاء", pos: "top-6 left-4" },
  { icon: Users, value: "1200+", label: "طالب", pos: "bottom-6 right-6" },
  { icon: Video, value: "8", label: "جلسات مباشرة", pos: "top-20 right-10" },
];

const Hero: React.FC = () => {
  return (
    <section dir="rtl" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image (left on desktop, first on mobile) */}
          <div className="order-first md:order-none">
            <div className="relative w-full flex items-center justify-center">
              {/* Decorative blurred shapes */}
              <div className="absolute -left-10 -top-10 w-72 h-48 rounded-full bg-[#FF7A00]/20 blur-2xl opacity-70" />
              <div className="absolute -right-8 -bottom-8 w-56 h-56 rounded-full bg-[#0F2348]/10 blur-2xl opacity-60" />

              <img
                src={heroImg}
                alt="معلم برو ماكس"
                className="w-full max-w-md md:max-w-none rounded-3xl shadow-[0_40px_80px_rgba(15,35,72,.18)] object-cover"
              />

              {/* Floating glass cards (hidden on small screens) */}
              <div className="hidden md:block">
                {HERO_CARDS.map((c, idx) => (
                  <div
                    key={idx}
                    className={`absolute ${c.pos} transform-cpu translate-z-0 backdrop-blur-md bg-white/70 border border-white/20 rounded-xl px-4 py-3 shadow-lg min-w-[120px]`}
                  >
                    <div className="flex items-center gap-2">
                      <c.icon className="h-5 w-5 text-[#FF7A00]" />
                      <div className="text-[#0F2348] font-extrabold text-lg">
                        {c.value}
                      </div>
                    </div>
                    <div className="text-sm text-[#64748B] mt-1">{c.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content (right on desktop) */}
          <div className="text-center md:text-right">
            <span className="inline-flex items-center gap-2 bg-[#FF7A00]/10 text-[#FF7A00] px-3 py-1 rounded-full text-sm font-medium">
              تعلم متقدم
            </span>

            <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F2348 leading-[1.15] max-w-[550px] mx-auto md:mx-0">
              معلم برو ماكس — المسار العملي لتعليم البرمجة
              <br />
              والدخول إلى سوق العمل الحقيقي
            </h1>

            <p className="mt-6 text-[#64748B] max-w-[550px] mx-auto md:mx-0 leading-8">
              دورة مركزة عملية مع أمثلة حقيقية، مشاريع قابلة للعرض، ودعم مباشر
              لمساعدتك في بناء مسار مهني مربح.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-3 max-w-[550px] mx-auto md:mx-0">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                onClick={handleWhatsAppClick}
                target="_blank"
                rel="noreferrer"
                className="hover:scale-105 hover:border-[#FF7A00] w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF7A00] hover:bg-[#EA6400] text-white rounded-full shadow-md transition-transform transform hover:-translate-y-0.5 font-semibold"
              >
                <MessageCircle className="h-5 w-5" />
                ابدأ عبر واتساب
              </a>

              <a
                href="#learn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 text-[#0F2348] rounded-full shadow-sm hover:shadow-md transition-transform font-medium"
              >
                <ArrowLeft className="h-5 w-5" />
                اعرف المزيد
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 justify-center md:justify-start">
              {TRUST_BADGES.map((b, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 px-5 py-2 bg-gray-50 rounded-full text-sm text-[#0F2348] font-medium border border-gray-100"
                >
                  <b.icon className="h-4 w-4 text-[#10B981]" />
                  <span>{b.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
              {FEATURE_PILLS.map((p, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 text-[#0F2348] rounded-full text-sm font-medium border border-gray-100"
                >
                  <p.icon className="h-4 w-4 text-[#0F2348]" />
                  {p.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
