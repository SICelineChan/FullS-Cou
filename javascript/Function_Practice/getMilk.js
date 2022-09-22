// Starting a function call get_drinks and argument is money that we have
function get_drinks(money, costPerBottle) {
  console.log("I give you this much of money €" + money);
  console.log("1st - Get out of the house, ");
  console.log("2nd - turn left, cross the road, ");
  console.log("3rd - enter shop.");
  //here the function calcBottle calculate how much money we have and how many bottles we can buy
  //the 1.5 is the cost per bottle see line 21
  //the return of line 24 how_many_bottles is the result of calcBottles below
  console.log(
    "You can get " +
      calcBottles(money, costPerBottle) +
      " bottles that you can get!"
  );
  //see line 33 for the third function
  return calcChange(money, costPerBottle); // remainder = 1, that the amount of money as change!
  //this should gives the remainer of the division, 1.5 goes in twice into 4
}
// so the 5 is money that we have and then 1.5 is the cost per bottle!
console.log(
  "This is € " + get_drinks(65, 1.5) + " that is how much I get back!"
);
//let say the cost of the bottle is cost_per_bottle is 1.5 see line 9
function calcBottles(money, costPerBottle) {
  let howManyBottles = Math.floor(money / costPerBottle);
  // this calculate that we have $5 and can get 3 bottles rd-up 5 divided by 1.5
  // outcome will be 3.3333...so round it up using Math.floor
  return howManyBottles;
}
//to find out the amount of change we get back
//$5 dollars can buy me 3 bottles and have $0.5 back
//see line 12
function calcChange(money, costPerBottle) {
  let rtnChange = money % costPerBottle;
  return rtnChange;
}
