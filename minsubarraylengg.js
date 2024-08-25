/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let right =0;
  let left = 0;
  let currentSum = 0;
  let min = Infinity;
  for(right= 0; right<nums.length;right++) {
      currentSum += nums[right];

      if(currentSum >= target) {
          min = Math.min(min, (right - left));
          currentSum = currentSum - nums[left];
          left++;
      }
  }

  return min === Infinity ? 0 : min;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));