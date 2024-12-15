import * as argon2 from 'argon2';
import { prisma } from '@/lib/db/prisma';
import { AuthResult } from './types';
import { Role } from '@prisma/client';

export class AuthService {
  static async registerUser(
    name: string,
    email: string,
    password: string,
    role: Role = 'USER'
  ): Promise<AuthResult> {
    try {
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return {
          success: false,
          message: 'User already exists',
        };
      }

      const hashedPassword = await argon2.hash(password);

      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role,
        },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
        },
      });

      return {
        success: true,
        user,
      };
    } catch (error) {
      console.error('Registration error:', error);
      return {
        success: false,
        message: 'Failed to create user',
      };
    }
  }

  static async validateCredentials(
    email: string,
    password: string
  ): Promise<AuthResult> {
    try {
      const user = await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          password: true,
        },
      });

      if (!user) {
        return {
          success: false,
          message: 'Invalid credentials',
        };
      }

      const isPasswordValid = await argon2.verify(user.password, password);

      if (!isPasswordValid) {
        return {
          success: false,
          message: 'Invalid credentials',
        };
      }

      const { password: _, ...userWithoutPassword } = user;
      return {
        success: true,
        user: userWithoutPassword,
      };
    } catch (error) {
      console.error('Authentication error:', error);
      return {
        success: false,
        message: 'Authentication failed',
      };
    }
  }
}