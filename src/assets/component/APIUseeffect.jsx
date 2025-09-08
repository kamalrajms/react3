import React, { useState, useEffect } from "react";

export default function APIUseeffect() {
  const [user, setUser] = useState([]);
  const [loading, setLoadinng] = useState(true);

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoadinng(false);
      });
  }, []);
  return (
    <div>
      <h2>API</h2>
      {loading ? (
        <p>Loading....</p>
      ) : user.length > 0 ? (
        <ul>
          {user.map((user, ind) => (
            <li key={ind}>
              {user.name}--{user.email}
              <br></br>
              {user.phone}
            </li>
          ))}
        </ul>
      ) : (
        <p>no data found</p>
      )}
    </div>
  );
}
