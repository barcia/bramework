const time = require('./utils/time');

test('adds 1 + 2 to equal 3', () => {
  expect(time(1, 2)).toBe(3);
});
