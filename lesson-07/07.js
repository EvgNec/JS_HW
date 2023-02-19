function changeEven(numbers, value) {
  // Change code below this line
    const newNumbers = numbers.slice(0);
    console.log(newNumbers);
    for (let i = 0; i < newNumbers.length; i += 1) {
    if (newNumbers[i] % 2 === 0) {
      newNumbers[i] = newNumbers[i] + value;
    }
  }
  return newNumbers;
  // Change code above this line
}

console.log(changeEven([17, 24, 68, 31, 42], 100));