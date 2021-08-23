const korhazunk = require("../../database");


const pac = [...korhazunk.doktorok[0].paciensek, ...korhazunk.doktorok[1].paciensek];


for  (i = 0; i < pac.length; i++){
  let nev = pac[i].nev;
  let kor = pac[i].kor;
  let kg = pac[i].suly;
  let bizt = pac[i].insurance;
  let mag = pac[i].magassag;
  let kg1 = parseInt(kg);
  let mag1 = parseInt(mag);

  
    if (mag1> 175 && kg1 < 70 && kor <30 ) {
      console.log(nev + ':[Bensedin, Brufen]');
  } else if (mag1 > 175 && kg1 > 100 && bizt === true) {
    console.log(nev + ':[Glucophage, Brufen]');  
  } else if (mag1 > 175 && kor > 60 && bizt === true) {
    console.log(nev + ':[Diclophen, Brufen]');  
  } else if (kg1 < 70 && kor < 30 ) {
    console.log(nev + ':[Bensedin]');
  } else if (kor > 60 && bizt === true) {
    console.log(nev + ':[Diclophen]');
  } else if (kg1 > 100 && bizt === true) {
    console.log(nev + ':[Glucophage]');  
  } else if (mag1> 175) {
      console.log(nev + ':[Brufen]');
  } else 
    console.log(nev + ':[null]')
}
