//RPN =>
// 3*(4+5) => 3 4 5 + *
// 3 4 5 + * 10 / 1 - => ((3*(4+5))/10)-1 1.7

function RPNCalc(str) {
  const rpnArr = str.split(" ");
  const numArr = [];
  const symbols = ["+", "-", "*", "/"];
  let counter = rpnArr.length;
  while (counter > 0) {
    counter--;
    console.log(numArr);
    const curr = rpnArr.shift();
    if (symbols.indexOf(curr) === -1) {
      numArr.push(parseInt(curr));
      //   return;
    } else {
      const last = numArr.pop();
      const secLast = numArr.pop();
      switch (curr) {
        case "+":
          numArr.push(secLast + last);
          break;
        case "-":
          numArr.push(secLast - last);
          break;
        case "*":
          numArr.push(secLast * last);
          break;
        case "/":
          numArr.push(secLast / last);
          break;
      }
    }
  }
  return numArr[0];
}

console.log(RPNCalc("3 4 5 + * 10 / 1 -"));
