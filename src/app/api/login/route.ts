import { NextResponse } from "next/server";
import axios from "axios";
import { API_ENDPOINTS } from "@/src/lib/constants/api";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await axios.post(API_ENDPOINTS.AUTH.SIGNIN, body);

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