function _mergeArrays(arr1, arr2) {
  let mergedArrays = [];

  let i = 0;
  let j=0;
  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
      mergedArrays.push(arr1[i]);
      i++;
    } else {
      mergedArrays.push(arr2[j]);
      j++;
    }
  }

  if(i < arr1.length) {
    mergedArrays = [...mergedArrays, ...arr1.slice(i, arr1.length)]
  }
  if (j < arr2.length) {
    mergedArrays = [...mergedArrays, ...arr2.slice(j, arr2.length)];
  }

  return mergedArrays;
}

// console.log(mergeArrays([1,7,14], [20,50,60,99]));
// console.log(mergeArrays([1,7,21], [20,50,60,99]));

function mergeSort(arr=[]) {
  if(arr.length <= 1) return arr;

  let pivot = Math.floor(arr.length / 2);
  let split1 = mergeSort(arr.slice(0, pivot));
  let split2 = mergeSort(arr.slice(pivot));

  return _mergeArrays(split1, split2);
}



console.log(mergeSort([50,20,14,1,7,99,60]));

// [50, 20, 14] [1,7,99,60]
// [50] [20,14] [1,7] [99,60]
// [50] [20] [14] [1] [7] [99] [60]