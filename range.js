function range(start, end, step){
  let newRange = [];

  if (start < end && step > 0){
    for (let i = start; i < end; i += step){
      //console.log(i); 
      newRange.push(i);
    }
  }
  
  return newRange;
}

console.log(range(100, 105, .5));
console.log(range(-9, 3, -3));
console.log(range(0, 15, 2));
console.log(range(15, 16, .1));
console.log(range(-5, 15, 2.5));