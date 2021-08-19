const suly = "kg";
const magassag = "cm";
const paciens1 = {
  nev: "Csilla",
  kor: 25,
  magassag: 168 + magassag,
  suly: 57 + suly,
  id: 1,
  insurance: true,
};

const paciens2 = {
  nev: "Viola",
  kor: 40,
  magassag: 165 + magassag,
  suly: 65 + suly,
  id: 2,
  insurance: true,
};

const paciens3 = {
  nev: "Gyuri",
  kor: 48,
  magassag: 186 + magassag,
  suly: 97 + suly,
  id: 3,
  insurance: true,
};

const paciens4 = {
  nev: "Viktor",
  kor: 30,
  magassag: 180 + magassag,
  suly: 102 + suly,
  id: 4,
  insurance: true,
};

const doktor1 = {
  nev: "Bertalan",
  paciensek: [paciens1, paciens2],
};

const doktor2 = {
  nev: "Jozsef",
  paciensek: [paciens3, paciens4],
};

const korhazBajmok = {
  nev: "St' Bajmok",
  doktorok: [doktor1, doktor2],
};

//m
module.exports = korhazBajmok;
