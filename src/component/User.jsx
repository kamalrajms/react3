import React from "react";
import Styles from "./User.module.css";

export default function User({ City }) {
  const theme = {
    backgroundColor: "red",
    padding: "10px",
  };
  return (
    <div className={Styles.user}>
      Hello user welcome
      <button style={{ padding: "20px", fontSize: "20px" }}>
        buttom {City}
      </button>
      <button style={theme}>Object</button>
    </div>
  );
}
