"use client";

async function deleteUser(id) {
  let response = await fetch(`http://localhost:3000/api//users/${id}`, {
    method: "DELETE",
  });
  response = await response.json();
  if (response.success == true) {
    alert("User Deleted successfully");
  } else {
    alert("some error with data please check and try again");
  }
  console.log(response);
}

export default function DeleteBtn(props) {
  return <button onClick={() => deleteUser(props.id)}>Delete User</button>;
}
