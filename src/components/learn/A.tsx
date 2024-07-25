import React, { useState } from "react";
import C from "./C";

const A = () => {
  console.log("A bleadered");
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>A Component : {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
      <C />
    </>
  );
};
export default React.memo(A);
