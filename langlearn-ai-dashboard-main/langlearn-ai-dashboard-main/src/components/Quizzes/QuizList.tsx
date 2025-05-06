
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Circle } from "lucide-react";

const quizzes = [
  {
    id: 1,
    title: "Hindi Grammar Basics",
    questions: 10,
    duration: "15 mins",
    difficulty: "Beginner",
    category: "grammar",
  },
  {
    id: 2,
    title: "Tamil Vocabulary Test",
    questions: 20,
    duration: "25 mins",
    difficulty: "Intermediate",
    category: "vocabulary",
  },
  {
    id: 3,
    title: "Telugu Reading Comprehension",
    questions: 15,
    duration: "30 mins",
    difficulty: "Advanced",
    category: "comprehension",
  },
  // Add more quizzes as needed
];

const difficultyColors = {
  Beginner: "text-green-600 dark:text-green-400",
  Intermediate: "text-yellow-600 dark:text-yellow-400",
  Advanced: "text-red-600 dark:text-red-400",
};

interface QuizListProps {
  category: string;
}

export function QuizList({ category }: QuizListProps) {
  const filteredQuizzes = category === "all"
    ? quizzes
    : quizzes.filter(quiz => quiz.category === category);

  return (
    <div className="grid gap-4">
      {filteredQuizzes.map((quiz) => (
        <Card key={quiz.id} className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">{quiz.title}</CardTitle>
              <div className="flex items-center gap-2">
                <Circle className={`w-3 h-3 ${difficultyColors[quiz.difficulty as keyof typeof difficultyColors]}`} />
                <span className="text-sm">{quiz.difficulty}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{quiz.questions} questions</span>
              <span>{quiz.duration}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
