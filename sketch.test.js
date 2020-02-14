const { sum, prod } = require("./sketch");

test("testing the sum function", () => {
  expect(sum(2, 3)).toBe(5);
});
test("testing prod", () => {
  expect(prod(3, 4)).toBe(12);
});
