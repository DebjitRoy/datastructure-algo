const stripPunctuation = (str) => str.replace(/[^\w]/g, "");
function findLongest(str) {
  const words = str.toLowerCase().split(" ");
  let longest = "";
  words.forEach((word) => {
    let w = stripPunctuation(word);
    if (w.length > longest.length) {
      longest = w;
    }
  });
  return longest;
}

console.log(findLongest("fun&!! time"));
console.log(findLongest("I love doggys"));
