const sum = require('./foo');

test("adds 3 + 4 to equal 7", () => {
  expect(sum(3, 4)).toBe(7);
});

test("adds 300 + 400 to equal 700", () => {
  expect(sum(300, 400)).toBe(700);
});
