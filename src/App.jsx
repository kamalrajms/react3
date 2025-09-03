import React from "react";
import Greet from "./component/greeting";
import Folder from "./component/folder/Hello";
import User from "./component/User";

export default function App() {
  const age = 45;
  const city = "chennai";
  return (
    <div>
      react js <h2>Class</h2>
      <Greet />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
        fugiat veniam perferendis neque aliquid qui omnis doloremque consectetur
        impedit? Quasi quae perferendis tempore veritatis commodi dolorum in
        dicta eveniet voluptate!
      </p>
      <Greet City={city} />
      <Folder Age={age} />
      <User />
    </div>
  );
}
