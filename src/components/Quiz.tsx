
import { useState, useEffect } from "react";
import Question from "./Question";
import { quizQuestions } from "@/data/questions";
import { Progress } from "@/components/ui/progress";

interface QuizProps {
  onComplete: (score: number, total: number) => void;
}

const Quiz = ({ onComplete }: QuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [answered, setAnswered] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  useEffect(() => {
    if (timeLeft > 0 && !answered) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !answered) {
      handleNextQuestion();
    }
  }, [timeLeft, answered]);

  const handleAnswer = (selectedAnswer: string) => {
    if (answered) return;
    
    setAnswered(true);
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      handleNextQuestion();
    }, 1500);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(30);
      setAnswered(false);
    } else {
      onComplete(score + (answered && currentQuestion.correctAnswer === currentQuestion.options.find(opt => opt === currentQuestion.correctAnswer) ? 1 : 0), quizQuestions.length);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-card rounded-2xl shadow-lg p-6 mb-6 border border-border">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-primary">
                Question {currentQuestionIndex + 1} of {quizQuestions.length}
              </div>
              <div className="text-lg text-muted-foreground">
                Score: {score}
              </div>
            </div>
            <div className={`text-2xl font-bold px-4 py-2 rounded-lg ${
              timeLeft <= 10 ? 'bg-destructive text-destructive-foreground' : 'bg-primary text-primary-foreground'
            }`}>
              {timeLeft}s
            </div>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        {/* Question */}
        <Question
          question={currentQuestion}
          onAnswer={handleAnswer}
          answered={answered}
          timeLeft={timeLeft}
        />
      </div>
    </div>
  );
};

export default Quiz;
