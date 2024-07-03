import clas from "../modules/clas";
import form from "../modules/form";
import loader from "../modules/loader";
import modal from "../modules/modal";
import slider from "../modules/slider";
import tabs from "../modules/tabs";
import timer from "../modules/timer";
import { openModal } from "../modules/modal";

window.addEventListener("DOMContentLoaded", () => {
  const timerId = setTimeout(() => openModal(".modal", timerId), 5000);

  clas();
  form(timerId, "form");
  loader();
  modal("[data-modal]", ".modal", timerId);
  slider();
  tabs();
  timer();
});
