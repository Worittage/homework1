/**1 задание */
function findSmaller(a, b) {
  return a < b ? a : b;
}

let num1 = 8;
let num2 = 4;
let smaller = findSmaller(num1, num2);
alert(smaller);

/**2 задание */
function evenOrOdd(num) {
  return num % 2 === 0 ? "Число нечетное" : "если нечетное";
}

/**3,1 задание  */
function printSquare(num) {
  console.log(num * num);
}

let numbere = 8;
printSquare(numbere);

/**3.2 задание */

function findSquare(num) {
  return num * num;
}
let number = 8;
let square = findSquare(number);
alert(square);
//////

function cubeNumber() {
  let num = prompt("Введите номер");
  if (isNaN(num)) {
    return "Переданный параметр не является числом";
  }
  let result = num * num * num;
  return `${num} в кубе ровно ${result}`;
}

for (let i = 0; i <= 10; i++) {
  alert(cubeNumber(i));
}

/**4 задание  */
function askAge() {
  const age = parseInt(prompt("Сколько вам лет?"));
  if (age < 0) {
    console.log("Вы ввели неправильное значение");
  } else if (age >= 0 && age <= 12) {
    console.log("Привет, друг!");
  } else if (age >= 13) {
    console.log("Добро пожаловать!!");
  }
}

/**5 задание */
function multiplyNumbers(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Одно или оба значения не являются числом";
  }

  return a * b;
}

/**6 задание */
function cubeNumber(n) {
  if (isNaN(n)) {
    return "Переданный параметр не является числом";
  }

  return `${n} в кубе равно ${n ** 3}`;
}

for (let i = 0; i <= 10; i++) {
  console.log(cubeNumber(i));
}

/**7 задание */
function getSeason(month) {
  if (month < 1 || month > 12) {
    return "Invalid month";
  }

  if (month === 12 || month <= 2) {
    return "зима";
  } else if (month >= 3 && month <= 5) {
    return "весна";
  } else if (month >= 6 && month <= 8) {
    return "лето";
  } else {
    return "осень";
  }
}

console.log(getSeason(2));
console.log(getSeason(5));
console.log(getSeason(7));
console.log(getSeason(10));
console.log(getSeason(13));
