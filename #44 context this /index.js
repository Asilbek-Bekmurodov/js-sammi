"use strict";

// ******************* ------------------- ********************
//  this bu brornimaga qaram bo'ladi
// functionlarda this
// funksiyalar ichida this chaqirganimizda agar use strict ishlatgan bo'lsak this = undefined bo'ladi
//  use strict ishlatilmagan holatda  this = window bo'ladi
// arrow function holatida use strict ishlatilsa ham windowga teng

const myFunc = () => {
  console.log(this);
};

myFunc();

// ******************* ------------------- ********************
// objectda this - shu objectni o'ziga teng bo'ladi
// agar object ichidagi metod ichida function yozilsa undagi this undefinedga teng bo'ladi

// const person = {
//   name: "asilbek",
//   sayHello: function () {
//     console.log(`hello ${this.name}`);
//   },
// };

// person.sayHello();

// ******************* ------------------- ********************

// constructor ichida this
// constructor funksiyada this yangi obyektni ekzemplyariga teng
// const Car = function (name, color) {
//   this.name = name;
//   this.color = color;
//   console.log(this)
// };

// const bmw = new Car("m4", "black");
// const merce = new Car('merce', 'asd')


// clouser

