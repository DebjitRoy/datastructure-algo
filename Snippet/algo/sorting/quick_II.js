// 4 5 2 1 6 3
// pivot 3

function quick(arr) {
  if (arr.length === 0) {
    return [];
  }
  let left = [];
  let right = [];
  let pivot = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[pivot]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  console.log(left, right);
  return quick(left)
    .concat(arr[pivot])
    .concat(quick(right));
}

const arr = [4, 6, 2, 1, 5, 3];
console.log(quick(arr));
