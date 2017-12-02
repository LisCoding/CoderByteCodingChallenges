//Doesnot work for numbers
function LongestWord(sen) {

  // code goes here
  var longest = ""
  var temp = ""
  var count= 0
  for(var i = 0; i < sen.length; i++){
      if((sen.charCodeAt(i) > 96 && sen.charCodeAt(i) < 123 )){
        temp += sen[i]
        count++;
        if(temp.length > longest.length){
            longest = temp;
        }
      } else {
          temp = ""
          count = 0
      }
  }
  return longest;

}
console.log(LongestWord("heloo!! th"));
