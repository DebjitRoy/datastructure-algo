//Promise.resolve({ result: 123 }).then(data => console.log(data));

const prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(Math.round(Math.random() * 10));
  }, 1000);
});

Promise.resolve(prom1).then(data => console.log(data));
