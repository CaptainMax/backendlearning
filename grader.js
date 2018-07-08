function average(scores){
    var score = 0;
    for(var i =0;i<scores.length;i++)
    {
        score += scores[i];
    }
    var average = score/(scores.length);
  return Math.round(average);
}

var scores1 = [90,98,89,100,100,86,94];
console.log(average(scores1));

var scores2 = [40,65,77,82,80,54,73,63,95,49];
console.log(average(scores2));