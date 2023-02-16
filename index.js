/**1 задание */
let str = "Hello Word";
let strUpperCase = str.toUpperCase();
console.log(strUpperCase);

/**2 задание */
function searchStart(arr, str) {
  const searchStr = str.toLowerCase();

  const filteredArr = arr.filter((item) => {
    const itemLowerCase = item.toLowerCase();

    return itemLowerCase.startsWith(searchStr);
  });
  return filteredArr;
}

/**3 задание */
let num = 32.58884;
let roundedNum = Num.toFixed(1);

let nr = 32.58884;
let roundedNr = Math.round(nr);

let numar = 32.58884;
let roundedNumar = Math.floor(numar);

/**4 задание */
const numbers = [52, 53, 49, 77, 21, 32];

const smallest = Math.min(...numbers);
const largest = Math.max(...numbers);

console.log(`Smallest number: ${smallest}`);
console.log(`Largest number: ${largest}`);

/**5 задание */
function getRandomNumber() {
  const min = 1;
  const max = 10;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNum);
}

/**6 задание */
function getRandomArrNumbers(num) {
  const arrLength = Math.floor(num / 2);
  const result = [];

  for (let i = 0; i < arrLength; i++) {
    result.push(Math.floor(Math.random() * (num + 1)));
  }
  return result;
}
console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

/**7 задание */

function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomIntInRange(1, 10));
console.log(getRandomIntInRange(50, 100));

/**8 задание */
const currenteDate = new Date();
console.log(currenteDate.toDateString());

/**9 задание */
const currentDate = new Date();
const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);

console.log(futureDate.toDateString());

/**10 задание */
function formatDate(date) {
  const daysOfWeek = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const dayOfWeek = daysOfWeek[date.getDay()];

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `Date: ${day} ${month} ${year} is ${dayOfWeek}.\nTime: ${hours}:${minutes}:${seconds}`;
}

const now = new Date();
const formattedDate = formatDate(now);
alert(formattedDate);
