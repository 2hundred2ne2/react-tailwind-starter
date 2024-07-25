import React, { useState } from "react";

const C = () => {
  console.log("C bleadered");
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>C Component : {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
    </>
  );
};
export default C;
