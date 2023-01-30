/**1 задание */
console.log("Hi");
console.log("Hi");

/**2 задание */

let num = 1;
while (num < 6) {
  console.log(num);
  num++;
}

/**3 задание */

let nume = 7;
while (nume < 23) {
  console.log(nume);
  num++;
}

/**4 задание */

const obj = { Kolya: 200, Vasya: 300, Petya: 400 };
for (const key in obj) {
  console.log(`${key}зарплата 200 доларов.`);
}

/**5 задание */

let n = 1000;
let numer = 0;
while (n >= 50) {
  n = n / 2;
  numer++;
}
console.log(n, numer);

/**6 задание */
let firstFriday;
let date = new Date();

// Determine the number of the first Friday of the month
if (date.getDate() <= 7) {
  firstFriday = 7 - ((date.getDay() + 6) % 7);
} else {
  firstFriday = 7 - ((date.getDay() + 6) % 7) + 7;
}

// Print the reminder message for each Friday of the month
for (let i = firstFriday; i <= 31; i += 7) {
  if (i > 31) break;
  console.log(`сегодня пятница, ${i}Нам нужно подготовить отчет.`);
}
