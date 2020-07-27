/**
 * @param {number[]} nums
 * @return {number}
 *
 *
 * nums = [0,0,1,1,1,2,2,3,3,4],
 * returns 5 (length of unique)
 */
var removeDuplicatesMaps = function(nums) {
  const res = {};
  let i = 0;
  while (i < nums.length) {
    res[nums[i]] = res[nums[i]] || 1;
    i++;
  }
  return Object.keys(res);
};

var removeDuplicates = function(nums) {
  // update in place
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === nums[i + 1]) {
  //       nums.splice(i + 1, 1);
  //     }
  //   }
  //   return nums.length;

  let i = 0;
  while (i < nums.length) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums;
};

console.log(removeDuplicatesMaps([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
