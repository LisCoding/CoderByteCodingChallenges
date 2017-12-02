function FirstFactorial(num) {
    if (num == 1){
        return 1
    }
  // code
    return num * FirstFactorial(num-1)
}
