//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
    {
        id: "0",
        question: "What is the scientific name for the Giant Panda?",
        options: ["Ursus maritimus", "Ursus arctos horribilis", "Ailuropoda melanoleuca", "Helarctos malayanus"],
        correct: "Ailuropoda melanoleuca",
      },
      {
        id: "1",
        question: "In which country are Giant Pandas primarily found in the wild?",
        options: ["China", "India", "Russia", "Japan"],
        correct: "China",
      },
      {
        id: "2",
        question: "What is the primary diet of Giant Pandas?",
        options: ["Meat", "Bamboo", "Fish", "Fruits"],
        correct: "Bamboo",
      },
      {
        id: "3",
        question: "Giant Pandas have a unique adaptation in their wrist bones that allows them to easily grasp bamboo. What is this adaptation called?",
        options: ["Rotating joint", "Thumb opposability", "Extra fingers", "Bamboo grip"],
        correct: "Thumb opposability",
      },
      {
        id: "4",
        question: "What is the typical coloration of a Giant Panda?",
        options: ["Black and white", "Brown", "Red", "Gray"],
        correct: "Black and white",
      },
      {
        id: "5",
        question: "What percentage of a Giant Panda's diet consists of bamboo?",
        options: ["50%", "75%", "90%", "100%"],
        correct: "90%",
      },
      {
        id: "6",
        question: "Giant Pandas are members of the bear family, but they share similarities with which other family?",
        options: ["Cat family", "Dog family", "Raccoon family", "Elephant family"],
        correct: "Raccoon family",
      },
      {
        id: "7",
        question: "What is the conservation status of Giant Pandas?",
        options: ["Endangered", "Critically endangered", "Vulnerable", "Least concern"],
        correct: "Vulnerable",
      },
      {
        id: "8",
        question: "What is the main threat to Giant Panda populations?",
        options: ["Habitat loss", "Climate change", "Poaching", "Disease"],
        correct: "Habitat loss",
      },
      {
        id: "9",
        question: "Giant Pandas are known for their gentle temperament. What is the term used to describe this behavior?",
        options: ["Aggressive", "Fierce", "Docile", "Energetic"],
        correct: "Docile",
      },
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};