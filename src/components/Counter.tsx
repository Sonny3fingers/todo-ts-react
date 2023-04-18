import { useCounter, useCounterText } from "../context/CounterContext";

const Counter = () => {
  const { count, increment, decrement } = useCounter();
  const { text, changeHandler } = useCounterText();
  return (
    <div>
      <h1>Counter</h1>
      <h2>counter number: {count}</h2>
      <div>
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
      </div>
      <input type="text" onChange={changeHandler} />
      <h2>input text: {text}</h2>
    </div>
  );
};

export default Counter;
