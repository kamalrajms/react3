import React, { useState, useContext, createContext } from "react";
import First from "./component/First";

export const Pass = createContext();

export default function App() {
  const name = "cat";
  return (
    <div>
      Main component
      <Pass.Provider value={name}>
        <First />
      </Pass.Provider>
    </div>
  );
}
