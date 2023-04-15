import { useState, useEffect, useCallback, useMemo, useRef } from "react";

interface User {
  id: number;
  username: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 10;

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef?.current?.value);

  useEffect(() => {
    console.log("USERS: ", users);

    return () => {
      console.log("goodbye");
    };
  }, [users]);

  const result = useMemo(() => fib(myNum), [myNum]);

  const addTwo = useCallback((): void => setCount((prev) => prev + 2), []);

  return (
    <div>
      <h1>{count}</h1>
      <h3>{result}</h3>
      <input type="text" ref={inputRef} />
      <button onClick={addTwo}>ADD</button>
    </div>
  );
}

export default App;
