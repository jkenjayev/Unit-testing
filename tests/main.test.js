const mainModule = require("../modules/main");

describe("absolute", () => {
  it("should return a positive number if input is positive", () => {
    const result = mainModule.absolute(1);
    expect(result).toBe(1);
  });

  it("should return a positive number if input is negative", () => {
    const result = mainModule.absolute(-1);
    expect(result).toBe(1);
  });

  it("should return zero if input is zero", () => {
    const result = mainModule.absolute(0);
    expect(result).toBe(0);
  });
});
