import React, { ChangeEvent, useState, FormEvent } from "react";
import { DataItem } from "../App";

type FormProps = {
  onAddItem: (newItem: DataItem) => void;
};

const Form = ({ onAddItem }: FormProps) => {
  const [newItem, setNewItem] = useState<DataItem>({
    id: "",
    text: "",
    checked: false,
  });

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewItem({
      checked: false,
      text: e.target.value,
      id: crypto.randomUUID(),
    });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddItem(newItem);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <input type="text" placeholder="Add Item" onChange={inputChangeHandler} />
      <button>Add</button>
    </form>
  );
};

export default Form;
