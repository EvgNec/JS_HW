const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
    const arrPropName = [];
    for (const element of products) {
        arrPropName.push(element[propName]);
    }
    return arrPropName == "" ? null : arrPropName;
}

console.log(getAllPropValues("quantity1"));