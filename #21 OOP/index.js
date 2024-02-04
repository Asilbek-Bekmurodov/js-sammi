"use strict";

// const arr = [1, 2, 3];

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(...arr));

let car = {
  motor: "X",
  color: "red",
  isAirbag: true,
};

let gm = {
  isAirbag: false,
};

Object.setPrototypeOf(gm, car);

// gm.__proto__ = car; eski usul

const bmw = Object.create(car);
console.log(bmw);

// let str = ["1", 3];
// let str2 = [];
// Object.setPrototypeOf(str2, str);

console.log(str2[1]);
