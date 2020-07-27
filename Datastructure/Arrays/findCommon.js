// ['a','c','x','p','b'], ['n','r','b','d'] => true as 'b' available in both arrays

const getSmallLarge = (arr1, arr2) => {
  const small = arr1.length > arr2.length ? arr2 : arr1;
  const large = arr1 === small ? arr2 : arr1;
  return [small, large];
};
const binSearch = (arr, target) => {
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    let mid = Math.floor((i + j) / 2);
    if (arr[mid] === target) return true;
    if (arr[mid] < target) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }
  return false;
};

function findCommon(arr1, arr2) {
  // O(nlogn)
  const [small, large] = getSmallLarge(arr1, arr2);
  small.sort();
  large.sort();
  //   console.log(small);
  //   console.log(large);
  for (let i = 0; i < small.length; i++) {
    if (binSearch(large, small[i])) return true;
  }
  return false;
}

function findCommonEfficient(arr1, arr2) {
  //O(n)
  // using Hasmap
  const map = {};
  arr1.forEach((el) => {
    //O(n)
    map[el] = map[el] + 1 || 1;
  });
  let isMatched = false;
  arr2.forEach((el) => {
    //O(n)
    if (map[el]) {
      isMatched = true;
    }
  });
  return isMatched;
}
console.log(findCommon(["a", "c", "x", "p", "b"], ["n", "r", "b", "d"]));
console.log(
  findCommonEfficient(["a", "c", "x", "p", "b"], ["n", "r", "b", "d"])
);
