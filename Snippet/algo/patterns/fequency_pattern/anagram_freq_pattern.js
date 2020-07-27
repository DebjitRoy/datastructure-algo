// check two strings are anagramor not
// [cinema,iceman] =>true
// [anagram,nnaagra] =>false

// check frquency of each letter

function checkAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  const str1Map = {};
  const str2Map = {};
  for (let letter of str1) {
    str1Map[letter] = str1Map[letter] + 1 || 1;
  }
  for (let letter of str2) {
    str2Map[letter] = str2Map[letter] + 1 || 1;
  }

  const keys = Object.keys(str1Map);
  for (key of keys) {
    if (!str2Map[key] || str1Map[key] !== str2Map[key]) {
      return false;
    }
  }
  return true;
}
console.log(checkAnagram("cinema", "iceman")); // true
console.log(checkAnagram("anagram", "anramam")); //false
console.log(checkAnagram("anagram", "anraam")); //false
