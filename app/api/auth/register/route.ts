import { NextResponse } from "next/server";
import { AuthService } from "@/lib/auth/auth-service";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = await AuthService.registerUser(name, email, password);

    return NextResponse.json(
      { message: "User created successfully", user },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    const message = error instanceof Error ? error.message : "Error creating user";
    return NextResponse.json({ message }, { status: 500 });
  }
}