import { PRIMARY_CTA, WHATSAPP_CTA } from "../../data/introData";
import { WHATSAPP_URL, handleWhatsAppClick } from "../../constants/whatsapp";
import WhatsAppIcon from "../../ui/WhatsAppIcon";

const FooterCTA = () => {
  const CalendarIcon = PRIMARY_CTA.icon;

  const sharedClass =
    "flex items-center gap-3 rounded-2xl px-4 py-4 transition-transform hover:-translate-y-0.5 sm:gap-4 sm:px-5 sm:py-4";

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleWhatsAppClick()}
        aria-label={`${PRIMARY_CTA.title} — ${PRIMARY_CTA.subtitle}`}
        className={`${sharedClass} bg-[#FF7A00] shadow-[0_14px_36px_rgba(255,122,0,0.32)]`}
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white sm:h-14 sm:w-14">
          <CalendarIcon className="h-6 w-6 text-[#FF7A00] sm:h-7 sm:w-7" strokeWidth={2} />
        </div>
        <div className="text-right">
          <p className="text-sm font-bold text-white sm:text-base">{PRIMARY_CTA.title}</p>
          <p className="mt-0.5 text-xs text-white/90 sm:text-sm">{PRIMARY_CTA.subtitle}</p>
        </div>
      </a>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleWhatsAppClick()}
        aria-label={`${WHATSAPP_CTA.title} — ${WHATSAPP_CTA.subtitle}`}
        className={`${sharedClass} border-2 border-[#25D366] bg-white shadow-[0_4px_20px_rgba(15,35,72,0.06)]`}
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] sm:h-14 sm:w-14">
          <WhatsAppIcon className="h-7 w-7 text-white sm:h-8 sm:w-8" />
        </div>
        <div className="text-right">
          <p className="text-sm font-bold text-[#0F2348] sm:text-base">{WHATSAPP_CTA.title}</p>
          <p className="mt-0.5 text-xs text-[#64748B] sm:text-sm">{WHATSAPP_CTA.subtitle}</p>
        </div>
      </a>
    </div>
  );
};

export default FooterCTA;
