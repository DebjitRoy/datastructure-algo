const headerData = new Promise((resolve, reject) => {
  setTimeout(
    () =>
      resolve({
        data: { title: "My Header", country: "US", language: "en_US" }
      }),
    1000
  );
});
const itemsData = new Promise((resolve, reject) => {
  setTimeout(
    () =>
      resolve({
        data: [
          { id: 123, name: "abc", price: "10" },
          { id: 234, name: "def", price: "20" }
        ]
      }),
    1500
  );
});
//All

Promise.all([headerData, itemsData]).then(data => {
  console.log("ALL RESULT");
  console.log("Header: " + JSON.stringify(data[0]));
  console.log("Items: " + JSON.stringify(data[1]));
});
//Race

Promise.race([headerData, itemsData]).then(data => {
  console.log("RACE Result:");
  console.log("Winner: " + JSON.stringify(data));
});
