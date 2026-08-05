import {
  Award,
  BarChart3,
  Building2,
  Calendar,
  Clock,
  CreditCard,
  GraduationCap,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";

export type IconVariant = "orange" | "navy";

export interface OfferField {
  id: string;
  icon: LucideIcon;
  iconVariant: IconVariant;
  label: string;
  value: string;
  isEmpty?: boolean;
  isDropdown?: boolean;
}

export interface HeroBadgeData {
  id: string;
  icon: LucideIcon;
  iconVariant: IconVariant;
  title: string;
  subtitle: string;
  position: string;
}

export const HERO_HEADING = {
  title: "عرض سعر مخصص",
  subtitle: "لبناء وإطلاق أكاديمية رقمية متكاملة",
  tagline: "حلول احترافية لتحويل خبرتك إلى مشروع رقمي مستدام",
};

export const OFFER_FIELDS: OfferField[] = [
  {
    id: "recipient",
    icon: User,
    iconVariant: "orange",
    label: "مقدم لصالح",
    value: "المدرب حمزة قطاش",
  },
  {
    id: "organization",
    icon: Building2,
    iconVariant: "navy",
    label: "الجهة المؤسسة",
    value: "",
    isEmpty: true,
  },
  {
    id: "specialty",
    icon: GraduationCap,
    iconVariant: "orange",
    label: "مجال التدريب",
    value: "تحليل البيانات والبرامج",
  },
  {
    id: "date",
    icon: Calendar,
    iconVariant: "orange",
    label: "تاريخ العرض",
    value: "01/08/2026",
  },
  {
    id: "validity",
    icon: Clock,
    iconVariant: "navy",
    label: "صلاحية العرض",
    value: "14 يوماً من تاريخ الإصدار",
    isDropdown: true,
  },
];

export const HERO_BADGES: HeroBadgeData[] = [
  {
    id: "courses",
    icon: GraduationCap,
    iconVariant: "orange",
    title: "Courses",
    subtitle: "دورات احترافية",
    position: "top-[5%] left-[1%] xl:left-0",
  },
  {
    id: "students",
    icon: Users,
    iconVariant: "navy",
    title: "Students",
    subtitle: "إدارة الطلاب",
    position: "top-[3%] right-[10%] xl:right-[12%]",
  },
  {
    id: "analytics",
    icon: BarChart3,
    iconVariant: "navy",
    title: "Analytics",
    subtitle: "تقارير ذكية",
    position: "top-[38%] -left-3 xl:-left-5",
  },
  {
    id: "payments",
    icon: CreditCard,
    iconVariant: "orange",
    title: "Payments",
    subtitle: "بوابات دفع آمنة",
    position: "bottom-[12%] left-[0%] xl:left-[1%]",
  },
  {
    id: "certificates",
    icon: Award,
    iconVariant: "orange",
    title: "Certificates",
    subtitle: "شهادات معتمدة",
    position: "top-[36%] -right-3 xl:-right-5",
  },
];
