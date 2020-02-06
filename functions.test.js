const functions = require('./functions');


test('Add 2 plus 2 to = 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Add 2 plus 2 to no = 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('to be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('it should be  false', () => {
  expect(functions.checkValue(false)).toBeFalsy()
});

test('it should be  true', () => {
  expect(functions.checkValue(true)).toBeTruthy()
})