let pplName = ["Andi", "Stefan", "Jan", "Rene", "Agustina", "Celine", "Ringo"];
let longName = pplName[0];
// if I say let longName =""; and change to find smallest, console log returns nothing
// because when it goes through the loop, it is compare what is smaller than nothing!
// so it has to compare with something and that something is the first array!!
let shortName = pplName[0];
for (i = 0; i < pplName.length; i++) {
  if (pplName[i].length > longName.length) {
    longName = pplName[i];
  }
  if (pplName[i].length < shortName.length) {
    shortName = pplName[i];
  }
}
console.log(longName + " name that is the longest");
console.log(shortName + " name that is the shortest");
