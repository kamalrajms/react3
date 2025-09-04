import React, { useState } from "react";

export default function Darek() {
  const [dark, setDark] = useState(false);
  return (
    <div
      style={{
        backgroundColor: dark ? "#000" : "#fff",
        color: dark ? "#fff" : "#000",
        padding: "30px",
      }}
    >
      <button onClick={() => setDark(!dark)}>
        switch to{dark ? "light" : "dark"}{" "}
      </button>
      <p>you are in {dark ? "dark" : "light"} mode</p>
    </div>
  );
}
