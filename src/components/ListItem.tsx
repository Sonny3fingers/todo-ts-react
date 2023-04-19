interface ListItemProps {
  id: string;
  text: string;
  checked: boolean;
  itemDeleteHandler: (id: string) => void;
  changeCheckboxHandler: (id: string) => void;
}

const ListItem = ({
  id,
  text,
  checked,
  itemDeleteHandler,
  changeCheckboxHandler,
}: ListItemProps) => {
  const onDelete = () => {
    itemDeleteHandler(id);
  };

  const changeCheckedHandler = () => {
    changeCheckboxHandler(id);
  };

  return (
    <li id={id}>
      <input
        type="checkbox"
        onChange={changeCheckedHandler}
        checked={checked}
      />
      <span>{text}</span>
      <button onClick={onDelete}>X</button>
    </li>
  );
};

export default ListItem;
