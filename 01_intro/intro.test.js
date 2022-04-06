const { sum, nativeNull } = require("./intro");

describe("Sum function:", () => {
  test("should return sum of two values", () => {
    expect(sum(1, 3)).toBe(4); // === 4
  });

  test("should return value correctly comparing to other", () => {
    expect(sum(2, 3)).toBeGreaterThan(4); // > 4
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5); // >= 5
    expect(sum(2, 3)).toBeLessThan(10); // < 10
    expect(sum(2, 3)).toBeLessThanOrEqual(5); // <= 5
  });

  test("should sum two float values correctly", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3); // ===
  });
});

describe("Native null:", () => {
  test("should return false value null", () => {
    expect(nativeNull()).toBe(null); // === null
    expect(nativeNull()).toBeNull(); // === null
    expect(nativeNull()).toBeFalsy(); // === undefined, null, 0, '', ...
    expect(nativeNull()).toBeDefined(); // == defined то есть этот тип уже создан
    expect(nativeNull()).not.toBeTruthy(); // != true
  });
});
