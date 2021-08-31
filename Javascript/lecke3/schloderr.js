const korhazunk = require("../../database");

<<<<<<< HEAD
const pac = [
  ...korhazunk.doktorok[0].paciensek,
  ...korhazunk.doktorok[1].paciensek,
];

=======
const pac = [];

for (let i = 0; i < korhazunk.doktorok.length; i++) {
  pac.push(...korhazunk.doktorok[i].paciensek);
}

let gyogyszerObjektum = {};

const BRU = "Brufen";
const GLU = "Glucopage";
const DIC = "Diclophen";
const BEN = "Bensedin";

>>>>>>> 3441de687868cedda20fde5f942ac69ede358067
for (i = 0; i < pac.length; i++) {
  let nev = pac[i].nev;
  let kor = pac[i].kor;
  let kg = pac[i].suly;
  let bizt = pac[i].insurance;
  let mag = pac[i].magassag;
  let kg1 = parseInt(kg);
  let mag1 = parseInt(mag);

<<<<<<< HEAD
  if (mag1 > 175 && kg1 < 70 && kor < 30) {
    console.log(nev + ":[Bensedin, Brufen]");
  } else if (mag1 > 175 && kg1 > 100 && bizt === true) {
    console.log(nev + ":[Glucophage, Brufen]");
  } else if (mag1 > 175 && kor > 60 && bizt === true) {
    console.log(nev + ":[Diclophen, Brufen]");
  } else if (kg1 > 100 && kor > 60 && bizt === true) {
    console.log(nev + ":[Glucophage, Diclophen]");
  } else if (kg1 < 70 && kor < 30) {
    console.log(nev + ":[Bensedin]");
  } else if (kor > 60 && bizt === true) {
    console.log(nev + ":[Diclophen]");
  } else if (kg1 > 100 && bizt === true) {
    console.log(nev + ":[Glucophage]");
  } else if (mag1 > 175) {
    console.log(nev + ":[Brufen]");
  } else console.log(nev + ":[null]");
}
=======
  const gyogyszer = [];

  if (mag1 > 175) {
    gyogyszer.push(BRU);
  }
  if (kg1 < 70 && kor < 30) {
    gyogyszer.push(BEN);
  }
  if (kg1 > 100 && bizt === true) {
    gyogyszer.push(GLU);
  }
  if (kor > 60 && bizt === true) {
    gyogyszer.push(DIC);
  }
  if (gyogyszer.length === 0) {
    gyogyszer.push("null");
  }
  gyogyszerObjektum[nev] = gyogyszer;
}

console.log(gyogyszerObjektum);
>>>>>>> 3441de687868cedda20fde5f942ac69ede358067
