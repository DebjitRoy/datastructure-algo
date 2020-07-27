// ES5
function Person(name) {
  this.name = name;
}

function Employee(name, id) {
  Person.call(this, name);
  this.id = id;
}

Employee.prototype = new Person();

function createEmployee(name, id) {
  var per = new Employee(name, id);
  console.log(per);
}

createEmployee("john", 123);

// ES6

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  sayName() {
    console.log(`My Name ${this.name} I'm a ${this.type}`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, "Dog");
  }
}

const spot = new Dog("Spot");
spot.sayName();
