// Find if one array contains the square of other's array's elements
// make sure they are having same frequency
// [3,2,5,4] => [4,16,9,25],[16,25,9,4] => OK
//           => [25,9,4] => Not OK as missing 16
// [3,5,3,4] => [9,25,16,16] => Not OK as different frequency, 9 should be 2 times, 16 should be one time

// Naive(O(N^2)) Approach
//Checking all elements of and array and matching with all elems of other array
function frqCheck(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let num of arr1) {
    let sqr = num * num;
    if (arr2.indexOf(sqr) == -1) {
      // indexOf is internally looping all elems, O(N)
      return false;
    }
    arr2.splice(arr2.indexOf(sqr), 1);
  }
  return true;
}

const arr1 = [3, 2, 5, 4];
const arr2 = [4, 16, 9, 25];
const arr3 = [9, 25, 16, 16];

console.log(frqCheck(arr1, arr2)); // true
console.log(frqCheck(arr1, arr3)); // false

// Better approach(O(N))
// Use objects/map to store frequency of each elems
function frqCheckBetter(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frqChck1 = {};
  let frqChck2 = {};

  const sumArr1 = arr1.reduce((num, acc) => num + acc, 0);
  const sumArr2 = arr2.reduce((num, acc) => num + acc, 0);

  console.log(sumArr1, sumArr2);
  let bigger = sumArr1 > sumArr2 ? arr1 : arr2;
  let smaller = sumArr1 < sumArr2 ? arr1 : arr2;

  for (let num of smaller) {
    if (!frqChck1[num]) {
      frqChck1[num] = 1;
    } else {
      frqChck1[num] = frqChck1[num] + 1;
    }
  }

  for (let num of bigger) {
    if (!frqChck2[num]) {
      frqChck2[num] = 1;
    } else {
      frqChck2[num] = frqChck2[num] + 1;
    }
  }
  console.log(frqChck1, frqChck2);
  let keys = Object.keys(frqChck1);
  for (let num of keys) {
    if (!frqChck2[num * num]) {
      return false;
    }
    if (frqChck2[num * num] !== frqChck1[num]) {
      return false;
    }
  }

  return true;
}

const arr5 = [3, 2, 5, 4, 3];
const arr6 = [9, 4, 16, 9, 25];
const arr7 = [9, 4, 11, 9, 25];
console.log("O(N)");
console.log(frqCheckBetter(arr6, arr5)); //true
console.log(frqCheckBetter(arr5, arr7)); //false
