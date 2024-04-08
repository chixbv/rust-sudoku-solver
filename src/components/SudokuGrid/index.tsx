import { useContext, useEffect, useState } from "react";

import Row from "./Row";
import { DigitContext } from "../../contexts/DigitContext";
import { deepCopyArray } from "../../utils/ArrayFunctions";

const SudokuGrid = () => {
  const [multipleCellsAllowed, setMultipleCellsAllowed] =
    useState<Boolean>(false);
  const [context, setContext] = useContext(DigitContext);
  const { currentDigits, selectedCells } = context;
  const multipleCellsKeys = ["Shift", "Meta", "Control"];

  const handleClick = (e: React.MouseEvent) => {
    let updatedCells;
    if (multipleCellsAllowed) {
      if (selectedCells.includes(e.currentTarget as HTMLElement)) {
        updatedCells = selectedCells.filter((cell) => cell !== e.currentTarget);
      } else {
        updatedCells = [...selectedCells, e.currentTarget as HTMLElement];
      }
    } else if (selectedCells.includes(e.currentTarget as HTMLElement)) {
      updatedCells = [e.currentTarget as HTMLElement];
    } else {
      updatedCells = [] as HTMLElement[];
    }
    setContext({
      ...context,
      selectedCells: updatedCells,
    });
  };

  useEffect(() => {
    Array.from(document.querySelectorAll(".grid-cell.focused")).forEach((c) =>
      c.classList.remove("focused"),
    );
    selectedCells.forEach((cell) => {
      cell.classList.add("focused");
    });
  });

  const moveSelectedCell = (key: string) => {
    const cell = selectedCells[0] as HTMLElement;
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
      selectedCells: [...selectedCells, newCell as HTMLElement],
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (multipleCellsKeys.includes(e.key)) {
      setMultipleCellsAllowed(true);
      return;
    }

    if (!selectedCells.length) return;

    const updatedDigits = deepCopyArray(currentDigits);
    let row;
    let col;
    if (Number.isNaN(parseInt(e.key, 10)) && e.key === "Backspace") {
      selectedCells.forEach((cell) => {
        row = parseInt(cell.dataset.row!, 10);
        col = parseInt(cell.dataset.col!, 10);
      });
      updatedDigits[row!][col!] = "";
    } else if (!Number.isNaN(parseInt(e.key, 10))) {
      selectedCells.forEach((cell) => {
        row = parseInt(cell.dataset.row!, 10);
        col = parseInt(cell.dataset.col!, 10);
      });
      updatedDigits[row!][col!] = e.key;
    } else if (e.key.match("Arrow")) {
      moveSelectedCell(e.key);
      return;
    } else {
      return;
    }

    setContext({
      ...context,
      currentDigits: updatedDigits,
    });
  };

  const handleKeyRelease = (e: React.KeyboardEvent) => {
    if (multipleCellsKeys.includes(e.key)) {
      setMultipleCellsAllowed(false);
    }
  };

  return (
    <div
      className="grid"
      onKeyDown={handleKeyPress}
      onKeyUp={handleKeyRelease}
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
