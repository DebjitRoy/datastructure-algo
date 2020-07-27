function duplicateArray(arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = true;
    } else {
      return true;
    }
  }
  return false;
}
console.log(duplicateArray([1, 2, 3, 1]));
