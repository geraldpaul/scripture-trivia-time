
import { useState } from "react";

interface QuestionData {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  category: string;
  verse?: string;
}

interface QuestionProps {
  question: QuestionData;
  onAnswer: (answer: string) => void;
  answered: boolean;
  timeLeft: number;
}

const Question = ({ question, onAnswer, answered, timeLeft }: QuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    if (answered) return;
    setSelectedAnswer(option);
    onAnswer(option);
  };

  const getOptionStyle = (option: string) => {
    if (!answered) {
      return selectedAnswer === option 
        ? "bg-primary text-primary-foreground border-primary" 
        : "bg-card hover:bg-accent text-card-foreground border-border hover:border-primary/50";
    }

    if (option === question.correctAnswer) {
      return "bg-green-500 text-white border-green-500";
    }
    
    if (selectedAnswer === option && option !== question.correctAnswer) {
      return "bg-destructive text-destructive-foreground border-destructive";
    }
    
    return "bg-muted text-muted-foreground border-border";
  };

  return (
    <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
      <div className="space-y-8">
        {/* Category */}
        <div className="flex items-center justify-center">
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            {question.category}
          </span>
        </div>

        {/* Question */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
            {question.question}
          </h2>
          {question.verse && (
            <p className="text-muted-foreground text-sm mt-4 italic">
              Reference: {question.verse}
            </p>
          )}
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              disabled={answered}
              className={`p-6 rounded-xl border-2 text-left font-medium transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 ${getOptionStyle(option)}`}
            >
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-lg">{option}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Answer explanation */}
        {answered && (
          <div className="bg-accent/50 rounded-xl p-6 text-center border border-border">
            <p className="text-accent-foreground">
              {selectedAnswer === question.correctAnswer ? (
                <span className="text-green-600 font-semibold">✅ Correct! Well done!</span>
              ) : (
                <span className="text-red-600 font-semibold">❌ The correct answer was: {question.correctAnswer}</span>
              )}
            </p>
            {question.verse && (
              <p className="text-sm text-muted-foreground mt-2">
                {question.verse}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
