function binarySearch(arr, elem) {
  const sorted = arr.sort((a, b) => a - b);
  console.log(sorted);
  let lo = 0;
  let hi = arr.length - 1;
  if (elem < sorted[lo] || elem > sorted[hi]) {
    return false;
  }
  while (lo < hi) {
    console.log("lo: " + sorted[lo] + " hi: " + sorted[hi - 1]);
    let mid = Math.floor((lo + hi + 1) / 2);
    if (elem === sorted[mid]) {
      return true;
    } else if (elem < sorted[mid]) {
      hi = mid;
    } else if (elem > sorted[mid]) {
      lo = mid;
    }
  }
  return false;
}

const arr = [9, 42, 17, 10, 3, 66, 4, 25];

console.log("found: " + binarySearch(arr, 42));
