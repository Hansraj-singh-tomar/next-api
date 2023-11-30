async function getUsers(id) {
  let data = fetch(`http://localhost:3000/api/users/${id}`);
  data = (await data).json();
  return data;
}
export default async function Page({ params }) {
  //   console.log(params); // {userid: '21'}
  let user = await getUsers(params.userid);
  user = user.result;
  console.log(user); // { id: 22, name: 'hasraj', age: 26, email: 'hansraj@gmail.com' }
  return (
    <div>
      <h2>User Detailes</h2>
      <h3>Name: {user.name}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Age: {user.age}</h3>
    </div>
  );
}
