// Shuffle function to shuffle the answers array
function shuffle(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const questionJSON = [
  {
    correctAnswer: 'Three',
    answers: ['Two', 'Three ', 'Four', 'Five'],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'Cucumber',
    answers: ['Tomato', 'Cucumber', 'Potato', 'Carrot'],
    question: 'Which one of these is technically a fruit?',
  },
  {
    correctAnswer: 'France',
    answers: ['Italy', 'Spain', 'Germany', 'France'],
    question: 'Which country is famous for the Eiffel Tower?',
  },
  {
    correctAnswer: 'Mercury',
    answers: ['Venus', 'Earth', 'Mars', 'Mercury'],
    question: 'Which planet is closest to the sun?',
  },
  {
    correctAnswer: '7',
    answers: ['5', '6', '7', '8'],
    question: 'How many continents are there in the world?',
  },
  {
    correctAnswer: 'Elephant',
    answers: ['Lion', 'Elephant', 'Giraffe', 'Zebra'],
    question: 'Which one is the largest land animal?',
  },
  {
    correctAnswer: 'Beethoven',
    answers: ['Mozart', 'Beethoven', 'Bach', 'Chopin'],
    question: 'Who composed the Ninth Symphony?',
  },
  {
    correctAnswer: 'Python',
    answers: ['C++', 'Java', 'Python', 'JavaScript'],
    question: 'Which one of these is a programming language?',
  },
  {
    correctAnswer: 'Pacific Ocean',
    answers: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    question: 'Which ocean is the largest?',
  },
  {
    correctAnswer: 'Mount Everest',
    answers: ['K2', 'Kangchenjunga', 'Mount Kilimanjaro', 'Mount Everest'],
    question: 'Which is the tallest mountain in the world?',
  }
];

let questionEl = document.getElementById('question');
let optionsEl = document.getElementById('options');
let scoreEl = document.getElementById('score');
let nextEl = document.getElementById('next');
let btnEl = document.getElementById('btn')



// Initialize variables
let currentQuestion = 0;
let score = 0;

nextEl.addEventListener('click', () => {
  console.log('hii');
  currentQuestion += 1
  questionEl.textContent = "";
  optionsEl.textContent = '';
  showQuestion()
  if (currentQuestion === questionJSON.length - 1) {
    btnEl.removeChild(nextEl);
  }
})

// Function to display a question
function showQuestion() {
  // Retrieve question details from the questionJSON array
  const { correctAnswer, answers, question } = questionJSON[currentQuestion];


  scoreEl.textContent = `Score : ${score} / ${questionJSON.length}`;

  // Display the question
  questionEl.textContent = question;

  // Shuffle the answers
  const shuffledAnswers = shuffle(answers);

  // Loop through the shuffled answers
  shuffledAnswers.forEach((opt) => {
    // Create a button for each answer
    const btn = document.createElement('button');
    btn.innerText = opt;
    optionsEl.appendChild(btn);

    // Event handling on the buttons.
    btn.addEventListener('click', () => {
      // Check if the selected answer is correct
      if (opt.trim() == correctAnswer.trim()) {
        score += 1; // Increase score if correct
      } else {
        score -= 0.25; // Decrease score if incorrect
      }

      // Check if it's the last question
      if (currentQuestion === questionJSON.length - 1) {
        // Display final score if last question
        scoreEl.textContent = `Score : ${score}`;
        questionEl.textContent = `Quiz Completed`;
        optionsEl.textContent = '';
        btnEl.removeChild(nextEl);
        return;
      }

      // Clear question and options for next question
      questionEl.textContent = "";
      optionsEl.textContent = '';

      // Update and display the score
      scoreEl.textContent = `Score : ${score} / ${questionJSON.length}`;

      // Move to the next question
      currentQuestion++;
      showQuestion();
    });
  });
}

// Start showing the first question
showQuestion();