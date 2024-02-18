const p = document.querySelectorAll("p");
console.log(p);

function scriptAdd(src) {
  const script = document.createElement("script");

  script.src = src;
  script.async = false;
  document.body.append(script);
}

scriptAdd("../js/second.js");
scriptAdd("../js/third.js");
