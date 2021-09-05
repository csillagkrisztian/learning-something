
const importalunk = require("./alkoholizmus");

const { drunk, ifDrunk, action } = importalunk;

function mainFunction(alkoholszint) {
    const drunk = drunk(alkoholszint);
    if (drunk === true) {
      const howDrunk = ifDrunk(alkoholszint);
      action(howDrunk);
    }
  }

mainFunction(2);