const sum = require("./sketch");

test("testing the sum function", () => {
  expect(sum(2, 3)).toBe(5);
});
