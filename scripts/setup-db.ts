import { PrismaClient } from '@prisma/client';
import { seed } from '../lib/db/migrations';

async function main() {
  const prisma = new PrismaClient();
  
  try {
    await seed();
    console.log('Database setup completed successfully');
  } catch (error) {
    console.error('Error setting up database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();