const KeyPiece = ({ index }: { index: number }) => (
  <div className="keypiece">
    <button type="button">{index}</button>
  </div>
);

export default KeyPiece;
