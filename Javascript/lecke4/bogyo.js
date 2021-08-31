/*const a = 420;
const b = 69;

function ajde(first, second) {
  return first - second;
}
const result = ajde(a, b);
console.log(result);
//console.log(ajde(a, b));
*/

let myList = [
  "pizza",
  "dzsuvety",
  "tortilla",
  "kecskehus",
  "csilisbab",
  "manavita",
];
function finom(kaja) {
  let text = "A kaják amiket szeretek:";
  for (let i = 0; i < kaja.length; i++) {
    if (i === kaja.length - 1) {
      text = text + kaja[i] + ".";
    } else {
      text = text + kaja[i] + ", ";
    }
  }
  return text;
}
console.log(finom(myList));
