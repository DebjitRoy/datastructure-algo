const person = {
  fname: "John",
  lname: "Doe"
};

const wmap = new WeakMap();
wmap.set(person, "This is John");

const person2 = { ...person };
const person3 = Object.assign({}, person);
const person4 = Object.create(person);

console.log(wmap.get(person)); // for copy or extend, the get will be undefined

console.log(wmap.has(person)); //true

//console.log([...wmap]); //error - not iterable
