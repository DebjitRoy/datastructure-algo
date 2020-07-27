// Find max subarr when both +ve & -ve elements exist
// [-2,1,-3,4,-1,2,1,-5,4] => 6 ([4,-1,2,1])

function max_subarr(arr) {
  let max_sum = arr[0];
  let curr_sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (curr_sum < 0 && arr[i] > curr_sum) {
      curr_sum = arr[i];
    } else {
      curr_sum += arr[i];
    }
    if (curr_sum > max_sum) {
      max_sum = curr_sum;
    }
  }
  return max_sum;
}

console.log(max_subarr([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(max_subarr([-2, 1, -3, 4, -1, 2, 1, -5, 4, 8]));
