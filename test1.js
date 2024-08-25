function answerQueries(queries, n) {
  let boolArray = Array.from({length: n}, ()=> false);
  let result = [];
  let memo = {};
  for (var i=0; i< queries.length; i++) {
    let query = queries[i];
    let type = query[0];
    let index = query[1] - 1;
    if (type == 1) {
      boolArray[index] = true;
      memo[index] = true;
    } else {
      let j = index;
      let nearest = -1;
      while(j < boolArray.length) {
        if(boolArray[j]) {
          nearest = j + 1;
          break; 
        } else {
          j++;
        }
      }
      
      result.push(nearest);
    }
  }
  
  return result;
}

console.log(answerQueries([[2, 3], [1, 2], [2, 1], [2, 3], [2, 2]], 5));