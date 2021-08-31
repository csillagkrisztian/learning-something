/* Kiszamolja hogy reszeg e vagy nem*/

function drunk(alkoholszint) {
  if (alkoholszint >= 0.2) {
    return true;
  } else {
    return false;
  }
}

console.log("teszt alkoholszint " + drunk(0.1));

module.exports = {
  drunk,
};
