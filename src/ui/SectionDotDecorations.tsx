import DotGrid from "./DotGrid";

interface SectionDotDecorationsProps {
  idPrefix: string;
  leftPositionClassName: string;
  rightPositionClassName: string;
  leftDotClassName: string;
  rightDotClassName: string;
}

const SectionDotDecorations = ({
  idPrefix,
  leftPositionClassName,
  rightPositionClassName,
  leftDotClassName,
  rightDotClassName,
}: SectionDotDecorationsProps) => (
  <>
    <DotGrid
      idPrefix={`${idPrefix}-l`}
      positionClassName={leftPositionClassName}
      dotClassName={leftDotClassName}
    />
    <DotGrid
      idPrefix={`${idPrefix}-r`}
      positionClassName={rightPositionClassName}
      dotClassName={rightDotClassName}
    />
  </>
);

export default SectionDotDecorations;
