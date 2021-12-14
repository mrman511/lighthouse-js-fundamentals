function howManyHundreds(num){
  let numHundreds = 0;
  while ( num >= 100 ){
    numHundreds++
    num -= 100;
  }

  return numHundreds
}

console.log(howManyHundreds(1000));
console.log(howManyHundreds(856));
console.log(howManyHundreds(98));
console.log(howManyHundreds(0));