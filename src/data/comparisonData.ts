import {
  CalendarClock,
  Percent,
  Rocket,
  Shield,
  Smile,
  UserX,
  type LucideIcon,
} from "lucide-react";

export type FeatureAccent = "green" | "blue" | "orange";

export interface ChallengeItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface BottomFeature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  accent: FeatureAccent;
}

export const COMPARISON_HEADING = {
  title: "لماذا تحتاج أكاديمية رقمية خاصة بك اليوم؟",
  subtitle:
    "التحديات التي تواجهك في المنصات التقليدية والحل الذي نقدمه لك",
};

export const COMPARISON_LABELS = {
  brandTagline: "MOALLEM PRO MAX",
  challengesBadge: "التحديات التي تواجه المدرب",
  solutionBadge: "حل معلم برو ماكس",
  bottomFeaturesTitle: "المميزات الثلاثية الكبرى",
};

export const CHALLENGE_ITEMS: ChallengeItem[] = [
  {
    id: "commissions",
    icon: Percent,
    title: "العمولات والاقتطاعات العالية",
    description:
      "المنصات المشتركة تأخذ نسبة كبيرة من أرباح دوراتك وتتحكم بأسعارك.",
  },
  {
    id: "identity",
    icon: UserX,
    title: "ضياع الهوية والبيانات",
    description:
      "في المنصات العادية العميل يتبع المنصة وليس علامتك التجارية.",
  },
  {
    id: "complexity",
    icon: CalendarClock,
    title: "التعقيد التقني والمواعيد الطويلة",
    description:
      "إنشاء منصة تقليدية يحتاج وقتاً طويلاً وتكاليف مرتفعة.",
  },
];

export const SOLUTION_TEXT = {
  paragraph:
    "لقد قمنا بتطوير نظام إطلاق الأكاديميات الرقمية ليمنحك السيطرة الكاملة على مشروعك بدون التعامل مع أي أكواد برمجية.",
  highlight: "لتتفرغ لإنتاج المحتوى وتدريب الطلاب.",
};

export const BOTTOM_FEATURES: BottomFeature[] = [
  {
    id: "speed",
    icon: Rocket,
    title: "سرعة قياسية",
    description: "أكاديميتك جاهزة للبيع خلال 7 أيام فقط.",
    accent: "green",
  },
  {
    id: "ownership",
    icon: Shield,
    title: "ملكية 100%",
    description: "الموقع والبيانات والأرباح ملكك بالكامل.",
    accent: "blue",
  },
  {
    id: "experience",
    icon: Smile,
    title: "تجربة مستخدم ساحرة",
    description: "واجهة سهلة تعمل بكفاءة على جميع الأجهزة.",
    accent: "orange",
  },
];

export const ACCENT_TITLE_CLASSES: Record<FeatureAccent, string> = {
  green: "text-[#16A34A]",
  blue: "text-[#0F2348]",
  orange: "text-[#FF7A00]",
};

export const ACCENT_ICON_CLASSES: Record<FeatureAccent, string> = {
  green: "bg-[#16A34A]",
  blue: "bg-[#0F2348]",
  orange: "bg-[#FF7A00]",
};
