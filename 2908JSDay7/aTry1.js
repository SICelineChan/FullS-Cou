let prompt = require("prompt-sync")();
let word = "hello";
//let solved = false;
let correct = [];
let misses = [];
let board = [];
// while (!solved) {}
for (let z = 0; z < 4; z++) {
  let guess = prompt("enter a character ");
  for (let i = 0; i < word.length; i++) {
    if (word[i] === guess) {
      console.log(guess + " is correct.");
      //function replaceInBoard (board,guess)
      // correct[correct.length] = guess
      // what are we comparing below!?
      if ((correct[correct.length] = guess)) {
        console.log(correct + "  are the char used");
        console.log(correct.length + " character is correct");
      }
    } else {
      board[i] = "_";
    }
  }
  //solved = checkIfSolved(board);
  console.log(board.join(" "));
}

/*for (let i = 0; i < word.length; i++) {
  board[i] = "_";
}
console.log(board.join(" "));
/*function isInString(str, ch) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      return true;
    }
  }
  return false;
}*/

/*function replaceInBoard(board, guess) {
  
  return board;
}

function checkIfSolved(board) {
  return; // [...]
}*/
