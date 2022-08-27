//ignore if it is upper or lower case
function in_Str(array, value) {
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element.toUpperCase() === value.toUpperCase()) {
      // if(array[i].toLowerCase()=== value.toLowerCase())
      return true;
    }
  }
  return false;
}
console.log(in_Str("hello", "H")); //true
console.log(in_Str("hello", "h")); //true
console.log(in_Str("hello", "j")); // false
console.log(in_Str("APPLE", "j"));
console.log(in_Str("bOaT", "O"));
