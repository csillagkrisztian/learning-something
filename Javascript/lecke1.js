//nem jo

var lofasz = 'valami'; 

// definialas
// 1
// var : variable 
// let : valtoztathato variable 
// const : nem megvaltoztathato variable
// 2 
// lofasz : nev
// 3 
// = : initialization/assignment
// 4 
// 'valami' : adat

//jo

let lofasz1 = 'valami';
const lofasz2 = 'valami'; // 99%

// kivetel
const youre = "you\"'re";
const temp = `you're""`;

// pelda 

let osszeg;
const egy = 1;
const negy = 4;
osszeg = negy + egy + egy + negy;

/* 
number = szám - 7, 7.1, -1
boolean = igaz/hamis - true/false
string = szöveg - "szia"/'szia'  'you\'re'
array = lista - []/[1,2,3]
object = objektum - {}/{cica:4}
null = semmi - null
undefined = nem definialt - undefined
*/

// lista 
// ha el akarod erni egy bizonyos lista adatat 
// lista[0]
// az index szamok mindig nullatol indulnak

const lista = [
    'cigi', 'sor', 'ja nem', 'cevap'
];

//console.log(lista[negy-egy]);

// objektum 
// id : kulcs/key
// '1' : ertek/value

const objektum = {
    id:'1',
    name:'Kiki',
    dogName: 'Boby',
};

// null vs. undefined

const semmi = null;
const semmien = undefined;

//console.log(lista[4])
//console.log(objektum.cica)

//console.log('### Itt az objektum', objektum['id'], objektum.name)
//console.log(Object.values(objektum))


// legyen egy lista amibe van ket ember, az embernek legyen neve, kora, magassaga, sulya, id

let feladatLista = [];
const ember1 = {
    nev: 'Bence',
    kor: 25,
    magasssag: 175 + 'cm',
    sulya: 99 + 'kg',
    id: 1,
};


const ember2 = {
    nev: 'Gyuri',
    kor: 30,
    magasssag: 199 + 'cm',
    sulya: 142 + 'kg',
    id: 2,
};

feladatLista = [ember1,ember2]

console.log(feladatLista);
