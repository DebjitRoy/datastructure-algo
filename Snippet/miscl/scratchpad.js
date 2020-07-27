// READONLY
const per1 = {
  fname: "John",
  lname: "Doe",
  get fullName() {
    return `${this.fname} ${this.lname}`;
  }
};

per1.fullName = "thet test";
console.log(per1.fullName);

// inheritance

const Per = {
  name: "John",
  age: 30,
  getPersonDetails: function() {
    console.log(`${this.name} : ${this.age}`);
  }
};

const Emp = {
  role: "Dev"
};

Object.setPrototypeOf(Emp, Per);

Emp.getPersonDetails();

// constructor inheritance - overriding methods
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.getDetails = function() {
  return `${this.name} (${this.age})`;
};

function Employee(name, age, role) {
  Person.call(this, name, age);
  this.role = role;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.getDetails = function() {
  return `${this.role} ${Person.prototype.getDetails.call(this)}`;
};

const john = new Employee("john", 30, "dev");
console.log(john.getDetails());
