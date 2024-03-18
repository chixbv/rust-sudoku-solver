const Cell = ({row, col}: {row: number, col: number}) => (
  <div data-row={row} data-col={col} className="grid-cell" ></div>
)

export default Cell;