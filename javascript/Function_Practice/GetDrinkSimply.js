function get_drinks(money, costPerBottle) {
  console.log("You have €" + money);
  console.log("You can get " + calcBottles(money, costPerBottle) + " bottles!");
  return calcChange(money, costPerBottle);
}

console.log("And € " + get_drinks(65, 2) + " that is how much I get back!");

function calcBottles(money, costPerBottle) {
  let howManyBottles = Math.floor(money / costPerBottle);
  return howManyBottles;
}

function calcChange(money, costPerBottle) {
  let rtnChange = money % costPerBottle;
  return rtnChange;
}
