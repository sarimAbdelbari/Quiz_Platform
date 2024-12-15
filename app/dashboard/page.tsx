import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { QuizCard } from "@/components/dashboard/quiz-card";
import { QuizFilters } from "@/components/dashboard/quiz-filters";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getQuizzes() {
  const quizzes = await prisma.quiz.findMany({
    include: {
      category: true,
      attempts: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const categories = await prisma.category.findMany();

  return { quizzes, categories };
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect('/auth/login');
  }

  const { quizzes, categories } = await getQuizzes();

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Link href="/quiz/create">
          <Button>Create Quiz</Button>
        </Link>
      </div>

      <QuizFilters
        categories={categories}
        onFilterChange={() => {}}
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            id={quiz.id}
            title={quiz.title}
            description={quiz.description}
            difficulty={quiz.difficulty}
            timeLimit={quiz.timeLimit || undefined}
            attemptCount={quiz.attempts.length}
          />
        ))}
      </div>
    </div>
  );
}