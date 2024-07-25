import { useState } from "react";

const App = () => {
  let [count, setCount] = useState({ num: 0 });
  const increment = () => {
    setCount({ num: count.num + 1 });
  };

  return (
    <>
      <h1>Count:{count.num}</h1>
      <button onClick={increment}>증가</button>
    </>
  );
};
export default App;
