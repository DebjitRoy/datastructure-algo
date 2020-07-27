// 'debjit roy' => 'yor tijbed'

function strRev(str) {
  const arr = str.split("");
  const mid = Math.floor(arr.length / 2);
  for (let i = 0; i < mid; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr.join("");
}

function strRevReduce(str) {
  const arr = str.split("");
  return arr.reduce((prev, curr) => curr.concat(prev), []).join("");
}

console.log(strRev("debjit roy"));
console.log(strRev("debjit roy"));
