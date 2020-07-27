console.log("Pinky Promise");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rand = Math.random();
    if (rand > 0.5) {
      resolve("Promise Success");
    } else {
      reject("promise failed");
    }
  }, 1000);
});

promise.then(res => console.log(res), err => console.log(err));
