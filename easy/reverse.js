function FirstReverse(str) {
    var reverse = ""
    for(var i = str.length-1; i > -1; i--){
        reverse += str[i];
    }
    return reverse

}
