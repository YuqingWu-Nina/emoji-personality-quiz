# Which Emoji Are You? ✨

A small group-built personality quiz for an HTML, CSS, JavaScript, and GitHub collaboration activity.

## Run it

Open `index.html` with Live Server, or open it directly in a browser.

## How teammates can add a question

Open `script.js` and add one object inside the `questions` array. Keep all four emoji choices so results remain balanced:

```js
{
  prompt: "Your question here",
  icon: "✨",
  choices: [
    { text: "A Sun answer", emoji: "🌞" },
    { text: "A Sprout answer", emoji: "🌱" },
    { text: "A Fire answer", emoji: "🔥" },
    { text: "A Wave answer", emoji: "🌊" }
  ]
}
```

## JavaScript concepts included

- An array of question objects
- Functions for showing questions, choosing answers, changing screens, and showing results
- A `forEach` loop to create answer buttons
- `if` statements to make sure an answer has been selected and to move through the quiz
- Five event listeners: start, answer click, next, restart, and keyboard selection
- User feedback after an answer is selected, plus a final emoji result
