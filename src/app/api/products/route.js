import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];
  let success = true;
  try {
    await mongoose.connect(connectionStr, {
      useUnifiedTopology: true,
    });
    data = await Product.find();
  } catch (error) {
    data = { result: "error" };
    success = false;
  }

  return NextResponse.json({ result: data, success: success }, { status: 200 });
}

export async function POST(req, content) {
  await mongoose.connect(connectionStr);
  //   let product = new Product({
  //     name: "Note 10",
  //     price: "30000",
  //     color: "red",
  //     company: "samsung",
  //     category: "mobile",
  //   });

  const payload = await req.json();
  let product = new Product(payload);
  const result = await product.save();
  return NextResponse.json({ result, success: true });
}
