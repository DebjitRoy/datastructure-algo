// Best Sorting algo for almost sorted array
// Best case O(N)
// Worst case however O(N^2)

function insersion_sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = 1;
    while (arr[i] < arr[i - j]) {
      j++;
    }
    arr.splice(i, 1);
    arr.splice(i - j + 1, 0, temp);
  }
}

const arr = [6, 5, 3, 1, 8, 7, 2, 4];
insersion_sort(arr);
console.log(arr);
