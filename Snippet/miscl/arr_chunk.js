// [1,2,3,4,5,6,7],3 => [[1,2,3],[4,5,6],[7]]

const chunkArr = (arr, size) => {
  const chunked = [];
  let temp = [];
  let i = 0;
  let c = 0;
  while (i < arr.length) {
    if (c === size) {
      chunked.push(temp);
      c = 0;
      temp = [];
    }
    if (c < size) {
      temp.push(arr[i]);
      c++;
    }
    i++;
  }
  if (temp.length > 0) chunked.push(temp);
  return chunked;
};

console.log(chunkArr([1, 2, 3, 4, 5, 6, 7], 3));
