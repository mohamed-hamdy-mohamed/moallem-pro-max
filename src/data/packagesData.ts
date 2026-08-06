import type { LucideIcon } from "lucide-react";
import {
  Award,
  BarChart3,
  Building2,
  CloudUpload,
  Download,
  FolderOpen,
  Headphones,
  ListChecks,
  Megaphone,
  Monitor,
  PenTool,
  Radio,
  Search,
  ShoppingCart,
  Sparkles,
  Timer,
  UserPlus,
  Users,
  Crown,
  BadgeCheck,
} from "lucide-react";

export type CellValue =
  | { type: "check" }
  | { type: "cross" }
  | { type: "text"; text: string; accent?: string };

export interface PackageFeatureRow {
  id: string;
  label: string;
  icon: LucideIcon;
  trainer: CellValue;
  institutions: CellValue;
}

export interface TrainingRow {
  id: string;
  label: string;
  brand: "meta" | "tiktok" | "youtube" | "seo";
  trainer: CellValue;
  institutions: CellValue;
}

export interface SummaryBadge {
  id: string;
  packageLabel: string;
  value: string;
  tone: "orange" | "navy";
}

export interface SummaryCard {
  id: string;
  title: string;
  icon: LucideIcon;
  badges: SummaryBadge[];
}

export const PACKAGES_HEADING = {
  title: "باقة إنشاء أكاديمية رقمية احترافية",
  subtitle: "حول خبرتك إلى أكاديمية إلكترونية متكاملة خلال 7 أيام فقط",
  description:
    "نوفر لك كل ما تحتاجه لإطلاق أكاديميتك الرقمية باحترافية — من تصميم الهوية وحتى إدارة الطلاب والمبيعات.",
};

export const PACKAGE_COLUMNS = {
  feature: "الميزة",
  trainer: "باقة المدرب",
  institutions: "باقة المؤسسات",
  trainings: "التدريبات الداعمة",
  training: "التدريب",
} as const;

export const PACKAGE_FEATURE_ROWS: PackageFeatureRow[] = [
  {
    id: "trainers-count",
    label: "عدد المدربين",
    icon: Users,
    trainer: { type: "text", text: "مدرب واحد" },
    institutions: { type: "text", text: "غير محدود" },
  },
  {
    id: "trainer-accounts",
    label: "إنشاء حسابات للمدربين",
    icon: UserPlus,
    trainer: { type: "cross" },
    institutions: { type: "check" },
  },
  {
    id: "website-design",
    label: "تصميم الموقع",
    icon: Monitor,
    trainer: {
      type: "text",
      text: "تصميم أساسي مخصص",
      accent: "(3 نماذج)",
    },
    institutions: {
      type: "text",
      text: "تصميم احترافي مخصص",
      accent: "(10 نماذج)",
    },
  },
  {
    id: "logo-design",
    label: "تصميم الشعار",
    icon: PenTool,
    trainer: { type: "cross" },
    institutions: { type: "check" },
  },
  {
    id: "upload-courses",
    label: "رفع الكورسات",
    icon: CloudUpload,
    trainer: { type: "check" },
    institutions: { type: "check" },
  },
  {
    id: "courses-count",
    label: "عدد الكورسات",
    icon: FolderOpen,
    trainer: { type: "text", text: "غير محدود" },
    institutions: { type: "text", text: "غير محدود" },
  },
  {
    id: "quizzes",
    label: "الاختبارات والواجبات القصيرة",
    icon: ListChecks,
    trainer: { type: "check" },
    institutions: { type: "check" },
  },
  {
    id: "assignments",
    label: "الواجبات والشهادات",
    icon: Award,
    trainer: { type: "check" },
    institutions: { type: "check" },
  },
  {
    id: "live",
    label: "الدروس المباشرة",
    icon: Radio,
    trainer: { type: "check" },
    institutions: { type: "check" },
  },
  {
    id: "progress",
    label: "تتبع تقدم الطلاب",
    icon: BarChart3,
    trainer: { type: "check" },
    institutions: { type: "check" },
  },
  {
    id: "memberships",
    label: "الاشتراكات والعضويات",
    icon: Crown,
    trainer: { type: "cross" },
    institutions: { type: "check" },
  },
  {
    id: "drip",
    label: "التسريب التدريجي للمحتوى",
    icon: Download,
    trainer: { type: "cross" },
    institutions: { type: "check" },
  },
  {
    id: "bundles",
    label: "شراء حزم الكورسات",
    icon: ShoppingCart,
    trainer: { type: "cross" },
    institutions: { type: "check" },
  },
];

export const TRAINING_ROWS: TrainingRow[] = [
  {
    id: "meta",
    label: "إعلانات Meta",
    brand: "meta",
    trainer: { type: "check" },
    institutions: { type: "check" },
  },
  {
    id: "tiktok",
    label: "إعلانات TikTok",
    brand: "tiktok",
    trainer: { type: "cross" },
    institutions: { type: "check" },
  },
  {
    id: "youtube",
    label: "إعلانات YouTube",
    brand: "youtube",
    trainer: { type: "cross" },
    institutions: { type: "check" },
  },
  {
    id: "seo",
    label: "تحسين محركات البحث (SEO)",
    brand: "seo",
    trainer: { type: "cross" },
    institutions: { type: "check" },
  },
];

export const SUMMARY_CARDS: SummaryCard[] = [
  {
    id: "availability",
    title: "حالة الباقات",
    icon: BadgeCheck,
    badges: [
      {
        id: "trainer-ready",
        packageLabel: "باقة المدرب",
        value: "جاهز للتفعيل",
        tone: "orange",
      },
      {
        id: "institutions-ready",
        packageLabel: "باقة المؤسسات",
        value: "خدمة احترافية",
        tone: "navy",
      },
    ],
  },
  {
    id: "timeline",
    title: "مدة التنفيذ",
    icon: Timer,
    badges: [
      {
        id: "trainer-time",
        packageLabel: "باقة المدرب",
        value: "7 أيام",
        tone: "orange",
      },
      {
        id: "institutions-time",
        packageLabel: "باقة المؤسسات",
        value: "7–14 يوم",
        tone: "navy",
      },
    ],
  },
  {
    id: "support",
    title: "الدعم الفني والصيانة",
    icon: Headphones,
    badges: [
      {
        id: "trainer-support",
        packageLabel: "باقة المدرب",
        value: "شهر واحد",
        tone: "orange",
      },
      {
        id: "institutions-support",
        packageLabel: "باقة المؤسسات",
        value: "3 أشهر",
        tone: "navy",
      },
    ],
  },
];

export const PACKAGE_HEADER_ICONS = {
  feature: Sparkles,
  trainer: Users,
  institutions: Building2,
  trainings: Megaphone,
  seo: Search,
} as const;
