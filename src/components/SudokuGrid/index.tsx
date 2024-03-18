import Row from "./Row";

const SudokuGrid = () => (
  <div className="grid">
    {[...Array(9).keys()].map((i) => (
      <Row index={i} />
    ))}
  </div>
);

export default SudokuGrid;
