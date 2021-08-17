const korhaz = require('../../database');

const dok1nev = [korhaz.doktorok[0].nev];
const dok2nev = [korhaz.doktorok[1].nev];


const pac1kor = [korhaz.doktorok[0].paciensek[0].kor];
const pac1nev = [korhaz.doktorok[0].paciensek[0].nev];
const pac2nev = [korhaz.doktorok[0].paciensek[1].nev];
const pac2kor = [korhaz.doktorok[0].paciensek[1].kor];
const pac3nev = [korhaz.doktorok[1].paciensek[0].nev];
const pac3kor = [korhaz.doktorok[1].paciensek[0].kor];
const pac4nev = [korhaz.doktorok[1].paciensek[1].nev];
const pac4kor = [korhaz.doktorok[1].paciensek[1].kor];



console.log('A doktor neve ' + dok1nev + ', páciensének neve ' + pac1nev + ' a kora '+ pac1kor + '.' )
console.log('Az orvos neve ' + dok1nev + ', betegének becsületes neve ' + pac2nev + ', akinek az életkora ' + pac2kor + '.' )
console.log('A második doktor neve ' + dok2nev + ', akinek első betege ' + pac3nev + ', és megélt éveinek száma ' + pac3kor + '.')
console.log('A kedves doktor úr neve ' + dok2nev + ', utolsó betegének neve ' + pac4nev + ', aki jelenleg ' + pac4kor + ' éves.')

