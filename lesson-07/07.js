function findMatches([...array1], ...numbers) {
  const matches = []; // Don't change this line
  for (const num of numbers) {
    if (array1.includes(num)) {
      matches.push(num);
  }
}
  // Change code above this line
  return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));