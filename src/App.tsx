import { useCallback, useState } from "react";
import A from "./components/learn/A";
import B from "./components/learn/B";

const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <h1>App Component : {count}</h1>
      <button onClick={increment}>증가</button>

      <A />
      <B increment={increment} />
    </>
  );
};
export default App;
