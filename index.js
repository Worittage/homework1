/*1 задание */

let password = "пароль";
let input = prompt("Введите пароль");

if (input === password) {
  console.log("Пароль введен верно");
} else {
  console.log("Пароль введен неправильно");
}

/**2 задание  */

let c = 2;
if (c > 0 && c < 10) {
  console.log("верно");
} else {
  console.log("неверно");
}

/**3 задание */

let d = 50;
let e = 120;

if (d > 100 || e > 100) {
  console.log(верно);
} else {
  console.log(неверно);
}

/**4 задание */
let a = "2";
let b = "3";
alert(Number(a) + Number(b));

/**5 задание */

let monthNumber = 12;

if (monthNumber < 1 || monthNumber > 12) {
  console.log("Неверный номер месяца. Пожалуйста, введите число от 1 до 12.");
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
  }
}
