function sum() {
  var total = 0;
  function getTotal(num) {
    total += num;
    return total;
  }
  return getTotal;
}

var total = sum();
console.log(total(5));
console.log(total(5));
console.log(total(5));
console.log(total(5));

function exponential(base) {
  return function(pow) {
    return Math.pow(base, pow);
  };
}
var base2 = exponential(2);
var base3 = exponential(3);
console.log(base2(3), base3(2));
