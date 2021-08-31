const importalunk = require("./alkoholizmus");

describe("tesztelunk valamit ", () => {
  it("alkoholszintteszt ", () => {
    expect(importalunk.drunk(2)).toEqual(false);
  });
});
