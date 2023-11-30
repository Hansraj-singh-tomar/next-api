import { NextResponse } from "next/server";

export async function GET(req, content) {
  // url => http://localhost:3000/api/student/10/abilash/sdsa
  //   console.log(content); // { params: { student: [ 'student', '10', 'abilash', 'sdsa' ] } }

  const studentDetails = content.params.student;
  console.log(studentDetails); // [ 'student', '10', 'abilash', 'sdsa' ]

  //   return new Response("all routes catched");
  return NextResponse.json(
    { result: studentDetails, success: true },
    { status: 200 }
  );
}
