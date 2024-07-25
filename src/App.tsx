import { useReducer, useState } from "react";
const reducer = (
  state: number,
  action: { type: string; payload?: number | undefined }
) => {
  if (action.type === "increment" && action.payload) {
    return state + action.payload;
  } else if (action.type === "decrement" && action.payload) {
    return state - action.payload;
  } else if (action.type === "reset") {
    return 0;
  } else {
    return state;
  }
};
const App = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>count : {count}</h1>
      <button onClick={() => dispatch({ type: "decrement", payload: 4 })}>
        감소
      </button>
      <button onClick={() => dispatch({ type: "reset", payload: 5 })}>0</button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        증가
      </button>
    </>
  );
};
export default App;
