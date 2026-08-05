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
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      dir="rtl"
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md border-gray-100"
          : "bg-white border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <img
              src={logo}
              alt="معلم برو ماكس"
              className="h-11 w-11 rounded-lg object-cover"
            />

            <span className="text-base sm:text-lg font-semibold text-[#0F2348] whitespace-nowrap">
              معلم برو ماكس
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.name === "التواصل" ? "_blank" : undefined}
                rel={item.name === "التواصل" ? "noreferrer" : undefined}
                onClick={
                  item.name === "التواصل" ? handleWhatsAppClick : undefined
                }
                className="
                text-[#1E293B]
                hover:text-[#FF7A00]
                transition-colors
                px-3
                py-2
                text-sm
                "
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              onClick={handleWhatsAppClick}
              className="
              hidden
              sm:inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-[#FF7A00]
              hover:bg-[#EA6400]
              text-white
              font-semibold
              text-sm
              shadow-md
              transition
              hover:-translate-y-0.5
              "
            >
              <MessageCircle className="h-4 w-4" />
              ابدأ عبر واتساب
            </a>

            <button
              onClick={() => setOpen(!open)}
              aria-label="menu"
              className="
              md:hidden
              p-2
              rounded-md
              text-gray-700
              hover:bg-gray-100
              "
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                  px-4
                  py-3
                  rounded-lg
                  text-[#1E293B]
                  hover:bg-gray-50
                  "
                >
                  {item.name}
                </a>
              ))}

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                onClick={handleWhatsAppClick}
                className="
                mt-2
                flex
                items-center
                justify-center
                gap-2
                px-4
                py-3
                bg-[#FF7A00]
                text-white
                rounded-full
                font-medium
                "
              >
                <MessageCircle className="h-4 w-4" />
                ابدأ عبر واتساب
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
