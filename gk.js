/* ==========================================================================
   GENERAL KNOWLEDGE QUESTION POOL
   ========================================================================== */

// Initialize global pool
window.QuizQuestionPool = window.QuizQuestionPool || {};

const gkQuestions = [
  // EASY QUESTIONS
  {
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    correctAnswer: "Pacific Ocean",
    category: "General Knowledge",
    difficulty: "easy"
  },
  {
    question: "What is the capital city of France?",
    options: ["Rome", "Madrid", "Berlin", "Paris"],
    correctAnswer: "Paris",
    category: "General Knowledge",
    difficulty: "easy"
  },
  {
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7",
    category: "General Knowledge",
    difficulty: "easy"
  },
  {
    question: "Which country is home to the Kangaroo?",
    options: ["South Africa", "Australia", "Brazil", "India"],
    correctAnswer: "Australia",
    category: "General Knowledge",
    difficulty: "easy"
  },
  {
    question: "What is the primary currency used in Japan?",
    options: ["Yuan", "Won", "Yen", "Dollar"],
    correctAnswer: "Yen",
    category: "General Knowledge",
    difficulty: "easy"
  },
  {
    question: "Which color is NOT in the natural rainbow?",
    options: ["Violet", "Brown", "Indigo", "Green"],
    correctAnswer: "Brown",
    category: "General Knowledge",
    difficulty: "easy"
  },
  {
    question: "What is the tallest living mammal on Earth?",
    options: ["Elephant", "Giraffe", "Hippopotamus", "Blue Whale"],
    correctAnswer: "Giraffe",
    category: "General Knowledge",
    difficulty: "easy"
  },

  // MEDIUM QUESTIONS
  {
    question: "Which country gifted the Statue of Liberty to the United States?",
    options: ["United Kingdom", "France", "Germany", "Italy"],
    correctAnswer: "France",
    category: "General Knowledge",
    difficulty: "medium"
  },
  {
    question: "What is the smallest country in the world by land area?",
    options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
    correctAnswer: "Vatican City",
    category: "General Knowledge",
    difficulty: "medium"
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1905", "1912", "1918", "1923"],
    correctAnswer: "1912",
    category: "General Knowledge",
    difficulty: "medium"
  },
  {
    question: "What is considered the longest river in the world?",
    options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
    correctAnswer: "Nile River",
    category: "General Knowledge",
    difficulty: "medium"
  },
  {
    question: "Which famous renaissance artist painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    correctAnswer: "Leonardo da Vinci",
    category: "General Knowledge",
    difficulty: "medium"
  },
  {
    question: "What is the official national language of Brazil?",
    options: ["Spanish", "Portuguese", "French", "English"],
    correctAnswer: "Portuguese",
    category: "General Knowledge",
    difficulty: "medium"
  },
  {
    question: "Which city hosted the first modern Olympic Games in 1896?",
    options: ["Paris", "London", "Athens", "Rome"],
    correctAnswer: "Athens",
    category: "General Knowledge",
    difficulty: "medium"
  },

  // HARD QUESTIONS
  {
    question: "What is the official capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: "Canberra",
    category: "General Knowledge",
    difficulty: "hard"
  },
  {
    question: "Which ancient world wonder was located in Alexandria, Egypt?",
    options: ["Hanging Gardens", "Lighthouse (Pharos)", "Colossus", "Statue of Zeus"],
    correctAnswer: "Lighthouse (Pharos)",
    category: "General Knowledge",
    difficulty: "hard"
  },
  {
    question: "What is the largest island in the world by land mass?",
    options: ["Madagascar", "Borneo", "Greenland", "New Guinea"],
    correctAnswer: "Greenland",
    category: "General Knowledge",
    difficulty: "hard"
  },
  {
    question: "Which African nation was historically known as Abyssinia?",
    options: ["Ethiopia", "Ghana", "Kenya", "Zimbabwe"],
    correctAnswer: "Ethiopia",
    category: "General Knowledge",
    difficulty: "hard"
  },
  {
    question: "How many official time zones span across Russia?",
    options: ["7", "9", "11", "13"],
    correctAnswer: "11",
    category: "General Knowledge",
    difficulty: "hard"
  },
  {
    question: "What is the national currency of South Africa?",
    options: ["Shilling", "Rand", "Pula", "Kwacha"],
    correctAnswer: "Rand",
    category: "General Knowledge",
    difficulty: "hard"
  }
];

// Register under category name and general key
window.QuizQuestionPool["gk"] = gkQuestions;
window.QuizQuestionPool["General Knowledge"] = gkQuestions;