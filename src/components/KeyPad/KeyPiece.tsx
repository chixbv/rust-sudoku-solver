const KeyPiece = ({
  index,
  clickHandler,
}: {
  index: number;
  clickHandler: (e: React.MouseEvent) => void;
}) => (
  <div className="keypiece">
    <button type="button" onClick={clickHandler} data-value={index}>
      {index}
    </button>
  </div>
);

export default KeyPiece;
