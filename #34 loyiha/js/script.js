window.addEventListener("DOMContentLoaded", () => {
  const tabsParent = document.querySelector(".tabheader__items"),
    tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent");
  const loader = document.querySelector(".loader");
  let num = 0;
  // loader
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 2000);

  // tabs
  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }

  tabsParent.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("tabheader__item")) {
      tabs.forEach((item, idx) => {
        if (event.target === item) {
          hideTabContent();
          showTabContent(idx);
          num = idx;
        }
      });
    }
  });

  hideTabContent();
  showTabContent(num);

  setInterval(() => {
    if (num > 3) {
      num = 0;
    } else {
      num++;
    }
    hideTabContent();
    showTabContent(num);
  }, 3000);

  // Timer
  const deadline = "2024-05-20";
  function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds;
    const timer = Date.parse(endtime) - Date.parse(new Date());

    if (timer <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      (days = Math.floor(timer / (1000 * 60 * 60 * 24))),
        (hours = Math.floor((timer / (1000 * 60 * 60)) % 24)),
        (minutes = Math.floor((timer / 1000 / 60) % 60)),
        (seconds = Math.floor((timer / 1000) % 60));
    }

    return { timer, days, hours, minutes, seconds };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timerInterval = setInterval(updateClock, 1000);

    updateClock();
    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);
      if (t.timer <= 0) {
        clearInterval(timerInterval);
      }
    }
  }
  setClock(".timer", deadline);

  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal");

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearInterval(timerId);
  }

  modalTrigger.forEach((item) => {
    item.addEventListener("click", openModal);
  });

  modal.addEventListener("click", (e) => {
    if (e.target == modal || e.target.getAttribute("data-close") == "") {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code == "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  const timerId = setTimeout(openModal, 5000);

  function showModalScroll() {
    if (
      window.scrollY + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      removeEventListener("scroll", showModalScroll);
    }
  }
  window.addEventListener("scroll", showModalScroll);

  class MenuCard {
    constructor(src, alt, desc, price, parentEl, ...classes) {
      this.src = src;
      this.alt = alt;
      this.desc = desc;
      this.price = price;
      this.parent = document.querySelector(parentEl);
      this.usz = 12000;
      this.classes = classes;
    }

    valutaChanger() {
      return this.price * this.usz;
    }

    render() {
      const element = document.createElement("div");

      if (this.classes.length === 0) {
        this.element = "menu__item";
        element.classList.add(this.element);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }

      element.innerHTML = `
          <img src="${this.src}" alt="${this.alt}" />
          <h3 class="menu__item-subtitle">Plan "Usual"</h3>
          <div class="menu__item-descr">
            ${this.desc}
          </div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
            <div class="menu__item-cost">Price:</div>
            <div class="menu__item-total"><span>${this.valutaChanger()} uzs</span> month</div>
          </div>
      `;

      this.parent.append(element);
    }
  }

  // async function getRecourse(url) {
  //   const res = await fetch(url);
  //   return await res.json();
  // }

  // getRecourse("http://localhost:3000/menu").then((data) => {
  //   data.forEach(({ src, alt, desk, price, id }) => {
  //     new MenuCard(src, alt, desk, price, ".menu .container").render();
  //   });
  // });
  axios.get("http://localhost:3000/menu").then((data) => {
    data.data.forEach(({ src, alt, desk, price, id }) => {
      new MenuCard(src, alt, desk, price, ".menu .container").render();
    });
  });

  // axios.get("http://localhost:3000/menu").then((data) => {
  //   data.forEach(({ src, alt, desk, price, id }) => {
  //     new MenuCard(src, alt, desk, price, ".menu .container").render();
  //   });
  // });

  const msg = {
    loading: "../img/Bean Eater@1x-0.3s-200px-200px.svg",
    success: "Thank's for submitting our form",
    failure: "Something went wrong",
  };

  const forms = document.querySelectorAll("form");

  forms.forEach((item) => {
    bindPostData(item);
  });

  async function postData(url, data) {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    if (!res.ok) {
      throw new Error(`something went wrong ${res.status}`);
    }

    return await res;
  }

  function bindPostData(form) {
    form?.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("img");
      statusMessage.src = msg.loading;
      statusMessage.style.cssText = `
      display: block;
      margin: 0 auto;
      `;

      form.insertAdjacentElement("afterend", statusMessage);
      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      // formData.forEach((val, key) => {
      //   obj[key] = val;
      // });

      postData("http://localhost:3000/requests", json)
        .then((data) => data.text())
        .then((data) => {
          console.log(data);
          showThanksModal(msg.success);
          statusMessage.remove();
        })
        .catch((err) => {
          showThanksModal(msg.failure);
          console.log(err);
          statusMessage.remove();
        })
        .finally(() => {
          form.reset();
        });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");
    prevModalDialog.classList.add("hide");
    openModal();

    console.log(message);
    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `
    <div class="modal__content">
      <div data-close class="modal__close">&times;</div>
      <div class="modal__title">${message}</div>
    </div>
    `;

    document.querySelector(".modal").append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hide");
    }, 4000);
  }

  // slider
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
});
