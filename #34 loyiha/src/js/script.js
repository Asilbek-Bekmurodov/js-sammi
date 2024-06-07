window.addEventListener("DOMContentLoaded", () => {
  const clas = require("../modules/clas"),
    form = require("../modules/form"),
    loader = require("../modules/loader"),
    modal = require("../modules/modal"),
    slider = require("../modules/slider"),
    tabs = require("../modules/tabs"),
    timer = require("../modules/timer");

  clas();
  form();
  loader();
  modal();
  slider();
  tabs();
  timer();
});
