import React, { useState } from "react";
import First from "./assets/component/First";
import Second from "./assets/component/Second";
import Darek from "./assets/component/Darek";
import Fieldinput from "./assets/component/Fieldinput";
import MultiFieldInput from "./assets/component/MultiFieldInput";
import UseEffectHook from "./assets/component/UseEffectHook";
import Timer from "./assets/component/Timer";

export default function App() {
  const [count, setCount] = useState(0);
  //ternary operator
  const [login, setLogin] = useState(false);
  //list rendering
  const fruits = ["apple", "banana", "mango"];

  const user = [];
  console.log(user.length);

  return (
    <div>
      <h2>Count :{count}</h2>
      <button onClick={() => setCount(count + 1)}>increse</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>reset</button>

      {/* ternary ope */}

      {login ? <p>Welcome in</p> : <p>Please login...</p>}
      <button onClick={() => setLogin(!login)}>
        {login ? "sign out" : "sign in"}
      </button>
      {login ? <First /> : <Second />}
      {login && <Second />}
      {login && <p>hello</p>}
      <ul>
        {fruits.map((e, ind) => (
          <li key={ind}>{e}</li>
        ))}
      </ul>
      {user.length > 0 ? (
        <ul>
          {user.map((e, ind) => (
            <li key={ind}>
              {e.name}
              {e.id}
            </li>
          ))}
        </ul>
      ) : (
        <p>no data found</p>
      )}
      <Darek />
      <Fieldinput />
      <MultiFieldInput />
      <UseEffectHook />
      <Timer />
    </div>
  );
}
