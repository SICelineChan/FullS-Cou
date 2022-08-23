var arrayOfStrings = [
  "Andi",
  "Stefan",
  "Jan",
  "Ringo",
  "Agustina",
  "Rene",
  "Celine",
];
function getLongestString(stringArray) {
  var longestString = "";
  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > longestString.length) {
      longestString = stringArray[i];
    }
  }
  return longestString;
}

console.log(getLongestString(arrayOfStrings));
