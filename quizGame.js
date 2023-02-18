$(document).ready(function() {
  // Quiz data
  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["London", "Paris", "Berlin", "Madrid"],
      correctAnswer: 1
    },
    {
      question: "What is the highest mountain in the world?",
      choices: ["Mount Everest", "K2", "Kilimanjaro", "Mount McKinley"],
      correctAnswer: 0
    },
    {
      question: "What is the smallest country in the world?",
      choices: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
      correctAnswer: 0
    },
    {
      question: "What is the largest mammal in the world?",
      choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: 1
    },
    {
      question: "What is the currency of Japan?",
      choices: ["Yuan", "Yen", "Won", "Rupee"],
      correctAnswer: 1
    }
  ];

  // Quiz state
  let currentQuestionIndex = 0;
  let score = 0;

  // DOM elements
  const $questionContainer = $("#question-container");
  const $answerContainer = $("#answer-container");
  const $score = $("#score");
  const $nextBtn = $("#next-btn");

  // Function to set up the current question
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    $questionContainer.text(currentQuestion.question);
    $answerContainer.empty();
    currentQuestion.choices.forEach((choice, index) => {
      const $btn = $("<button>")
        .addClass("answer-btn")
        .text(choice)
        .on("click", function() {
          if (index === currentQuestion.correctAnswer) {
            $(this).css("background-color", "green");
            score++;
          } else {
            $(this).css("background-color", "red");
          }
          $answerContainer.find(".answer-btn").off();
          $nextBtn.show();
        });
      $answerContainer.append($btn);
    });
  }

  // Function to reset the quiz state
  function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    $score.text(score);
    $nextBtn.hide();
    loadQuestion();
  }

  // Function to handle the "next" button
  function handleNext() {
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
      alert("Quiz is over! You scored " + score + " points.");
      resetQuiz();
    } else {
      loadQuestion();
    }
  }

  // Set up event listeners
  $nextBtn.on("click", handleNext);

  // Start the quiz
  resetQuiz();
});
