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

// szoras - ...lista

const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];

const szamok = [...lista1, ...lista2];

console.log(szamok);
