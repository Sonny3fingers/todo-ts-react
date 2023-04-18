import React from "react";
import { DataItem } from "../App";

interface ListItemProps {
  data: DataItem;
}

const ListItem = ({ item }: ListItemProps) => {
  const changeCheckboxInputHandler = () => {
    console.log("hello");
  };
  return (
    <li>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={changeCheckboxInputHandler}
      />
      <span>{item.text}</span>
      <button>X</button>
    </li>
  );
};

export default ListItem;
