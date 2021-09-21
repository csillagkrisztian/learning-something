const korhaz = require("../../database");

const pList = [];
for (let i = 0; i < korhaz.doktorok.length; i++) {
  pList.push(...korhaz.doktorok[i].paciensek);
}

const medication = {};

const GLUCO = "Glucophage";
const BRUFEN = "Brufen";
const BENS = "Bensedin";
const DICLO = "Diclophen";

for (let i = 0; i < pList.length; i++) {
  const nev = pList[i].nev;
  const suly = pList[i].suly;
  const kor = pList[i].kor;
  const magassag = pList[i].magassag;
  const insurance = pList[i].insurance;

  let medList = [];

  let pacientHeight = parseInt(magassag);
  let pacientAge = parseInt(kor);
  let pacientWeight = parseInt(suly);

  if (pacientWeight > 100 && insurance) {
    medList.push(GLUCO);
  }
  if (pacientWeight < 70 && pacientAge < 30) {
    medList.push(BENS);
  }

  if (pacientHeight > 175) {
    medList.push(BRUFEN);
  }

  if (pacientAge > 60 && insurance) {
    medList.push(DICLO);
  }

  medication[nev] = medList.length > 0 ? medList : null;
}

console.log("idk teszt lol", medication);
