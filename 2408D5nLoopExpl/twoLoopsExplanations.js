let star = "";
function vertical(value1) {
  console.log(value1);
}

function horizontal() {
  star += "1*";
}
console.log("lefthand loop starts");
for (let left = 0; left < 3; left++) {
  console.log("righthand loop starts!");
  for (let right = 0; right < 3; right++) {
    //vertical(star);
    vertical("*");
    horizontal();
    console.log(right + " right hand round ends");
  }
  console.log("righthand loop ends");
  console.log(left + " left hand round ends!!");
}
console.log("lefthand loop ends");

console.log(star);
//star = "**";
//star = star + star;
//star += star;
//console.log(star);
