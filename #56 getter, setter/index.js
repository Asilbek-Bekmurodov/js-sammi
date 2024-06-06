const car = {
  name: "bmw",
  color: "black",
  get carName() {
    console.log(this.name);
  },
  set setCarName(name) {
    this.name = name;
  },
};

car.setCarName = "mercedes";
console.log(car);
