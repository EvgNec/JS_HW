// # Модуль 2. Заняття 3. Масиви

// ## Example 1 - Базові операції з масивом

// 1. Створіть масив `genres` з елементами «Jazz» та «Blues».
// 2. Додайте «Рок-н-рол» до кінця.
// 3. Виведіть у консоль перший елемент масиву.
// 4. Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву
//    довільної довжини.
// 5. Видаліть перший елемент та виведіть його в консоль.
// 6. Вставте «Country» та «Reggae» на початок масиву.

// ```js
const genres = ['Jazz', 'Blues'];
// genres.push('Rock')
// const genres2 = genres.slice(-1);
// console.log(genres);
// console.log(genres[genres.length - 1]);
// console.log(genres2);
// console.log(genres.at(-1));
// // console.log(genres.splice(0, 1));
// // console.log(genres);
// console.log(genres.shift());
// console.log(genres);
// genres.unshift('Country', 'Reggae');
// // console.log(genres);
// genres.splice(0, 0, 'Country');
// console.log(genres);
// ```

// ## Example 2 - Масиви та рядки

// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення
// яких зберігаються у змінній `values` у вигляді рядка. Значення гарантовано
// розділені пробілом.

// ```js
// const values = '8 11';
// const valuesArr = values.split(' ');
// console.log("valuesArr", valuesArr)
// const result = Number(valuesArr[0]) * Number(valuesArr[1]);
// console.log(result);
// ```

// ## Example 3 - Перебір масиву

// Напиши скрипт для перебору масиву `fruits` циклом `for`. Для кожного елемента
// масиву виведи в консоль рядок у форматі `номер_елемента: значення_елемента`.
// Нумерація елементів повинна починатися з `1`.

// ```js
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(`${i + 1}: ${fruits[i]}`);
// };
// for (const fruit of fruits) { 
//     const i = fruits.indexOf(fruit);
//    console.log(`${i + 1}: ${fruits[i]}`);
// }
// ```

// ## Example 4 - Масиви та цикли

// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У
// змінних `names` та `phones` зберігаються рядки імен та телефонних номерів,
// розділені комами. Порядковий номер імен та телефонів у рядках вказують на
// відповідність. Кількість імен та телефонів гарантовано однакова.

// ```js
// const names = 'Jacob,William,Solomon,Artemis'.split(',');
// const phones = '89001234567,89001112233,890055566377,890055566300'.split(',');
// console.log(names, phones);
// for (const name of names) {
//     const i = names.indexOf(name);
//     console.log(i, name, phones[i]);
// }
// ```

// ## Example 5 - Масиви та рядки

// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і
// останнього. Результуючий рядок не повинен починатися або закінчуватися
// символ пробілу. Скрипт повинен працювати для будь-якого рядка.

// ```js
// const string = 'Welcome to the future'.split(' ');
//     string.shift();
//     string.pop();   
// console.log(string.join(' '));
// ```

// ## Example 6 - Масиви та рядки

// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить
// його в консоль.

// ```js
// const string = 'Welcome to the future'.split('');
// console.log(string);
// console.log(string.reverse());
// const string2 = string.reverse();
// console.log(string.reverse().join(''));
// console.log("string.reverse().join('')", string.reverse().join(''))

// // ```

// ## Example 7 - Сортування масиву із циклом

// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою
// елемента.

// ```js
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// console.log(langs.sort());
// console.log(langs.sort().reverse());
// ```

// ## Example 8 - Пошук елемента

// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для
// будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// ```js
// const numbers = [2, 17, 94, 1, -5, 23, 37];
// let min = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//     min = Math.min(min, numbers[i]);
// }
// console.log(min); // 1
// ```
