import clsx from "clsx";

const CARD_DOT_GRID = Array.from({ length: 12 });

interface CardDotDecorationProps {
  corner: "bottom-left" | "bottom-right";
}

const CardDotDecoration = ({ corner }: CardDotDecorationProps) => (
  <div
    className={clsx(
      "pointer-events-none absolute bottom-4 grid grid-cols-3 gap-1 opacity-60",
      corner === "bottom-left" ? "left-4" : "right-4",
    )}
    aria-hidden="true"
  >
    {CARD_DOT_GRID.map((_, index) => (
      <span
        key={index}
        className={clsx(
          "h-1 w-1 rounded-full",
          index % 2 === 0 ? "bg-[#FF7A00]/40" : "bg-[#0F2348]/15",
        )}
      />
    ))}
  </div>
);

export default CardDotDecoration;
