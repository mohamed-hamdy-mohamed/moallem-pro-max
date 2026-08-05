import { Handshake } from "lucide-react";
import { INTRO_TEXT_PARTS } from "../../data/introData";

const IntroCard = () => {
  return (
    <article className="rounded-3xl border border-[#FF7A00]/30 bg-[#FFF9F5] px-5 py-6 shadow-[0_4px_24px_rgba(15,35,72,0.04)] sm:px-8 sm:py-8">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
        <div
          className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full bg-[#FF7A00] shadow-[0_10px_28px_rgba(255,122,0,0.38)] ring-4 ring-white sm:h-[88px] sm:w-[88px]"
          aria-hidden="true"
        >
          <Handshake className="h-9 w-9 text-white sm:h-10 sm:w-10" strokeWidth={1.75} />
        </div>

        <p className="text-center text-sm leading-8 text-[#0F2348] sm:text-right sm:text-[15px] sm:leading-9 md:text-base md:leading-10">
          {INTRO_TEXT_PARTS.map((part, index) =>
            part.highlight ? (
              <span key={index} className="font-bold text-[#FF7A00]">
                {part.text}
              </span>
            ) : (
              <span key={index}>{part.text}</span>
            ),
          )}
        </p>
      </div>
    </article>
  );
};

export default IntroCard;
