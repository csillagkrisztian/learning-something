const korhaz = require("../../database");

// kondiciok
const a = 5;
const b = 3;
let nagyAzA;
//1   2     3
if (a > b) {
  nagyAzA = true;
  // 4      5
} else if (a === b) {
  nagyAzA = "egyforma";
} else {
  /*opcionalis*/
  nagyAzA = false;
}

// 1 if - ha
// 2 kondicio - feltetel
// 3 kod aminek futnia kell
// 4 else - ha nem
// 5 kod aminek futnia kell

// Az osszes pacienset berakjuk egy variansba
// es kinyomtassuk

//rossz
const paciensek = [
  korhaz.doktorok[0].paciensek[0],
  korhaz.doktorok[0].paciensek[1],
  korhaz.doktorok[1].paciensek[0],
  korhaz.doktorok[1].paciensek[1],
];

//atlathato
// funkcio
const paciensek = korhaz.doktorok.map((doktor) => {
  return doktor.paciensek;
});

const tisztabbPaciensek = [...paciensek[0], ...paciensek[1]];

console.log(tisztabbPaciensek);
