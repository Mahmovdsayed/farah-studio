import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "./func/verifyToken";
export async function middleware(req: any) {
  const token = (await cookies()).get("userToken")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    await verifyToken(token);
    return NextResponse.next();
  } catch (error) {
    console.error("Invalid Token:", error);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
