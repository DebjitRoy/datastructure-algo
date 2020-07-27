function rotateArray(arr, k) {
  // const left= arr.slice(0,k+1);
  // const right = arr.slice(k+1);
  return arr.slice(k + 1).concat(arr.slice(0, k + 1));
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
