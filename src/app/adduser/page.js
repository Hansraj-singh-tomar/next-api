"use client";
import { useState } from "react";
import "./../style.css";
export default function Page() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  async function addUser() {
    let response = await fetch("http://localhost:3000/api/users", {
      method: "Post",
      body: JSON.stringify({ name, email, age }),
    });
    response = await response.json();
    if (response.success == true) {
      alert("New User Created");
    } else {
      alert("some error with data please check and try again");
    }
    console.log(response);
  }

  return (
    <div className="add-user">
      <h1>Add New User</h1>

      <input
        className="input-field"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter Name"
      />

      <input
        className="input-field"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Enter Email"
      />

      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="input-field"
        type="text"
        placeholder="Enter Age"
      />

      <button onClick={addUser} className="btn">
        Add User
      </button>
    </div>
  );
}
