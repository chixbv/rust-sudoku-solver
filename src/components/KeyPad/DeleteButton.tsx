const DeleteButton = ({
  clickHandler,
}: {
  clickHandler: (e: React.MouseEvent) => void;
}) => (
  <div className="keypiece deletebutton">
    <button type="button" data-value="delete" onClick={clickHandler}>
      X
    </button>
  </div>
);

export default DeleteButton;
