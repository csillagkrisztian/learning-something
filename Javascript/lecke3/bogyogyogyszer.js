// Database import
const korhazunk = require("../../database");

// Patients def.

const pac = [
  ...korhazunk.doktorok[0].paciensek,
  ...korhazunk.doktorok[1].paciensek,
];

// Meds def.

const brufen = "Brufen";
const bensedin = "Bensedin";
const glucophage = "Glucophage";
const diclophen = "Diclophen";
const medObject = {};

// Program main part

for (i = 0; i < pac.length; i++) {
  let name = pac[i].nev;
  let age = pac[i].kor;
  let importWeight = pac[i].suly;
  let ins = pac[i].insurance;
  let importHeight = pac[i].magassag;
  let weight = parseInt(importWeight);
  let height = parseInt(importHeight);
  let medList = [];

  if (height > 175) {
    medList.push(brufen);
  }
  if (weight < 100 && age <= 30) {
    medList.push(bensedin);
  }
  if (weight > 100 && ins === true) {
    medList.push(glucophage);
  }
  if (age > 60 && ins === true) {
    medList.push(diclophen);
  }
  medObject[name] = medList;
  if (medList.length === 0) {
    medList.push(null);
  }
}

console.log(medObject);
