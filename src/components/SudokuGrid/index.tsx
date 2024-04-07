import { useContext, useEffect } from "react";

import Row from "./Row";
import { DigitContext } from "../../contexts/DigitContext";
import { deepCopyArray } from "../../utils/ArrayFunctions";

const SudokuGrid = () => {
  const [context, setContext] = useContext(DigitContext);
  const { currentDigits, selectedCell } = context;

  const handleClick = (e: React.MouseEvent) => {
    if (selectedCell === e.currentTarget) {
      setContext({
        ...context,
        selectedCell: undefined,
      });
    } else {
      setContext({
        ...context,
        selectedCell: e.currentTarget as HTMLElement,
      });
    }
  };

  useEffect(() => {
    Array.from(document.querySelectorAll(".grid-cell.focused")).forEach((c) =>
      c.classList.remove("focused"),
    );
    selectedCell?.classList.add("focused");
  });

  const moveSelectedCell = (key: string) => {
    const cell = selectedCell as HTMLElement;
    let [row, col] = [
      parseInt(cell.dataset.row!, 10),
      parseInt(cell.dataset.col!, 10),
    ];

    switch (key) {
      case "ArrowLeft":
        col = col === 0 ? 8 : (col -= 1);
        break;
      case "ArrowRight":
        col = col === 8 ? 0 : (col += 1);
        break;
      case "ArrowUp":
        row = row === 0 ? 8 : (row -= 1);
        break;
      case "ArrowDown":
        row = row === 8 ? 0 : (row += 1);
        break;
      default:
        return;
    }
    const newCell = document.querySelectorAll(
      `.grid-cell[data-row="${row}"][data-col="${col}"]`,
    )[0];
    setContext({
      ...context,
      selectedCell: newCell as HTMLElement,
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (!selectedCell) return;

    const cell = selectedCell as HTMLElement;
    const [row, col] = [
      parseInt(cell.dataset.row!, 10),
      parseInt(cell.dataset.col!, 10),
    ];
    const updatedDigits = deepCopyArray(currentDigits);
    if (Number.isNaN(parseInt(e.key, 10)) && e.key === "Backspace") {
      updatedDigits[row][col] = "";
    } else if (!Number.isNaN(parseInt(e.key, 10))) {
      updatedDigits[row][col] = e.key;
    } else if (e.key.match("Arrow")) {
      moveSelectedCell(e.key);
      return;
    }

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
