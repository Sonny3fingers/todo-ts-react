import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

export interface DataItem {
  text: string;
  checked: boolean;
}

function App() {
  const [data, setData] = useState<DataItem[]>([]);

  const addItemHandler = (newItem: DataItem) => {
    setData([...data, newItem]);
  };

  console.log(data);

  return (
    <main>
      <Header />
      <Form onAddItem={addItemHandler} />
      <List data={data} />
    </main>
  );
}

export default App;
