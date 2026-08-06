import { WHATSAPP_URL } from "../constants/whatsapp";

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { id: "home", label: "الرئيسية", href: "#hero" },
  { id: "offer", label: "العرض", href: "#offer" },
  { id: "why", label: "لماذا نحن", href: "#comparison" },
  { id: "packages", label: "الباقات", href: "#packages" },
  { id: "features", label: "المميزات", href: "#features" },
  { id: "services", label: "الخدمات", href: "#services" },
  { id: "contact", label: "تواصل معنا", href: WHATSAPP_URL },
];
