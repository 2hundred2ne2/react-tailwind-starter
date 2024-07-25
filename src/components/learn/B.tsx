import React, { useState } from "react";

const B = ({ increment }: { increment: () => void }) => {
  console.log("B bleadered");
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>
        B Component : {count}/{increment}
      </h1>
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
    </>
  );
};
export default React.memo(B);
