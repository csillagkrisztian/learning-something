// importálás
const database = require("../lecke3/database2");

// szótár, csak hogy ne kelljen sokat írni ugyan azt
const BRUFEN = "Brufen";
const GLUCOPHAGE = "Glucopage";
const DICLOPHEN = "Diclophen";
const BENSEDIN = "Bensedin";

// a pácienseket kiszedjük a doktorokból
const patients = [];
for (let i = 0; i < database.doktorok.length; i++) {
  patients.push(...database.doktorok[i].paciensek);
}

// összeszedjük a gyógyszereket
const medication = {};
for (let i = 0; i < patients.length; i++) {
  /* ez egy trükk ami kiszedi a kulcsokat az objektumból, hogy ne kelljen ezt csinálni:
   const mostaniPacienc = patients[i];
   if (mostaniPaciens.magassag > 175 && mostaniPaciens.insurance === true) [...]

   hanem 
   const {magassag, insurance} = patients[i];
   if (magassag > 175 && insurance === true) [...]
  */
  const { magassag, suly, kor, nev, insurance } = patients[i];
  const currentPatientMedication = [];

  if (magassag.slice(0, -2) > 175) {
    currentPatientMedication.push(BRUFEN);
  }

  if (suly.slice(0, -2) < 70 && kor < 30) {
    currentPatientMedication.push(BENSEDIN);
  }
  /* mivel alapjáraton egy BOOLEAN érték igaz, ezért nem kell összehasonlítani az igazsággal,
     mert ha ez igaz, akkor igaz úgyis

     az if akkor fut, ha a zárójelben levó érték "true"
     if (true) - akkor mindig fut
     if (false) - sose fut

     szóval ha if(insurance) - ha "false" nem fut, ha "true" fut, nem kell a true === true :D 
  */
  if (suly.slice(0, -2) > 100 && insurance) {
    currentPatientMedication.push(GLUCOPHAGE);
  }

  if (kor > 60 && insurance) {
    currentPatientMedication.push(DICLOPHEN);
  }

  medication[nev] =
    currentPatientMedication.length > 0 ? currentPatientMedication : null;
  /*ez egy Tenary operator -> ma átvesszük, de a lényeg, hogy olyan mint az if, 
  csak meghatarozhatjuk variáns definiálásnál is: 

  1. kondíció
  2. ha igaz a kondició ez legyen a variáns (nagyobbAzA)
  3. ha hamis akkor ez legyen a variáns
 
  const a = 5;
  const b = 4;
                       1       2      3
  const nagyobbAzA = a > b ? true : false;
  console.log(nagyobbAzA) 
  // true

  Az helyett hogy: 

  const a = 5;
  const b = 4;
  let nagyobbAzA;
  if(a>b) {
      nagyobbAzA = true
  } else {
      nagyobbAzA = false
  }
  console.log(nagyobbAzA)
  // true

  */
}

console.log("Ezt küldjük a gyógyszerosztó gépbe", medication);
