// Bubble Sort
function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function bubble(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      counter++;
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  console.log(counter); // 7^2 = 49 O(n^2)
  return arr;
}

console.log(bubble([8, 2, 4, 10, 7, 22, 5]));
