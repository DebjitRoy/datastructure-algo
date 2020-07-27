// sorted
//[-4,-2,-1,2,5] => [-2,2]

function zeroSum(arr) {
  let fpos = 0;
  let lpos = arr.length - 1;
  while (fpos < lpos) {
    let sum = arr[fpos] + arr[lpos];
    if (sum === 0) {
      return [arr[fpos], arr[lpos]];
    } else if (sum > 0) {
      lpos--;
    } else {
      fpos++;
    }
  }
  return null;
}

console.log(zeroSum([-6, -4, -2, -1, 2, 5]));
