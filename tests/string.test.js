const stringModule = require("../modules/string");

describe("string", () => {
  it("Should return greeting message", () => {
    const result = stringModule.string("Javohir");
    expect(result).toContain("Javohir");
    expect(result).toMatch(/Javohir/);
  });
});
