const korhazunk = require("../../database");



const patientList =[
korhazunk.doktorok[0].paciensek[0],
korhazunk.doktorok[0].paciensek[1],
korhazunk.doktorok[0].paciensek[2],
korhazunk.doktorok[0].paciensek[3],
korhazunk.doktorok[1].paciensek[0],
korhazunk.doktorok[1].paciensek[1],
korhazunk.doktorok[1].paciensek[2],
korhazunk.doktorok[1].paciensek[3],
]

const objectTest = {}
const bensedin = "Bensedin"
const brufen = "Brufen"
const glucophage = "Glucophage"
const diclophen  = "Diclophen"

for( let i = 0; i < patientList.length; i++ ){
    const nev = patientList[i].nev;
    const kor = patientList[i].kor;
    const suly = patientList[i].suly;
    const bizt = patientList[i].insurance;
    objectTest[suly] = kor;
//console.log(nev, kor, suly, bizt)

}
console.log(objectTest)
