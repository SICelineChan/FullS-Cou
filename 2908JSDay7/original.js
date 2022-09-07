let prompt = require("prompt-sync")();

function isInString(str, ch) {
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === ch.toLowerCase()) {
      return true;
    }
  }
  return false;
}

function replaceInBoard(board, word, guess) {
  for (let i = 0; i < word.length; i++) {
    let element = word[i];
    if (element.toLowerCase() === guess.toLowerCase()) {
      board[i] = element;
    }
  }
  return board;
}

function checkIfSolved(board) {
  for (let i = 0; i < board.length; i++) {
    // so go through each index of the board
    let ele = board[i];
    if (ele === "_") {
      // if the board is still  "_", that means incorrect character
      return false;
    }
  }
  return true;
}
function checkIfDead(misses) {
  //it does not need to have extra line and can just return the boolean
  return misses.length >= 6;
}
let word = ["longest", "random", "goofy", "Kingdom", "Like"];
word = math.floor(math.random() * word.length);
//let word = "monkey";
let solved = false;
let dead = false;
let misses = [];
let board = [];
for (let i = 0; i < word.length; i++) {
  board[i] = "_";
}
console.log(board.join(" "));

while (!solved && !dead) {
  let guess = prompt("What is your guessed character? ");
  if (isInString(word, guess)) {
    board = replaceInBoard(board, word, guess);
  } else {
    misses.push(guess);
  }
  solved = checkIfSolved(board);
  dead = checkIfDead(misses);
  console.log("Misses so far: ", misses);
  console.log(board.join(" "));
}
if (solved) {
  console.log("You have made it!");
} else {
  console.log("You are dead!");
}
