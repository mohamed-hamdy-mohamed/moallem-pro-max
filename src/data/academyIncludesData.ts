import {
  Award,
  BarChart3,
  ClipboardList,
  Cloud,
  DollarSign,
  Globe,
  Lock,
  MonitorSmartphone,
  Percent,
  Play,
  Radio,
  Shield,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

export type FeatureIconColor = "orange" | "blue" | "green" | "red" | "purple";

export interface LmsFeature {
  id: string;
  icon: LucideIcon;
  color: FeatureIconColor;
  title: string;
  description: string;
}

export interface LmsHighlight {
  id: string;
  icon: LucideIcon;
  color: FeatureIconColor;
  label: string;
}

export interface PaymentHighlight {
  id: string;
  icon: LucideIcon;
  label: string;
}

export const ACADEMY_INCLUDES_HEADING = {
  title: "ماذا تتضمن أكاديميتك الرقمية؟",
  subtitle:
    "منصة تعليمية متكاملة تحتوي على كل ما تحتاجه لإدارة وتقديم دوراتك باحترافية",
};

export const LMS_FEATURES: LmsFeature[] = [
  {
    id: "courses",
    icon: Play,
    color: "orange",
    title: "إدارة الكورسات",
    description: "Course Management",
  },
  {
    id: "quizzes",
    icon: ClipboardList,
    color: "blue",
    title: "الاختبارات والكويزات",
    description: "Tests & Quizzes",
  },
  {
    id: "certificates",
    icon: Award,
    color: "green",
    title: "الواجبات والشهادات",
    description: "Assignments & Certificates",
  },
  {
    id: "live",
    icon: Radio,
    color: "red",
    title: "البث المباشر",
    description: "Live Lessons",
  },
  {
    id: "progress",
    icon: BarChart3,
    color: "purple",
    title: "متابعة تقدم الطلاب",
    description: "Student Progress Follow-up",
  },
];

export const LMS_HIGHLIGHTS: LmsHighlight[] = [
  {
    id: "protection",
    icon: Shield,
    color: "green",
    label: "حماية عالية للمحتوى والدروس",
  },
  {
    id: "files",
    icon: Cloud,
    color: "orange",
    label: "دعم مختلف أنواع الملفات",
  },
  {
    id: "devices",
    icon: MonitorSmartphone,
    color: "blue",
    label: "متوافقة مع جميع الأجهزة والشاشات",
  },
  {
    id: "arabic",
    icon: Globe,
    color: "purple",
    label: "واجهة عربية احترافية وسهلة",
  },
];

export const LMS_PANEL = {
  title: "نظام إدارة التعليم والطلاب (LMS Features)",
};

export const SHOPPING_PANEL = {
  title: "تجربة التسوق والمدفوعات",
  laptopCta: "اشترك الآن",
};

export const PHONE_MOCKUP = {
  courseTitle: "تطوير الويب",
  courseSubtitle: "من الصفر",
  cta: "اشترك الآن",
};

export const PAYMENT_COPY = {
  title: "إمكانية الربط مع بوابات الدفع",
  description:
    "اربط أكاديميتك ببوابات الدفع المحلية والعالمية لتوفير تجربة شراء سلسة وآمنة لطلابك، مع إدارة كاملة للمدفوعات والاشتراكات.",
  note: "(Stripe, PayPal, Tap, Moyasar وغيرها)",
};

export const PAYMENT_HIGHLIGHTS: PaymentHighlight[] = [
  {
    id: "checkout",
    icon: ShoppingCart,
    label: "تجربة شراء سلسة وسريعة للطلاب",
  },
  {
    id: "reports",
    icon: BarChart3,
    label: "تقارير مفصلة للمبيعات والدخل",
  },
  {
    id: "coupons",
    icon: Percent,
    label: "إمكانية إنشاء خصومات وكوبونات",
  },
  {
    id: "currencies",
    icon: DollarSign,
    label: "دعم العملات المحلية والعالمية",
  },
  {
    id: "security",
    icon: Lock,
    label: "معاملات آمنة ومشفرة",
  },
];

export const ICON_COLOR_CLASSES: Record<FeatureIconColor, string> = {
  orange: "bg-[#FF7A00]",
  blue: "bg-[#3B82F6]",
  green: "bg-[#16A34A]",
  red: "bg-[#EF4444]",
  purple: "bg-[#8B5CF6]",
};

export const ICON_TEXT_CLASSES: Record<FeatureIconColor, string> = {
  orange: "text-[#FF7A00]",
  blue: "text-[#3B82F6]",
  green: "text-[#16A34A]",
  red: "text-[#EF4444]",
  purple: "text-[#8B5CF6]",
};
