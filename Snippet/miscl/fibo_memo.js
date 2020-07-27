function memoized_fibo(num) {
  const map = {};
  return (function fibo(num) {
    if (num <= 1) return 1;
    map[num] = map[num] || fibo(num - 1) + fibo(num - 2);
    return map[num];
  })(num);
}

console.log(memoized_fibo(85));
