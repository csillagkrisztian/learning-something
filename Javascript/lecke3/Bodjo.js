const korhazunk = require("../../database");



const doktorok =korhazunk.doktorok;
const patientList =[
korhazunk.doktorok[0].paciensek[0],
korhazunk.doktorok[0].paciensek[1],
korhazunk.doktorok[1].paciensek[0],
korhazunk.doktorok[1].paciensek[1],
]
console.log(patientList)

