import { user } from "@/utile/db";
import { NextResponse } from "next/server";

// ek basic api create karenge jisme ek user ki details aa rhi ho
export function GET() {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}

export async function POST(req, res) {
  // console.log(req);
  let payload = await req.json();
  // console.log(payload); // { id: 25, name: 'hansraj', age: 23, email: 'ttomer@gmail.com' }

  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { result: "Required fields not found", success: false },
      { status: "400" }
    );
  }
  // 201 - created
  return NextResponse.json(
    { result: "New user created", success: true },
    { status: 201 }
  );
}

// Put method ka code ham dynamic route ke route.js me create karenge
