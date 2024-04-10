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
    console.log(num);
  }, 3000);
});
