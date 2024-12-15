import { Prisma } from '@prisma/client';

// Quiz with related data
export type QuizWithRelations = Prisma.QuizGetPayload<{
  include: {
    category: true;
    questions: true;
    createdBy: {
      select: {
        id: true;
        name: true;
        email: true;
      };
    };
  };
}>;

// Question with options properly typed
export type QuestionWithOptions = Prisma.QuestionGetPayload<{
  select: {
    id: true;
    content: true;
    type: true;
    options: true;
    order: true;
    points: true;
  };
}> & {
  options: string[]; // Type assertion for parsed JSON
};

// Quiz attempt with detailed information
export type DetailedQuizAttempt = Prisma.QuizAttemptGetPayload<{
  include: {
    quiz: {
      include: {
        category: true;
      };
    };
    answers: true;
    user: {
      select: {
        id: true;
        name: true;
      };
    };
  };
}>;