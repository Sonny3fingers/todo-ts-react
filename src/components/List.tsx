import React from "react";
import ListItem from "./ListItem";
import { DataItem } from "../App";

type ListProps = {
  data: DataItem[];
};

const List = ({ data }: ListProps) => {
  return (
    <div className="list">
      <div className="listHeader">
        <h2>List</h2>
        <button>Clear</button>
      </div>
      <ul>
        {data.map((item: DataItem, index: number) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default List;
