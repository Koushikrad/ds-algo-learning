function pivot(arr, start=0, end=arr.length-1) {
  let pivotIndex = start;
  let pivotValue = arr[start];

  for(i=start + 1;i <= end;i++) {
    if(arr[i] < pivotValue) {
      pivotIndex++;
      let temp = arr[pivotIndex];
      arr[pivotIndex] = arr[i];
      arr[i] = temp;
    }
  }

  let temp = arr[pivotIndex];
  arr[pivotIndex] = pivotValue;
  arr[start] = temp;

  return pivotIndex;
}

function quickSort(arr, start = 0, end= arr.length - 1) {
  if(start < end) {
    let pivotIndex = pivot(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex+1, end)
  }

  return arr;
}


console.log(quickSort([8,3,4,1,42,43,44,2]));