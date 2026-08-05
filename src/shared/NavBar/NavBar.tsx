import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { NAV_LINKS } from "../../data/navData";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header dir="rtl" className="relative z-50 border-b border-slate-100 bg-white">
      <nav
        aria-label="التنقل الرئيسي"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
      >
        <a
          href="#hero"
          className="flex shrink-0 items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={logo}
            alt="معلم برو ماكس"
            className="h-16 w-16 object-contain sm:h-20 sm:w-20 md:h-28 md:w-28"
          />
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-[#0F2348] lg:hidden"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="h-5 w-5" strokeWidth={2} /> : <Menu className="h-5 w-5" strokeWidth={2} />}
        </button>

        <ul
          id="primary-navigation"
          className={`${
            isOpen
              ? "absolute inset-x-0 top-full flex flex-col gap-1 border-b border-slate-100 bg-white px-4 py-3 shadow-lg"
              : "hidden"
          } lg:static lg:flex lg:flex-row lg:items-center lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none xl:gap-2`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="block rounded-lg px-3 py-2 text-sm font-semibold text-[#0F2348] transition-colors hover:bg-[#F8FAFC] hover:text-[#FF7A00] sm:text-[15px] lg:px-4"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
