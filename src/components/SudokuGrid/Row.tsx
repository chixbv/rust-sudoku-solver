import Cell from "./Cell";

const Row = ({ index }: { index: number }) => {
  return (
    <div className="grid-row" key={index}>
      {[...Array(9).keys()].map((i) => (
        <Cell key={i} row={index} col={i} />
      ))}
    </div>
  );
};

export default Row;
