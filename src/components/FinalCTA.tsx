import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, handleWhatsAppClick } from "../constants/whatsapp";

const FinalCTA = () => {
  return (
    <section
      dir="rtl"
      aria-label="نداء للإجراء النهائي"
      className="py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl rounded-3xl bg-linear-to-r from-[#0F2348] to-[#0F2348]/90 shadow-xl ring-1 ring-black/10 p-6 sm:p-10 lg:p-16 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto inline-flex items-center justify-center rounded-full bg-white/5 px-3 py-1 text-sm font-medium text-white/90">
            <span
              className="ml-2 inline-block h-2 w-2 rounded-full bg-[#FF7A00]"
              aria-hidden
            />
            جاهز للانطلاق؟
          </div>

          <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white">
            ابدأ بناء أكاديميتك التعليمية اليوم
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-200 mx-auto max-w-xl">
            حوّل خبرتك التعليمية إلى أكاديمية رقمية احترافية. صمّم مسارات
            تعليمية ترفع تفاعل الطلاب وتقدّم تجربة تعلم متميزة عبر منصة تعليمية
            احترافية.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={WHATSAPP_URL}
              onClick={(e) => handleWhatsAppClick(e.nativeEvent as any)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل معنا عبر واتساب"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[#FF7A00] hover:bg-[#ff8e33] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-2xl transition transform duration-200 ease-in-out hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              تواصل معنا عبر واتساب
            </a>

            <p className="text-sm text-slate-200/90">
              بدون التزام — احصل على استشارة أولية
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
