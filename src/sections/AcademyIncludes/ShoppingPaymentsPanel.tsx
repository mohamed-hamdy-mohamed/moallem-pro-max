import { ShieldCheck, ShoppingCart } from "lucide-react";
import laptopImg from "../../assets/LaptopImg.png";
import {
  PAYMENT_COPY,
  PAYMENT_HIGHLIGHTS,
  SHOPPING_PANEL,
} from "../../data/academyIncludesData";
import CheckoutPhoneMockup from "./CheckoutPhoneMockup";
import PaymentHighlightItem from "./PaymentHighlightItem";

const ShoppingPaymentsPanel = () => (
  <article className="relative mt-10 rounded-3xl border-2 border-[#FF7A00]/40 bg-white px-4 pb-6 pt-10 shadow-[0_12px_40px_rgba(15,35,72,0.06)] sm:mt-12 sm:px-6 sm:pb-8 sm:pt-12 lg:px-8">
    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
      <div className="flex items-center gap-2 rounded-2xl bg-[#FF7A00] px-5 py-3 shadow-lg sm:gap-3 sm:px-7 sm:py-3.5">
        <ShoppingCart className="h-5 w-5 text-white sm:h-6 sm:w-6" strokeWidth={2} />
        <h3 className="whitespace-nowrap text-sm font-bold text-white sm:text-base">
          {SHOPPING_PANEL.title}
        </h3>
      </div>
    </div>

    <div className="mt-4 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
      <div className="order-2 text-center lg:order-1 lg:text-right">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#FFF5EB] lg:mr-0 lg:ms-auto">
          <ShieldCheck className="h-10 w-10 text-[#FF7A00]" strokeWidth={2} />
        </div>

        <h4 className="mt-5 text-xl font-extrabold text-[#FF7A00] sm:text-2xl">
          {PAYMENT_COPY.title}
        </h4>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-8 text-[#0F2348] sm:text-[15px] sm:leading-9 lg:mx-0">
          {PAYMENT_COPY.description}
        </p>

        <p className="mt-2 text-xs text-[#64748B] sm:text-sm">{PAYMENT_COPY.note}</p>
      </div>

      <div className="relative order-1 flex items-end justify-center gap-4 lg:order-2 lg:justify-end">
        <CheckoutPhoneMockup />

        <div className="relative w-full max-w-[280px] sm:max-w-xs">
          <img
            src={laptopImg}
            alt="صفحة دورة تعليمية"
            className="w-full bg-transparent object-contain drop-shadow-[0_20px_40px_rgba(15,35,72,0.12)]"
            width={800}
            height={1200}
            loading="lazy"
            decoding="async"
          />
          <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 rounded-lg bg-[#FF7A00] px-4 py-1.5 text-xs font-bold text-white shadow-md">
            {SHOPPING_PANEL.laptopCta}
          </div>
        </div>
      </div>
    </div>

    <div className="mt-8 grid grid-cols-2 gap-4 border-t border-dashed border-slate-200 pt-6 sm:grid-cols-3 lg:grid-cols-5 sm:gap-6 sm:pt-8">
      {PAYMENT_HIGHLIGHTS.map((item) => (
        <PaymentHighlightItem key={item.id} item={item} />
      ))}
    </div>
  </article>
);

export default ShoppingPaymentsPanel;
