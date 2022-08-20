let prompt = require("prompt-sync")();
//A prompt that ask the user how much that they need to withdraw

let FixedBalance = 20;
let UserAmount = prompt(
  "Please enter the amount that you would like to withdraw?"
);
let AskedMoney = FixedBalance - UserAmount;
console.log(
  "You have only have $" +
    FixedBalance +
    " and with this withdraw you will have this amount left " +
    AskedMoney +
    " !" +
    "Sorry you don't have enough money in your account! "
);
// Use if else to rewrite the above in a shorter version
//if (UserAmount > FixedBalance) { console.log("You only have " + "$" + FixedBalance)} if (AskedMoney < UserAmount) { co

//Output should be 3,6,9
let multiplier = 3;
let counter = 0;
while (counter <= 20) {
  counter = counter + 1;
  //counter += 1;
  console.log(multiplier * counter);
}
//Rewrite the ATM simulation so that you can withdraw money over and over again until there is not enough money (and it will quit
