function compareObjects(ob1, ob2) {
  const diff = [];
  (function compareRecur(ob1, ob2) {
    for (prop in ob1) {
      if (!ob2[prop]) diff.push(prop);
      else {
        if (typeof ob1[prop] === "object" && typeof ob2[prop] === "object") {
          compareRecur(ob1[prop], ob2[prop]);
        } else {
          if (ob1[prop] !== ob2[prop]) diff.push(prop);
        }
      }
    }
  })(ob1, ob2);
  return diff;
}

const ob1 = {
  name: "John",
  age: 30,
  address: {
    state: "CA",
    country: "US",
    street: {
      line1: "123 abc rd",
      line2: "bldg 444"
    }
  }
};
const ob2 = {
  name: "John",
  age: 30,
  address: {
    state: "NY",
    country: "US",
    street: {
      line1: "123 abc rd",
      line2: "bldg 450"
    }
  }
};
console.log(compareObjects(ob1, ob2));
