// Multiplication without using *

function mul(num, times) {
  if (times === 0) return 0;
  return num + mul(num, times - 1);
}

console.log(mul(5, 3));
console.log(mul(25, 5));
