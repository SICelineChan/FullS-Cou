let prompt = require("prompt-sync")();
let word = "hello";
let solved = false;
let misses = [];
let board = [];

for (let i = 0; i < word.length; i++) {
  if (word[i] === guess) console.log(word[i]);
}
