const Person = {
  fname: "John",
  lname: "Doe",
  getName: function() {
    return `${this.fname} ${this.lname}`;
  }
};

// let Employee = {
//   fname: "Jane",
//   lname: "Doe"
// };

// console.log(Person.getName());
// console.log("CALL: " + Person.getName.call(Employee));

const Employee = Object.create(Person);
Employee.fname = "Jane";
Employee.lname = "Smith";
console.log(Employee.getName());

const Student = {
  fname: "Joe",
  lname: "Doe"
};

Student.__proto__ = Person;
console.log(Student.getName());

function Animal(name, type) {
  this.name = name;
  this.type = type;
}
Animal.prototype.greet = function() {
  return `Hi! I am ${this.name}, I'm a ${this.type}`;
};
const spot = new Animal("Spot", "Dog");

console.log(spot.greet());

function Cat(name) {
  Animal.call(this, name, "Cat");
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.say = function() {
  return "Meow!";
};

const snowy = new Cat("Snowy");

console.log(snowy.greet());
console.log(snowy.say());
