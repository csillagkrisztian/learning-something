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

  let patientList = [];

  let pacientHeight = parseFloat(pList[i].magassag);
  let pacientAge = parseFloat(pList[i].kor);
  let pacientWeight = parseFloat(pList[i].suly);

  if (pacientWeight > 100 && pList[i].insurance) {
    console.log(pList[i].nev + " *Glucophage");
    patientList.push(pList[i].nev + " Glucophage"); //why does it push more?
  }
  if (pacientWeight < 70 && pacientAge < 30) {
    console.log(pList[i].nev + " *Bensedin");
  }

  if (pacientHeight > 175) {
    console.log(pList[i].nev + " *Brufen");
  }

  if (pacientAge > 60 && pList[i].insurance) {
    console.log(pList[i].nev + " *Diclophen");
  }

  console.log("PLIST>> " + patientList);

  /*    DOES NOT WORK: (never ends lol )
  
  while (paciensHeight > 175) {
    console.log(pList[i].nev + " Brufen");
    paciensHeight++;
  } */

  //console.log(paciensSuly + "<< teszt");
  //console.log(typeof pList[i].suly);
  // console.log(typeof paciensStuff + "<<<IDKWTF");
  //console.log(typeof pList + "<teszt MIAFASZOMVANBENNEBAZDMEGKURWY");
  //console.log(pList[i].suly + " <sulyteszt");
  //console.log(paciensStuff + " <pacientstuff");
}

// A betegeknek kialakitunk egy automatikus gyógyszerosztó algoritmust
/* Feltételek: 
- Ha valaki magasabb mint 175cm - annak kell adni Brufen-t
- Ha valaki soványabb mint 70kg - annak kell adni Bensedin-t
- Ha valaki harminc évtől idősebb nem szabad, hogy Bensedin-t kapjon
- Ha valaki kövérebb mint 100kg - annak kell adni Glucophage-t
- Ha valaki idősebb 60 tól - annak kell adni Diclophen-t
- Ha valakinek nincs biztosítása, nem kaphat Glucophage-t, se Diclophen-t



A házit úgy ellenőrzöm le, hogy egy másik kórházat fogok a 
kódotokkal futtatni és nyilván azt akarom, hogy működjön akkor is.

Lépésekben kb ezt kéne: 
1. importáld az adatbázist
2. szedd össze az összes pácienst egy listába
3. minden páciensnek nézzük meg, hogy milyen gyógyszer kell
4. console.log()-oljuk az objektumot ami így néz ki: 

{
    "páciens neve":["gyógyszer","gyógyszer"] / vagy ha nincs, akkor null,
    "páciens neve":...
}

***Hint***: 
    1. Hozzá lehet adni objektumhoz kulcsokat így: 

    **IGEN ha LISTA vagy OBJEKTUM akkor is const ha változtatjuk, ha érdekel, elmondom miért jövő órán**
        const gyogyszerObjektum = {};

        console.log(gyogyszerObjektum);
        // amit kimutat
        {}

        gyogyszerObjektum["Mari"] = ["Bensedin","Glucophage"];

        console.log(gyogyszerObjektum);
        // amit kimutat
        {
            Mari:["Bensedin","Glucophage"]
        }

    2. Hozzá lehet adni listákhoz adatokat így: 

        const valamiLista = [];

        console.log(valamiLista);
        // amit kimutat
        []

        valamiLista.push('cica');
        valamiLista.push('mica');

        console.log(valamiLista);
        // amit kimutat
        ['cica','mica']
    
    3. Mindegyik betegnek már kiírták a gyógyszerét, innen tudod leellenőrizni, hogy jó-e a kódod

***Challenge***: Mi van ha nem csak ez a két doktor van, hanem bármennyi? 
*/
