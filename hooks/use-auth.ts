"use client";

import { useState } from 'react';
import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export function useAuth() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('Invalid email or password');
        return false;
      }

      router.push('/dashboard');
      router.refresh();
      return true;
    } catch (error) {
      setError('An error occurred during login');
      return false;
    }
  };

  const logout = async () => {
    await signOut({ redirect: true, callbackUrl: '/' });
  };

  return {
    login,
    logout,
    error,
    setError,
  };
}