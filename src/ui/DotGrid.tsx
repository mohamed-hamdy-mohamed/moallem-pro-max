const DOT_GRID = Array.from({ length: 12 });

interface DotGridProps {
  idPrefix: string;
  positionClassName: string;
  dotClassName: string;
}

const DotGrid = ({ idPrefix, positionClassName, dotClassName }: DotGridProps) => (
  <div
    className={`pointer-events-none absolute hidden gap-1.5 sm:grid ${positionClassName}`}
    aria-hidden="true"
  >
    {DOT_GRID.map((_, index) => (
      <span key={`${idPrefix}-${index}`} className={`h-1 w-1 rounded-full ${dotClassName}`} />
    ))}
  </div>
);

export default DotGrid;
