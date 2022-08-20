let w = "withdraw";
w = w.toUpperCase();
let d = "deposit";
d = d.toUpperCase();

var userKonto = 50; 

let firstReq = prompt("Press W to WITHDRAW or D to DEPOSIT.");
if (firstReq === "w") {
  let howMuch = prompt("How much to withdraw?");
    if (howMuch % 10 !== 0) {
    console.log("Only enter number in x10 is given.");
  } else if (userKonto > howMuch) {
    var newSum = (userKonto - (howMuch)); 
    console.log("You have " + (userKonto - (howMuch)) + " left in your account.");
    console.log(newSum);
    d
    while ( noMore = 0 ) { 
    var takeMore = prompt("Enter number to withdraw more fund.");
    var evenMore = (newSum - takeMore);
    console.log("You have €" + (newSum - takeMore) + " left.");
    var noMore = (evenMore - takeMore);
    console.log("You have reached your withdrawal limit!"); } 
  } else if (userKonto <= howMuch) {
    console.log("insufficient fund.");
  }
} 
else if (firstReq === "d") {
  console.log("To deposit, please wait...");
  var addFund = parseInt(prompt("Enter deposit amount?"));
  console.log("You have " + (userKonto + addFund) + " now in you account.");
}
let newReq = prompt("Any other services?");
console.log("goodbye");





