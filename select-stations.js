// following function should return following array ['Bright Lights Elementary', 'Moose Mountain Community Centre']
//parameters - capacity must be greater than 20 and must be a school or community center

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
let newArray = [];
function chooseStations(array) {
  array.forEach(item => { 
    if (item[1] > 20){
      if (item[2] === 'school' || item[2] == 'community centre'){
        newArray.push(item[0]);
      }
    }
  });
}

chooseStations(stations);
console.log(newArray);