import { useContext } from "react";

import DeleteButton from "./DeleteButton";
import KeyPiece from "./KeyPiece";
import { DigitContext } from "../../contexts/DigitContext";
import { deepCopyArray } from "../../utils/ArrayFunctions";

const KeyPad = () => {
  const [context, setContext] = useContext(DigitContext);
  const { currentDigits, selectedCells } = context;

  const handleClick = (e: React.MouseEvent) => {
    if (!selectedCells) return;

    const buttonClicked = e.currentTarget as HTMLElement;
    const updatedDigits = deepCopyArray(currentDigits);

    selectedCells.forEach((cell) => {
      const [row, col] = [
        parseInt(cell.dataset.row!, 10),
        parseInt(cell.dataset.col!, 10),
      ];
      updatedDigits[row][col] =
        buttonClicked.dataset.value === "delete"
          ? ""
          : buttonClicked.dataset.value!;
    });

    setContext({
      ...context,
      currentDigits: updatedDigits,
    });
  };
  return (
    <div className="keypad">
      <div>
        {[...Array(10).keys()].map((i) => (
          <KeyPiece key={i} index={(i + 1) % 10} clickHandler={handleClick} />
        ))}
        <DeleteButton clickHandler={handleClick} />
      </div>
    </div>
  );
};

export default KeyPad;
