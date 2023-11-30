import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(req, content) {
  let productID = content.params.productId;
  const filter = { _id: productID };
  console.log(filter);

  const payload = await req.json();
  console.log(payload);

  await mongoose.connect(connectionStr);

  const result = await Product.findOneAndUpdate(filter, payload);
  return NextResponse.json({ result: result, success: true }, { status: 200 });
}

export async function GET(req, content) {
  //   console.log(content); // { params: { productId: '65562771a6d6ce878c97bfe0' } }
  let productID = content.params.productId;

  const record = { _id: productID };

  await mongoose.connect(connectionStr);

  const result = await Product.findById(record);
  return NextResponse.json({ result: result, success: true }, { status: 200 });
}

export async function DELETE(req, content) {
  let productID = content.params.productId;
  const record = { _id: productID };
  await mongoose.connect(connectionStr);
  const result = await Product.deleteOne(record);
  return NextResponse.json({ result: result, success: true }, { status: 200 });
}
