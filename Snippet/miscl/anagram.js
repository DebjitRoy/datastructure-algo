// ANAGRAMS  [code,cdoe,cdeo,ocde,odce,oecd,...]

function checkAnagram(str, check) {
  return (
    str
      .split("")
      .sort()
      .join("") ===
    check
      .split("")
      .sort()
      .join("")
  );
}

console.log(checkAnagram("code", "ocde")); // true
console.log(checkAnagram("code", "occd")); // false

function swap(arr, i, j) {
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr.join("");
}

function generateAnagram(str) {
  const chars = str.split("");
  const anas = [];
  for (let i = 0; i < chars.length - 1; i++) {
    for (let j = 0; j < chars.length; j++) {
      const ana = swap(chars.slice(), i, j);
      if (anas.indexOf(ana) === -1) {
        anas.push(ana);
      }
    }
  }
  console.log(anas);
}
generateAnagram("code");
