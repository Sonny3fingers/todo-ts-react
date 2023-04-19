import React, { ChangeEvent, useState } from "react";

interface ListItemProps {
  index: number;
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
  index,
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
