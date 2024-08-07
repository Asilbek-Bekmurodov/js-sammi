import { openModal, closeModal } from "./modal";
import { postData } from "../server/server";

function form(timerId, formSelector) {
  const forms = document.querySelectorAll(formSelector);

  const msg = {
    loading: "../img/Bean Eater@1x-0.3s-200px-200px.svg",
    success: "Thank's for submitting our form",
    failure: "Something went wrong",
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

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
    openModal(".modal", timerId);

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
}

export default form;
