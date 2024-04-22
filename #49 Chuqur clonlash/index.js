const car = {
  name: "bmw",
  color: "black",
  isFuture: {
    isAirbag: true,
    extraBallon: 3,
  },
};

const newCar = JSON.parse(JSON.stringify(car));
// console.log(newCar);
newCar.isFuture.extraBallon = 5;
console.log(car);
console.log(newCar);
