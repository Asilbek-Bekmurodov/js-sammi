"use strict";

const usz = document.querySelector("#uzs"),
  usd = document.querySelector("#usd");

usz.addEventListener("input", (e) => {
  // console.log(e);
  const request = new XMLHttpRequest();

  request.open("GET", "server.json");
  request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  request.send();

  // request.addEventListener("readystatechange", () => {
  //   if (request.readyState === 4 && request.status === 200) {
  //     const res = JSON.parse(request.response);
  //     console.log(res.current.usz);
  //     usd.value = (+usz.value / res.current.usz).toFixed(2);
  //   } else {
  //     usd.value = "something went wrong";
  //   }
  // });

  request.addEventListener("load", () => {
    if (request.status === 200) {
      const res = JSON.parse(request.response);
      console.log(res.current.usz);
      usd.value = (+usz.value / res.current.usz).toFixed(2);
    } else {
      usd.value = "something went wrong";
    }
  });
});
