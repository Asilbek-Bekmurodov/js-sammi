const isFriendCome = true;

// const meetingRequest = new Promise((resolve, reject) => {
//   if (isFriendCome) {
//     const msg = "Friend i am here ";
//     resolve(msg);
//   } else {
//     const err = "Friend i am not here";
//     reject(err);
//   }
// });

// meetingRequest
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("I'm calling you");
//   });

console.log("Requesting data");

const req = new Promise((resolve) => {
  setTimeout(() => {
    const data = {
      name: "name",
      color: "color",
    };
    console.log("Prosessing data");
    console.log(data);

    resolve(data);
  }, 2000);
});

req
  .then((data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        data.color = "white";
        console.log("data change");
        console.log(data)
        resolve(data);

      }, 2000);
    });
  })
  .then((data) => {
    data;
  });
