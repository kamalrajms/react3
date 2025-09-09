import React, { useContext } from "react";
import { Pass } from "../App";

export default function Third() {
  const passname = useContext(Pass);
  return <div>Third component---{passname}</div>;
}
