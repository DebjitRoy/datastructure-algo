// O(NLogN) - Divide & Conquer
// Merge Sort is a stable sort - keeps original array intact

function merge_sorted_arr(arr1, arr2) {
  //O(N)
  let i = 0;
  let j = 0;
  const res = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  return res.concat(arr1.slice(i)).concat(arr2.slice(j));
}

function merge_sort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let midPt = Math.floor(arr.length / 2);
  const left = arr.slice(0, midPt);
  const right = arr.slice(midPt);
  return merge_sorted_arr(merge_sort(left), merge_sort(right));
}

const arr = [6, 5, 3, 1, 12, 8, 7, 2, 4];
console.log(merge_sort(arr)); // sorted
console.log(arr); // unsorted - original
