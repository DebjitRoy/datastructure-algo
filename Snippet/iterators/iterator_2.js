const itemsData = {
  header: {
    user: "john",
    lang: "en_US",
    total: "235",
    currency: "USD"
  },
  pagination: {
    total: 3,
    current: 1,
    size: 5
  },
  items: [
    { id: 1, title: "abc", price: "20" },
    { id: 2, title: "def", price: "30" },
    { id: 3, title: "xyz", price: "43" },
    { id: 4, title: "mno", price: "63" },
    { id: 5, title: "xxx", price: "77" }
  ]
};

const sequence = {
  [Symbol.iterator]: () => {
    let i = 0;
    return {
      next() {
        const value = itemsData.items[i];
        i++;
        const done = i > itemsData.items.length;
        return { value, done };
      }
    };
  }
};

console.log([...sequence]);
for (item of sequence) {
  console.log(`Item#${item.id}: ${item.title}`);
}
