import { NextResponse } from "next/server";
import axios from "axios";
import { API_ENDPOINTS } from "@/src/lib/constants/api";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await axios.post(API_ENDPOINTS.AUTH.SIGNUP, body);

    return NextResponse.json(response.data);
  } catch (error: any) {
    // Log errors only in development
    if (process.env.NODE_ENV === "development") {
      console.error("SignUp Error:", error?.response?.data);
    }
    return NextResponse.json(
      { message: error?.response?.data?.message || "SingUp failed" },
      { status: 400 }
    );
  }
}