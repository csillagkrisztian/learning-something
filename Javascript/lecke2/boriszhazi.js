// importaljuk az adatbazist

const korhaz = require("../../database");

// kinyomtassuk a pacienseket nevet igy `{doktor neve} paciense {paciens neve} a kora a paciensnek pedig {paciens kora}`

const nev = "Sanyi";
const paciens = { kor: "3", nev: "pityu" };
console.log(
  nev + " a paciense" + paciens.nev + "a kora pedig..." + paciens.kor
);

// ide toltsd a
console.log();

const dok1nev = [korhaz.korhazBajmok.doktorok[0].nev];

console.log("ezaz" + dok1nev);
console.log();
console.log();
