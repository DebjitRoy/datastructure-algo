// 144 => 12
// 144/2 = 72 => 72*72 >144
// 72/2 = 31 => 31*31 > 144
// 31 / 2 = 15*15 > 144
// 15/2 = 7*7 < 144
// mid of 7 and 15 = 9 => 9*9 <144
// mid of 9 & 15 = 12 = > 12*12 = 144  ==> Result 12

function sqrRoot(num, min = 1, max = num) {
  if (min > max) return;
  const mid = Math.floor((min + max) / 2);
  const sqr = mid * mid;
  if (sqr === num) return mid;
  if (sqr < num) {
    return sqrRoot(num, mid + 1, max);
  } else {
    return sqrRoot(num, min, mid - 1);
  }
}

console.log(sqrRoot(144));
