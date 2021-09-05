/* Kiszamolja hogy reszeg e vagy nem*/
const ITTAS = "ITTAS";
const RESZEG = "RESZEG";
const ALKOHOLMERGEZES = "ALKOHOLMÉRGEZÉS";

const drunk = (alkoholszint) => {
  if (alkoholszint >= 0.2) {
    return true;
  } else {
    return false;
  }
}

function drunk(alkoholszint) {
  if (alkoholszint >= 0.2) {
    return true;
  } else {
    return false;
  }
}

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
      return "Takarodjon aludni";
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

module.exports = {
  drunk,
  ifDrunk,
  action,
  RESZEG,
};
