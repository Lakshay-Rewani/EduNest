
import { Button } from "@/components/ui/button";

interface QuizCategoriesProps {
  currentCategory: string;
  onCategoryChange: (category: string) => void;
}

export function QuizCategories({ currentCategory, onCategoryChange }: QuizCategoriesProps) {
  const categories = [
    { id: "all", label: "All Quizzes" },
    { id: "grammar", label: "Grammar" },
    { id: "vocabulary", label: "Vocabulary" },
    { id: "comprehension", label: "Comprehension" },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={currentCategory === category.id ? "default" : "outline"}
          onClick={() => onCategoryChange(category.id)}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}
