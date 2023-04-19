import ListItem from "./ListItem";
import { DataItem } from "../App";

type ListProps = {
  data: DataItem[];
  itemDeleteHandler: (id: string) => void;
  onClearItems: () => void;
  changeCheckboxHandler: (id: string) => void;
};

const List = ({
  data,
  itemDeleteHandler,
  onClearItems,
  changeCheckboxHandler,
}: ListProps) => {
  return (
    <div className="list">
      <div className="listHeader">
        <h2>List</h2>
        <button onClick={onClearItems}>Clear</button>
      </div>
      <ul>
        {data.map((item: DataItem, index: number) => (
          <ListItem
            key={index}
            {...item}
            itemDeleteHandler={itemDeleteHandler}
            changeCheckboxHandler={changeCheckboxHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
