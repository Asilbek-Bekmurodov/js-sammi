/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../\u0000#34 loyiha/src/js/script.js":
/*!***************************************!*\
  !*** ../ #34 loyiha/src/js/script.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("window.addEventListener(\"DOMContentLoaded\", () => {\n  const clas = __webpack_require__(/*! ../modules/clas */ \"../\\u0000#34 loyiha/src/modules/clas.js\"),\n    form = __webpack_require__(/*! ../modules/form */ \"../\\u0000#34 loyiha/src/modules/form.js\"),\n    loader = __webpack_require__(/*! ../modules/loader */ \"../\\u0000#34 loyiha/src/modules/loader.js\"),\n    modal = __webpack_require__(/*! ../modules/modal */ \"../\\u0000#34 loyiha/src/modules/modal.js\"),\n    slider = __webpack_require__(/*! ../modules/slider */ \"../\\u0000#34 loyiha/src/modules/slider.js\"),\n    tabs = __webpack_require__(/*! ../modules/tabs */ \"../\\u0000#34 loyiha/src/modules/tabs.js\"),\n    timer = __webpack_require__(/*! ../modules/timer */ \"../\\u0000#34 loyiha/src/modules/timer.js\");\n\n  clas();\n  form();\n  loader();\n  modal();\n  slider();\n  tabs();\n  timer();\n});\n\n\n//# sourceURL=webpack://serial/../%00#34_loyiha/src/js/script.js?");

/***/ }),

/***/ "../\u0000#34 loyiha/src/modules/clas.js":
/*!******************************************!*\
  !*** ../ #34 loyiha/src/modules/clas.js ***!
  \******************************************/
/***/ ((module) => {

eval("function clas() {\n  class MenuCard {\n    constructor(src, alt, desc, price, parentEl, ...classes) {\n      this.src = src;\n      this.alt = alt;\n      this.desc = desc;\n      this.price = price;\n      this.parent = document.querySelector(parentEl);\n      this.usz = 12000;\n      this.classes = classes;\n    }\n\n    valutaChanger() {\n      return this.price * this.usz;\n    }\n\n    render() {\n      const element = document.createElement(\"div\");\n\n      if (this.classes.length === 0) {\n        this.element = \"menu__item\";\n        element.classList.add(this.element);\n      } else {\n        this.classes.forEach((className) => element.classList.add(className));\n      }\n\n      element.innerHTML = `\n          <img src=\"${this.src}\" alt=\"${this.alt}\" />\n          <h3 class=\"menu__item-subtitle\">Plan \"Usual\"</h3>\n          <div class=\"menu__item-descr\">\n            ${this.desc}\n          </div>\n          <div class=\"menu__item-divider\"></div>\n          <div class=\"menu__item-price\">\n            <div class=\"menu__item-cost\">Price:</div>\n            <div class=\"menu__item-total\"><span>${this.valutaChanger()} uzs</span> month</div>\n          </div>\n      `;\n\n      this.parent.append(element);\n    }\n  }\n\n  axios.get(\"http://localhost:3000/menu\").then((data) => {\n    data.data.forEach(({ src, alt, desk, price, id }) => {\n      new MenuCard(src, alt, desk, price, \".menu .container\").render();\n    });\n  });\n}\n\nmodule.exports = clas;\n\n\n//# sourceURL=webpack://serial/../%00#34_loyiha/src/modules/clas.js?");

/***/ }),

/***/ "../\u0000#34 loyiha/src/modules/form.js":
/*!******************************************!*\
  !*** ../ #34 loyiha/src/modules/form.js ***!
  \******************************************/
