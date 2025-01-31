/**
 * Implement a function called countUniqueValues which accepts a sorted array,
 * and counts the unique values in the array. There can be negative numbers in the array,
 * but it will always be sorted.
 * countUniqueValues([1,1,1,1,1,2]) // 2
 * countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
 * countUniqueValues([]) // 0
 * countUniqueValues([-2,-1,-1,0,1]) // 4
 */

function countUniqueValues(arr=[]) {
  if(!arr.length) return 0;
  
  let i=0;
  let j=i+1;

  while(i < arr.length && j < arr.length) {
    if(arr[i] == arr[j]) {
      j++;
    } else {
      arr[i+1] = arr[j];
      i++;
    }
  }

  return i+1;
}

console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4