
import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { QuizList } from "@/components/Quizzes/QuizList";
import { QuizCategories } from "@/components/Quizzes/QuizCategories";
import { useState } from "react";

const Quizzes = () => {
  const [category, setCategory] = useState("all");

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">AI Quizzes</h1>
          <p className="text-muted-foreground">
            Test your knowledge with personalized AI-generated quizzes
          </p>
        </div>

        <QuizCategories currentCategory={category} onCategoryChange={setCategory} />
        <QuizList category={category} />
      </div>
    </DashboardLayout>
  );
};

export default Quizzes;
