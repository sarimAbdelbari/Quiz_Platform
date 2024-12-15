import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users } from 'lucide-react';

interface QuizCardProps {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  timeLimit?: number;
  attemptCount: number;
}

export function QuizCard({
  id,
  title,
  description,
  difficulty,
  timeLimit,
  attemptCount,
}: QuizCardProps) {
  return (
    <Link href={`/quiz/${id}`}>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl mb-2">{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
            <Badge
              variant={
                difficulty === 'EASY'
                  ? 'success'
                  : difficulty === 'MEDIUM'
                  ? 'warning'
                  : 'destructive'
              }
            >
              {difficulty.toLowerCase()}
            </Badge>
          </div>
          <div className="flex gap-4 mt-4 text-sm text-muted-foreground">
            {timeLimit && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{timeLimit} min</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{attemptCount} attempts</span>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}