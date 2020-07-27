// probability distribution - 80-20 rule
// with each search for an element, move up the element in the array,
// as closer to the beginning of the array lesser time required to subsequent search

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function selfSearch(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      if (i > 0) {
        swap(arr, i, i - 1);
      }

      return "found";
    }
  }
  return "not found";
}

const arr = [9, 42, 17, 10, 3, 66, 4, 25];
console.log(selfSearch(arr, 42));
console.log(arr);

console.log(selfSearch(arr, 66));
console.log(arr);
console.log(selfSearch(arr, 66));
console.log(arr);
console.log(selfSearch(arr, 66));
console.log(arr);
console.log(selfSearch(arr, 66));
console.log(arr);
