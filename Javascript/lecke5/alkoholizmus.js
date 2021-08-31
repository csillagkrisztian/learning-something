/* Kiszamolja hogy reszeg e vagy nem*/

function drunk(alkoholszint) {
  if (alkoholszint >= 0.2) {
    return true;
  } else {
    return false;
  }
}

function ifDrunk(alkoholszint) {
  if (alkoholszint > 0.5 && alkoholszint <= 1.5) {
    return "ITTAS";
  }
  if (alkoholszint > 1.5 && alkoholszint < 2.5) {
    return "RÉSZEG";
  }
  if (alkoholszint > 2.5) {
    return "ALKOHOLMÉRGEZÉS";
  }
}

module.exports = {
  drunk,
  ifDrunk,
};
