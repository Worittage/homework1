//задание 1

let a = 10;
alert(a);
a = 20;
alert(a);

//задание 2

let year = 2007;
alert(a);

//задание 3

let creator = "Brendan Eich";
alert(creator);

//задание 4

let num1 = 10;
let num2 = 2;

alert("Sum: " + (num1 + num2));
alert("Difference: " + (num1 - num2));
alert("Product: " + num1 * num2);
alert("Quotient: " + num1 / num2);

//задание 5

let result = 2 ** 5;
alert(result);

//задание 6

let num = 9;
let b = 2;
let remainder = a % b;
alert(remainder);

//задание 7

let numberi = 1;

num += 5;

num -= 3;

num *= 7;

num /= 3;

num++;

num--;

alert(num);

let age = prompt("How old are you?");
alert(age);

//задание 8

let user = {
  name: "Bezerdic Eugen",
  age: 30,
  isAdmin: true,
};

// задание 9.0

let username = {
  name: "John Doe",
  age: 30,
  isAdmin: true,
};
console.log(user.name);
console.log(user.age);
console.log(user.isAdmin);

//задание 9.1
let usere = {};
user.cityOfResidence = "New York";
console.log(user.cityOfResidence);

//задание 9.2

let newAge = 45;
user.age = newAge;
console.log(user.age);

// задание 9.3

let user = {
  name: "John Doe",
  age: 30,
  isAdmin: true,
  cityOfResidence: "New York",
};
delete user["cityOfResidence"];
console.log(user.cityOfResidence);

// задание 9.4

let user = {
  name: "John Doe",
  age: 30,
  isAdmin: true,
  cityOfResidence: "New York",
};
let info = prompt("What information do you want to know about the user?");
alert(user[info]);

// задание 10

let name = prompt("What's your name?");
alert(`Hello ${name}!`);
