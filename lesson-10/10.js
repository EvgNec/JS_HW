
// codewars

// 1) Пересечение массивов
// let intersection = arrA.filter(x => arrB.includes(x));

// разность массивов
// function arrayDiff(a, b) {
//     let difference = a.filter(x => !b.includes(x));
//     return difference;
// }
// console.log(arrayDiff([1, 2, 2, 3, 3, 5, 3, 7], [1, 2, 5]));

// симметричная разность ()
// let difference = arrA.filter(x => !arrB.includes(x)).concat(arrB.filter(x => !arrA.includes(x)));

// объединение массивов
// let union = [...arrA, ...arrB];
// let union = [...new Set([...arrA, ...arrB)];



// преобразовать строку в позицию в алфавите
// function alphabetPosition(text){
//     return [...text.toLocaleLowerCase()].map(letter => letter.charCodeAt(0) - 96).filter(letter => letter > 0 && letter < 27).join(' ');
// };

// function alphabetPosition2(text) {
//   var result = "";
//   for (var i = 0; i < text.length; i++){
//     var code = text.toUpperCase().charCodeAt(i)
//     if (code > 64 && code < 91) result += (code - 64) + " ";
//   }
//   return result.slice(0, result.length-1);
// }

// let alphabetPosition3 = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');

// function alphabetPosition4(text) {
//   return text.toLowerCase().split('').map(a => a.charCodeAt(0) - 96).filter(a => a > 0 && a < 27).join(' ');
// }
// function alphabetPosition5(text) {
//   const letters = 'abcdefghijklmnopqrstuvwxyz';
  
//   return text.toLowerCase()
//              .split('')
//              .filter(t => letters.indexOf(t) > -1)
//              .map(t => letters.indexOf(t)+1 || '')
//              .join(' ');
// }
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("ty*{%.*!"));


// найти позицию єлемента в массиве
// const alphabet = [ 'd', 'Y', 'A', 'b', 'c' , 'e', 'a']; 
// const text = ['a','b','c','e'];
// const result = text.map(item => alphabet.indexOf(item));
// console.log(result);

