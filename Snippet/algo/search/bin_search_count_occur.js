// Binary Search Finding Occurance

function binSearch(arr, data) {
  let min = 0;
  let max = arr.length - 1;

  while (min < max) {
    let mid = Math.floor((min + max) / 2);
    if (arr[mid] === data) {
      return mid;
    }
    if (data > arr[mid]) {
      min = mid;
    } else if (data < arr[mid]) {
      max = mid;
    }
  }
  return undefined;
}

function findOccurance(arr, data) {
  let pos = binSearch(arr, data);
  console.log(pos);
  let count = 0;
  if (pos) {
    let rpos = (lpos = pos);
    while (arr[rpos] === data) {
      count++;
      rpos++;
    }
    while (arr[lpos] === data) {
      count++;
      lpos--;
    }
  }
  return count;
}

const arr = [17, 9, 42, 17, 10, 17, 3, 66, 4, 25];
const sorted = arr.sort((a, b) => a - b);
console.log(sorted);
// console.log("pos: " + binSearch(sorted, 42));
// console.log("pos: " + binSearch(sorted, 49));
console.log("count: " + findOccurance(sorted, 17));
