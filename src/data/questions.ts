
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  category: string;
  verse?: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Who built the ark according to God's instructions?",
    options: ["Moses", "Noah", "Abraham", "David"],
    correctAnswer: "Noah",
    category: "Old Testament",
    verse: "Genesis 6:19"
  },
  {
    id: 2,
    question: "Which apostle denied Jesus three times?",
    options: ["John", "Peter", "James", "Thomas"],
    correctAnswer: "Peter",
    category: "New Testament",
    verse: "Matthew 26:34"
  },
  {
    id: 3,
    question: "How many days and nights did it rain during the flood?",
    options: ["30", "40", "50", "70"],
    correctAnswer: "40",
    category: "Old Testament",
    verse: "Genesis 7:12"
  },
  {
    id: 4,
    question: "What is the shortest verse in the Bible?",
    options: ["God is love", "Jesus wept", "Pray without ceasing", "Fear not"],
    correctAnswer: "Jesus wept",
    category: "New Testament",
    verse: "John 11:35"
  },
  {
    id: 5,
    question: "Who was thrown into the lion's den?",
    options: ["Daniel", "Shadrach", "Meshach", "Abednego"],
    correctAnswer: "Daniel",
    category: "Old Testament",
    verse: "Daniel 6:16"
  },
  {
    id: 6,
    question: "How many disciples did Jesus choose?",
    options: ["10", "11", "12", "13"],
    correctAnswer: "12",
    category: "New Testament",
    verse: "Matthew 10:1"
  },
  {
    id: 7,
    question: "Who was the first king of Israel?",
    options: ["David", "Solomon", "Saul", "Samuel"],
    correctAnswer: "Saul",
    category: "Old Testament",
    verse: "1 Samuel 10:24"
  },
  {
    id: 8,
    question: "In which city was Jesus born?",
    options: ["Nazareth", "Jerusalem", "Bethlehem", "Capernaum"],
    correctAnswer: "Bethlehem",
    category: "New Testament",
    verse: "Matthew 2:1"
  },
  {
    id: 9,
    question: "What did God create on the first day?",
    options: ["Land and sea", "Light", "Animals", "Man"],
    correctAnswer: "Light",
    category: "Old Testament",
    verse: "Genesis 1:3"
  },
  {
    id: 10,
    question: "Who baptized Jesus?",
    options: ["Peter", "John the Baptist", "Andrew", "James"],
    correctAnswer: "John the Baptist",
    category: "New Testament",
    verse: "Matthew 3:13"
  }
];
