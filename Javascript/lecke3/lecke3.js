const korhaz = require("../../database");

/* 

> - nagyobb 
< - kissebb
== - egyenlo de nem teljesen / var szintu szar
=== - teljessen egyenlo
>= - nagyobb v egyenlo
<= - kisebb v egyenlo


Number.parseInt() - funcio, amely minden stringet atalik INTEGER formaba
Number.parseFloat() - funcio, amely minden stringet atalkit FLOAT formaba
*/

const website = Number.parseInt("4123.4");
const webiste2 = Number.parseFloat("4123.4");

const kondicio = 4123.4 === website;
console.log("kondicio = ", kondicio);
/* 
|| - vagy
&& - es 
! - nem
*/

const website3 = {
  jani: 19,
  juli: 12,
};

const a = website3.jani;
const b = website3.juli;

if (a < 18 || b < 18) {
  console.log("No sex");
} else {
  console.log("Idemo!");
}


const lista = [1,2,3,4];
const paciensek = [...korhaz.doktorok[0].paciensek, ...korhaz.doktorok[1].paciensek];



const pillanatnyi = paciensek[3];

if (pillanatnyi.insurance === true || pillanatnyi.kor > 40) {
  console.log('megbasszuk');
} else { 
  console.log('nem basszuk meg')
};

