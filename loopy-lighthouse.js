let number = 100;

while (number <= 200){
  //if a multiple of three or four
  if (number % 3 == 0 || number % 4 ==0){
    //if a multiple of 4
    if(number % 3 !=0){
      console.log("Lighthouse" + number)
    }
    //if a multiple of 3
    else if (number % 4 !=0) {
      console.log("Loopy" + number)
    }
    //if a multiple of 3 and a multiple of 4
    else { console.log("LoopyLighthouse" + number) }
  }
  else { console.log(number) }
  number++
}