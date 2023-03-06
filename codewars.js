
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
// console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// console.log(alphabetPosition("ty*{%.*!"));


// найти позицию єлемента в массиве
// const alphabet = [ 'd', 'Y', 'A', 'b', 'c' , 'e', 'a'];
// const text = ['a','b','c','e'];
// const result = text.map(item => alphabet.indexOf(item));
// console.log(result);


// Получить найменьшее и найбольшее значение из строки

// function highAndLow(numbers){
//     return numbers.split(' ')
//         .sort((a, b) => b - a)
//         .filter( (num, index, arr) => index === 0 || index === arr.length-1).join(' ');
// }

// function highAndLow(numbers) {
//     const newArray = numbers.split(' ')
//         .sort((a, b) => b - a);
//     const newArray2 = [];
//     newArray2.push(newArray[0]);
//     newArray2.push(newArray[newArray.length - 1]);
//     newArray2.sort((a, b) => b - a);
//     return newArray2.join(' ');
// }
// function highAndLow2(numbers){
//   numbers = numbers.split(' ');
//   return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
// }
// function highAndLow3(numbers){
//   numbers = numbers.split(' ');
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }
// function highAndLow4(numbers){
//   var arr = numbers.split(' ').sort(function(a, b) { return a - b });
//   return arr[arr.length -1] + ' ' + arr[0];
// }
// highAndLow("10 4 2 3 4 5");  // return "5 1"
// console.log(highAndLow("42"));
// highAndLow2("1 2 -3 4 5"); // return "5 -3"
// console.log( highAndLow2("1 2 -3 4 5"))
// highAndLow("1 9 3 4 -5"); // return "9 -5"


// Нарциссическое число(или число Армстронга) — это положительное число, представляющее
// собой сумму собственных цифр, каждая из которых возведена в степень количества цифр в данном основании.
// function narcissistic(value) {
//     value = value.toString();
//     let sum = 0;

//     for (let i = 0; i < value.length; i++) {
//         sum += value[i] ** value.length;
//     }
//      console.log("sum", sum, "value", value);
//     return sum==value;
// }
// console.log("narcissistic(153)", narcissistic(153));

// function narcissistic2( value ) {
//   return ('' + value).split('').reduce(function(p, c){
//     return p + Math.pow(c, ('' + value).length)
//     }, 0) == value;
// }

// function narcissistic3(value) {
//   return value.toString()
//               .split('')
//               .map( (x,i,arr) => x ** arr.length)
//               .reduce( (a,b)=> +a + +b)
//                === value
// }

// narcissistic4=v=>[...s=v+''].reduce((p,c)=>p+c**s.length,0)==v;
// const narcissistic5 = (v) => `${v}`.split('').reduce((a,n) => a + n ** `${v}`.length ,0) === v

// function narcissistic6(value) {
//   return value == value.toString().split('').map(x => x ** value.toString().length).reduce((a, b) => a + b)? true : false
// }

// вас просят возвести в квадрат каждую цифру числа и соединить их.
// function squareDigits(num) {
//     num = num.toString();
//     let str = '';

//     for (let i = 0; i < num.length; i++) {
//         str = str.concat(num[i] ** 2);
//     }
//     // return Math.floor(str);
//     // return parseInt(str);
//             // return Number(str);
//     return ~~str;
//     // return str * 1;
// }
// console.log( squareDigits(153));


// function squareDigits(value) {
//   return value.toString()
//               .split('')
//               .map( (x,i,arr) => x ** arr.length)
//               .reduce( (a,b)=> +a + +b)
//                === value
// }

// console.log( squareDigits(153));

// function squareDigits2(num){
//     return +num.toString().split('').map(i => i * i).join('');    
// }

// function squareDigits3(num){
//   let result = num
//     .toString()
//     .split("")
//     .map( num => parseInt(num) )
//     .map( num => num * num )
//     .join("")
   
//   return parseInt(result)
// }

// function squareDigits4(num){
//   return +String(num).split('').map(function(num){return +num * +num;}).join('');
// }