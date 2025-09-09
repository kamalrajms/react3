import React, { useReducer } from "react";

export default function App() {
  const initialValue = { count: 0 };
  function reducerFun(state, action) {
    switch (action.type) {
      case "inc":
        return { count: state.count + 1 };
      case "dec":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return { state };
    }
  }

  const [state, dispatch] = useReducer(reducerFun, initialValue);
  return (
    <div>
      <h1>Count :{state.count}</h1>
      <button onClick={() => dispatch({ type: "inc" })}>Increment</button>
      <br />
      <button onClick={() => dispatch({ type: "dec" })}>Decrement</button>
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
