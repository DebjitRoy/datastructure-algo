//[1,4,2,3,4,7] => 4
function firstRecurring(arr) {
  const map = {};
  for (let i of arr) {
    if (map[i]) return i;
    map[i] = true;
  }
  return false;
}
console.log(firstRecurring([1, 4, 2, 3, 4, 7]));
