import { useState } from "react";
import Row from "./Row";
import SVGOutline from "./SVGOutline";
import SVGGrid from "./SVGGrid";
import SVGHighlightElement from "./SVGHighlightElement";

const SudokuGrid = () => {
  const [selectedCoors, setSelectedCoors] = useState<[number, number] | []>([]);
  const handleClick = (e: React.MouseEvent) => {
    const cell = document
      .elementsFromPoint(e.clientX, e.clientY)
      .filter((el) => el.classList.contains("grid-cell"))[0] as HTMLElement;
    const cellCoors = cell.getBoundingClientRect();
    const gridContainerCoors = document.getElementsByClassName("grid")[0].getBoundingClientRect();
    const coors: [number, number] = [gridContainerCoors.right - cellCoors.right, gridContainerCoors.bottom - cellCoors.bottom];
    console.log(coors)  
    setSelectedCoors(coors)
  };

  const handleKeyPress = () => 2;

  return (
    <div
      className="grid"
      onClick={handleClick}
      onKeyDown={handleKeyPress}
      role="presentation"
    >
      <div className="test">
      {[...Array(9).keys()].map((i) => (
        <Row index={i} />
      ))}
      </div>
        <svg
          id="svg-container"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 447, 447"
        >
          <SVGGrid />
          <SVGOutline />
          <SVGHighlightElement coors={selectedCoors} />
        </svg>
    </div>
  );
};

export default SudokuGrid;
