let prompt = require("prompt-sync")();

/*function hangman(originalWord, guesses) {
  let output = "";

  for (let i = 0; i < originalWord.length; i++) {
    const element = originalWord[i];
    let notFound = true;
    for (let j = 0; j < guesses.length; j++) {
      if (element.toLowerCase() === guesses[j].toLowerCase()) {
        output += guesses[j];
        notFound = false;
      }
    }
    if (notFound) {
      output += "_";
    }
  }
  return output;
}*/

let hello = prompt("enter something ");

function hangman(originalWord, guess) {
  for (let i = 0; i < originalWord.length; i++) {
    const element = originalWord[i];
    if (element.toLowerCase() === guess.toLowerCase()) {
      return true;
    }
  }
  return false;
}

let word = "monkey";
let solved = false;
let board = [];
for (let i = 0; i < word.length; i++) {
  board[i] = "_";
}
console.log(board.join(" "));

/*while (!solved) {
  let guess = prompt("What is your guessed character?");
  if (hangman(word, guess)) {
    board = replace(board, guess);
  }
}*/
