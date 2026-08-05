import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, handleWhatsAppClick } from "../constants/whatsapp";

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_URL}
      onClick={() => handleWhatsAppClick()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      title="تواصل معنا عبر واتساب"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
    >
      <span className="flex items-center justify-center w-14 h-14 sm:w-auto sm:h-auto sm:px-4 sm:py-3">
        <MessageCircle className="w-6 h-6" />
      </span>

      <span className="hidden sm:inline-block mr-3 text-sm font-medium">
        تواصل معنا
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
