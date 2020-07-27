//tacocat
function checkPalindrome(str) {
  let isPalin = true;
  (function isPalindrome(str, pos = 0) {
    if (pos === Math.floor(str.length / 2)) {
      return true;
    }
    if (str[pos] !== str[str.length - 1 - pos]) {
      isPalin = false;
    }
    isPalindrome(str, pos + 1);
  })(str.toLowerCase());
  return isPalin;
}

console.log(checkPalindrome("Tacocat"));

function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

console.log(reverseString("hello"));

function reverseStringLong(str) {
  return str
    .split("")
    .reduce((acc, cur) => [cur, ...acc], [])
    .join("");
}

console.log(reverseStringLong("HelloThere"));
