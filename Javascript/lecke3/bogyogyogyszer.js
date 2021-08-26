const korhazunk = require("../../database");

const pac = [
  ...korhazunk.doktorok[0].paciensek,
  ...korhazunk.doktorok[1].paciensek,
];

const brufen = "Brufen";
const trodon = "Trodon";
const gyogyszerObjektum = {};
for (i = 0; i < pac.length; i++) {
  let nev = pac[i].nev;
  let kor = pac[i].kor;
  let kg = pac[i].suly;
  let bizt = pac[i].insurance;
  let mag = pac[i].magassag;
  let kg1 = parseInt(kg);
  let mag1 = parseInt(mag);

  /*let state1 = 8
  let state2 = mag1 > 175 && kg1 > 100 && bizt === true;
  let state3 = mag1 > 175 && kor > 60 && bizt === true;
  let state4 = kg1 > 100 && kor > 60 && bizt === true;
  let state5 = kg1 < 70 && kor < 30;
  let state6 = kor > 60 && bizt === true;
  let state7 = kg1 > 100 && bizt === true;
  let state8 = mag1> 175; */
  const medList = [];

  if (mag1 > 175) {
    medList.push(brufen);
  }
  if (kg1 > 100) {
    medList.push(trodon);
  }
  gyogyszerObjektum[nev] = medList;
}

console.log(gyogyszerObjektum);
