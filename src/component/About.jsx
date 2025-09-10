import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function About() {
  const page = useNavigate();
  const [count, setcount] = useState(0);
  useEffect(() => {
    if (count == 5) {
      page("/Contact");
    }
  }, [count]);
  return (
    <div>
      About---{count}
      <button onClick={() => setcount(count + 1)}>Contact</button>
    </div>
  );
}
