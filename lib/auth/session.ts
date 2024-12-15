import { auth } from "./auth-config";
import { redirect } from "next/navigation";

export async function getSession() {
  const session = await auth();
  return session;
}

export async function requireAuth() {
  const session = await getSession();
  
  if (!session?.user) {
    redirect("/auth/login");
  }
  
  return session;
}

export async function requireAdmin() {
  const session = await requireAuth();
  
  if (session.user.role !== "ADMIN") {
    redirect("/dashboard");
  }
  
  return session;
}