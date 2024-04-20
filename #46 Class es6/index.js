class Car {
  constructor(name, color, speed) {
    this.name = name;
    this.color = color;
    this.speed = speed;
  }

  calcSpeed() {
    return this.speed * 100;
  }
}

class Spark extends Car {
  constructor(name, color, calcSpeed, extraBallon) {
    super(name, color, calcSpeed);
    this.extraBallon = extraBallon;
  }

  logger() {
    console.log(
      `This ${this.name} is very good car, it's color is ${this.color} , it has got ${this.extraBallon} extra ballon`
    );
  }
}

const aboutCar = new Spark("matiz", "white", 200, 3);
aboutCar.logger();
