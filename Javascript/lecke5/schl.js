/* Kiszamolja hogy reszeg e vagy nem*/
const ITTAS = "ITTAS";
const RESZEG = "RESZEG";
const ALKOHOLMERGEZES = "ALKOHOLMÉRGEZÉS";
const NEMITTAS = "Ön nem ittas";

const ittasAction = "Ön ittas. \nNe vezessen jármüvet!";
const reszegAction = "A kedves úriember részeg. \nTakarodjon aludni!";
const amAction = "Gyomormosásra kell küldeni a kedveskét. \nVagy már meghalt.";

function drunk(alkoholszint) {
  if (alkoholszint >= 0.5) {
    return true;
  } else if (alkoholszint < 0.5) {
    return console.log(NEMITTAS);
  } else console.log("PUT IN A NUMBER NOOB");
}

function ifDrunk(alkoholszint) {
  if (alkoholszint >= 0.5 && alkoholszint <= 1.5) {
    return ITTAS;
  }
  if (alkoholszint >= 1.6 && alkoholszint <= 2.5) {
    return RESZEG;
  }
  if (alkoholszint >= 2.6) {
    return ALKOHOLMERGEZES;
  }
}

function action(text) {
  switch (text) {
    case ITTAS: {
      console.log(ittasAction);
      break; /* return "ne vezess" - szart megkérdezni */
    }
    case RESZEG: {
      console.log(reszegAction);
      break;
    }
    case ALKOHOLMERGEZES: {
      console.log(amAction);
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

mainFunction("dsadsa");

module.exports = {
  drunk,
  ifDrunk,
  action,
  ITTAS,
  RESZEG,
  ALKOHOLMERGEZES,
  NEMITTAS,
  mainFunction,
};
