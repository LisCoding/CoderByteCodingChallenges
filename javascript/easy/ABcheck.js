// Challenge
// Using the JavaScript language, have the function ABCheck(str) take the str parameter
 // being passed and return the string true if the characters a and b are separated by
 // exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false.
// Sample Test Cases
// Input:"after badly"
// Output:"false"
//
// Input:"Laura sobs"
// Output:"true"

function ABCheck(str) {
  for (var i = 0; i < str.length - 4; i++) {
    if(str[i] == "a" && str[i+4] == "b"){
      return true
    } else if (str[i] == "b" && str[i+4] == "a") {
        return true
    }
  }
  return false

}

// //Solution TWO
// function ABCheck(str) {
//
//   // code goes here
//
//   return str.match(/[aA].{3}[bB]/) !== null;
// }
//
//
// // Solution 3
// function ABCheck(str) {
//
//   patt = /(a...b|b...a)/
//
//     return patt.test(str);
//
// }
