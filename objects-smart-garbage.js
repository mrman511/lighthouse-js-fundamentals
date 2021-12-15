function smartGarbage(type, garbageObject){
  let wasteCount = 0;
  if (type === 'waste'){
    garbageObject.waste++;
  }
  else if (type === 'recycling'){
    garbageObject.recycling++;
  }
  else if (type === 'compost'){
    garbageObject.compost++;
  }
  else { return "invalid input"; }
  
  return garbageObject;
}

console.log(smartGarbage('waste', { waste: 4, recycling: 2, compost: 5 }));