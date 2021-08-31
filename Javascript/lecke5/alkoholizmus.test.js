const importalunk = require("./alkoholizmus");

describe("drunk", () => {
  it("alkoholszintteszt ", () => {
    expect(importalunk.drunk(2)).toEqual(true);
  });
});

describe("ifdrunk", () => {
  it("ittas", () => {
    expect(importalunk.ifDrunk(0.8)).toEqual("ITTAS");
  });
});
