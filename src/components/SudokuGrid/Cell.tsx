import { useContext } from "react";

import { DigitContext } from "../../contexts/DigitContext";

const Cell = ({
  row,
  col,
  onClick,
}: {
  row: number;
  col: number;
  onClick: (e: React.MouseEvent) => void;
}) => {
  const { currentDigits } = useContext(DigitContext)[0];
  const cellValue = currentDigits[row][col];

  return (
    <div
      data-row={row}
      data-col={col}
      className="grid-cell"
      onClick={onClick}
      onKeyDown={() => {}}
      role="presentation"
    >
      {cellValue}
    </div>
  );
};

export default Cell;
