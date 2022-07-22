const currenciesModule = require("../modules/currencies");

describe("currencies", () => {
  it("should has UZS on it", () => {
    const currencies = currenciesModule.currency();
    expect(currencies).toContain("UZS");
    expect(currencies).toContain("USD");
    expect(currencies).toContain("RUR");
    expect(currencies).toEqual(expect.arrayContaining(["UZS", "USD", "RUR"]));
  });
});
