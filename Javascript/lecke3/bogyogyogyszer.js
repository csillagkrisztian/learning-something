// Database import
const korhazCsantaver = require("./database2");
const korhazBajmok = require("../../database");

function medSort(localHospital) {
  // Patients def.
  const patients = [];

  for (let i = 0; i < localHospital.doktorok.length; i++) {
    patients.push(...localHospital.doktorok[i].paciensek);
  }

  // Meds def.

  const brufen = "Brufen";
  const bensedin = "Bensedin";
  const glucophage = "Glucophage";
  const diclophen = "Diclophen";
  const medObject = {};

  // Program main part

  for (let i = 0; i < patients.length; i++) {
    let name = patients[i].nev;
    let age = patients[i].kor;
    let importWeight = patients[i].suly;
    let ins = patients[i].insurance;
    let importHeight = patients[i].magassag;
    let weight = parseInt(importWeight);
    let height = parseInt(importHeight);
    let medList = [];

    if (height > 175) {
      medList.push(brufen);
    }
    if (weight < 70 && age <= 30) {
      medList.push(bensedin);
    }
    if (weight > 100 && ins === true) {
      medList.push(glucophage);
    }
    if (age > 60 && ins === true) {
      medList.push(diclophen);
    }
    if (medList.length === 0) {
      medList = null;
    }
    medObject[name] = medList;
  }
  return medObject;
}
console.log(medSort(korhazBajmok));
