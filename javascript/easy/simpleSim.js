// Challenge
// Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine
//  if it is an acceptable sequence by either returning the string true or false.
//  The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a)
//  and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false.
//  The string will not be empty and will have at least one letter.
// // Sample Test Cases
// Input:"+d+=3=+s+"
// Output:"true"
//
// Input:"f++d+"
// Output:"false"

function SimpleSymbols(str) {
    if(str.length < 2){
        return false
    }
  for (var i = 0; i < str.length-1; i++) {
    if(str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123){
      if(str[i+1] != "+"|| str[i-1] != "+"){
        return false
      }
    }
  }
  return true

}
console.log(SimpleSymbols("f++"));
console.log(SimpleSymbols("+f+=3=+d+"));
