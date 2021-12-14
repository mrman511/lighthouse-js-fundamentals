function lastIndexOf(array, num) {
  let index = -1;
  for (let i = 0; i < array.length; i++){
    if (num === array[i]){
      index = i;
    }
  }
  return index;
}

