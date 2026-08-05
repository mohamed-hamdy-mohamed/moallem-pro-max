declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export const WHATSAPP_NUMBER = "905553581535";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function handleWhatsAppClick(e?: MouseEvent) {
  try {
    if (typeof window === "undefined") return;

    // dataLayer push (Google Tag Manager)
    if ((window as any).dataLayer && Array.isArray((window as any).dataLayer)) {
      (window as any).dataLayer.push({
        event: "whatsapp_click",
        whatsapp_number: WHATSAPP_NUMBER,
      });
    }

    // gtag fallback
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: "final_cta",
      });
    }
  } catch (err) {}
}

export default WHATSAPP_URL;
