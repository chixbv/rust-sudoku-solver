const Row = ({ index }: { index: number }) => {
  return (
    <div className="grid-row" key={index}>
      {[...Array(9).keys()].map((i) => (
        <div className="grid-cell" key={i}>
          
        </div>
      ))}
    </div>
  );
};

export default Row;
