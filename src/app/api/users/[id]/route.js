import { user } from "@/utile/db";
import { NextResponse } from "next/server";

export function GET(req, content) {
  // console.log(res); // { params: { id: '20' } }
  // console.log(res.params.id); // "20"
  const userID = parseInt(content.params.id);
  const userData = user.filter((item) => item.id === userID);
  return NextResponse.json(
    userData.length == 0
      ? { result: "No Data Found", success: false }
      : { result: userData[0], success: true },
    { status: 200 }
  );
}

export async function PUT(req, content) {
  let payload = await req.json();
  const userID = parseInt(content.params.id);
  // console.log(payload); // { name: 'ram', age: 323, email: 'ram@gmail.com' }
  // console.log(userID); // 20

  payload.id = userID; // payload ki jo id hai usme mene userId jo hame url ke through mil rhi hai uske equal kar di hai
  // if i won't use this line it will give me error of success: false

  if (!payload.id || !payload.name || !payload.email || !payload.age) {
    return NextResponse.json(
      { result: "request data is not valid", success: false },
      { status: 400 }
    );
  }

  return NextResponse.json({ result: payload, success: true }, { status: 200 });
}

export function DELETE(req, content) {
  let id = parseInt(content.params.id);
  if (id) {
    return NextResponse.json(
      { result: "User Deleted", success: true },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { result: "Internal error, Please try after sometime", success: false },
      { status: 400 }
    );
  }
}
