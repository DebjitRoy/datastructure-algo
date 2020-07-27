//Selection Sort

function swap(arr, indx1, indx2) {
  const tmp = arr[indx1];
  arr[indx1] = arr[indx2];
  arr[indx2] = tmp;
}

function selection(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    //let min = i;
    for (j = i + 1; j < arr.length; j++) {
      counter++;
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
      }
    }
  }
  console.log(counter);
  return arr;
}

console.log(selection([8, 2, 4, 10, 7, 22]));
