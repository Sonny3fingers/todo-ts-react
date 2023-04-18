import { CounterProvider, initState } from "./context/CounterContext";
import Counter from "./components/Counter";

function App() {
  return (
    <CounterProvider count={initState.count} text={initState.text}>
      <Counter />
    </CounterProvider>
  );
}

export default App;
