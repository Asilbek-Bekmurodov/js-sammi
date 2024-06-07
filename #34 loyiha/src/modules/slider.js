function slider() {
  const slide = document.querySelectorAll(".offer__slide"),
    next = document.querySelector(".offer__slider-next"),
    prev = document.querySelector(".offer__slider-prev"),
    total = document.querySelector("#total"),
    current = document.querySelector("#current");
  let showIdx = 1;

  showSlide(showIdx);

  if (slide.length < 10) {
    total.innerText = `0${slide.length}`;
  } else {
    total.innerText = `0${slide.length}`;
  }

  function showSlide(idx) {
    if (idx > slide.length) {
      showIdx = 1;
    }

    if (idx < 1) {
      showIdx = slide.length;
    }

    slide.forEach((item) => {
      item.style.display = "none";
      slide[showIdx - 1].style.display = "block";
    });

    if (showIdx < 10) {
      current.innerText = `0${showIdx}`;
    } else {
      current.innerText = `0${showIdx}`;
    }
  }
  function slidePlus(num) {
    showSlide((showIdx += num));
  }

  next.addEventListener("click", () => {
    slidePlus(1);
  });
  prev.addEventListener("click", () => {
    slidePlus(-1);
  });
}

module.exports = slider;
