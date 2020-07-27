// SPREAD & REST

const getAverageAge = (min, ...people) => {
  const adults = people.filter(person => person.age > min);

  const adultNames = adults.map(per => per.name);
  console.log(...adultNames);
  return adults.reduce((acc, per) => acc + per.age, 0) / adults.length;
};
const per1 = {
  name: "john",
  age: 35
};
const per2 = {
  name: "jane",
  age: 30
};
const per3 = {
  name: "jake",
  age: 25
};
const per4 = {
  name: "joe",
  age: 12
};
console.log(getAverageAge(21, per1, per2, per3, per4));

const emp = {
  name: "john",
  id: 123,
  job: {
    title: "Engineer",
    salary: "100k"
  }
};

// Destructuring & Restructuring

function printEmployeeData(emp) {
  const {
    name,
    id,
    job: { title, salary }
  } = emp;
  console.log(`${name} : ${title}`);

  for (let e in emp) {
    console.log(`${e}: ${emp[e]}`);
  }
}

printEmployeeData(emp);

const generateEmployee = (name, id, title, salary) => ({
  name,
  id,
  job: {
    title,
    salary
  }
});

const john = generateEmployee("john", 123, "developer", 100);
const jane = generateEmployee("jane", 323, "developer", 110);
const joe = generateEmployee("joe", 111, "manager", 200);

const sortSalary = (...emp) => emp.sort((a, b) => a.job.salary - b.job.salary);

console.log(sortSalary(joe, john, jane));
