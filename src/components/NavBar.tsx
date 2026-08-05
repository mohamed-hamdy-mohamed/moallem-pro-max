import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { MessageCircle, Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  href?: string;
}
const WHATSAPP_NUMBER = "905553581535";

const NAV_ITEMS: NavItem[] = [
  { name: "الرئيسية", href: "#" },
  { name: "الدورات", href: "#courses" },
  { name: "المنصة", href: "#platform" },
  { name: "التواصل", href: `https://wa.me/${WHATSAPP_NUMBER}` },
];

const handleWhatsAppClick = () => {
  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead", {
      button: "WhatsApp",
    });
  }
};

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      dir="rtl"
      className={`sticky top-0 z-50 transition-shadow duration-300 border-b ${
        scrolled
          ? "shadow-md bg-white/95 backdrop-blur-sm border-gray-100"
          : "bg-white border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Right: Logo */}

          <div className="flex items-center gap-8 order-2 ">
            <div className="flex items-center gap-3 order-3 md:order-none">
              <a href="#" className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="معلم برو ماكس"
                  className="h-12 w-12 rounded-lg object-cover"
                />
                <span className="text-lg font-semibold text-[#0F2348]">
                  معلم برو ماكس
                </span>
              </a>
            </div>
            {/* Left: CTA + mobile toggle */}
            <div className="flex items-center gap-3 order-1 md:order-none">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                onClick={handleWhatsAppClick}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF7A00] hover:bg-[#EA6400] text-white font-semibold shadow-md transition transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                ابدأ عبر واتساب
              </a>

              <button
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label="قائمة"
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                {open ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Center: nav links */}
          <nav className="hidden md:flex items-center gap-6 order-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#1E293B] hover:text-[#FF7A00] transition-colors px-3 py-2 rounded-lg text-sm hover:cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-3 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-lg text-[#1E293B] hover:bg-gray-50 transition-colors"
                >
                  {item.name}
                </a>
              ))}

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                onClick={handleWhatsAppClick}
                target="_blank"
                rel="noreferrer"
                className="mt-2 mx-4 inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#FF7A00] hover:bg-[#EA6400] text-white rounded-full shadow-md transition-all duration-200 text-sm font-medium"
              >
                <MessageCircle className="h-4 w-4" />
                ابدأ عبر واتساب
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
