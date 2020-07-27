// [0,1,0,2,3]=>[1,2,3,0,0]

function moveZeros(arr) {
  let i = 0;
  let count = 0;
  while (count < arr.length) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    } else {
      i++;
    }
    count++;
  }
  return arr;
}

// console.log(moveZeros([0, 1, 0, 2, 3]));
console.log(moveZeros([0, 0, 1]));
// console.log(moveZeros([0, 0, 1, 1, 0, 1, 0, 0, 1]));
