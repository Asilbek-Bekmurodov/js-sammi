"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const adv = document.querySelectorAll("img");
  const promoBg = document.querySelector(".promo__bg");
  const promoGenre = document.querySelector(".promo__genre");
  const seriesList = document.querySelector(".promo__interactive-list");
  const form = document.querySelector(".add");
  const inputVal = document.querySelector(".adding__input");
  const checkBox = document.querySelector('[type="checkbox"]');
  const btn = document.querySelector("button");

  const seriesDB = {
    series: [
      "Omar",
      "The Final Legacy",
      "hello",
      "Magnificent Century",
      "The Great Seljuks: Guardians...",
    ],
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let newSeries = inputVal.value;
    const favorite = checkBox.checked;

    if (favorite === true) {
      console.log("sevimli serial qoshildi");
    }

    if (newSeries.length > 18) {
      // newSeries = `${newSeries.substring(0, 18)}...`;
      newSeries = `${newSeries.substring(0, 18)}...`;
    }

    if (newSeries) {
      seriesDB.series.push(newSeries);
      createList(seriesList, seriesDB.series);
      event.target.reset();
    }
  });

  function changes() {
    promoGenre.innerText = "Comedy";
    // promoBg.style.backgroundImage = 'url("img/1.jpg")';
    promoBg.style.cssText = 'background-image: url("img/1.jpg")';
  }

  function advRemover(items) {
    items.forEach((item) => {
      item.remove();
    });
  }

  function createList(parent, items) {
    parent.innerHTML = "";
    sortList(items);

    items.forEach((item, idx) => {
      parent.innerHTML += `
    <li class="promo__interactive-item">
      ${idx + 1 + " " + item}
      <div class="delete"></div>
    </li>
    `;
    });

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

    document.querySelectorAll(".delete").forEach((trash, idx) => {
      trash.addEventListener("click", () => {
        trash.parentElement.remove();
        seriesDB.series.splice(idx, 1);
        createList(parent, items);
      });
    });
  }

  function sortList(arr) {
    arr.sort();
  }

  advRemover(adv);
  createList(seriesList, seriesDB.series);
  sortList(seriesDB.series);
  changes();
});
