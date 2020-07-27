// [3,5,7,9,16],[1,6,11,15] => [1,3,5,6,7,9,11,15,16]
function mergeSorted(arr1, arr2) {
  if (!arr1.length) return arr2;
  if (!arr2.length) return arr1;
  let i = 0;
  let j = 0;
  let res = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      res.push(arr2[j]);
      j++;
    }
  }
  if (i < arr1.length) {
    res = res.concat(arr1.slice(i));
  } else if (j < arr2.length) {
    res = res.concat(arr2.slice(j));
  }
  return res;
}

console.log(mergeSorted([3, 5, 7, 9, 16], [1, 6, 11, 15]));
