import React, { useState, useEffect } from "react";

export default function List({ getItems }) {
  const [item, setItem] = useState([]);
  useEffect(() => {
    setItem(getItems());
    console.log("updated data");
  }, [getItems]);
  return (
    <div>
      {item.map((item, ind) => (
        <li key={ind}>{item}</li>
      ))}
    </div>
  );
}
