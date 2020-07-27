// 8,2,4,10,7,22
//8 -> PIVOT LEFT=[2,4,7] RIGHT =[10,22]
// [LEFT]PIVOT[RIGHT]

function quick(arr, pivot) {
  console.log(pivot);
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[pivot]) {
      left.push(arr[i]);
    } else if (arr[i] > arr[pivot]) {
      right.push(arr[i]);
    }
  }

  const sorted = left.concat(arr[pivot]).concat(right);
  console.log(sorted);
  if (pivot == arr.length - 1) {
    return sorted;
  } else {
    quick(sorted, pivot + 1);
  }
}

// console.log(quick([8, 2, 4, 10, 7, 22], 0));
const q = quick([8, 3, 7, 1, 9, 6], 0);
console.log(q);
