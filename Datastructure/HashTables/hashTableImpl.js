class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = Math.floor((hash + key.charCodeAt(i) * i) % this.data.length);
    }
    return hash;
  }
  set(key, val) {
    const hash = this._hash(key);
    if (!this.data[hash]) {
      this.data[hash] = [];
    }
    this.data[hash].push({ [key]: val });
  }
  get(key) {
    const hash = this._hash(key);
    if (!this.data[hash]) return null;
    if (this.data[hash].length === 1) {
      return this.data[hash][0];
    }
    return this.data[hash].filter((item) => item[key])[0];
  }
  keys() {
    const items = this.data.filter((item) => item);
    const res = [];
    items.forEach((item) => {
      item.forEach((i) => res.push(Object.keys(i)[0]));
    });
    return res;
  }
}

const myHash = new HashTable(2);
myHash.set("apple", 20);
myHash.set("banana", 5);
myHash.set("grapes", 500);
myHash.set("nabana", 25);

// console.log(myHash.get("banana"));
// console.log(myHash.get("nabana"));
console.log(myHash.keys());

// console.log();
