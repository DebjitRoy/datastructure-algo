// Closure is when function is being executed outside it's Lexical scope
// the variables used by the closure functions are not garbage collected.

// Closure example when a function is returned from within another function

// 1

function outer() {
  var a = 10;
  var b = 20;
  function inner() {
    console.log(a);
  }
  return inner;
}

var fn = outer(); // lexical scope for inner(), executed, thus b is garbage collected. but a is not, as used in closure
fn();

// Closure is not only function returning functions!
// Any way access a function outside it's lexical scope like this

// 2

var func;

function outer2() {
  var a = 30;
  function inner() {
    console.log(a);
  }
  func = inner;
}

outer2();
func();

// or like this
// by passing the inner function to external function as param

// 3

function outer3() {
  var a = 50;
  function inner() {
    console.log(a);
  }
  foo(inner);
}
function foo(baz) {
  baz();
}

outer3();
