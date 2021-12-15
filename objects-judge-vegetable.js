const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]



function judgeVegetable(vegetables, metric){
  let highscorer = vegetables[0];
  for (let i = 0; i < vegetables.length; i++){
    //console.log(vegetables[i][metric])
      //console.log(vegetables[i].metric);
    if (vegetables[i][metric] > highscorer[metric]){
        highscorer = vegetables[i];
    }
  }
  console.log('yes');
  return highscorer.submitter
  
}

/*function judgeVegetable(vegetables, metric){
  let highScorer = vegetables[0];

  if (metric === 'redness'){
    for (let i = 0; i < vegetables.length; i++){

      if (highScorer.redness < vegetables[i].redness){
        highScorer = vegetables[i];
      }
    }
    return highScorer.submitter;
  }

  else if (metric === 'plumpness'){
    for (let i = 0; i < vegetables.length; i++){
      if (highScorer.plumpness < vegetables[i].plumpness){
        highScorer = vegetables[i];
      }
    }
    return highScorer.submitter;
  }

  else { return "invalid metric" }
  
}*/

console.log(judgeVegetable(vegetables, 'plumpness'));