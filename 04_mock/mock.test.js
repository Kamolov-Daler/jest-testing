const { map } = require("./mock");

describe("Map function", () => {
  let array;
  let fn;

  beforeEach(() => {
    array = [1, 2, 3, 5];
    fn = jest.fn((x) => x ** 2);
    map(array, fn);
  });

  test("should call callback", () => {
    expect(fn).toBeCalled(); // функция вызвана
    expect(map(array, fn)).toEqual([1, 4, 9, 25]);
  });

  test("should call callback 4 time", () => {
    expect(fn).toBeCalledTimes(4); // функция вызвана 4 раза
    expect(fn.mock.calls.length).toBe(4); // функция вызвана 4 раза
  });

  test("should pow each element", () => {
    expect(fn.mock.results[0].value).toBe(1); // первый элемент результата 1
    expect(fn.mock.results[1].value).toBe(4); // первый элемент результата 4
    expect(fn.mock.results[2].value).toBe(9); // первый элемент результата 9
    expect(fn.mock.results[3].value).toBe(25); // первый элемент результата 25
  });

  test("should fn work", () => {
    fn
        .mockReturnValueOnce(100)
        .mockReturnValueOnce(200)
        .mockReturnValueOnce("42");

    expect(fn()).toBe(100); //  результата 100
    expect(fn()).toBe(200); //  результата 200
    expect(fn()).toBe('42'); //  результата 42
  });
});
