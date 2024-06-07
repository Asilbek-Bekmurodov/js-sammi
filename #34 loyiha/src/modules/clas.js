function clas() {
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

  axios.get("http://localhost:3000/menu").then((data) => {
    data.data.forEach(({ src, alt, desk, price, id }) => {
      new MenuCard(src, alt, desk, price, ".menu .container").render();
    });
  });
}

module.exports = clas;
