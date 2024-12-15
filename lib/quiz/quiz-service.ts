import { prisma } from '@/lib/db/prisma';
import { QuizFilters } from './types';
import { Prisma } from '@prisma/client';

export class QuizService {
  static async getQuizzes(filters: QuizFilters) {
    const where: Prisma.QuizWhereInput = {};

    if (filters.search) {
      where.OR = [
        { title: { contains: filters.search } },
        { description: { contains: filters.search } },
      ];
    }

    if (filters.category) {
      where.categoryId = filters.category;
    }

    if (filters.difficulty) {
      where.difficulty = filters.difficulty;
    }

    return prisma.quiz.findMany({
      where,
      include: {
        category: true,
        attempts: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  static async getCategories() {
    return prisma.category.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }
}