/***/ ((module) => {

eval("function form() {\n  const msg = {\n    loading: \"../img/Bean Eater@1x-0.3s-200px-200px.svg\",\n    success: \"Thank's for submitting our form\",\n    failure: \"Something went wrong\",\n  };\n\n  const forms = document.querySelectorAll(\"form\");\n\n  forms.forEach((item) => {\n    bindPostData(item);\n  });\n\n  async function postData(url, data) {\n    const res = await fetch(url, {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n      },\n      body: data,\n    });\n    if (!res.ok) {\n      throw new Error(`something went wrong ${res.status}`);\n    }\n\n    return await res;\n  }\n\n  function bindPostData(form) {\n    form?.addEventListener(\"submit\", (e) => {\n      e.preventDefault();\n\n      const statusMessage = document.createElement(\"img\");\n      statusMessage.src = msg.loading;\n      statusMessage.style.cssText = `\n      display: block;\n      margin: 0 auto;\n      `;\n\n      form.insertAdjacentElement(\"afterend\", statusMessage);\n      const formData = new FormData(form);\n      const json = JSON.stringify(Object.fromEntries(formData.entries()));\n      // formData.forEach((val, key) => {\n      //   obj[key] = val;\n      // });\n\n      postData(\"http://localhost:3000/requests\", json)\n        .then((data) => data.text())\n        .then((data) => {\n          console.log(data);\n          showThanksModal(msg.success);\n          statusMessage.remove();\n        })\n        .catch((err) => {\n          showThanksModal(msg.failure);\n          console.log(err);\n          statusMessage.remove();\n        })\n        .finally(() => {\n          form.reset();\n        });\n    });\n  }\n\n  function showThanksModal(message) {\n    const prevModalDialog = document.querySelector(\".modal__dialog\");\n    prevModalDialog.classList.add(\"hide\");\n    openModal();\n\n    console.log(message);\n    const thanksModal = document.createElement(\"div\");\n    thanksModal.classList.add(\"modal__dialog\");\n    thanksModal.innerHTML = `\n    <div class=\"modal__content\">\n      <div data-close class=\"modal__close\">&times;</div>\n      <div class=\"modal__title\">${message}</div>\n    </div>\n    `;\n\n    document.querySelector(\".modal\").append(thanksModal);\n    setTimeout(() => {\n      thanksModal.remove();\n      prevModalDialog.classList.add(\"show\");\n      prevModalDialog.classList.remove(\"hide\");\n    }, 4000);\n  }\n}\n\nmodule.exports = form;\n\n\n//# sourceURL=webpack://serial/../%00#34_loyiha/src/modules/form.js?");

/***/ }),

/***/ "../\u0000#34 loyiha/src/modules/loader.js":
/*!********************************************!*\
  !*** ../ #34 loyiha/src/modules/loader.js ***!
  \********************************************/
/***/ ((module) => {

eval("function loader() {\n  const loader = document.querySelector(\".loader\");\n\n  setTimeout(() => {\n    loader.style.opacity = \"0\";\n    setTimeout(() => {\n      loader.style.display = \"none\";\n    }, 500);\n  }, 2000);\n}\n\nmodule.exports = loader;\n\n\n//# sourceURL=webpack://serial/../%00#34_loyiha/src/modules/loader.js?");

/***/ }),

/***/ "../\u0000#34 loyiha/src/modules/modal.js":
/*!*******************************************!*\
  !*** ../ #34 loyiha/src/modules/modal.js ***!
  \*******************************************/
/***/ ((module) => {

eval("function modal() {\n  const modalTrigger = document.querySelectorAll(\"[data-modal]\"),\n    modal = document.querySelector(\".modal\");\n\n  function closeModal() {\n    modal.classList.add(\"hide\");\n    modal.classList.remove(\"show\");\n    document.body.style.overflow = \"\";\n  }\n\n  function openModal() {\n    modal.classList.add(\"show\");\n    modal.classList.remove(\"hide\");\n    document.body.style.overflow = \"hidden\";\n    clearInterval(timerId);\n  }\n\n  modalTrigger.forEach((item) => {\n    item.addEventListener(\"click\", openModal);\n  });\n\n  modal.addEventListener(\"click\", (e) => {\n    if (e.target == modal || e.target.getAttribute(\"data-close\") == \"\") {\n      closeModal();\n    }\n  });\n\n  document.addEventListener(\"keydown\", (e) => {\n    if (e.code == \"Escape\" && modal.classList.contains(\"show\")) {\n      closeModal();\n    }\n  });\n\n  const timerId = setTimeout(openModal, 5000);\n\n  function showModalScroll() {\n    if (\n      window.scrollY + document.documentElement.clientHeight >=\n      document.documentElement.scrollHeight\n    ) {\n      openModal();\n      removeEventListener(\"scroll\", showModalScroll);\n    }\n  }\n  window.addEventListener(\"scroll\", showModalScroll);\n}\n\nmodule.exports = modal;\n\n\n//# sourceURL=webpack://serial/../%00#34_loyiha/src/modules/modal.js?");

/***/ }),

/***/ "../\u0000#34 loyiha/src/modules/slider.js":
/*!********************************************!*\
  !*** ../ #34 loyiha/src/modules/slider.js ***!
  \********************************************/
