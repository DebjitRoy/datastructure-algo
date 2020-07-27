// find duplicates in an array
const arr = [2, 4, 2, 4, 5, 7, 2, 8, 1, 9];

const dup = arr.filter((el, idx, curr) => curr.indexOf(el) !== idx);
const unq = arr.filter((el, idx, curr) => curr.indexOf(el) === idx);

console.log(dup);
console.log(unq);

const set = new Set();
arr.forEach(el => set.add(el));

console.log([...set]);

const map = new Map();
arr.forEach((el, idx) => {
  if (!map.get(el)) {
    map.set(el, 0);
  }
  map.set(el, map.get(el) + 1);
});

console.log([...map]);
