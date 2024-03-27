const SVGHighlightElement = ({ coors }: { coors: [number, number] | [] }) => {
  if(!coors.length) return;

  const calcYPosition = () => (
    442 - coors[1] - 50
  )
  const calcXPosition = () => (
    442 - coors[0] - 49
  )
  return (
    <g id="svg-cell-highlights">
      {coors.length && (
        <rect
          y={calcYPosition()}
          x={calcXPosition()}
          strokeWidth={4}
          stroke="rgb(216, 95, 14)"
          width="46"
          height="46"
          fill="transparent"
        />
      )}
    </g>
  );
};

export default SVGHighlightElement;

// if between 0-2, + 0
// if between 3-5, + 1
// if between 6-8, + 2
