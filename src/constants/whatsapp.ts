declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export const WHATSAPP_NUMBER = "905553581535";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/**
 * Fires analytics for WhatsApp CTA clicks.
 * Safe to pass to React `onClick` or call directly — never blocks navigation.
 */
export function handleWhatsAppClick(): void {
  if (typeof window === "undefined") return;

  try {
    window.dataLayer?.push({
      event: "whatsapp_click",
      whatsapp_number: WHATSAPP_NUMBER,
    });

    window.gtag?.("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: "whatsapp_cta",
    });

    window.fbq?.("trackCustom", "WhatsAppClick");
  } catch (error) {
    console.error("WhatsApp tracking failed:", error);
  }
}
