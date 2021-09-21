const importalunk = require("./schl.js");

describe("drunk", () => {
  it("alkoholszintteszt ", () => {
    expect(importalunk.drunk("asdasd")).toEqual(
      console.log("PUT IN A NUMBER NOOB")
    );
  });
});

describe("drunk", () => {
  it("alkoholszintteszt ", () => {
    expect(importalunk.drunk(0.3)).toEqual(console.log("Ön nem ittas"));
  });
});

describe("drunk", () => {
  it("alkoholszintteszt ", () => {
    expect(importalunk.drunk(0.6)).toEqual(true);
  });
});

describe("ifdrunk", () => {
  it("ittas", () => {
    expect(importalunk.ifDrunk(1.2)).toEqual("ITTAS");
  });
});

describe("ifdrunk", () => {
  it("ittas", () => {
    expect(importalunk.ifDrunk(2.2)).toEqual("RESZEG");
  });
});

describe("ifdrunk", () => {
  it("ittas", () => {
    expect(importalunk.ifDrunk(2.8)).toEqual("ALKOHOLMÉRGEZÉS");
  });
});

describe("action", () => {
  it("Reszeg", () => {
    expect(importalunk.action(importalunk.ITTAS)).toEqual(
      console.log("Ön ittas. \nNe vezessen jármüvet!")
    );
  });
});
describe("action", () => {
  it("Reszeg", () => {
    expect(importalunk.action(importalunk.RESZEG)).toEqual(
      console.log("A kedves úriember részeg. \nTakarodjon aludni!")
    );
  });
});
describe("action", () => {
  it("Reszeg", () => {
    expect(importalunk.action(importalunk.ALKOHOLMERGEZES)).toEqual(
      console.log("Gyomormosásra kell küldeni a kedveskét. \nVagy már meghalt.")
    );
  });
});

describe("mainfunc", () => {
  it("Végeredmény", () => {
    expect(importalunk.mainFunction(1.2)).toEqual(
      console.log("Ön " + "ITTAS"),
      console.log("Ne vezessen járművet")
    );
  });
});

describe("mainfunc", () => {
  it("Végeredmény", () => {
    expect(importalunk.mainFunction("asdsadsa")).toEqual(
      console.log("PUT IN A NUMBER NOOB")
    );
  });
});

describe("Alkoholizmus", () => {
  describe("main", () => {
    it("Végeredmény", () => {
      expect(importalunk.mainFunction(1.2)).toEqual(
        console.log("Ön ittas. \nNe vezessen jármüvet!")
      );
    });
  });
  describe("drunk", () => {
    it("alkoholszintteszt", () => {
      expect(importalunk.drunk(1.2)).toEqual(true);
    });
  });
  describe("ifDrunk", () => {
    it("ittas", () => {
      expect(importalunk.ifDrunk(1.2)).toEqual("ITTAS");
    });
  });
  describe("action", () => {
    it("Reszeg", () => {
      expect(importalunk.action(importalunk.ITTAS)).toEqual(
        console.log("Ön ittas. \nNe vezessen jármüvet!")
      );
    });
  });
});
