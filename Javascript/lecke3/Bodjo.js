const korhazunk = require("../../database");

const doktorok =korhazunk.doktorok;

console.log(doktorok);
const current = doktorok[0]

if(current.nev[0] === "B" && current.paciensek[1].nev[0] === "V") {   // A STRING AZ EGY LISTAAAAA!
    console.log("BIZONY")
}else{
    console.log("nem ám")
}

