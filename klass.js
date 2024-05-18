const Car = function ({ brand, model, price } = {}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

Car.description = "Klass description car";

Car.loginfo = function (carObj) {
  console.log("Car.loginfo = function (carObj)", carObj);
};

const car = new Car({
  brand: "Audi",
  model: "Q3",
  price: 35000,
});
// -----------------------------
class Car1 {
  static description = "Car1 description car";

  static loginfo(carObj) {
    console.log("Car.loginfo = function (carObj)", carObj);
  }

  constructor({ brand, model, price } = {}) {
    console.log("constructor");
    this.brand = brand;
    this._model = model;
    this.price = price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }

  updateModel(newModel) {
    this._model = newModel;
  }
    set model(newModel) {  this._model = newModel; }
    
//   setModel(newModel) {
//     this._model = newModel;
//     }
    
  get model() { return this._model; }
    
//   getModel() {
//     return this.model;
//   }
}

// console.dir(Car1);
const carInstance = new Car1({
  brand: "Audi",
  model: "Q3",
  price: 35000,
});

 console.log(carInstance);

// Car1.loginfo(carInstance);

// console.log(carInstance.model);
// carInstance.model='Q444';
// console.log(carInstance.model);
