import {
  Headphones,
  Megaphone,
  RefreshCw,
  Search,
  Server,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type SupportAccent = "blue" | "green" | "orange" | "navy";

export interface GrowthService {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  featured?: boolean;
}

export interface SupportFeature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  accent: SupportAccent;
}

export const POST_LAUNCH_HEADING = {
  title: "ما بعد الإطلاق: نحن معك خطوة بخطوة",
  subtitle:
    "نقدم لك الدعم والتدريب اللازمين لنمو أكاديميتك وزيادة عدد طلابك وتحقيق أهدافك",
};

export const GROWTH_INTRO = {
  badge: "دعم وتدريب نمو أكاديميتك",
  paragraph:
    "النمو لا يتوقف عند إطلاق المنصة، بل يبدأ من جذب الطلاب وبناء حضور رقمي قوي. نرافقك بخطط عملية لزيادة الوصول وتحويل الزوار إلى مشتركين.",
};

export const GROWTH_SERVICES: GrowthService[] = [
  {
    id: "ads",
    icon: Megaphone,
    title: "تدريب الإعلانات المدفوعة",
    description:
      "نوجّهك خطوة بخطوة لإطلاق حملات إعلانية ناجحة على Meta (Facebook & Instagram) لجذب طلاب مهتمين بمجالك.",
  },
  {
    id: "seo",
    icon: Search,
    title: "تهيئة محركات البحث (SEO)",
    description:
      "نساعدك على تحسين هيكلة ومحتوى صفحات أكاديميتك لتظهر في نتائج Google وتجذب زيارات عضوية مستدامة.",
  },
];

export const SUPPORT_HEADING = {
  title: "الدعم الفني والصيانة المستمرة",
  subtitle:
    "نضمن لك استقرار وأمان أكاديميتك لتتفرغ أنت لتعليم طلابك وتطوير محتواك.",
};

export const SUPPORT_FEATURES: SupportFeature[] = [
  {
    id: "updates",
    icon: RefreshCw,
    title: "تحديثات وصيانة دورية",
    description: "تحديثات منتظمة للنظام لضمان أفضل أداء وتجربة للطلاب.",
    accent: "blue",
  },
  {
    id: "support",
    icon: Headphones,
    title: "دعم فني متخصص",
    description: "فريق متخصص للإجابة على استفساراتك وحل المشكلات التقنية.",
    accent: "green",
  },
  {
    id: "protection",
    icon: ShieldCheck,
    title: "حماية المحتوى والدروس",
    description: "تقنيات أمان متقدمة لحماية دوراتك من المشاركة غير المصرّح بها.",
    accent: "orange",
  },
  {
    id: "hosting",
    icon: Server,
    title: "استضافة قوية وآمنة",
    description: "استضافة على خوادم عالية الأداء وسريعة على مدار الساعة.",
    accent: "navy",
  },
];

export const SUPPORT_NOTE =
  "ملاحظة: عقد الدعم الفني والصيانة يكون بعقد منفصل يمكن تجديده كل عدة أشهر.";

export const SUPPORT_ACCENT_CLASSES: Record<SupportAccent, string> = {
  blue: "bg-[#3B82F6]",
  green: "bg-[#16A34A]",
  orange: "bg-[#FF7A00]",
  navy: "bg-[#0F2348]",
};
