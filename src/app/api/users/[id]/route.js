import { user } from "@/utile/db";
import { NextResponse } from "next/server";

export function GET(req, res) {
  // console.log(res); // { params: { id: '20' } }
  // console.log(res.params.id); // "20"
  const userID = parseInt(res.params.id);
  const userData = user.filter((item) => item.id === userID);
  return NextResponse.json(
    userData.length == 0
      ? { result: "No Data Found", success: false }
      : { result: userData, success: true },
    { status: 200 }
  );
}
