import React from "react";

export default function Hello(props) {
  const name = "vijay";
  return (
    <div>
      <h1>
        Hello {name}
        {props.Age}
      </h1>
    </div>
  );
}
