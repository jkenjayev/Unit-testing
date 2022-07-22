const getExceptionModule = require("../modules/exception");
describe("Exceptions", () => {
  it("should return object contains given username", () => {
    const result = getExceptionModule.getException("Javohir");
    expect(result).toMatchObject({
      userName: "Javohir",
    });
    expect(result.id).toBeGreaterThan(0);
  });

  it("should throw error if userName is falsy", () => {
    const falsies = [null, undefined, 0, "", false, NaN];
    falsies.forEach((falsy) => {
      expect(() => {
        getExceptionModule.getException(falsy).toThrow();
      });
    });
  });

  it("should require username", () => {
    expect(() => getExceptionModule.getException()).toThrow();
    expect(() => getExceptionModule.getException()).toThrow(Error);
    expect(() => getExceptionModule.getException()).toThrow(/Username/);
  });
});
