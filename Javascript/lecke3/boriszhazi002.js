const korhaz = require("../../database");

const pList = [];
for (let i = 0; i < korhaz.doktorok.length; i++) {
  pList.push(...korhaz.doktorok[i].paciensek);
}

for (let i = 0; i < pList.length; i++) {
  let paciensStuff = [
    //// MAYBE USELESS ???
    pList[i].nev,
    pList[i].suly,
    pList[i].kor,
    pList[i].magassag,
    pList[i].insurance,
  ];

  let patientAge = parseFloat(pList[i].kor);
  let patientHeight = parseFloat(pList[i].magassag);
  let patientWeight = parseFloat(pList[i].suly);

  switch (true) {
    case patientWeight > 100 && pList[i].insurance:
      console.log("Glucophage neki: " + pList[i].nev);
      break;
    case patientHeight > 175:
      console.log("Brufen neki: " + pList[i].nev);
      break;
    case patientAge > 60 && pList[i].insurance:
      console.log("Diclophen neki: " + pList[i].nev);
      break;
    case patientWeight < 70 && patientAge < 30:
      console.log("Bensedin neki: " + pList[i].nev);
      break;
  }
}
