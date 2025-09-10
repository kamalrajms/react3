import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
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
              <Link to={`/BLogDetails/${user.id}`}>
                {user.name}--{user.email}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>no data found</p>
      )}
    </div>
  );
}
