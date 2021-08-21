const suly = "kg";
const magassag = "cm";
const paciens1 = {
  nev: "Csilla",
  kor: 25,
  magassag: 168 + magassag,
  suly: 57 + suly,
  id: 1,
  insurance: true,
  //Bensedin
};

const paciens2 = {
  nev: "Viola",
  kor: 40,
  magassag: 165 + magassag,
  suly: 65 + suly,
  id: 2,
  insurance: false,
  //null
};

const paciens3 = {
  nev: "Gyuri",
  kor: 48,
  magassag: 186 + magassag,
  suly: 97 + suly,
  id: 3,
  insurance: true,
  //Brufen
};

const paciens4 = {
  nev: "Viktor",
  kor: 30,
  magassag: 170 + magassag,
  suly: 102 + suly,
  id: 4,
  insurance: true,
  // Glucophage
};

const paciens5 = {
  nev: "Erzsébet",
  kor: 64,
  magassag: 154 + magassag,
  suly: 140 + suly,
  id: 5,
  insurance: false,
  //null
};

const paciens6 = {
  nev: "Péter",
  kor: 74,
  magassag: 162 + magassag,
  suly: 54 + suly,
  id: 6,
  insurance: true,
  //Diclophen
};

const paciens7 = {
  nev: "Szanella",
  kor: 21,
  magassag: 194 + magassag,
  suly: 69 + suly,
  id: 7,
  insurance: false,
  // Bensedin, Brufen
};

const paciens8 = {
  nev: "Krisztián",
  kor: 25,
  magassag: 183 + magassag,
  suly: 170 + suly,
  id: 8,
  insurance: true,
  //Glucophage, Brufen
};

const doktor1 = {
  nev: "Bertalan",
  paciensek: [paciens1, paciens2, paciens5, paciens6],
};

const doktor2 = {
  nev: "Jozsef",
  paciensek: [paciens3, paciens4, paciens7, paciens8],
};

const korhazBajmok = {
  nev: "St' Bajmok",
  doktorok: [doktor1, doktor2],
};

//m
module.exports = korhazBajmok;
