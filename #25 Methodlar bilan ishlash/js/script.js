"use strict";

// // old pattern

// const box = document.getElementById("box");
// // console.log(box);

// const buttons = document.getElementsByTagName("button");
// // console.log(buttons);

// const circle = document.getElementsByClassName("circle");
// // console.log(circle);

// // new pattern

// const heart = document.querySelector(".heart");

// // console.log(heart);

// const hearts = document.querySelectorAll(".heart");
// hearts.forEach((item) => console.log("1-", item));
// console.log(hearts);

const box = document.querySelector(".box");
const buttons = document.querySelectorAll("button");
const hearts = document.querySelectorAll(".heart");
const circles = document.querySelectorAll(".circle");
const circleWrapper = document.querySelector(".circle__wrapper");

// box.style.backgroundColor = "red";
// box.style.width = "100px";
// box.style.height = "100px";

box.style.cssText = "background-color: red";

buttons[0].style.width = "100px";

// for (let i = 0; i <= hearts.length; i++) {
//   hearts[i].style.cssText = "background-color: green";
// }

hearts.forEach((item) => {
  // item.style.cssText = "background-color: gray";
  item.style.backgroundColor = "gray";
});

const myCircle = document.createElement("div");

myCircle.classList.add("circle");

// circleWrapper.before(myCircle);

// circles[0].before(myCircle);

// circles[1].remove();
// circles[2].replaceWith(myCircle);
circleWrapper.append(myCircle);
// myCircle.innerText = "E";
myCircle.innerHTML = "E";

// circleWrapper.insertAdjacentHTML("beforebegin", "<strong>hello</strong>");
