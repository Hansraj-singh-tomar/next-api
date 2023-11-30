import Link from "next/link";
import "./../style.css";
import DeleteBtn from "@/utile/DeleteBtn";

async function getUsers() {
  let data = fetch("http://localhost:3000/api/users");
  data = (await data).json();
  return data;
}

export default async function Page() {
  let users = await getUsers();
  console.log(users);
  return (
    <div>
      <h1>User List</h1>
      {users.map((item) => {
        return (
          <div key={item.id} className="userItem">
            <span>
              <Link href={`users/${item.id}`}>{item.name}</Link>
            </span>
            <span>
              <Link href={`users/${item.id}/update`}>Edit</Link>
            </span>
            <span>
              <DeleteBtn id={item.id} />
            </span>
          </div>
        );
      })}
    </div>
  );
}
