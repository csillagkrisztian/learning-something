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

const lista1 = ["krumpi", "cica"];
const lista2 = [{ loci: "cucu" }, 5, [], 7];

const nagyLista = [...lista1, ...lista2];

console.log(nagyLista);

// for ciklus
// 1 for - definicio
// 2 let i = 0 - varians
// 3 i < szamok.length - feltetel ami eldonti hogy menjen e megyegszer
// 4 i++ - mi tortenjen ha lefut a program
// 5 - program
// Ha orokke fut CTRL+C

//1       2         3               4
for (let i = 0; i < nagyLista.length; i++) {
  // 5
  console.log(i + 1, ". szam ", nagyLista[i]);
  console.log("-----------------");
}

// while ciklus

let x = 0;
while (x < 10) {
  console.log("Wuhuuu!", x);
  x++;
}

// switch
let switchCondicio = "segg";
// 1             2
switch (switchCondicio) {
  // 3    4
  case "segg": {
    console.log("Huhuuu seggbe");
    break;
  }
  case "vagina": {
    console.log("Buuu unalmas");
    break;
  }
  default: {
    console.log("basszunk");
    break;
  }
}
// break
// '|'
// 'V'
