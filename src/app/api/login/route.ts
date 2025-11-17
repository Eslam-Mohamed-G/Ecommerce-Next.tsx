import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signin",
      body
    );

    return NextResponse.json({
      message: "success",
      token: response.data.token,
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: error?.response?.data?.message || "Login failed" },
      { status: 400 }
    );
  }
}