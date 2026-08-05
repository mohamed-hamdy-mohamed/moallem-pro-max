import {
  Calendar,
  GraduationCap,
  Lock,
  Rocket,
  Server,
  type LucideIcon,
} from "lucide-react";

export type IntroIconVariant = "orange" | "navy";

export interface IntroTextPart {
  text: string;
  highlight?: boolean;
}

export interface IntroFeature {
  id: string;
  icon: LucideIcon;
  iconVariant: IntroIconVariant;
  title: string;
  description: string;
}

export const INTRO_TEXT_PARTS: IntroTextPart[] = [
  { text: "يسعدنا في " },
  { text: "معلم برو ماكس", highlight: true },
  {
    text: " أن نكون شريكك التقني والاستراتيجي في تحويل ",
  },
  { text: "خبرتك", highlight: true },
  { text: " التعليمية إلى " },
  { text: "أكاديمية رقمية احترافية", highlight: true },
  {
    text: " مملوكة لك بالكامل، وتمكينك من التوسع والوصول لآلاف من طلابك. هدفنا ليس إنشاء موقع إلكتروني فقط.. بل بناء منصة تعليمية تساعدك على بيع دوراتك، إدارة متطلباتك، وتطوير ",
  },
  { text: "مشروعك التعليمي", highlight: true },
  {
    text: " بطريقة احترافية وقابلة للنمو. سنرافقك في جميع مراحل الإطلاق، من التصميم وحتى بدء استقبال أول طالب.",
  },
];

export const INTRO_FEATURES: IntroFeature[] = [
  {
    id: "platform",
    icon: GraduationCap,
    iconVariant: "navy",
    title: "منصة احترافية باسمك",
    description: "تصميم هوية بصرية فريدة تعكس علامتك التجارية",
  },
  {
    id: "integration",
    icon: Server,
    iconVariant: "orange",
    title: "إمكانية الربط",
    description: "مع جميع بوابات الدفع المحلية والعالمية",
  },
  {
    id: "ownership",
    icon: Lock,
    iconVariant: "navy",
    title: "ملكية كاملة",
    description: "الموقع، البيانات، والأرباح ملكك أنت 100%",
  },
  {
    id: "launch",
    icon: Rocket,
    iconVariant: "orange",
    title: "إطلاق خلال 7 أيام",
    description: "من الطلب إلى التسليم",
  },
];

export const PRIMARY_CTA = {
  title: "احجز جلسة استراتيجية مجانية",
  subtitle: "تعرف على مشروعك ونقترح أفضل الحلول",
  icon: Calendar,
};

export const WHATSAPP_CTA = {
  title: "تواصل معنا عبر واتساب",
  subtitle: "نرد عليك في أسرع وقت",
};
