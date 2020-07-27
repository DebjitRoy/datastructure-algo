function testClosureInLoop() {
  //var has Lexical scope
  for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), i * 1000); // separate 5 lexical scopes, with same value for i as var is function lever declaration
  }
}

function testClosureInLoopLet() {
  //let has block scope
  for (let i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000); // i value will be different for different functions
  }
}

// ****** IDEAL APPROACH ***********//

function testClosureInLoopIIFE() {
  //creating new scope per iteraion using IIFE
  for (var i = 0; i < 5; i++) {
    //per iteration block scope
    (function(x) {
      setTimeout(() => console.log(x), i * 1000); // i value will be different for different functions
    })(i);
  }
}

// testClosureInLoop(); // will print 5 5 times

// testClosureInLoopLet(); // will print 0 1 2 3 4

//testClosureInLoopIIFE(); // will print 0 1 2 3 4
