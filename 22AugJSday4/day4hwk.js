let pplName = ["Andi", "Stefan", "Jan", "Ringo", "Agustina", "Celine", "Ringo"];
let longestName = " ";
let shortestName = " ";
for (i = 0; i < pplName.length; i++) {
  if (pplName[i].length > longestName.length) {
    longestName = pplName[i];
  } else if (pplName[i].length < longestName.length) {
    shortestName = pplName[i];
  }
}
console.log(longestName + " name that is the longest");
console.log(shortestName + " name that is the shortest");
