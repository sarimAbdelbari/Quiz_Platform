import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth/auth-options";

export const { auth: middleware } = NextAuth(authConfig);

export const config = {
  // Protect all routes under /dashboard and /quiz
  matcher: ["/dashboard/:path*", "/quiz/:path*"],
};