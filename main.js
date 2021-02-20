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

for (let i = 0; i < 8; i++) {
  let userCount = +prompt("Введіть будь-яке число").trim();

  switch (true) {
    case userCount > 0:
      positiveNumber += 1;
      break;
    case userCount < 0:
      negativeNumber += 1;
      break;
    case userCount === 0:
      zero += 1;
      break;
    default:
      console.log("Щось пішло не так");
  }
}

alert(
  `Статистика: позитивних: ${positiveNumber}, негативних: ${negativeNumber}, нуль: ${zero},`
);
