"use client";
import "./../../../style.css";
import { useState, useEffect } from "react";
export default function Page({ params }) {
  let id = params.userid;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  async function getUserDetails() {
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    // return data.result;
    setAge(data.result.age);
    setName(data.result.name);
    setEmail(data.result.email);
  }

  useEffect(() => {
    getUserDetails();
  }, []);

  async function updateUser() {
    let response = await fetch(`http://localhost:3000/api//users/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name, email, age }),
    });
    response = await response.json();
    if (response.success == true) {
      alert("Existing User Details updated");
    } else {
      alert("some error with data please check and try again");
    }
    console.log(response);
  }

  return (
    <div className="add-user">
      <h1>Update User Details </h1>
      <input
        className="input-field"
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input-field"
        type="text"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input-field"
        type="text"
        placeholder="Enter Your Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button onClick={updateUser} className="btn">
        Update User
      </button>
    </div>
  );
}
