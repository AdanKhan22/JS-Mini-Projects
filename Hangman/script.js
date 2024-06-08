// Get the container where buttons will be added
const buttonsContainer = document.querySelector(".letter-buttons");
const wordDisplay = document.querySelector(".word-display");

let words = ["apple", "mango", "orange", "banana"];
let currentWord = "";
let originalWord = "";

// Loop through ASCII codes for 'A' to 'Z' (65 to 90)
for (let i = 65; i <= 90; i++) {
  // Create a button element
  const button = document.createElement("button");

  // Set the inner text of the button to the corresponding letter
  button.innerText = String.fromCharCode(i);

  // Append the button to the container
  buttonsContainer.appendChild(button);

  // Add click event listener to each button
  button.addEventListener("click", () => {
    clicked(button.textContent);
  });
}

generateWord();

function clicked(letter) {
  let updatedWord = currentWord.split(""); // Convert currentWord to an array of characters
  for (let i = 0; i < updatedWord.length; i++) {
    if (updatedWord[i] === "_") {
      updatedWord[i] = letter;
      break; // Stop after replacing the first underscore
    }
  }

  currentWord = updatedWord.join(""); // Convert array back to string
  wordDisplay.textContent = currentWord; // Update the displayed word

  // Check if the word is fully guessed
  if (!currentWord.includes("_")) {
    checkWord();
  }
}

function generateWord() {
  let number = Math.floor(Math.random() * words.length);
  originalWord = words[number];
  Randomizer(originalWord);
}

function Randomizer(word) {
  let tempWord = word.split(""); // Convert word to array to manipulate characters

  let positions = [];
  while (positions.length < 3) {
    let pos = Math.floor(Math.random() * tempWord.length);
    if (!positions.includes(pos)) {
      positions.push(pos);
    }
  }

  positions.forEach(pos => {
    tempWord[pos] = "_";
  });

  currentWord = tempWord.join(""); // Convert array back to string for currentWord
  wordDisplay.textContent = currentWord; // Update the displayed word
}

function checkWord() {
  if (originalWord === currentWord) {
    gameWon();
  } else {
    gameLost();
  }
}

function gameWon() {
  alert("Congratulations! You guessed the word correctly.");
  resetGame();
}

function gameLost() {
  alert("Game over! You did not guess the word.");
  resetGame();
}

function resetGame() {
  currentWord = "";
  originalWord = "";
  generateWord();
}
