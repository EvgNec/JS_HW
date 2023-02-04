// # Модуль 2. Занятие 4. Функции

// ## Example 1 - Индекс массы тела

// Напиши функцию `calcBMI(weight, height)` которая рассчитывает и возвращает
// индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на
// квадрат высоты человека в метрах.

// Вес и высота будут специально переданы как строки. Нецелые числа могут быть
// заданы в виде `24.7` или `24,7`, то есть в качестве разделителя дробной части
// может быть запятая.

// Индекс массы тела необходимо округлить до одной цифры после запятой;

// ```js
// function calcBMI(weight, height) {
//     weight = weight.replace(',', '.');
//     height = height.replace(',', '.');
//     let rezult = weight / (Math.pow(height,2));
//     rezult = Math.round(parseFloat(rezult * 10)) / 10;
//     return  rezult;
// }
// const bmi = calcBMI('88,3', '1.75');
// //  const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8
// let t = 5.5;
// console.log(Math.pow(t, 2));
// ```

// ## Example 2 - Меньшее из чисел

// Напиши функцию `min(a,b)`, которая возвращает меньшее из чисел `a` и `b`.

// ```js
// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1
// ```

// ## Example 3 - Площадь прямоугольника

// Напиши функцию `getRectArea(dimensions)` для вычисления площади прямоугольника
// со сторонами, значения которых будут переданы в параметр `dimensions` в виде
// строки. Значения гарантированно разделены пробелом.

// ```js
// function getRectArea(dimensions) {}

// console.log(getRectArea('8 11'));
// ```

// ## Example 4 - Логирование элементов

// Напиши функцию `logItems(items)`, которая получает массив и использует цикл
// `for`, который для каждого элемента массива будет выводить в консоль сообщение в
// формате `<номер элемента> - <значение элемента>`. Нумерация элементов должна
// начинаться с `1`.

// Например для первого элемента массива `['Mango', 'Poly', 'Ajax']` с индексом `0`
// будет выведено `1 - Mango`, а для индекса 2 выведет `3 - Ajax`.

// ```js
// function logItems(items) {}

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// ```

// ## Example 5 - Логирование контактов

// Напиши функцию `printContactsInfo(names, phones)` которая выводит в консоль имя
// и телефонный номер пользователя. В параметры `names` и `phones` будут переданы
// строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и
// телефонов в строках указывают на соответствие. Количество имен и телефонов
// гарантированно одинаковое.

// ```js
// function printContactsInfo(names, phones) {}

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );
// ```

// ## Example 6 - Поиск наибольшего элемента

// Напиши функцию `findLargestNumber(numbers)`которая ищет самое большое число в
// массиве.

// ```js
// function findLargestNumber(numbers) {}

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
// ```

// ## Example 7 - Среднее значение

// Напишите функцию `calAverage()` которая принимает произвольное кол-во аргументов
// и возвращает их среднее значение. Все аругменты будут только числами.

// ```js
// function calAverage() {}

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
// ```

// ## Example 8 - Форматирование времени

// Напиши функцию `formatTime(minutes)` которая переведёт значение `minutes`
// (количество минут) в строку в формате часов и минут `HH:MM`.

// ```js
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// function formatTime(minutes) {}

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
// ```

// ## Example 9 - Коллекция курсов (includes, indexOf, push и т. д.)

// Напишите функции для работы с коллекцией обучающих курсов `courses`:

// - `addCourse(name)` - добавляет курс в конец коллекции
// - `removeCourse(name)` - удаляет курс из коллекции
// - `updateCourse(oldName, newName)` - изменяет имя на новое

// ```js
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас уже есть такой курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс с таким имененем не найден'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// ```


// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
// words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// console.log(message.split(" ")); // ["JavaScript", "essentials"]


// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
// let price;
//   message = message.split(" ");
//   price = pricePerWord *  message.length;
//     return price;

//    // Change code above this line
// }

// calculateEngravingPrice("JavaScript is in my blood", 10);

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
// for (const element of array) {
//     string = array.join(delimiter);
// }
//   // Change code above this line
//     console.log(string);
//     return string;
// }
// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
// makeStringFromArray(["top", "picks", "for", "you"], "_")
// function slugify(title) {
//   // Change code below this line
// title = title.toLowerCase().split(' ').join('-');
//     return title;
  
// //    console.log(title);

//   // Change code above this line
// }

// slugify("Arrays for begginers");
// slugify("How to become a JUNIOR developer in TWO WEEKS");

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls =  fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length-1);
// const lastThreeEls = fruits.slice(fruits.length - 3, fruits.length);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
//    console.log(lastThreeEls);


// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     let newArray = firstArray.concat(secondArray);
//     if (newArray.length > maxLength) {
//         newArray = newArray.slice(0, maxLength);
//     }

//     // console.log(newArray);
// return newArray;

//     // Change code above this line
// }
  
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);

// function calculateTotal(number) {
//  // Change code below this line
//   let summ=0;
// for (let i = 1; i <= number; i += 1) {
// summ +=i;
//     }
//     console.log(summ);
// return summ;
//   // Change code above this line
// }

// calculateTotal(1);
// calculateTotal(7);

