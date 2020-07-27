// Find First and Last Position of Element in Sorted Array
/**
 * 
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

 */

var binSearch = function(nums, target, low = 0, max = nums.length) {
  if (nums.length === 1 && nums[0] !== target) return -1;
  if (low > max || low < 0 || max > nums.length) return -1;
  let mid = Math.floor((low + max) / 2);
  if (nums[mid] === target) return mid;
  if (target < nums[mid]) {
    return binSearch(nums, low, mid - 1, target);
  } else {
    return binSearch(nums, mid + 1, max, target);
  }
};
var searchRange = function(nums, target) {
  if (nums.length === 0) return [-1, -1];
  const searchIdx = binSearch(nums, target);
  if (searchIdx === -1) return [-1, -1];
  let lo = searchIdx;
  let hi = searchIdx;
  while (lo > 0 && nums[lo] === target) {
    lo--;
  }
  while (hi < nums.length && nums[hi] === target) {
    hi++;
  }
  if (nums.length === 1 && searchIdx !== -1) return [0, 0];
  return [lo + 1, hi - 1];
};

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
// console.log(searchRange([1], 0));
// console.log(searchRange([1], 1));
// console.log(searchRange([1], 1));
console.log(searchRange([2, 2], 1));
