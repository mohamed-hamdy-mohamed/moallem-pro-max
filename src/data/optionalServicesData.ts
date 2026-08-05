import {
  Check,
  Clock,
  Lock,
  Settings,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type CheckColor = "orange" | "green" | "purple";

export interface ServiceCheckItem {
  id: string;
  text: string;
}

export interface MembershipTier {
  id: string;
  name: string;
  detail: string;
  variant: "silver" | "gold" | "platinum";
}

export interface OptionalService {
  id: string;
  title: string;
  description: string;
  checkColor: CheckColor;
  checklist: ServiceCheckItem[];
  membershipTiers?: MembershipTier[];
  variant: "social" | "memberships" | "recording" | "google";
  titleColor?: "navy" | "green";
  dotCorner?: "bottom-left" | "bottom-right";
}

export interface TrustBadge {
  id: string;
  icon: LucideIcon;
  label: string;
}

export const OPTIONAL_SERVICES_HEADING = {
  title: "خدمات إضافية اختيارية",
  subtitle: "أضف المزيد من القوة لمنصتك التعليمية باشتراكات مرنة حسب احتياجك",
  badge: "جميع الخدمات قابلة للتفعيل في أي وقت",
};

export const OPTIONAL_SERVICES: OptionalService[] = [
  {
    id: "memberships",
    variant: "memberships",
    title: "العضويات المتنوعة",
    description:
      "أنشئ خطط عضوية متعددة تمنح الطلاب تجربة مرنة وتزيد من أرباحك بشكل مستمر.",
    checkColor: "orange",
    checklist: [],
    dotCorner: "bottom-right",
    membershipTiers: [
      {
        id: "silver",
        name: "العضوية الفضية",
        detail: "يشاهد 5 كورسات",
        variant: "silver",
      },
      {
        id: "gold",
        name: "العضوية الذهبية",
        detail: "يشاهد 20 كورس",
        variant: "gold",
      },
      {
        id: "platinum",
        name: "العضوية البلاتينية",
        detail: "يشاهد جميع الكورسات",
        variant: "platinum",
      },
    ],
  },
  {
    id: "social",
    variant: "social",
    title: "الشبكة الاجتماعية (مجتمع الطلاب)",
    description:
      "منصة تواصل اجتماعي مصغرة داخل أكاديميتك تساعد الطلاب على التفاعل وبناء مجتمع تعليمي نشط.",
    checkColor: "orange",
    dotCorner: "bottom-left",
    checklist: [
      { id: "1", text: "ملفات شخصية للطلاب" },
      { id: "2", text: "تكوين صداقات ومتابعة الأعضاء" },
      { id: "3", text: "إنشاء مجموعات ومجتمعات" },
      { id: "4", text: "مراسلة خاصة بين الطلاب" },
      { id: "5", text: "إشعارات وتفاعلات فورية" },
    ],
  },
  {
    id: "google",
    variant: "google",
    title: "تسجيل الدخول عن طريق Google",
    description:
      "تسهل على طلابك عملية التسجيل والدخول بخطوة واحدة آمنة وسريعة باستخدام حساب Google.",
    checkColor: "purple",
    dotCorner: "bottom-right",
    checklist: [
      { id: "1", text: "تسجيل دخول بخطوة واحدة" },
      { id: "2", text: "آمن وموثوق" },
      { id: "3", text: "تحسين تجربة المستخدم" },
    ],
  },
  {
    id: "recording",
    variant: "recording",
    title: "تدريب على تسجيل الكورسات",
    titleColor: "green",
    description:
      "دورة عملية شاملة تساعدك على إنتاج كورسات احترافية بجودة عالية تزيد من قيمة كورساتك وتجذب المزيد من الطلاب.",
    checkColor: "green",
    dotCorner: "bottom-left",
    checklist: [
      { id: "1", text: "تصوير الشاشة باحترافية" },
      { id: "2", text: "إضافة الصوت بجودة عالية" },
      { id: "3", text: "تصميم الصور المصغرة" },
      { id: "4", text: "التقطيع والمونتاج الأساسي" },
      { id: "5", text: "إضافة الشعار والمقدمة" },
      { id: "6", text: "تصدير الفيديو بأفضل جودة" },
    ],
  },
];

export const CTA_BLOCK = {
  title: "جاهز لإطلاق أكاديميتك الرقمية بأعلى مستوى؟",
  description:
    "اختر الباقة المناسبة لاحتياجاتك وأضف الخدمات التي تريدها لتحصل على منصة تعليمية متكاملة.",
  support: "نحن معك في كل خطوة — دعم فني احترافي قبل وبعد الإطلاق",
};

export const TRUST_BADGES: TrustBadge[] = [
  { id: "quality", icon: ShieldCheck, label: "ضمان الجودة والأداء" },
  { id: "security", icon: Lock, label: "أمان وخصوصية متقدمة" },
  { id: "updates", icon: Settings, label: "تحديثات مستمرة وتطوير دائم" },
  { id: "time", icon: Clock, label: "التزام بالوقت والمواعيد" },
  { id: "satisfaction", icon: Check, label: "رضاك هو هدفنا" },
];

export const CHECK_COLOR_CLASSES: Record<CheckColor, string> = {
  orange: "bg-[#FF7A00]",
  green: "bg-[#16A34A]",
  purple: "bg-[#8B5CF6]",
};

export const TIER_CLASSES: Record<
  MembershipTier["variant"],
  { shield: string; name: string; detail: string; users: string }
> = {
  silver: {
    shield: "bg-slate-200 text-slate-600",
    name: "text-slate-700",
    detail: "text-slate-500",
    users: "text-slate-400",
  },
  gold: {
    shield: "bg-[#FF7A00] text-white",
    name: "text-[#FF7A00]",
    detail: "text-[#64748B]",
    users: "text-[#FF7A00]/70",
  },
  platinum: {
    shield: "bg-[#0F2348] text-white",
    name: "text-[#0F2348]",
    detail: "text-[#64748B]",
    users: "text-[#0F2348]/60",
  },
};
