const randomSeq = {
  [Symbol.iterator]: () => {
    let i = 0;
    return {
      next: () => {
        i++;
        return {
          value: Math.floor(Math.random() * 10),
          done: i > 10
        };
      }
    };
  }
};
console.log([...randomSeq]);
