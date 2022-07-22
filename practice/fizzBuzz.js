module.exports.fizzBuzz = function (number) {
  if (typeof number !== "number") {
    throw Error("Input must be a number");
  }

  if (number % 3 === 0 && number % 5 === 0) {
    return "fizzBuzz";
  }

  if (number % 3 === 0) {
    return "fizz";
  }

  if (number % 5 === 0) {
    return "buzz";
  }

  return number;
};
