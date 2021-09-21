const korhazunk = require("../../database");

const pac = [];

for (let i = 0; i < korhazunk.doktorok.length; i++) {
  pac.push(...korhazunk.doktorok[i].paciensek);
}

let gyogyszerObjektum = {};

const BRU = "Brufen";
const GLU = "Glucopage";
const DIC = "Diclophen";
const BEN = "Bensedin";

for (i = 0; i < pac.length; i++) {
  let nev = pac[i].nev;
  let kor = pac[i].kor;
  let kg = pac[i].suly;
  let bizt = pac[i].insurance;
  let mag = pac[i].magassag;
  let kg1 = parseInt(kg);
  let mag1 = parseInt(mag);

  let gyogyszer = [];

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
    gyogyszer = null;
  }
  gyogyszerObjektum[nev] = gyogyszer;
}

console.log(gyogyszerObjektum);
