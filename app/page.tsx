import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center py-10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Welcome to QuizMaster
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Create, share, and take quizzes on any topic. Test your knowledge
                and challenge others in a fun and engaging way.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}