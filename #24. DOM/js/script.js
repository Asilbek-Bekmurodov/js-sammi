"use strict";

// old pattern

const box = document.getElementById("box");
// console.log(box);

const buttons = document.getElementsByTagName("button");
// console.log(buttons);

const circle = document.getElementsByClassName("circle");
// console.log(circle);

// new pattern

const heart = document.querySelector(".heart");

// console.log(heart);

const hearts = document.querySelectorAll(".heart");
hearts.forEach((item) => console.log("1-", item));
console.log(hearts);
