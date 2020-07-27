// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
/**
 * 
Input: "()[]{}"
Output: true

Input: "(]"
Output: false
 * 
 */

var isValid = function(str) {
  const strArr = str.split("");
  const closingBrackets = [")", "}", "]"];
  const bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  if (!strArr.length) return true;
  const brStack = [];
  while (strArr.length) {
    const char = strArr.pop();
    if (closingBrackets.indexOf(char) > -1) {
      brStack.push(char);
    }
    const openingBrs = Object.keys(bracketMap);
    if (openingBrs.indexOf(char) > -1) {
      if (!brStack.length) return false;
      if (bracketMap[char] !== brStack.pop()) {
        return false;
      }
    }
  }
  return !strArr.length && !brStack.length;
};

console.log(isValid("()[]{}"));
console.log(isValid("()[){}"));
