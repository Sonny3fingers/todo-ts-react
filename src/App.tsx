import { useState } from "react";
import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";

function App() {
  const [count, setCount] = useState<number>(1);
  return (
    <>
      <Heading title={"The world is yours"} />
      <Section title={"This is another subheading"}>
        This is Section Text
      </Section>
      <Counter setCount={setCount}>Count Is {count}</Counter>
      <List
        items={["Stojakovic", "Depp", "Ferenchev"]}
        render={(item: string) => <span className="gold">{item}</span>}
      />
    </>
  );
}

export default App;
