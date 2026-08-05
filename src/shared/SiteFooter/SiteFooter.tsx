import { Globe } from "lucide-react";
import logo from "../../assets/logo.png";
import { FOOTER_CONTENT } from "../../data/footerData";
import { WHATSAPP_URL } from "../../constants/whatsapp";
import WhatsAppIcon from "../../ui/WhatsAppIcon";
import FooterCTA from "./FooterCTA";

const SiteFooter = () => {
  return (
    <footer id="contact" dir="rtl" className="fixed inset-x-0 bottom-0 z-50">
      <div className="border-t border-slate-100 bg-white px-4 py-3 shadow-[0_-4px_24px_rgba(15,35,72,0.08)] sm:px-6 sm:py-4">
        <div className="mx-auto max-w-7xl">
          <FooterCTA />
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#0F2348] shadow-[0_-8px_32px_rgba(15,35,72,0.25)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-3 sm:flex-row sm:justify-between sm:gap-6 sm:px-6 sm:py-3.5 lg:px-8">
          <p className="hidden text-center text-xs font-medium text-white/95 sm:block sm:text-right sm:text-sm lg:max-w-xs">
            {FOOTER_CONTENT.slogan}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-white/90 transition-colors hover:text-white sm:text-sm"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366]">
                <WhatsAppIcon className="h-4 w-4 text-white" />
              </span>
              <span dir="ltr">{FOOTER_CONTENT.phone}</span>
            </a>

            <a
              href={`https://${FOOTER_CONTENT.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/90 transition-colors hover:text-white sm:text-sm"
            >
              <Globe className="h-4 w-4" strokeWidth={2} />
              <span>{FOOTER_CONTENT.website}</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="h-7 w-7 object-contain sm:h-8 sm:w-8" aria-hidden="true" />
            <div className="text-right">
              <span className="block text-xs font-bold text-white sm:text-sm">معلم برو ماكس</span>
              <span className="block text-[10px] font-medium tracking-wider text-white/70 sm:text-[11px]">
                MOALLEM PRO MAX
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
