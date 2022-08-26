function get_drinks(bottle, money) {
  console.log("I give you this much of money €" + money);
  console.log("1st - Get out of the house, ");
  console.log("2nd - turn left, cross the road, ");
  console.log("3rd - enter shop.");

  console.log("Buy " + bottle + " bottles in the shop!");
  let each_cost = 5;
  let total_cost = each_cost * bottle;
  console.log("each will cost € " + total_cost);

  let cost_of_drinks = money - total_cost;
  console.log("€" + cost_of_drinks + " is the change that you get.");
}
get_drinks(3, 10);
