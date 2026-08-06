import { WHATSAPP_URL, handleWhatsAppClick } from "../../constants/whatsapp";
import WhatsAppIcon from "../../ui/WhatsAppIcon";

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_URL}
      onClick={() => handleWhatsAppClick()}
      target="_blank"
      dir="ltr"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      title="تواصل معنا عبر واتساب"
      className="fixed bottom-31 md:bottom-26 sm:bottom-10 right-7 z-50 inline-flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
    >
      <span className="flex h-14 w-14 items-center justify-center sm:h-auto sm:w-auto sm:px-4 sm:py-3">
        <WhatsAppIcon className="h-6 w-6" />
      </span>

      <span className="hidden sm:mr-3 sm:inline-block sm:text-sm sm:font-medium">
        تواصل معنا
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
