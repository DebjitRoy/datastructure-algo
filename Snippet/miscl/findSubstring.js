// You are given a string, s, and a list of words, words, that are all of the same length.
// Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and
// without any intervening characters.

/**
 * s = "barfoothefoobarman",
   words = ["foo","bar"]
   Output: [0,9]
 */

function getWordCounter(str, size) {
  const wordMap = {};
  let p = 0;
  while (p <= str.length - size) {
    wordMap[str.slice(p, p + size)] = wordMap[str.slice(p, p + size)] + 1 || 1;
    p += size;
  }
  return wordMap;
}

function getWordCounterArr(arr) {
  const wordMap = {};
  arr.forEach(word => {
    wordMap[word] = wordMap[word] + 1 || 1;
  });
  return wordMap;
}

var findSubstring = function(str, words) {
  const wordSz = words[0].length; // all words of same size
  const matchSize = words.length * wordSz;

  if (str.length < matchSize) return [];
  let pos = 0;
  const res = [];
  const wordCounterMap = getWordCounterArr(words);
  while (pos <= str.length - matchSize) {
    const matchingStr = str.slice(pos, pos + matchSize);
    const matchingCounter = getWordCounter(matchingStr, wordSz);

    const isMatch = Object.keys(wordCounterMap).every(
      key => wordCounterMap[key] === matchingCounter[key]
    );
    // const isMatch = words.every(word => matchingStr.indexOf(word) > -1);

    if (isMatch) {
      res.push(pos);
    }
    pos += wordSz;
  }
  return res;
};

console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]));
console.log(
  findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])
);
console.log(
  findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])
);

// console.log(getWordCounter("wordgoodgoodgoodbestword", 4));
// console.log(getWordCounterArr(["word", "good", "best", "word"]));
