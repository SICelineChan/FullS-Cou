// Starting a function call get_drinks and argument is money that we have
function get_drinks(money, cost_per_bottle) {
  console.log("I give you this much of money €" + money);
  console.log("1st - Get out of the house, ");
  console.log("2nd - turn left, cross the road, ");
  console.log("3rd - enter shop.");
  //here the function calcBottle calculate how much money we have and how many bottles we can buy
  //the 1.5 is the cost per bottle see line 21
  //the return of line 24 how_many_bottles is the result of calcBottles below
  console.log(
    "You can get " +
      calcBottles(money, cost_per_bottle) +
      " bottles that you can get!"
  );
  //see line 33 for the third function
  return calcChange(money, cost_per_bottle); // remainder = 1, that the amount of money as change!
  //this should gives the remainer of the division, 1.5 goes in twice into 4
}
// so the 5 is money that we have and then 1.5 is the cost per bottle!
console.log(
  "This is € " + get_drinks(5, 1.5) + " that is how much I get back!"
);
//let say the cost of the bottle is cost_per_bottle is 1.5 see line 9
function calcBottles(money, cost_per_bottle) {
  let how_many_bottles = Math.floor(money / cost_per_bottle);
  // this calculate that we have $5 and can get 3 bottles rd-up 5 divided by 1.5
  // outcome will be 3.3333...so round it up using Math.floor
  return how_many_bottles;
}
//to find out the amount of change we get back
//$5 dollars can buy me 3 bottles and have $0.5 back
//see line 12
function calcChange(money, cost_per_bottle) {
  let rtn_change = money % cost_per_bottle;
  return rtn_change;
}
