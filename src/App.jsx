import React, { useState, useCallback } from "react";
import List from "./List";

export default function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // const getItems = () => {
  //   return [number, number + 1, number + 2];
  // };

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#fff" : "#000",
    color: dark ? "#000" : "#fff",
    padding: "20px",
  };
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Toggle theme</button>
      <List getItems={getItems} />
    </div>
  );
}
