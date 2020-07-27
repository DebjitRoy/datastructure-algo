// eg 1
function add(num) {
  return function addTo(num2) {
    return num + num2;
  };
}

const addTo5 = add(5);
console.log(addTo5(10));

// eg 2
const incrementor = num => (by = 1) => {
  num += by;
  return num;
};

const incr = incrementor(5);

console.log(incr());
console.log(incr());
console.log(incr());
console.log(incr());

// eg 3
function counter(num) {
  for (let i = 0; i < num; i++) {
    setTimeout(() => console.log(i), 500 * i);
  }
}
counter(5);

// eg 4
function calculator(a, b, fn) {
  return fn(a, b);
}

console.log(calculator(5, 10, (a, b) => a + b));
console.log(calculator(5, 10, (a, b) => a * b));
