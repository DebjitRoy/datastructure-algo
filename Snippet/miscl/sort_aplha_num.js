// [m,3,7,1,h,a,9,b] => [1,3,7,9,a, b, h,m]
// "a".charCodeAt(0) = 97
// "A".charCodeAt(0) = 65
// "0".charCodeAt(0) = 48
function sortAplhaNum(arr) {
  const alpha_small = [];
  const alpha_cap = [];
  const num = [];
  arr.forEach(element => {
    if (isNaN(element)) {
      if (element.charCodeAt(0) >= 97 && element.charCodeAt(0) <= 122) {
        alpha_small.push(element);
      }
      if (element.charCodeAt(0) >= 65 && element.charCodeAt(0) <= 90) {
        alpha_cap.push(element);
      }
    } else {
      num.push(element);
    }
  });
  const sorted_num = num.sort((a, b) => a - b);
  const sorted_alpha_sm = alpha_small.sort();
  const sorted_alpha_cp = alpha_cap.sort();

  return [...sorted_num, ...sorted_alpha_sm, ...sorted_alpha_cp];
}

console.log(sortAplhaNum(["m", 3, 7, "B", 1, "h", "a", 9, "b"]));
