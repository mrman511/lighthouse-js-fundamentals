const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] 

function finalPosition(moves){
  let positionsArray = [0, 0];
  moves.forEach(move => {
    if (move === "west" || move === "east") {
      if (move === "east"){
        positionsArray[0]++
      }
      else {
        positionsArray[0]--
      }
    }
    else{
      if (move === "north"){
        positionsArray[1]++
      }
      else {positionsArray--;}
    }
  })
  return positionsArray
}

console.log(finalPosition(moves));