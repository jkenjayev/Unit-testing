const practice = require("./fizzBuzz");

describe("fizzBuzz", () => {
  it("should return throw if input is NaN", () => {
    expect(() => practice.fizzBuzz("salom")).toThrow();
    expect(() => practice.fizzBuzz("salom")).toThrow("Input must be a number");
  });

  it("should return fizzBuzz", () => {
    const result = practice.fizzBuzz(15);
    expect(result).toMatch(/fizzBuzz/);
  });

  
  it("should return fizzBuzz", () => {
    const result = practice.fizzBuzz(6);
    expect(result).toMatch(/fizz/);
  });

  
  it("should return fizzBuzz", () => {
    const result = practice.fizzBuzz(10);
    expect(result).toMatch(/buzz/);
  });

  
  it("should return fizzBuzz", () => {
    const result = practice.fizzBuzz(7);
    expect(result).toBe(7);
  });
});
