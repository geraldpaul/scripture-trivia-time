
import { useState } from "react";
import Quiz from "@/components/Quiz";
import Results from "@/components/Results";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'quiz' | 'results'>('welcome');
  const [finalScore, setFinalScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const startQuiz = () => {
    setCurrentScreen('quiz');
  };

  const showResults = (score: number, total: number) => {
    setFinalScore(score);
    setTotalQuestions(total);
    setCurrentScreen('results');
  };

  const resetQuiz = () => {
    setCurrentScreen('welcome');
    setFinalScore(0);
    setTotalQuestions(0);
  };

  if (currentScreen === 'quiz') {
    return <Quiz onComplete={showResults} />;
  }

  if (currentScreen === 'results') {
    return <Results score={finalScore} total={totalQuestions} onRestart={resetQuiz} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-foreground mb-2">
            📖 Scripture Trivia
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Test your knowledge of the Bible with our interactive quiz
          </p>
          <div className="text-sm text-muted-foreground">
            "Study to show yourself approved unto God, a workman that needs not to be ashamed, rightly dividing the word of truth." - 2 Timothy 2:15
          </div>
        </div>

        <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary">10</div>
                <div className="text-sm text-muted-foreground">Questions</div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary">30s</div>
                <div className="text-sm text-muted-foreground">Per Question</div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary">📊</div>
                <div className="text-sm text-muted-foreground">Instant Results</div>
              </div>
            </div>

            <button
              onClick={startQuiz}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Start Quiz
            </button>
          </div>
        </div>

        <div className="text-center space-y-2">
          <p className="text-muted-foreground text-sm">
            Challenge yourself with questions from both Old and New Testament
          </p>
          <div className="flex justify-center space-x-4 text-xs text-muted-foreground">
            <span>✨ Old Testament</span>
            <span>✨ New Testament</span>
            <span>✨ Bible Characters</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
