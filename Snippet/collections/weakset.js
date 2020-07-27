const cars = new WeakSet();

class Car {
  constructor(brand, model) {
    cars.add(this);
    this.brand = brand;
    this.model = model;
  }
  displayCar() {
    if (!cars.has(this)) throw "not initialized";
    console.log(`My Car ${this.brand} : ${this.model}`);
  }
}

const tesla = new Car("Tesla", "X");
tesla.displayCar();
console.log(cars);
