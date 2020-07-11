import smallestDivisor from "../dist/index.js"

test('test', () => {
  expect(smallestDivisor(15)).toBe(3);
  expect(smallestDivisor(17)).toBe(17);
});