/* Kiszamolja hogy reszeg e vagy nem*/

function drunk(alkoholszint) {
  if (alkoholszint >= 0.2) {
    return true;
  } else {
    return false;
  }
}

const ITTAS = "ITTAS";
const RESZEG = "RESZEG";
const ALKOHOLMERGEZES = "ALKOHOLMÉRGEZÉS";

function ifDrunk(alkoholszint) {
  if (alkoholszint > 0.5 && alkoholszint <= 1.5) {
    return ITTAS;
  }
  if (alkoholszint > 1.5 && alkoholszint < 2.5) {
    return RESZEG;
  }
  if (alkoholszint > 2.5) {
    return ALKOHOLMERGEZES;
  }
}

function action(text) {
  switch (text) {
    case ITTAS: {
      console.log("Ön " + ITTAS);
      console.log("Ne vezessen járművet");
      break;
    }
    case RESZEG: {
      console.log("A kedves úriember " + RESZEG);
      console.log("Takarodjon aludni");
      return "tente";
    }
    case ALKOHOLMERGEZES: {
      console.log("Gyomormosásra kell küldeni a kedveskét " + ALKOHOLMERGEZES);
      console.log("Vagy halott");
      break;
    }
  }
}

function mainFunction(alkoholszint) {
  const isDrunk = drunk(alkoholszint);
  if (isDrunk === true) {
    const howDrunk = ifDrunk(alkoholszint);
    action(howDrunk);
  }
}

mainFunction(2);

module.exports = {
  drunk,
  ifDrunk,
  action,
  RESZEG,
};
