// Database
const korhazunk = require("../../database");

// Define docs and patients

const drName1 = [korhazunk.doktorok[0].nev];
const drName2 = [korhazunk.doktorok[1].nev];
const p1Name = [korhazunk.doktorok[0].paciensek[0].nev];
const p1Age = [korhazunk.doktorok[0].paciensek[0].kor];
const p2Name = [korhazunk.doktorok[0].paciensek[1].nev];
const p2Age = [korhazunk.doktorok[0].paciensek[1].kor];
const p3Name = [korhazunk.doktorok[1].paciensek[0].nev];
const p3Age = [korhazunk.doktorok[1].paciensek[0].kor];
const p4Name = [korhazunk.doktorok[1].paciensek[1].nev];
const p4Age = [korhazunk.doktorok[1].paciensek[1].kor];

// Define text strings for the senctences
const a = "A ";
const nameOf = " nevű doktor ";
const nameOfP = " nevű páciense ";
const ageOf = " éves";
const andHave = " és van érvényes biztosítása.";
const andNotHave = " és nincs érvényes biztosítása.";

// Main Function

if (korhazunk.doktorok[0].paciensek[0].insurance) {
  console.log(
    a + drName1 + nameOf + p1Name + nameOfP + p1Age + ageOf + andHave
  );
} else {
  console.log(
    a + drName1 + nameOf + p1Name + nameOfP + p1Age + ageOf + andNotHave
  );
}
if (korhazunk.doktorok[0].paciensek[1].insurance) {
  console.log(
    a + drName1 + nameOf + p2Name + nameOfP + p2Age + ageOf + andHave
  );
} else {
  console.log(
    a + drName1 + nameOf + p2Name + nameOfP + p2Age + ageOf + andNotHave
  );
}
if (korhazunk.doktorok[1].paciensek[0].insurance) {
  console.log(
    a + drName2 + nameOf + p3Name + nameOfP + p3Age + ageOf + andHave
  );
} else {
  console.log(
    a + drName1 + nameOf + p3Name + nameOfP + p3Age + ageOf + andNotHave
  );
}
if (korhazunk.doktorok[1].paciensek[1].insurance) {
  console.log(
    a + drName2 + nameOf + p4Name + nameOfP + p4Age + ageOf + andHave
  );
} else {
  console.log(
    a + drName1 + nameOf + p4Name + nameOfP + p4Age + ageOf + andNotHave
  );
}
