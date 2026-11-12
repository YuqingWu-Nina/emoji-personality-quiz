// TEAM NOTE: Add future questions inside this array. Each answer gives one point
// to an emoji. This quiz has no wrong answers — the highest score decides the result.
const questions = [
  {
    "prompt": "You step into an unfamiliar cafe. Which detail catches your eye first?",
    "icon": "☕",
    "choices": [
      {
        "text": "A table covered in handwritten notes",
        "emoji": "🌞"
      },
      {
        "text": "A shelf of cups with tiny labels",
        "emoji": "🌱"
      },
      {
        "text": "A drink with an unfamiliar name",
        "emoji": "🔥"
      },
      {
        "text": "A window seat overlooking the street",
        "emoji": "🌊"
      }
    ]
  },
  {
    "prompt": "There is one photo left on a disposable camera. What do you use it for?",
    "icon": "📷",
    "choices": [
      {
        "text": "A doorway you cannot quite see beyond",
        "emoji": "🔥"
      },
      {
        "text": "Light falling across the floor",
        "emoji": "🌊"
      },
      {
        "text": "Everyone squeezing into the frame",
        "emoji": "🌞"
      },
      {
        "text": "A detail you almost walked past",
        "emoji": "🌱"
      }
    ]
  },
  {
    "prompt": "You find a secondhand book with something tucked inside. What would you hope it is?",
    "icon": "📖",
    "choices": [
      {
        "text": "A pressed leaf with a date beside it",
        "emoji": "🌱"
      },
      {
        "text": "A ticket to a place you have never heard of",
        "emoji": "🔥"
      },
      {
        "text": "A note meant for the next reader",
        "emoji": "🌞"
      },
      {
        "text": "A faded photograph of the sea",
        "emoji": "🌊"
      }
    ]
  },
  {
    "prompt": "Your train is twenty minutes late. What fills the extra time?",
    "icon": "🚉",
    "choices": [
      {
        "text": "Watching the platforms fill and empty",
        "emoji": "🌊"
      },
      {
        "text": "Looking up the town on the departure board",
        "emoji": "🌱"
      },
      {
        "text": "Picking a snack for your travel companion",
        "emoji": "🌞"
      },
      {
        "text": "Exploring the shops at the far end of the station",
        "emoji": "🔥"
      }
    ]
  },
  {
    "prompt": "A friend hands you a blank postcard. Which picture would you put on the front?",
    "icon": "💌",
    "choices": [
      {
        "text": "A long table with a few chairs still waiting",
        "emoji": "🌞"
      },
      {
        "text": "A staircase disappearing around a corner",
        "emoji": "🔥"
      },
      {
        "text": "Curtains moving beside an open window",
        "emoji": "🌊"
      },
      {
        "text": "A tiny garden growing in an old teacup",
        "emoji": "🌱"
      }
    ]
  },
  {
    "prompt": "You can bring home one small souvenir from a trip. Which one do you choose?",
    "icon": "🧳",
    "choices": [
      {
        "text": "A smooth stone from a favorite path",
        "emoji": "🌊"
      },
      {
        "text": "A local game to bring out after dinner",
        "emoji": "🌞"
      },
      {
        "text": "A map with a route to try next time",
        "emoji": "🔥"
      },
      {
        "text": "A print showing how an old building was made",
        "emoji": "🌱"
      }
    ]
  },
  {
    "prompt": "A film never explains what was inside a locked room. What stays with you?",
    "icon": "🎬",
    "choices": [
      {
        "text": "An object that appeared in two earlier scenes",
        "emoji": "🌱"
      },
      {
        "text": "The rain in the final shot",
        "emoji": "🌊"
      },
      {
        "text": "A possible way back into the room",
        "emoji": "🔥"
      },
      {
        "text": "A conversation the characters never finished",
        "emoji": "🌞"
      }
    ]
  },
  {
    "prompt": "You are filling a box to open a year from now. What goes in first?",
    "icon": "📦",
    "choices": [
      {
        "text": "A list of places you have yet to visit",
        "emoji": "🔥"
      },
      {
        "text": "A receipt from an ordinary afternoon you liked",
        "emoji": "🌊"
      },
      {
        "text": "A page from a project still taking shape",
        "emoji": "🌱"
      },
      {
        "text": "A note about a conversation you want to remember",
        "emoji": "🌞"
      }
    ]
  },
  {
    "prompt": "At a night market, you have time for one last stop. Which stall draws you in?",
    "icon": "🏮",
    "choices": [
      {
        "text": "A booth printing portraits of pairs and groups",
        "emoji": "🌞"
      },
      {
        "text": "Someone repairing old music boxes",
        "emoji": "🌱"
      },
      {
        "text": "A tea stand beside the river",
        "emoji": "🌊"
      },
      {
        "text": "A food cart with a menu you cannot quite translate",
        "emoji": "🔥"
      }
    ]
  },
  {
    "prompt": "Choose the opening scene for a short story. Where does it begin?",
    "icon": "✍️",
    "choices": [
      {
        "text": "An envelope arrives with one detail out of place",
        "emoji": "🌱"
      },
      {
        "text": "Someone steps off a bus one stop too early",
        "emoji": "🔥"
      },
      {
        "text": "Two people reach for the same forgotten umbrella",
        "emoji": "🌞"
      },
      {
        "text": "A familiar street just after the rain stops",
        "emoji": "🌊"
      }
    ]
  }
];

