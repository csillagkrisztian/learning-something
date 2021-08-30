const magassag = "cm";
const suly = "kg";

const Csilla = {
  nev: "Csilla",
  kor: 25,
  magassag: 178 + magassag,
  suly: 57 + suly,
  id: 1,
  insurance: true,
}; // Brufen, Bensedin

const Barnabas = {
  nev: "Barnabás",
  kor: 17,
  magassag: 195 + magassag,
  suly: 75 + suly,
  id: 2,
  insurance: false,
}; // Brufen

const Zsigmond = {
  nev: "Zsigmond",
  kor: 61,
  magassag: 180 + magassag,
  suly: 87 + suly,
  id: 3,
  insurance: true,
}; // Brufen, Diclophen

const Eleonora = {
  nev: "Eleonóra",
  kor: 31,
  magassag: 120 + magassag,
  suly: 50 + suly,
  id: 4,
  insurance: true,
}; // null

const Nintendo = {
  nev: "Nintendó",
  kor: 30,
  magassag: 179 + magassag,
  suly: 107 + suly,
  id: 5,
  insurance: true,
}; // Brufen, Glucophage

const Zsofia = {
  nev: "Zsófia",
  kor: 8,
  magassag: 108 + magassag,
  suly: 29 + suly,
  id: 6,
  insurance: true,
}; // Bensedin

const Szanella = {
  nev: "Szanella",
  kor: 90,
  magassag: 134 + magassag,
  suly: 47 + suly,
  id: 7,
  insurance: false,
}; // null

const Szamanta = {
  nev: "Szamanta",
  kor: 25,
  magassag: 158 + magassag,
  suly: 56 + suly,
  id: 8,
  insurance: true,
}; // Bensedin

const Janos = {
  nev: "János",
  kor: 37,
  magassag: 161 + magassag,
  suly: 57 + suly,
  id: 9,
  insurance: true,
}; // null

const Illes = {
  nev: "Illés",
  kor: 75,
  magassag: 218 + magassag,
  suly: 130 + suly,
  id: 10,
  insurance: false,
}; // Brufen

const drBertalan = {
  nev: "Bertalan",
  paciensek: [Csilla, Nintendo, Illes, Barnabas],
};

const drAnna = {
  nev: "Anna",
  paciensek: [Zsigmond, Eleonora, Janos],
};

const drBubo = {
  nev: "Bubó",
  paciensek: [Szamanta, Szanella, Zsofia],
};

const korhazCsantaver = {
  nev: "St' Csantavér",
  doktorok: [drAnna, drBubo, drBertalan],
};

module.exports = korhazCsantaver;
