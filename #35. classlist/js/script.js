"use strict";

const wrapper = document.querySelector(".btn-block"),
  btns = document.querySelectorAll("button");

console.log(btns[0].classList.length);
// nechta class borligini aniqlash uchun
console.log(btns[0].classList.item(0));
// item orqali hohlagan klasimizni tanlashimiz mumkin
btns[1].classList.add("blue");
// classList.add funksiyasi klass qo'shish uchun kerak
btns[1].classList.remove("blue");
// classLIst.remoe funksiyasi klass o'chirib tashlaydi
btns[1].classList.toggle("blue");
// classList.toggle funksiyasi klass bor bo'lsa o'chiradi aks holda qo'shadi

if (btns[0].classList.contains("blue")) {
  console.log("yeap");
}

btns[0].addEventListener("click", () => {
  // if (!btns[1].classList.contains("blue")) {
  //   btns[1].classList.add("blue");
  // } else {
  //   btns[1].classList.remove("blue");
  // }

  btns[1].classList.toggle("red");
});
