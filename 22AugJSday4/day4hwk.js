let pplName = ["Andi", "Stefan", "Jan", "Rene", "Agustina", "Celine", "Ringo"];
let longestName = " ";
let word = pplName.length;
let shortestName = " ";
for (i = 0; i < word; i++) {
  if (pplName[i].length > word) {
    longestName = pplName[i];
  } else if (pplName[i].length < word) {
    shortestName = pplName[i];
  }
}
console.log(longestName + " name that is the longest");
console.log(shortestName + " name that is the shortest");
