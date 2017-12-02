// Challenge
// Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10.
// For the test cases, the parameter num will be any number from 1 to 1000.
function SimpleAdding(num) {
  if(num == 1){
    return 1
  }
  // code goes here
  return num + SimpleAdding(num-1);

}

SimpleAdding(12)
SimpleAdding(140)
console.log(SimpleAdding(140));
