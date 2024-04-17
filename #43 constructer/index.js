function Car(name, color, mph) {
  this.name = name;
  this.color = color;
  this.isAirbag = true;
  this.mph = mph;
  this.speed = function () {
    console.log(`speed of car ${this.name} is ${this.mph}`);
  };
}

Car.prototype.sayHello = function () {
  console.log(`hello ${this.name}`);
};

const mercedes = new Car("mercedes", "black", 120);
const gm = new Car("lacetti", "white", 30);

console.log(mercedes);
console.log(gm);


// Constructor funksiya 
// Biz constructor funksiyani o'ziga parametr qabul qilib bizga obyekt qaytarib beradigan funksiya yasash uchun ichlatamiz !
// Consturtor funksiyani biz Katta harfda ochishimiz tavsiya qilinadi 