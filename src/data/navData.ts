import { WHATSAPP_URL } from "../constants/whatsapp";

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { id: "home", label: "الرئيسية", href: "#hero" },
  { id: "why", label: "لماذا نحن", href: "#comparison" },
  { id: "offer", label: "العرض", href: "#offer" },
  { id: "services", label: "الخدمات", href: "#services" },
  { id: "features", label: "المميزات", href: "#features" },
  { id: "contact", label: "تواصل معنا", href: WHATSAPP_URL },
];
