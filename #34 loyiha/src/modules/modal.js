function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
  if (modalTimerId) {
    clearInterval(timerId);
  }
}

function modal(triggerSelector, modalSelector, modalTimerId) {
  const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);

  modalTrigger.forEach((item) => {
    item.addEventListener("click", () =>
      openModal(modalSelector, modalTimerId)
    );
  });

  modal.addEventListener("click", (e) => {
    if (e.target == modal || e.target.getAttribute("data-close") == "") {
      closeModal(modalSelector);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code == "Escape" && modal.classList.contains("show")) {
      closeModal(modalSelector);
    }
  });
 
  function showModalScroll() {
    if (
      window.scrollY + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal(modalSelector, modalTimerId);
      removeEventListener("scroll", showModalScroll);
    }
  }
  window.addEventListener("scroll", showModalScroll);
}

export default modal;

export { openModal, closeModal };
