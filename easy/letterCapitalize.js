// Challenge
// Using the JavaScript language, have the function LetterCapitalize(str)
// take the str parameter being passed and capitalize the first letter of each word.
 // Words will be separated by only one space.
//  Sample Test Cases
// Input:"hello world"
// Output:"Hello World"
//
// Input:"i ran there"
// // Output:"I Ran There"

function LetterCapitalize(str) {
  // code goes here
  var strCaps = str[0].toUpperCase()
  for (var i = 1; i < str.length; i++) {
    if(str[i-1] == " "){
      strCaps += str[i].toUpperCase()
    }else {
      strCaps += str[i]
    }
  }
  return strCaps;
}

console.log(LetterCapitalize("he lix"));
