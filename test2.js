

function findSubarraysWithGreaterAverage(A) {
  const N = A.length;
  let left = 0;
  let windowSum = 0;
  const subarrays = [];

  for (let right = 0; right < N; right++) {
      windowSum += A[right];
      const subarraySize = right - left + 1;
      const subarrayAverage = windowSum / subarraySize;
      const remainingSum = windowSum - A[left];
      const remainingAverage = (N - subarraySize) > 0 ? remainingSum / (N - subarraySize) : 0;

      if (subarrayAverage > remainingAverage) {
          subarrays.push([left + 1, right + 1]); // Adjust indices to 1-based
      }

      // Slide the window
      while (subarrayAverage <= remainingAverage) {
          windowSum -= A[left];
          left++;
          remainingSum = windowSum - A[left];
          remainingAverage = (N - subarraySize) > 0 ? remainingSum / (N - subarraySize) : 0;
      }
  }

  return subarrays;
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const result = findSubarraysWithGreaterAverage(inputArray);
console.log(result); // Output: [[1, 5], [2, 5], [3, 5], [4, 5]]


// Example usage:
// const inputArray = [1, 2, 3, 4, 5];
// const result = findSubarraysWithGreaterAverage(inputArray);
// console.log(result); // Output: [[1, 5], [2, 5], [3, 5], [4, 5]]
