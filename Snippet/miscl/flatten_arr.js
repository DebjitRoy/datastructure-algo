// [1,[2,[3,4]],5,[6,7]] =>[1,2,3,4,5,6,7]

function flattenArr(arr) {
  const res = [];
  (function recurFlat(arr) {
    if (!arr || !arr.length) return;
    arr.forEach(el => {
      if (Array.isArray(el)) {
        recurFlat(el);
      } else {
        res.push(el);
      }
    });
  })(arr);
  return res;
}

console.log(flattenArr([1, [2, [3, 4]], 5, [6, 7]]));
