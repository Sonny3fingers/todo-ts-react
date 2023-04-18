import React, { ChangeEvent, useState, FormEvent } from "react";

type FormProps = {
  onAddItem: (newItem: DataItem) => void;
};

interface DataItem {
  text: string;
  checked: boolean;
}

const Form = ({ onAddItem }: FormProps) => {
  const [newItem, setNewItem] = useState<DataItem>({
    text: "",
    checked: false,
  });

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewItem({ ...newItem, text: e.target.value });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddItem(newItem);
    console.log(newItem);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <input type="text" placeholder="Add Item" onChange={inputChangeHandler} />
      <button>Add</button>
    </form>
  );
};

export default Form;
