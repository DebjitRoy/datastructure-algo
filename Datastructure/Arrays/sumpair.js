// [1,2,3,4,9] , 8 => []
// [1,5,3,4,4] , 8 => [[4,4],[5,3]]
function sumPairNaive(arr, target) {
  //O(N^2) approach
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (arr[i] + arr[j] === target) {
          res.push([arr[i], arr[j]]);
        }
      }
    }
  }
  return res;
}
console.log("On ^ 2");
console.log(sumPairNaive([1, 2, 3, 4, 9], 8));
console.log(sumPairNaive([1, 5, 3, 4, 4], 8));

function sumPairEfficient(arr, target) {
  //O(nlog(n))
  const sortedArr = arr.sort((a, b) => a - b); //  O(n*Log n)
  // 1,3,4,4,5
  const res = [];
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    //   O(n)
    if (sortedArr[i] + sortedArr[j] > target) {
      j--;
    } else if (sortedArr[i] + sortedArr[j] < target) {
      i++;
    } else {
      res.push([sortedArr[i], sortedArr[j]]);
      i++;
      j--;
    }
  }
  return res;
}

console.log("O(nlogn");
console.log(sumPairEfficient([1, 2, 3, 4, 9], 8));
console.log(sumPairEfficient([1, 5, 3, 4, 4], 8));
