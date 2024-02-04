const theif = {
  jacket: "black",
  height: 1.7,
  colors: { hair: "gray", style: "curley" },
  howOut: function () {
    console.log("fast with door");
  },
};

console.log(theif);

for (let key in theif) {
  if (typeof theif[key] === "object") {
    for (let i in theif[key]) {
      console.log(`Property ${i} has value ${theif[key][i]}`);
    }
  } else {
    console.log(`Property ${key} has value ${theif[key]}`);
  }
}
