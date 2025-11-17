import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      body
    );

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.log("FULL ERROR:", error);
    console.log("RESPONSE DATA:", error?.response);
    return NextResponse.json(
      { message: error?.response?.data?.message || "SingUp failed" },
      { status: 400 }
    );
  }
}