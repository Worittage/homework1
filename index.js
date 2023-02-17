/**1 задание */
function getResult(arr, callback) {
  return callback(arr);
}

function sum(arr) {
  return arr.reduce((total, num) => total + num, 0);
}
function mult(arr) {
  return arr.reduce((total, num) => total * num, 1);
}

const arr = [3, 4, 1, 9];
const resultSum = getResult(arr, sum);
const resultMult = getResult(arr, mult);

/**2 задание */
const users = [
  { name: "Jon", age: 22 },
  { name: "Richard", age: 18 },
  { name: "Anton", age: 32 },
  { name: "Lida", age: 23 },
  { name: "Bob", age: 44 },
];

users.sort((a, b) => a.age - b.age);
console.log(users);

/**3 задание */
function each(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

function reversArr(element, index, array) {
  const lastIndex = array.length - 1;
  array[index] = array[lastIndex - index];
  array[lastIndex - index] = element;
}

function toNumberArr(element, index, array) {
  const num = Number(element);
  if (!isNaN(num)) {
    array[index] = num;
  } else {
    array.splice(index, 1);
  }
}

const arr1 = [1, "4", 9, "two"];
each(arr1, reversArr);

const arr2 = [1, "4", false, 9, "two"];
each(arr2, toNumberArr);

/**4 задание */
function printCurrenDate() {
  const currentDate = new Date();
  console.log(currentDate);
}

let count = 0;
const intervalId = setInterval(() => {
  printCurrentDate();
  count += 3;
  if (count >= 30) {
    clearInterval(intervalId);
    console.log("30 секунд прошло");
  }
}, 3000);

/**5 задание */
function calling() {
  console.log("звоню!");
}

function beeps() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Идут гудки...");
      resolve();
    }, 1000);
  });
}

function talk() {
  console.log("Разговор");
}

calling()
  .then(() => beeps())
  .then(() => talk());
