// callback

function calculator(num1, num2) {
  return function(cb) {
    return cb(num1, num2);
  };
}

const calc = calculator(10, 20);

console.log(calc((a, b) => a + b));
console.log(calc((a, b) => a * b));

function testPromise() {
  const pr = new Promise(function(res, rej) {
    setTimeout(() => {
      const rand = Math.floor(Math.random() * 2);
      if (rand) {
        res(rand);
      } else {
        rej(rand);
      }
    }, 1000);
  });

  return pr;
}

testPromise()
  .then(() => console.log("RESOLVED"))
  .catch(() => console.log("REJECTED"));
