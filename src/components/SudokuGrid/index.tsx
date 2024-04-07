import { useContext, useState } from "react";

import { DigitContext } from "./DigitContext";
import Row from "./Row";
import { deepCopyArray } from "../../utils/ArrayFunctions";

const SudokuGrid = () => {
  const [selectedCell, setSelectedCell] = useState<Element | undefined>(
    undefined,
  );
  const [context, setContext] = useContext(DigitContext);
  const { currentDigits } = context;

  const handleClick = (e: React.MouseEvent) => {
    Array.from(document.querySelectorAll(".grid-cell.focused")).forEach((c) =>
      c.classList.remove("focused"),
    );
    if (selectedCell === e.currentTarget) {
      setSelectedCell(undefined);
    } else {
      setSelectedCell(e.currentTarget);
      e.currentTarget.classList.add("focused");
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (typeof parseInt(e.key, 10) !== "number" || !selectedCell) return;

    const cell = selectedCell as HTMLElement;
    const [row, col] = [
      parseInt(cell.dataset.row!, 10),
      parseInt(cell.dataset.col!, 10),
    ];
    const updatedDigits = deepCopyArray(currentDigits);
    updatedDigits[row][col] = e.key;

    setContext({
      ...context,
      currentDigits: updatedDigits,
    });
  };

  return (
    <div
      className="grid"
      onKeyDown={handleKeyPress}
      role="presentation"
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
    >
      {[...Array(9).keys()].map((i) => (
        <Row key={i} index={i} onClick={handleClick} />
      ))}
    </div>
  );
};

export default SudokuGrid;
