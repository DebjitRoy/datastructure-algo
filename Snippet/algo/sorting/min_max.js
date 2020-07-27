// Find Min/Max without first sorting

function getMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}
function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

const arr = [9, 2, 7, 5, 0, 26];
console.log("Min:" + getMin(arr));
console.log("Max:" + getMax(arr));
