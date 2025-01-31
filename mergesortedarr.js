/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let p1 = m - 1; // Pointer for nums1
  let p2 = n - 1; // Pointer for nums2
  let p = m + n - 1; // Pointer for merged array

  while (p1 >= 0 && p2 >= 0) {
      if (nums1[p1] > nums2[p2]) {
          nums1[p] = nums1[p1];
          p1--;
      } else {
          nums1[p] = nums2[p2];
          p2--;
      }
      p--;
  }

  while (p2 >= 0) {
      nums1[p] = nums2[p2];
      p2--;
      p--;
  }
};

merge([1,2,3,0,0,0,3,4,5,3,1,2,3,4],3,[2,5,6],3);