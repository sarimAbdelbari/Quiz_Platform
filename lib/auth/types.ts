import { Role } from '@prisma/client';

export interface UserAuth {
  id: string;
  email: string;
  name?: string;
  role: Role;
}

export interface AuthResult {
  success: boolean;
  message?: string;
  user?: UserAuth;
}