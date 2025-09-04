import React, { useState } from "react";

export default function MultiFieldInput() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handlechang = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <h2>Multi field</h2>
      <input
        type="text"
        value={formData.name}
        name="name"
        onChange={handlechang}
        placeholder="name"
      />
      <input
        type="number"
        value={formData.age}
        name="age"
        onChange={handlechang}
        placeholder="age"
      />
      <input
        type="email"
        value={formData.email}
        name="email"
        onChange={handlechang}
        placeholder="email"
      />
      <input type="checkbox" />
    </div>
  );
}
