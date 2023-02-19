
const numbers = [1, 5, 8, 3, 7];
const res = numbers
    .filter(num => num > 2)
    .map(num => num * 1)
    .sort((a, b) => a - b);

console.log(res);