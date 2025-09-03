import React from "react";
import "./Greeting.css";
import User from "./User";

export default function greeting({ City }) {
  return (
    <>
      <h5 className="hello">Hello world {City}</h5>
      <p className="lorem">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vero,
        libero dignissimos debitis nemo soluta dolore nobis ipsam earum placeat
        et dolorum cumque deleniti hic, doloribus facere dolorem. Architecto,
        possimus.
      </p>
      <User City={City} />
    </>
  );
}