const emojiResults = {
  "🌞": {
    title: "The Sun Emoji",
    description: "You bring warmth, optimism, and an easy sense of fun wherever you go.",
    detail: "Your energy helps people feel welcome."
  },
  "🌱": {
    title: "The Sprout Emoji",
    description: "You are thoughtful, curious, and happiest when you have room to grow at your own pace.",
    detail: "Your quiet ideas can become something wonderful."
  },
  "🔥": {
    title: "The Fire Emoji",
    description: "You are bold, action-oriented, and ready to turn an ordinary moment into an adventure.",
    detail: "Your courage helps new things begin."
  },
  "🌊": {
    title: "The Wave Emoji",
    description: "You are flexible, calm, and good at finding a smooth path through changing situations.",
    detail: "Your peaceful energy helps others breathe easier."
  }
};

const welcomeScreen = document.querySelector("#welcome-screen");
const questionScreen = document.querySelector("#question-screen");
const resultScreen = document.querySelector("#result-screen");
const startButton = document.querySelector("#start-button");
const nextButton = document.querySelector("#next-button");
const restartButton = document.querySelector("#restart-button");
const questionText = document.querySelector("#question-text");
const questionEmoji = document.querySelector("#question-emoji");
const choicesContainer = document.querySelector("#choices");
const progressText = document.querySelector("#progress-text");
const progressBar = document.querySelector("#progress-bar");
const feedback = document.querySelector("#feedback");

let currentQuestion = 0;
let selectedEmoji = null;
let scores = {};

function resetQuiz() {
  currentQuestion = 0;
  selectedEmoji = null;
  scores = { "🌞": 0, "🌱": 0, "🔥": 0, "🌊": 0 };
}

function startQuiz() {
  resetQuiz();
  welcomeScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  questionScreen.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const current = questions[currentQuestion];
  selectedEmoji = null;
  nextButton.disabled = true;
  feedback.textContent = "";
  questionText.textContent = current.prompt;
  questionEmoji.textContent = current.icon;
  progressText.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  nextButton.innerHTML = currentQuestion === questions.length - 1
    ? 'See my emoji <span aria-hidden="true">→</span>'
    : 'Next question <span aria-hidden="true">→</span>';

  choicesContainer.innerHTML = "";
  current.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.dataset.emoji = choice.emoji;
    button.dataset.index = index;
    button.setAttribute("aria-pressed", "false");
    button.innerHTML = `<span class="choice__number">${index + 1}</span><span class="choice__text">${choice.text}</span>`;
    choicesContainer.appendChild(button);
  });
}

function chooseAnswer(button) {
  document.querySelectorAll(".choice").forEach((choice) => {
    choice.classList.remove("selected");
    choice.setAttribute("aria-pressed", "false");
  });

  button.classList.add("selected");
  button.setAttribute("aria-pressed", "true");
  selectedEmoji = button.dataset.emoji;
  nextButton.disabled = false;
  feedback.textContent = "Answer saved. You can still change your choice.";
}

function goToNextQuestion() {
  if (!selectedEmoji) {
    feedback.textContent = "Choose an answer first! 😊";
    return;
  }

  scores[selectedEmoji] += 1;
  currentQuestion += 1;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  // In a tie, the first emoji in this order becomes the result.
  const resultEmoji = Object.keys(scores).reduce((leader, emoji) =>
    scores[emoji] > scores[leader] ? emoji : leader
  );
  const result = emojiResults[resultEmoji];

  document.querySelector("#result-emoji").textContent = resultEmoji;
  document.querySelector("#result-title").textContent = result.title;
  document.querySelector("#result-description").textContent = result.description;
  document.querySelector("#result-detail").textContent = result.detail;
  questionScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
}

// Event listeners: start, choice click, next, restart, and keyboard answers.
startButton.addEventListener("click", startQuiz);
choicesContainer.addEventListener("click", (event) => {
  const choice = event.target.closest(".choice");
  if (choice) chooseAnswer(choice);
});
nextButton.addEventListener("click", goToNextQuestion);
restartButton.addEventListener("click", startQuiz);
document.addEventListener("keydown", (event) => {
  if (questionScreen.classList.contains("hidden")) return;
  const choiceNumber = Number(event.key);
  if (choiceNumber >= 1 && choiceNumber <= 4) {
    const choice = document.querySelector(`.choice[data-index="${choiceNumber - 1}"]`);
    if (choice) chooseAnswer(choice);
  }
});
