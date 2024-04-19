"use strict";

// function logger(speed) {
//   console.log(`car: ${this.name}, color: ${this.color} speed ${speed}`);
// }

// const car = {
//   name: "BMW",
//   color: "red",
// };

// bind - yangi funkiya qaytarib beradi
// logger.apply(car, [400]);
// logger.call(car, 300);

// logger();

// function calc(num) {
//   return this * num;
// }

// const multiple = calc.bind(2);

// console.log(multiple(7));

const btn = document.querySelector("button");
console.log(btn);

btn.addEventListener("click", function () {
  this.style.width = "400px";
});

const person = {
  name: "Asilbek",
  age: 21,
  func: function () {
    const a = () => {
      console.log(this.name);
    };
    a();
  },
};

person.func();

// arrow function hech qanday contextga  ega emas u o'zini tepasidagi contextga osiladi
