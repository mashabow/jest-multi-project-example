const sum = require('./foo');

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 100 + 200 to equal 300", () => {
  expect(sum(100, 200)).toBe(300);
});
