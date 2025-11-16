"use server";

import { cookies } from "next/headers";

export async function setAuthToken(token: string) {
    const cookieStore = await cookies();
    cookieStore.set({
        name: "token",
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
    });
}