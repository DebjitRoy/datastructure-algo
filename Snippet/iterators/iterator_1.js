const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jake", age: 35 }
];

const sequence = {
  [Symbol.iterator]: () => {
    let i = 0;
    return {
      next() {
        const value = people[i] && people[i].age;
        i++;
        const done = i > people.length;
        return { value, done };
      }
    };
  }
};

console.log([...sequence]); //[30,25,35]

function* people_generators() {
  yield* sequence;
}

console.log(people_generators().next()); // { value: 30, done: false }