/***/ ((module) => {

eval("function slider() {\n  const slide = document.querySelectorAll(\".offer__slide\"),\n    next = document.querySelector(\".offer__slider-next\"),\n    prev = document.querySelector(\".offer__slider-prev\"),\n    total = document.querySelector(\"#total\"),\n    current = document.querySelector(\"#current\");\n  let showIdx = 1;\n\n  showSlide(showIdx);\n\n  if (slide.length < 10) {\n    total.innerText = `0${slide.length}`;\n  } else {\n    total.innerText = `0${slide.length}`;\n  }\n\n  function showSlide(idx) {\n    if (idx > slide.length) {\n      showIdx = 1;\n    }\n\n    if (idx < 1) {\n      showIdx = slide.length;\n    }\n\n    slide.forEach((item) => {\n      item.style.display = \"none\";\n      slide[showIdx - 1].style.display = \"block\";\n    });\n\n    if (showIdx < 10) {\n      current.innerText = `0${showIdx}`;\n    } else {\n      current.innerText = `0${showIdx}`;\n    }\n  }\n  function slidePlus(num) {\n    showSlide((showIdx += num));\n  }\n\n  next.addEventListener(\"click\", () => {\n    slidePlus(1);\n  });\n  prev.addEventListener(\"click\", () => {\n    slidePlus(-1);\n  });\n}\n\nmodule.exports = slider;\n\n\n//# sourceURL=webpack://serial/../%00#34_loyiha/src/modules/slider.js?");

/***/ }),

/***/ "../\u0000#34 loyiha/src/modules/tabs.js":
/*!******************************************!*\
  !*** ../ #34 loyiha/src/modules/tabs.js ***!
  \******************************************/
/***/ ((module) => {

eval("function tabs() {\n  const tabsParent = document.querySelector(\".tabheader__items\"),\n    tabs = document.querySelectorAll(\".tabheader__item\"),\n    tabsContent = document.querySelectorAll(\".tabcontent\");\n  let num = 0;\n  // tabs\n  function hideTabContent() {\n    tabsContent.forEach((item) => {\n      item.classList.add(\"hide\");\n      item.classList.remove(\"show\", \"fade\");\n    });\n\n    tabs.forEach((item) => {\n      item.classList.remove(\"tabheader__item_active\");\n    });\n  }\n\n  function showTabContent(i = 0) {\n    tabsContent[i].classList.add(\"show\", \"fade\");\n    tabsContent[i].classList.remove(\"hide\");\n    tabs[i].classList.add(\"tabheader__item_active\");\n  }\n\n  tabsParent.addEventListener(\"click\", (event) => {\n    if (event.target && event.target.classList.contains(\"tabheader__item\")) {\n      tabs.forEach((item, idx) => {\n        if (event.target === item) {\n          hideTabContent();\n          showTabContent(idx);\n          num = idx;\n        }\n      });\n    }\n  });\n\n  hideTabContent();\n  showTabContent(num);\n\n  setInterval(() => {\n    if (num > 3) {\n      num = 0;\n    } else {\n      num++;\n    }\n    hideTabContent();\n    showTabContent(num);\n  }, 3000);\n}\n\nmodule.exports = tabs;\n\n\n//# sourceURL=webpack://serial/../%00#34_loyiha/src/modules/tabs.js?");

/***/ }),

/***/ "../\u0000#34 loyiha/src/modules/timer.js":
/*!*******************************************!*\
  !*** ../ #34 loyiha/src/modules/timer.js ***!
  \*******************************************/
/***/ ((module) => {

eval("function timer() {\n  const deadline = \"2024-05-20\";\n  function getTimeRemaining(endtime) {\n    let days, hours, minutes, seconds;\n    const timer = Date.parse(endtime) - Date.parse(new Date());\n\n    if (timer <= 0) {\n      days = 0;\n      hours = 0;\n      minutes = 0;\n      seconds = 0;\n    } else {\n      (days = Math.floor(timer / (1000 * 60 * 60 * 24))),\n        (hours = Math.floor((timer / (1000 * 60 * 60)) % 24)),\n        (minutes = Math.floor((timer / 1000 / 60) % 60)),\n        (seconds = Math.floor((timer / 1000) % 60));\n    }\n\n    return { timer, days, hours, minutes, seconds };\n  }\n\n  function getZero(num) {\n    if (num >= 0 && num < 10) {\n      return `0${num}`;\n    } else {\n      return num;\n    }\n  }\n\n  function setClock(selector, endtime) {\n    const timer = document.querySelector(selector),\n      days = timer.querySelector(\"#days\"),\n      hours = timer.querySelector(\"#hours\"),\n      minutes = timer.querySelector(\"#minutes\"),\n      seconds = timer.querySelector(\"#seconds\"),\n      timerInterval = setInterval(updateClock, 1000);\n\n    updateClock();\n    function updateClock() {\n      const t = getTimeRemaining(endtime);\n      days.innerHTML = getZero(t.days);\n      hours.innerHTML = getZero(t.hours);\n      minutes.innerHTML = getZero(t.minutes);\n      seconds.innerHTML = getZero(t.seconds);\n      if (t.timer <= 0) {\n        clearInterval(timerInterval);\n      }\n    }\n  }\n  setClock(\".timer\", deadline);\n}\n\nmodule.exports = timer;\n\n\n//# sourceURL=webpack://serial/../%00#34_loyiha/src/modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("../\u0000#34 loyiha/src/js/script.js");
/******/ 	
/******/ })()
;