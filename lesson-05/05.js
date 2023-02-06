// # Модуль 3. Занятие 1. Объекты

// <!-- https://github.com/luxplanjay/js-33-qna/blob/03-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B/js/vehicles.js -->

// ## Example 1 - Основы обьектов

// Напиши скрипт, который, для объекта `user`, последовательно:

// - добавляет поле `mood` со значением `'happy'`
// - заменяет значение `hobby` на `'skydiving'`
// - заменяет значение `premium` на `false`
// - выводит содержимое объекта `user` в формате `ключ:значение` используя
//   `Object.keys()` и `for...of`

// ### Код

// ```js
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
// ```

// ## Example 2 - метод Object.values()

// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для
// суммирования всех зарплат и сохраните результат в переменной sum. Должно
// получиться 390. Если объект `salaries` пуст, то результат должен быть 0.

// ### Код

// ```js
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// ```

// ## Example 3 - Массив объектов

// Напишите ф-цию `calcTotalPrice(stones, stoneName)`, которая принимает массив
// обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость
// камней с таким именем, ценой и количеством из обьекта

// ### Код

// ```js
// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//     { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];
// // ```
// const calcTotalPrice = function (stones, stoneName) {
//     let sum = 0;
//     for (const stone of stones) {

//         if (stone.name !== stoneName) {
//             continue;
//         }
//         sum += stone.price * stone.quantity;

//     }
//     return sum;
// }

//        console.log(calcTotalPrice(stones,'Сапфир'));


// ## Example 4 - Комплексные задачи

// Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`
// в котором необходимо реализовать методы для работы с балансом и историей
// транзакций.

// ```js
// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
    createTransaction(amount, type) {
        return {
            id: this.transactions.length,
            amount,
            type,
      }
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
    deposit(amount) {
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);

        this.balance += amount;        
        this.transactions.push(transaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
    withdraw(amount) {
        if (amount > this.balance) {
            console.log('No money no huney');
            return;
        }
        
        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);

        this.balance -= amount;        
      this.transactions.push(transaction);
      },
  /*
   * Метод возвращает текущий баланс
   */
    getBalance() {
        return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (transaction.id === id) {
                return transaction;
            }
      }

  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
    getTransactionTotal(type) {
        let sum = 0;
             for (const transaction of this.transactions) {
            if (transaction.type === type) {
                sum += transaction.amount;
            }
        } 
        return sum;
  },
};
// ```
console.log(account.getBalance());

account.deposit(100);
console.log(account.getBalance());
console.log(account.transactions);

account.withdraw(50);
console.log(account.getBalance());
console.log(account.transactions);

account.withdraw(500);
console.log(account.getBalance());
console.log(account.transactions);
console.log('-->', account.getTransactionDetails(0));
account.deposit(200);
account.deposit(50);
console.log(account.getBalance());
console.log(account.getTransactionTotal(Transaction.DEPOSIT));

