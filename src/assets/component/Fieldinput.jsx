import React, { useState } from "react";

export default function Fieldinput() {
  const [name, setname] = useState("efgrt");
  const [tick, setTick] = useState(true);
  return (
    <div>
      <h2>controlled input field</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <p>your name :{name}</p>
      <input
        type="checkbox"
        checked={tick}
        onChange={(e) => setTick(e.target.checked)}
      />
    </div>
  );
}
