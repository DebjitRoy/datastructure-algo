function slowFun(msg, cb) {
  setTimeout(() => {
    cb(msg.toUpperCase());
  }, 1000);
}
// slowFun("Hello", str => console.log(str));

function getProducts() {
  return new Promise((res, rej) => {
    const products = [
      { id: 123, name: "abc" },
      { id: 123, name: "xyz" }
    ];
    setTimeout(() => res(products), 1000);
  });
}
function getProdDetails(id) {
  console.log(`fetching: ${id}`);
  return new Promise((res, rej) => {
    const details = {
      id: 123,
      name: "abc",
      price: "$10.00"
    };
    setTimeout(() => res(details), 1000);
  });
}
async function testAsync(cb, rej) {
  try {
    const prod = await getProducts().then(prods => prods[0]);
    await getProdDetails(prod.id).then(det => cb(det));
  } catch (err) {
    rej(err);
  }
}
testAsync(
  res => console.log("RES: " + JSON.stringify(res)),
  reason => console.log(reason)
);
