// 1.  Знайдіть суму всіх цифр від 1 до 100.
let total = null;
for (let i = 0; i <= 100; i++) {
  total += i;
}
console.log(total);

// 2.  Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран.

const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 3. Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення

const arr1 = [-1, 22, 3, 44, 5];
console.log(Math.max(...arr1));

// або:
let maxCount = arr1[1];
for (let i = 1; i < arr1.length; i++) {
  arr1[i] > maxCount ? (maxCount = arr1[i]) : maxCount;
}
console.log(maxCount);

/*
4. Попросити юзера ввести 8 чисел і скільки він ввів додатніх, 
відємних та нулів. Вивести статистику на екран. Також досмтатньо тільки 1 змінної для отримання даних від юзера. 
*/

let positiveNumber = 0;
let negativeNumber = 0;
let zero = 0;

// for (let i = 0; i < 8; i++) {
//   let userCount = +prompt("Введіть будь-яке число").trim();

//   switch (true) {
//     case userCount > 0:
//       positiveNumber += 1;
//       break;
//     case userCount < 0:
//       negativeNumber += 1;
//       break;
//     case userCount === 0:
//       zero += 1;
//       break;
//     default:
//       console.log("Щось пішло не так");
//   }
// }

alert(
  `Статистика: позитивних: ${positiveNumber}, негативних: ${negativeNumber}, нуль: ${zero},`
);

// 5. Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8

const num = 8;

for (let i = 1; i < 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

// 6. Є масив з елементами 2, 5, 9, 15, 0, 4. З допомогою цикла for і оператора if вивести на екран цифри, які більше 3-х, але менше 10.

const arr3 = [2, 5, 9, 15, 0, 4];

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] > 3 && arr3[i] < 10) {
    console.log(arr3[i]);
  }
}

// 7. Створити калькулятор який буде зациклений. Запитати у юзера 2 числа та знак , провести математичну операцію,
// далі вивести результат і спитатись чи хоче юзер повторити ?

let statusAction = true;

do {
  let result = null;
  const userNum1 = +prompt("Введіть перше число");
  const userNum2 = +prompt("Введіть друге число");
  const mathOperation = prompt("Оберіть математичну операцію (- + / *)");

  switch (mathOperation) {
    case "-":
      result = userNum1 - userNum2;
      break;
    case "+":
      result = userNum1 + userNum2;
      break;
    case "/":
      result = userNum1 / userNum2;
      break;
    case "*":
      result = userNum1 * userNum2;
      break;
    default:
      console.log("Щось пішло не так");
  }

  alert(result);
  statusAction = confirm("Якщо бажаєте повторити - жмакніть Ок");
} while (statusAction);
