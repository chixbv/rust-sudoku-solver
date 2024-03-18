import DeleteButton from "./DeleteButton";
import KeyPiece from "./KeyPiece";

const KeyPad = () => (
  <div className="keypad">
    <div>
      {[...Array(10).keys()].map((i) => (
        <KeyPiece index={(i + 1) % 10} />
      ))}
      <DeleteButton />
    </div>
  </div>
);

export default KeyPad;
