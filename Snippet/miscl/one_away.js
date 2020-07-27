// Given 2 strings check if they are one or less edit away
// pale, bale => true
// pale, pal => true
// pale, bal => false
// pale, ale => true

function isOneAway(str1, str2) {
  let i = 0;
  let j = 0;
  let missCount = 0;
  while (i < str1.length || j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
    } else if (str1[i + 1] === str2[j]) {
      i++;
      missCount++;
    } else if (str1[j + 1] === str2[i]) {
      j++;
      missCount;
    } else {
      missCount++;
      i++;
      j++;
    }
  }
  if (missCount > 1) return false;
  return true;
}

console.log(isOneAway("pale", "bale"));
console.log(isOneAway("pale", "pal"));
console.log(isOneAway("pale", "ale"));
console.log(isOneAway("pale", "bal"));
console.log(isOneAway("pale", "pa"));
