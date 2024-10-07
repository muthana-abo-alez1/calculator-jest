const calc = require("./calculator");

describe("Calculator", () => {
  it("should ignore the numbers greater than 1000", () => {
    expect(calc(1011, "*", 3)).toBe(3);
  });
  it("should throw an error for an invalid operator", () => {
    expect(() => calc(5, "$", 3)).toThrow("Invalid operator");
  });
  it("should return the correct sum of two numbers", () => {
    expect(calc(2, "+", 3)).toBe(5);
  });

  it("should return the correct difference of two numbers", () => {
    expect(calc(5, "-", 2)).toBe(3);
  });

  it("should return the correct product of two numbers", () => {
    expect(calc(4, "*", 6)).toBe(24);
  });

  it("should return the correct quotient of two numbers", () => {
    expect(calc(10, "/", 2)).toBe(5);
  });

  it("should throw an error when dividing by zero", () => {
    expect(() => calc(6, "/", 0)).toThrow("Division by zero");
  });

  it("should handle negative numbers correctly", () => {
    expect(calc(-8, "+", 5)).toBe(-3);
  });

  it("should handle decimal numbers correctly", () => {
    expect(calc(3.5, "*", 2)).toBe(7);
  });

  it("should throw an error for an invalid operator", () => {
    expect(()=>calc(4, "*", 2, "!", 5)).toThrow("Invalid operator");
  });

  it("should follow the correct order of operations", () => {
    expect(calc(2, "+", 3, "*", 4)).toBe(14); // 2 + (3 * 4)
  });

  it("should throw an error for an invalid operator", () => {
    expect(() => calc(5, "$", 3)).toThrow("Invalid operator");
  });
  it("should throw an error for an invalid operator", () => {
    expect(() => calc(5, "@", 3)).toThrow("Invalid operator");
  });
  it("should throw an error for invalid input types", () => {
    expect(() => calc("2", "+", 3)).toThrow("Invalid input type");
  });
  it("should handle an unknown amount of numbers", () => {
    expect(calc(1, "+", 2, "+", 3, "+", 4)).toBe(10);
  });
  it("should throw an error for missing operator", () => {
    expect(() => calc(5, 5, 10)).toThrow("Invalid operator");
  });
  it("should ignore numbers larger than 1000", () => {
    expect(calc(2, "+", 1001)).toBe(2);
  });
  it("should ignore numbers larger than 1000", () => {
    expect(calc(2, "*", 1001)).toBe(2);
  });
  it("should ignore numbers larger than 1000", () => {
    expect(calc(4, "-", 1001)).toBe(4);
  });
  it("should throw an error for invalid input numbers", () => {
    expect(() => calc(2, 3)).toThrow("Invalid input");
  });
  it("should throw an error for invalid input numbers", () => {
    expect(() => calc()).toThrow("Invalid input");
  });
  it("should return the correct sum of two numbers", () => {
    expect(calc(1111, "+", 3)).toBe(3);
  });
  it("should throw an error for invalid input - mismatched operands", () => {
    expect(() => calc(2, "+", 3, "+")).toThrow("Invalid input type");
  });
  it("should ignore the numbers greater than 1000", () => {
    expect(calc(9514, "-", 3)).toBe(-3);
  });
  it("should ignore the numbers greater than 1000", () => {
    expect(calc(1011, "*", 3)).toBe(3);
  });
  it("should ignore  numbers greater than 1000", () => {
    expect(calc(1, "/", 5555)).toBe(1);
  });
  it("should throw an error for invalid input - result is NaN with non-zero operands", () => {
    expect(() => calc(5, "/", "a")).toThrow("Invalid input");
  });
  it("should throw an error for double slashes as an operator", () => {
    expect(() => calc(5, "//", 5)).toThrow("Invalid operator");
  });
  it("should handle the default case in applyOperator", () => {
    expect(() => {
      calc(5, "invalid_operator", 3);
    }).toThrow("Invalid operator");
  });
  it("should throw an error for invalid number input", () => {
    expect(() => calc("invalid", "+", 3)).toThrow("Invalid input type");
  });
});
