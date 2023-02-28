class Car {
  static #MAX_PRICE = 50000;
  // Change code below this line
    static checkPrice(price) {
        console.log("price", price);
      console.log("Car.#MAX_PRICE", Car.#MAX_PRICE)
  
  return      Car.#MAX_PRICE > price 
    ? "Success! Price is within acceptable limits" 
    : "Error! Price exceeds the maximum";
}

  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"