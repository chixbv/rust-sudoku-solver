import Cell from "./Cell";

const Row = ({
  index,
  onClick,
}: {
  index: number;
  onClick: (e: React.MouseEvent) => void;
}) => (
  <div className="grid-row" key={index}>
    {[...Array(9).keys()].map((i) => (
      <Cell key={i} row={index} col={i} onClick={onClick} />
    ))}
  </div>
);

export default Row;
