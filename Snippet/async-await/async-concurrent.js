const getPromise1 = () =>
  new Promise(resolve =>
    setTimeout(() => resolve({ id: 1, desc: "promise#1" }), 500)
  );
const getPromise2 = () =>
  new Promise(resolve =>
    setTimeout(() => resolve({ id: 2, desc: "promise#2" }), 1500)
  );
const getPromise3 = () =>
  new Promise(resolve =>
    setTimeout(() => resolve({ id: 3, desc: "promise#3" }), 200)
  );

async function resolveConcurrent() {
  const p1 = getPromise1();
  const p2 = getPromise2();
  const p3 = getPromise3();
  const [r1, r2, r3] = await Promise.all([p1, p2, p3]);
  console.log(r1, r2, r3);
}

resolveConcurrent();
