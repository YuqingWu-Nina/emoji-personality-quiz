// TEAM NOTE: Add future questions inside this array. Each answer gives one point
// to an emoji. This quiz has no wrong answers — the highest score decides the result.
const questions = [
  {
    prompt: "You have a completely free Saturday. What sounds best?",
    icon: "☀️",
    choices: [
      { text: "Invite people out for a fun plan", emoji: "🌞" },
      { text: "Make something or learn a new skill", emoji: "🌱" },
      { text: "Try an exciting place or activity", emoji: "🔥" },
      { text: "Relax and see where the day takes me", emoji: "🌊" }
    ]
  },
  {
    prompt: "A small problem appears in a group project. You usually...",
    icon: "💡",
    choices: [
      { text: "Encourage everyone and keep the mood positive", emoji: "🌞" },
      { text: "Research it carefully before suggesting a fix", emoji: "🌱" },
      { text: "Volunteer to handle it right away", emoji: "🔥" },
      { text: "Listen to the group and help everyone adjust", emoji: "🌊" }
    ]
  },
  {
    prompt: "Which message would make you happiest to receive?",
    icon: "💌",
    choices: [
      { text: "“Come celebrate with us!”", emoji: "🌞" },
      { text: "“I found a workshop you might love.”", emoji: "🌱" },
      { text: "“Want to try something totally new?”", emoji: "🔥" },
      { text: "“No pressure — let's just hang out.”", emoji: "🌊" }
    ]
  },
  {
    prompt: "Your ideal creative space feels...",
    icon: "🎨",
    choices: [
      { text: "Bright, lively, and full of people", emoji: "🌞" },
      { text: "Quiet, cozy, and full of ideas", emoji: "🌱" },
      { text: "Bold, energetic, and a little chaotic", emoji: "🔥" },
      { text: "Open, calm, and easy to change", emoji: "🌊" }
    ]
  },
  {
    prompt: "When plans suddenly change, you tend to...",
    icon: "🗺️",
    choices: [
      { text: "Find a new way to make it fun", emoji: "🌞" },
      { text: "Pause and make a thoughtful new plan", emoji: "🌱" },
      { text: "Jump into the new challenge", emoji: "🔥" },
      { text: "Go with the flow", emoji: "🌊" }
    ]
  },
  {
    prompt: "Pick a tiny superpower for today.",
    icon: "✨",
    choices: [
      { text: "Make everyone nearby smile", emoji: "🌞" },
      { text: "Understand any new idea instantly", emoji: "🌱" },
      { text: "Have unlimited confidence", emoji: "🔥" },
      { text: "Stay calm in every situation", emoji: "🌊" }
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
    button.innerHTML = `<span class="choice__number">${index + 1}</span><span class="choice__emoji" aria-hidden="true">${choice.emoji}</span><span class="choice__text">${choice.text}</span>`;
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
  feedback.textContent = `Nice choice — ${selectedEmoji} is getting a point!`;
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
