// Insertion
// 8,2,4,10,7,22
// 2,8,4,10,7,22
// 2,4,8,10,7,22,
// 2,4,7,8,10,22

function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let p = i;
    while (p >= 0 && arr[p] < arr[p - 1]) {
      console.log(arr[p]);
      arr[p] = arr[p - 1];
      p--;
    }
    arr[p] = arr[i];
    console.log("==");
  }
  return arr;
}

console.log(insertion([8, 2, 4, 10, 7, 22]));

// NEEDS REVISIT
