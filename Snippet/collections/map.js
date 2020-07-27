const map = new Map();
map.set("abc", { id: 123, val: "a b c" });
map.set("xyz", { id: 566, val: "x y z" });
map.set("pqr", { id: 668, val: "p q r" });
map.set("lmn", { id: 123, val: "l m n" });

if (map.has("xyz")) {
  console.log("xyz: " + JSON.stringify(map.get("xyz")));
  console.log("SIZE Before: " + map.size);
  map.delete("xyz");
  console.log("SIZE After: " + map.size);
}

console.log([...map]);

// iterating over map
//using for - of
console.log("------ For Of -------");
for (let [key, value] of map) {
  console.log(key + " : " + JSON.stringify(value));
}

//using forEach
console.log("------ forEach -------");
map.forEach((val, key) => {
  console.log(key + " : " + JSON.stringify(val));
});

const symMap = new Map();
const key = Symbol("items");
symMap.set(key, [1, 2, 3]);

console.log("getting by Symbol('items'): " + symMap.get(Symbol("items"))); //undefined
console.log("getting by key: " + symMap.get(key)); //123
