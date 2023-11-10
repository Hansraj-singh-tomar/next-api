import { user } from "@/utile/db";
import { NextResponse } from "next/server";

// ek basic api create karenge jisme ek user ki details aa rhi ho
export function GET() {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}
