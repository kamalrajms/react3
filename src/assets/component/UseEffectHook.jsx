import { useState, useEffect } from "react";

export default function UseEffectHook() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log("component mounted");
  }, [count]);
  useEffect(() => {
    console.log(`count number : ${count}`);
  }, [count]);
  return (
    <div>
      <h2>Hello</h2>
      <h1>Count : {count}</h1>
      <button onClick={() => setcount(count + 1)}>increase</button>
    </div>
  );
}
