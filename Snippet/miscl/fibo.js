// Recursive approach to solve Fibonacci
// 1, 1, 2 , 3, 5, 8

function fibo_recur(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return fibo_recur(n - 1) + fibo_recur(n - 2);
}

console.log(fibo_recur(5));

//Memoized - saving the data and reuse
//f(2) will be called 3 times. instead of evaluating 3 times, if we can save the data and reuse, it'd be faster

function fibo_memo(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  if (!arr) {
    var arr = [];
  }
  if (!arr[n]) {
    arr[n] = fibo_memo(n - 1) + fibo_memo(n - 2);
  }
  return arr[n];
}

console.log("Memoized: " + fibo_memo(5));
