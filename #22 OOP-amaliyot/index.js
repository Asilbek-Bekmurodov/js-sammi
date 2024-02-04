"use strict";

let numberOfSeries;

const serialDB = {
  count: 0,
  series: {},
  actors: {},
  genres: [],
  private: true,
  startApp: function () {
    serialDB.count = +prompt("Nechta serial kordingiz", "");

    while (
      serialDB.count === null ||
      serialDB.count === "" ||
      isNaN(serialDB.count)
    ) {
      serialDB.count = +prompt("Nechta serial kordingiz", "");
    }
  },
  rememberMySeries: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Qaysi serialni kordingiz ? "),
        b = prompt("serialga nechi baxo berasiz ");
      if (a != null && b != "" && a != "" && b != null) {
        console.log("done");
        serialDB.series[a] = b;
      } else {
        console.log("error");
        i--;
      }
    }
  },

  detectMyLevel: function () {
    if (serialDB.count < 5) {
      console.log("Kam serial koribsiz");
    } else if (serialDB.count >= 5 && serialDB.count <= 10) {
      console.log("O'rtacha serial ko'ribsiz ");
    } else if (serialDB.count > 10) {
      console.log("Siz serialchi zvezda ekansiz");
    } else {
      console.log("error");
    }
  },

  showMyDb: function () {
    if (serialDB.private) {
      console.log(serialDB);
    } else {
      console.log("Data base is private");
    }
  },

  writeGenres: function () {
    // for (let i = 0; i < 3; i++) {
    //   const genre = prompt(
    //     `Yaxshi ko'rgan janringizni kiriting ${i + 1} - janr`
    //   );
    //   if (genre === "" || genre === null) {
    //     console.log("Siz notogri janr kiritdingiz");
    //     i--;
    //   } else {
    //     serialDB.genres[i] = genre;
    //   }
    // }
    // serialDB.genres.forEach((item, idx) => {
    //   console.log(`sizning janringiz ${idx} - nomi ${item}`);
    // });
    for (let i = 0; i < 1; i++) {
      let genres = prompt(
        "Yaxshi ko'rgan janringizni vergul bilan yozing !"
      ).toLowerCase();

      if (genres === "" || genres === null) {
        console.log("Siz notogri janr kiritdingiz");
      } else {
        serialDB.genres = genres.split(", ");
      }

      serialDB.genres.forEach((item, idx) => {
        console.log(`sizning janringiz nomi ${item}`);
      });
    }
  },

  visibleDB: function () {
    if (serialDB.private) {
      serialDB.private = false;
    } else {
      serialDB.private = true;
    }
  },
};

serialDB.startApp();
