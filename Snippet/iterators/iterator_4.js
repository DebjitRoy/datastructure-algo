const colors = {
  green: "#0e0",
  orange: "#f50",
  white: "#fff",
  [Symbol.iterator]: () => {
    const keys = Object.keys(colors);
    return {
      next() {
        const done = keys.length === 0;
        const key = keys.shift();
        return { done, value: { [key]: colors[key] } };
      }
    };
  }
};

console.log([...colors]);

function* color_generator() {
  yield* colors;
}

console.log([...color_generator()]);
