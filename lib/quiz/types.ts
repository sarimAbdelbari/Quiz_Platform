import { Difficulty, QuestionType } from '@prisma/client';

export interface QuizFilters {
  search?: string;
  category?: string;
  difficulty?: Difficulty;
}

export interface QuizQuestion {
  id: string;
  content: string;
  type: QuestionType;
  options: string[];
  correctAnswer: string;
  order: number;
  points: number;
}