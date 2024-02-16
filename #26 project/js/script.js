"use strict";

const adv = document.querySelectorAll("img");
const promoBg = document.querySelector(".promo__bg");
const promoGenre = document.querySelector(".promo__genre");
const seriesList = document.querySelector(".promo__interactive-list");
adv.forEach((item) => {
  item.remove();
});

const seriesDB = {
  series: [
    "Omar",
    "The Final Legacy",
    "hello",
    "Magnificent Century",
    "The Great Seljuks: Guardians...",
  ],
};

promoGenre.innerText = "Comedy";

// promoBg.style.backgroundImage = 'url("img/1.jpg")';
promoBg.style.cssText = 'background-image: url("img/1.jpg")';

// seriesList.innerHTML = "";

// seriesDB.series.forEach((item, idx) => {
//   seriesList.insertAdjacentHTML(
//     "beforeend",
//     `<li class="promo__interactive-item">
//   ${item}
//   <div class="delete"></div>
//   </li>`
//   );
// });

seriesList.innerHTML = "";

seriesDB.series.forEach((item, idx) => {
  seriesList.innerHTML += `
  <li class="promo__interactive-item">
                ${idx + 1 + " " + item}
                <div class="delete"></div>
              </li>
  `;
});
