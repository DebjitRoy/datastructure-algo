function liniearSearch(arr, val) {
  // O(N)
  let isFound = false;
  arr.forEach((num) => {
    if (num === val) isFound = true;
  });
  return isFound;
}

// binary search recursion
function binarySearchRecursion(arr, val, start = 0, end = arr.length - 1) {
  // O(log n)
  if (start > end) return false;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === val) return true;
  if (val < arr[mid]) {
    return binarySearchRecursion(arr, val, start, mid - 1);
  } else {
    return binarySearchRecursion(arr, val, mid + 1, end);
  }
}

const arr = [2, 3, 6, 7, 9, 12, 25, 32];

console.log(liniearSearch(arr, 12));
console.log(binarySearchRecursion(arr, 9));
console.log(binarySearchRecursion(arr, 26));
