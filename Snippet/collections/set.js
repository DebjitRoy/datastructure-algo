const set = new Set();
set.add({ name: "john" });
set.add({ name: "john" });
set.add({ name: "jane" });

console.log([...set]); //[ { name: 'john' }, { name: 'john' }, { name: 'jane' } ] - as the objects has different reference even values are same

const numset = new Set();
numset.add(10);
numset.add(20);
numset.add(10);
numset.add(30);
numset.add(20);

console.log(numset.has(20));
console.log([...numset]); // 10, 20, 30

numset.forEach(val => {
  console.log(val);
});
