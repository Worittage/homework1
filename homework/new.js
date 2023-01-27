/*задание 1*/

let password = "пароль";
let userInput = prompt("Введите пароль");

if (userInput === password) {
  console.log("Пароль введен верно");
} else {
  console.log("Пароль введен неправильно");
}

/*задание 2*/
let c = 2;
if (c > 0 && c < 10) {
  console.log("верно");
} else {
  console.log("неверно");
}

/**задание 3 */
let d = 50;
let e = 120;

if (d > 100 || e > 100) {
  console.log("верно");
} else {
  console.log("неверно");
}

/**задание 4 */
let a = "2";
let b = "3";
alert(parseInt(a) + parseInt(b));

/**задание 5 */
let monthNumber = 12;

if (monthNumber > 12) {
  console.log("Invalid month number");
} else {
  switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      console.log("зима");
      break;
    case 3:
    case 4:
    case 5:
      console.log("весна");
      break;
    case 6:
    case 7:
    case 8:
      console.log("лето");
      break;
    case 9:
    case 10:
    case 11:
      console.log("осень");
      break;
    default:
      console.log("Неверный номер месяца");
  }
}
