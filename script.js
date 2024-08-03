// let currentQuestion = 0;
// let score = 0;

// const questionCounter = document.getElementById("question-counter");
// const scoreCounter = document.getElementById("score");
// const questionText = document.getElementById("question-text");
// const options = document.querySelectorAll(".option");
// const nextButton = document.getElementById("next-button");
// const scoreboard = document.querySelector(".scoreboard");
// const finalScore = document.getElementById("final-score");
// const restartButton = document.getElementById("restart-button");
// // Get the "Start Quiz" button and quiz container elements
// const startQuizButton = document.getElementById("start-quiz-button");
// const quizContainer = document.querySelector(".quiz-container");

// // Add an event listener to start the quiz when the button is clicked
// startQuizButton.addEventListener("click", () => {
//   // Hide the start button container
//   startQuizButton.parentElement.style.display = "none";
//   // Show the quiz container
//   quizContainer.style.display = "block";
//   // Start the quiz
//   loadQuestion();
// });

// // Initialize event listeners
// options.forEach((option, index) => {
//   option.addEventListener("click", () => handleOptionClick(index));
// });

// function loadQuestion() {
//   if (currentQuestion < questions.length) {
//     questionCounter.textContent = `Question ${currentQuestion + 1}/${
//       questions.length
//     }`;
//     questionText.textContent = questions[currentQuestion].question;

//     options.forEach((option, index) => {
//       option.textContent = questions[currentQuestion].options[index];
//       option.style.backgroundColor = "white"; // Reset option background color
//       option.style.pointerEvents = "auto"; // Re-enable click events
//     });
//   } else {
//     showScoreboard();
//   }
// }

// function handleOptionClick(selectedOptionIndex) {
//   const correctAnswerIndex = questions[currentQuestion].correctAnswer;

//   // Remove event listeners from all options to prevent multiple clicks
//   options.forEach((option) => {
//     option.style.pointerEvents = "none";
//   });

//   if (selectedOptionIndex === correctAnswerIndex) {
//     options[selectedOptionIndex].style.backgroundColor = "green";
//     score++;
//     scoreCounter.textContent = `Score: ${score}`;
//   } else {
//     options[selectedOptionIndex].style.backgroundColor = "red";
//     options[correctAnswerIndex].style.backgroundColor = "green";
//   }

//   nextButton.disabled = false;
// }

// function showScoreboard() {
//   scoreboard.style.display = "block";
//   finalScore.textContent = score;
// }

// nextButton.addEventListener("click", () => {
//   currentQuestion++;
//   nextButton.disabled = true;
//   loadQuestion();
// });

// restartButton.addEventListener("click", () => {
//   currentQuestion = 0;
//   score = 0;
//   scoreboard.style.display = "none";
//   loadQuestion();
//   scoreCounter.textContent = "Score: 0";
// });

// // Initialize the quiz
// loadQuestion();

// Define your questions and answers here
const questions = [
  {
    question: "What is my full name?",
    options: ["Aditya Raj", "Aditya Patel", "Aditya Raj Patel", "None"],
    correctAnswer: 2, // Index of the correct option
  },
  {
    question: "What is Aditya's field of study?",
    options: ["Data Science Engineering", "Mechanical Engineering", "Business Administration", "Ancient Alien Theory"],
    correctAnswer: 0,
  },
  {
    question: "What position does Aditya hold in his university's club?",
    options: ["Treasurer of Goonj","President of The Data Alchemists", "President of Goonj", "All the Above"],
    correctAnswer: 1,
  },
  {
    question: "Which training program did Aditya participate in related to AI?",
    options: ["Google AI Residency", "Facebook AI Research Internship", "Amazon Machine Learning Summer School", "IBM Quantum Computing Workshop"],
    correctAnswer: 2,
  },
  {
    question: "What is Aditya's primary email ID for professional and academic correspondence?",
    options: ["adityaraj006005@gmail.com", "aditya.techwizard@mit.edu", "contact@adityaraj.dev", "aditya123@outlook.com"],
    correctAnswer: 0,
  },
  {
    question: "Which city is Aditya's hometown?",
    options: ["Delhi", "Patna", "Siwan", "Muzaffarpur"],
    correctAnswer: 3,
  },
  {
    question: "Which food does Aditya not like?",
    options: ["Curd", "Pizza", "Noddles", "Pasta"],
    correctAnswer: 0,
  },
  {
    question: "What is Aditya's favorite hobby?",
    options: ["Painting", "Hiking", "Playing cricket", "Reading novels"],
    correctAnswer: 2,
  },
  {
    question: "What is Aditya's favorite movie?",
    options: ["Inception", "Bahubali", "The Godfather", "Forrest Gump"],
    correctAnswer: 1,
  },
  {
    question: "In which city does Aditya's university, Manipal Institute of Technology, located?",
    options: ["Bangalore", "Udupi", "Goa", "New York"],
    correctAnswer: 1,
  },
  
];
let currentQuestion = 0;
let score = 0;

const questionCounter = document.getElementById("question-counter");
const scoreCounter = document.getElementById("score");
const questionText = document.getElementById("question-text");
const options = document.querySelectorAll(".option");
const nextButton = document.getElementById("next-button");
const scoreboard = document.querySelector(".scoreboard");
const finalScore = document.getElementById("final-score");
const restartButton = document.getElementById("restart-button");
const startQuizButton = document.getElementById("start-quiz-button");
const quizContainer = document.querySelector(".quiz-container");

startQuizButton.addEventListener("click", () => {
  startQuizButton.parentElement.style.display = "none";
  quizContainer.style.display = "block";
  loadQuestion();
});

function loadQuestion() {
  if (currentQuestion < questions.length) {
    questionCounter.textContent = `Question ${currentQuestion + 1}/${questions.length}`;
    questionText.textContent = questions[currentQuestion].question;
    options.forEach((option, index) => {
      option.textContent = questions[currentQuestion].options[index];
      option.style.backgroundColor = "white";
      option.style.pointerEvents = "auto";
      option.onclick = function() {
        handleOptionClick(index);
      };
    });
    nextButton.disabled = true;
  } else {
    showScoreboard();
  }
}

function handleOptionClick(selectedOptionIndex) {
  const correctAnswerIndex = questions[currentQuestion].correctAnswer;
  options.forEach((option) => {
    option.style.pointerEvents = "none";
  });
  if (selectedOptionIndex === correctAnswerIndex) {
    options[selectedOptionIndex].style.backgroundColor = "green";
    score++;
  } else {
    options[selectedOptionIndex].style.backgroundColor = "red";
    options[correctAnswerIndex].style.backgroundColor = "green";
  }
  scoreCounter.textContent = `Score: ${score}`;
  nextButton.disabled = false;
}

function showScoreboard() {
  quizContainer.style.display = "none";
  scoreboard.style.display = "block";
  finalScore.textContent = score;
}

nextButton.addEventListener("click", () => {
  currentQuestion++;
  loadQuestion();
});

restartButton.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  quizContainer.style.display = "block";
  scoreboard.style.display = "none";
  loadQuestion();
  scoreCounter.textContent = "Score: 0";
});

