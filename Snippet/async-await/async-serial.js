const itemsPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 123, title: "item 1" },
        { id: 132, title: "item 2" },
        { id: 133, title: "item 3" }
      ]);
    }, 1000);
  });

const itemsDetailsPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 555,
        desc: "Product is good",
        user: 66,
        item: 123
      });
    }, 500);
  });

const userPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 66,
        name: "Dave"
      });
    }, 500);
  });

async function getUser() {
  try {
    const items = await itemsPromise();
    const desc = await itemsDetailsPromise(items[0].id);
    const user = await userPromise(desc.user);
    console.log(user.name);
  } catch (err) {
    console.log(err);
  }
}
getUser();
