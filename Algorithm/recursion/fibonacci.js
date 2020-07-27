// 1 1 2 3 5 8 13 ...
function fibonacci(num) {
  if (num < 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(6));

function fibonacciIterative(num) {
  if (num < 2) return 1;
  let i = 1;
  let j = 1;
  let count = 1;
  while (count < num) {
    let tmp = j;
    j = i + j;
    i = tmp;
    count++;
  }
  return j;
}

console.log(fibonacciIterative(7));
