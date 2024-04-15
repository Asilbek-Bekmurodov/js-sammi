const box = document.querySelector(".box");

// let width = box.clientWidth;
// let height = box.clientHeight;

// console.log(width, height);

document.querySelector(".btn").addEventListener("click", () => {
  box.style.height = box.scrollHeight + "px";
  // box.style.overflow = "visible";
  console.log(box.scrollHeight);
});
