//* 1 задание
let arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 10) {
    console.log(arr[i]);
    break;
  } else {
    console.log(arr[i]);
  }
}
//* 2 задание
let num = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < num.length; i++) {
  if (num[i] === 4) {
    console.log("Позиция числа 4 в массиве:", i);
  }
}

//* 3 задание

let join = [1, 3, 5, 10, 20];

let result = join.join(" ");

console.log(result);

//* 4 задание

let originalArray = [];
let evenArray = [];

for (let i = 0; i < 10; i++) {
  let randomNum = Math.floor(Math.random() * 11);
  originalArray.push(randomNum);

  if (randomNum % 2 === 0) {
    evenArray.push(randomNum);
  }
}

console.log("Original Array:", originalArray);
console.log("Array with even values:", evenArray);

//* 5 задание
let multidimensionalArray = [];

for (let i = 0; i < 3; i++) {
  let innerArray = [];

  for (let j = 0; j < 3; j++) {
    innerArray.push(1);
  }

  multidimensionalArray.push(innerArray);
}
console.log(multidimensionalArray);

//* 6 задание
let originaliArray = [1, 1, 1];

originaliArray.push(2, 2, 2);

console.log(originaliArray);

//* 7 задание
let origiArray = [9, 8, 7, "a", 6, 5];

origiArray.sort(function (a, b) {
  return a - b;
});

let filteredArray = origiArray.filter(function (element) {
  return typeof element === "number";
});

console.log(filteredArray);

//* 8 задание
let newArray = [9, 8, 7, 6, 5];

let userInput = parseInt(prompt("Введите число от 1 до 10:"));

if (newArray.includes(userInput)) {
  console.log(`Номер ${userInput} находится в исходном массиве.`);
} else {
  console.log(`Номер ${userInput} не находится в исходном масиве`);
}

//* 9 задание
let string = "abcdef";
let reversedString = string.split("").reverse().join("");

console.log(reversedString);

//* 10 задание
let numbers = [];
for (let i = 0; i < 6; i++) {
  numbers[i] = Math.floor(Math.random() * 10) + 1;
}
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
let mean = sum / numbers.length;
console.log(mean);

//* 11 задание
let arra = [
  [1, 2, 3],
  [4, 5, 6],
];
let newArr = [];
for (let i = 0; i < arra.length; i++) {
  for (let j = 0; j < arra[i].length; j++) {
    newArr.push(arra[i][j]);
  }
}
console.log(newArr);

//* 12 задание
let ary = [1, 5, 2, 8, 9, 3];
for (let i = 0; i < ary.length - 1; i++) {
  console.log(ary[i] + ary[i + 1]);
}
