/**
 * Implementation of indexOf()
 * Return the index of the first occurrence of needle in haystack, or -1
 * 
 * Input: haystack = "hello", needle = "ll"
Output: 2
 */

var strStr = function(haystack, needle) {
  if (needle === "") return 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let c = 0;
      while (c < needle.length) {
        if (haystack[i + c] === needle[c]) {
          c++;
        } else {
          break;
        }
      }
      if (c === needle.length) {
        return i;
      }
    }
  }
  return -1;
};

console.log(strStr("hello", "ll"));
// console.log(strStr("world", "ll"));
