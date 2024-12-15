import { prisma } from './prisma';
import * as argon2 from 'argon2';

export async function seed() {
  try {
    // Create default categories
    const categories = await prisma.category.createMany({
      data: [
        { name: 'General Knowledge' },
        { name: 'Science' },
        { name: 'History' },
        { name: 'Technology' },
        { name: 'Mathematics' },
      ],
      skipDuplicates: true,
    });

    // Create admin user if it doesn't exist
    const adminEmail = 'admin@example.com';
    const adminPassword = 'Admin123!@#'; // This should be changed in production
    const hashedPassword = await argon2.hash(adminPassword);

    const admin = await prisma.user.upsert({
      where: { email: adminEmail },
      update: {},
      create: {
        email: adminEmail,
        name: 'Admin',
        password: hashedPassword,
        role: 'ADMIN',
      },
    });

    console.log('Seeding completed successfully');
    return { categories, admin };
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}