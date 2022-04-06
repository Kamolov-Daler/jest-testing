const { Lodash } = require("./sync");

let _ = new Lodash();

describe("Lodash: compact", () => {
  let array;

  beforeEach(() => {
    array = [false, 42, 0, "", true, null, "hello"]; // перед каждым тестом это переменная заново обявляется
  });

  afterAll(() => {
    _ = new Lodash();
  });

  test("should be defind", () => {
    expect(_.compact).toBeDefined(); // функция должна быть создана
    expect(_.compact).not.toBeUndefined(); // != undefined
  });

  test("should working array be editable", () => {
    array.push(...["one", "two"]);
    expect(array).toContain("one"); // должно быть значение 'one' в массиве
    expect(array).toContain("two"); // должно быть значение 'two' в массиве
  });

  test("should remove falsy values from array", () => {
    const result = [42, true, "hello"];
    expect(_.compact(array)).toEqual(result); // === result
  });

  test("should not contain falsy values", () => {
    expect(_.compact(array)).not.toContain(false); // не должно быть значение false в массиве
    expect(_.compact(array)).not.toContain(0); // не должно быть значение 0 в массиве
    expect(_.compact(array)).not.toContain(""); // не должно быть значение "" в массиве
    expect(_.compact(array)).not.toContain(null); // не должно быть значение null в массиве
  });
});

describe("Lodash: groupBy", () => {
  test("should be defined", () => {
    expect(_.groupBy).toBeDefined(); // функция должна быть создана
    expect(_.groupBy).not.toBeUndefined(); // != undefined
  });

  test("should group by array items by Math.floor", () => {
    const array = [2.2, 2.4, 4.2, 3.1];
    const result = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1]
    };
    expect(_.groupBy(array, Math.floor)).toEqual(result);
  });

  test("should group by array items by length", () => {
    const array = ['one', 'two', 'three'];
    const result = {
      5: ['three'],
      3: ['one', 'two'],
    };
    expect(_.groupBy(array, 'length')).toEqual(result);
  });

  test("should NOT return array", () => {
    expect(_.groupBy([], Math.trunc())).not.toBeInstanceOf(Array);
  });
});
