const fibonacci = {
  [Symbol.iterator]: () => {
    let prev = 0;
    let curr = 1;
    return {
      next() {
        const value = curr;
        const next = curr + prev;
        prev = curr;
        curr = next;
        return { value, done: false };
      }
    };
  }
};

const sequence = fibonacci[Symbol.iterator]();
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
