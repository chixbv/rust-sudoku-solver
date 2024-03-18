import DeleteButton from "./DeleteButton";
import KeyPiece from "./KeyPiece";

const KeyPad = () => {
  return (
    <div className="keypad">
      {[...Array(10).keys()].map((i) => (
        <KeyPiece index={(i + 1) % 10} />
      ))}
      <DeleteButton />
    </div>
  );
};

export default KeyPad;
