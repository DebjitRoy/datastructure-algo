// Infix -> Postfix

// (80-30)*(40+50/10) => 80 30 - 40 50 10 / + *

function infxToPstfx(str) {
  const strArr = str.split(" ");
  const infxArr = ["(", ...strArr, ")"];
  const postFxArr = [];
  const symbols = ["+", "-", "*", "/"];
  const syms = [];
  while (infxArr.length > 0) {
    const curr = infxArr.shift();
    if (curr !== ")" && symbols.indexOf(curr) === -1) {
      postFxArr.push(curr);
    }
    if (symbols.indexOf(curr) > -1) {
      syms.push(curr);
    }
    if (curr === ")") {
      while (syms.length) {
        postFxArr.push(syms.pop());
      }
      const openBrktPos = postFxArr.lastIndexOf("(");
      postFxArr.splice(openBrktPos, 1);
    }
    // console.log([...postFxArr]);
  }
  return postFxArr;
}

console.log(infxToPstfx("( ( ( 80 - 30 ) * ( 40 + 50 / 10 ) ) )"));
