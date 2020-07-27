// O(NlogN)
function quick_sort(arr) {
  if (arr.length <= 1) return arr;
  const lesser = [];
  const greater = [];
  const selected = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < selected) {
      lesser.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return quick_sort(lesser).concat(selected).concat(quick_sort(greater));
}

const arr = [6, 5, 3, 1, 12, 8, 7, 2, 4];
console.log(quick_sort(arr)); // sorted
console.log(arr); // unsorted - original
