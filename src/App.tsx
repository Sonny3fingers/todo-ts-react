import { useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

export interface DataItem {
  id: string;
  text: string;
  checked: boolean;
}

function App() {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem("data");
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  const addItemHandler = (newItem: DataItem) => {
    setData([...data, newItem]);
    localStorage.setItem("data", JSON.stringify([...data, newItem]));
  };

  const itemDeleteHandler = (id: string) => {
    setData(data.filter((item) => item.id !== id));
    localStorage.setItem(
      "data",
      JSON.stringify(data.filter((item) => item.id !== id))
    );
  };

  const clearItemsHandler = () => {
    setData([]);
    localStorage.clear();
  };

  const changeCheckboxHandler = (id: string) => {
    const itemToUpdate = data.find((item) => item.id === id);
    if (itemToUpdate) {
      itemToUpdate.checked = !itemToUpdate.checked;
      setData([...data]);
      localStorage.setItem("data", JSON.stringify([...data]));
    }
  };

  return (
    <main>
      <Header />
      <Form onAddItem={addItemHandler} />
      <List
        data={data}
        itemDeleteHandler={itemDeleteHandler}
        onClearItems={clearItemsHandler}
        changeCheckboxHandler={changeCheckboxHandler}
      />
    </main>
  );
}

export default App;
