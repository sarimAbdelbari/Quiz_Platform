"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface AuthFormProps {
  mode: 'login' | 'register';
  onSubmit: (data: { name?: string; email: string; password: string }) => Promise<void>;
  error: string | null;
}

export function AuthForm({ mode, onSubmit, error }: AuthFormProps) {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    await onSubmit({
      name: mode === 'register' ? formData.get("name") as string : undefined,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <h1 className="text-2xl font-bold text-center">
          {mode === 'login' ? 'Login' : 'Register'}
        </h1>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {mode === 'register' && (
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                placeholder={mode === 'login' ? "Enter your password" : "Create a password"}
              />
            </div>
            {error && (
              <div className="text-sm text-red-500 text-center">{error}</div>
            )}
            <Button type="submit" className="w-full">
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          variant="link"
          onClick={() => router.push(mode === 'login' ? '/auth/register' : '/auth/login')}
        >
          {mode === 'login'
            ? "Don't have an account? Sign up"
            : "Already have an account? Sign in"}
        </Button>
      </CardFooter>
    </Card>
  );
}