
interface ResultsProps {
  score: number;
  total: number;
  onRestart: () => void;
}

const Results = ({ score, total, onRestart }: ResultsProps) => {
  const percentage = Math.round((score / total) * 100);
  
  const getEncouragementMessage = () => {
    if (percentage >= 90) {
      return {
        emoji: "🌟",
        title: "Outstanding!",
        message: "Your knowledge of Scripture is truly impressive!",
        verse: "Blessed is the one who finds wisdom, and the one who gets understanding. - Proverbs 3:13"
      };
    } else if (percentage >= 70) {
      return {
        emoji: "🎉",
        title: "Well Done!",
        message: "You have a good foundation in biblical knowledge!",
        verse: "The heart of the discerning acquires knowledge. - Proverbs 18:15"
      };
    } else if (percentage >= 50) {
      return {
        emoji: "📖",
        title: "Good Effort!",
        message: "Keep studying and your knowledge will grow!",
        verse: "Your word is a lamp to my feet and a light to my path. - Psalm 119:105"
      };
    } else {
      return {
        emoji: "💪",
        title: "Keep Learning!",
        message: "Every journey begins with a single step. Keep studying!",
        verse: "Study to show yourself approved unto God. - 2 Timothy 2:15"
      };
    }
  };

  const encouragement = getEncouragementMessage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
          <div className="space-y-6">
            {/* Result Icon */}
            <div className="text-6xl">{encouragement.emoji}</div>
            
            {/* Title */}
            <h1 className="text-4xl font-bold text-foreground">
              {encouragement.title}
            </h1>
            
            {/* Score Display */}
            <div className="space-y-4">
              <div className="text-6xl font-bold text-primary">
                {score}/{total}
              </div>
              <div className="text-2xl text-muted-foreground">
                {percentage}% Correct
              </div>
            </div>

            {/* Score Breakdown */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{score}</div>
                <div className="text-sm text-muted-foreground">Correct</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">{total - score}</div>
                <div className="text-sm text-muted-foreground">Incorrect</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{total}</div>
                <div className="text-sm text-muted-foreground">Total</div>
              </div>
            </div>

            {/* Encouragement Message */}
            <div className="bg-accent/20 rounded-xl p-6 space-y-3">
              <p className="text-lg font-medium text-accent-foreground">
                {encouragement.message}
              </p>
              <p className="text-sm text-muted-foreground italic">
                "{encouragement.verse}"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={onRestart}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-200 hover:scale-105"
              >
                Take Quiz Again
              </button>
              
              <div className="text-sm text-muted-foreground">
                Challenge yourself to improve your score!
              </div>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="bg-card/50 rounded-xl p-6 border border-border">
          <p className="text-muted-foreground mb-4">
            "Let the word of Christ dwell in you richly." - Colossians 3:16
          </p>
          <p className="text-sm text-muted-foreground">
            Keep studying God's word and growing in wisdom!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
